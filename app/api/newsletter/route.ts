// Newsletter subscription endpoint. Validates the email + honeypot server-side
// and proxies to a Google Apps Script web app that writes the row to a Google
// Sheet. The Apps Script URL is supplied via NEWSLETTER_SHEET_URL in env.
//
// Posting via this route (rather than from the browser straight to Apps Script)
// keeps the Sheet URL private and lets us reject obvious bots before any write.

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const sheetUrl = process.env.NEWSLETTER_SHEET_URL;

  if (!sheetUrl) {
    console.error("NEWSLETTER_SHEET_URL not configured");
    return Response.json(
      { ok: false, error: "Server is not configured for subscriptions." },
      { status: 500 },
    );
  }

  let body: { email?: string; _hp?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Bad request." }, { status: 400 });
  }

  // Honeypot: silently acknowledge so bots think they succeeded.
  if (typeof body._hp === "string" && body._hp.length > 0) {
    return Response.json({ ok: true });
  }

  const email = (body.email ?? "").toString().trim();
  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return Response.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const res = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Apps Script web apps respond with a 302 to the actual JSON body;
      // 'follow' lets fetch resolve it transparently.
      redirect: "follow",
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Newsletter sheet write failed:", res.status, detail);
      return Response.json(
        { ok: false, error: "Could not save your email right now. Please try again." },
        { status: 502 },
      );
    }

    const data: { ok?: boolean; error?: string } = await res
      .json()
      .catch(() => ({ ok: true }));
    if (data.ok === false) {
      return Response.json(
        { ok: false, error: data.error || "Could not save your email." },
        { status: 400 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Newsletter fetch error:", err);
    return Response.json(
      { ok: false, error: "Could not reach the subscription service. Please try again." },
      { status: 502 },
    );
  }
}
