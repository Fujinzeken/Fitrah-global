// Contact form handler — receives the /contact form submission and forwards
// it to a Telegram group via the Bot API. Two messages are sent on success:
//
//   1. sendMessage — the structured submission (HTML-formatted)
//   2. sendDocument — the optional attachment, if one was uploaded
//
// Credentials are read from env (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID); both
// are required at request time. A hidden _hp honeypot field silently succeeds
// for bots without notifying the team.

const TELEGRAM_API = "https://api.telegram.org";
const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB — well under the 50 MB Bot API ceiling

// Accepted attachment types. Browser-supplied MIME types are user-controllable,
// so we also accept by extension as a fallback (and reject if neither matches).
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "image/jpeg",
  "image/png",
]);
const ALLOWED_EXT = [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".txt", ".jpg", ".jpeg", ".png"];
const ACCEPTED_LABEL = "PDF, DOC, DOCX, PPT, PPTX, TXT, JPG, PNG";

function isAllowedFile(file: File): boolean {
  if (file.type && ALLOWED_MIME.has(file.type)) return true;
  const lower = file.name.toLowerCase();
  return ALLOWED_EXT.some((ext) => lower.endsWith(ext));
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("[contact] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set.");
    return Response.json(
      { ok: false, error: "The contact form is temporarily unavailable. Please try again later." },
      { status: 500 },
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "Bad request." }, { status: 400 });
  }

  // Honeypot — silently succeed so bots don't retry/probe.
  const hp = form.get("_hp");
  if (typeof hp === "string" && hp.trim().length > 0) {
    return Response.json({ ok: true });
  }

  // Required fields (PRD §9 Page 12)
  const name = (form.get("name") ?? "").toString().trim();
  const email = (form.get("email") ?? "").toString().trim();
  const organization = (form.get("organization") ?? "").toString().trim();
  const reason = (form.get("reason") ?? "").toString().trim();
  const message = (form.get("message") ?? "").toString().trim();

  if (!name || !email || !organization || !reason || !message) {
    return Response.json(
      { ok: false, error: "Please fill in all required fields." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  // Optional fields
  const website = (form.get("website") ?? "").toString().trim();
  const phone = (form.get("phone") ?? "").toString().trim();
  const country = (form.get("country") ?? "").toString().trim();

  // Attachment (optional)
  const att = form.get("attachment");
  const file = att instanceof File && att.size > 0 ? att : null;
  if (file && file.size > MAX_FILE_BYTES) {
    return Response.json(
      { ok: false, error: `Attachment too large (max ${formatBytes(MAX_FILE_BYTES)}).` },
      { status: 400 },
    );
  }
  if (file && !isAllowedFile(file)) {
    return Response.json(
      { ok: false, error: `Unsupported attachment type. Accepted: ${ACCEPTED_LABEL}.` },
      { status: 400 },
    );
  }

  // Build the Telegram message (HTML mode — only escape user-supplied parts).
  const lines: string[] = [];
  lines.push("<b>🆕 New contact form submission</b>");
  lines.push("");
  lines.push(`<b>Name:</b> ${esc(name)}`);
  lines.push(`<b>Email:</b> ${esc(email)}`);
  lines.push(`<b>Organization:</b> ${esc(organization)}`);
  lines.push(`<b>Reason:</b> ${esc(reason)}`);
  if (website) lines.push(`<b>Website:</b> ${esc(website)}`);
  if (phone) lines.push(`<b>Phone:</b> ${esc(phone)}`);
  if (country) lines.push(`<b>Country:</b> ${esc(country)}`);
  lines.push("");
  lines.push("<b>Message:</b>");
  lines.push(esc(message));
  if (file) {
    lines.push("");
    lines.push(
      `📎 <i>Attachment: ${esc(file.name)} (${formatBytes(file.size)}) — sent in the next message.</i>`,
    );
  }

  // 1) Structured message
  try {
    const res = await fetch(`${TELEGRAM_API}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] sendMessage failed:", res.status, detail);
      return Response.json(
        { ok: false, error: "Could not deliver your message. Please try again, or email us directly." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[contact] sendMessage error:", err);
    return Response.json(
      { ok: false, error: "Could not reach our messaging service. Please try again." },
      { status: 502 },
    );
  }

  // 2) Optional attachment as a document. Failure here does NOT fail the
  // submission — the structured message already arrived. We log and continue.
  if (file) {
    try {
      const docForm = new FormData();
      docForm.set("chat_id", chatId);
      docForm.set("caption", `📎 Attachment from ${name} (${email})`);
      docForm.set("document", file, file.name);
      const res = await fetch(`${TELEGRAM_API}/bot${token}/sendDocument`, {
        method: "POST",
        body: docForm,
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("[contact] sendDocument failed:", res.status, detail);
      }
    } catch (err) {
      console.error("[contact] sendDocument error:", err);
    }
  }

  return Response.json({ ok: true });
}
