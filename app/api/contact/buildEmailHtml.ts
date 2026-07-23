// Brand tokens — match globals.css primary colour
// Escape special HTML characters to prevent XSS and malformed markup
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BRAND = "#4CAF1E";
const BRAND_DARK = "#3a8f18";

export default function buildEmailHtml({
  name,
  email,
  companyName,
  website,
  subject,
  message,
}: Record<string, string>) {
  const field = (label: string, value: string) =>
    value && value !== "-"
      ? `<tr>
          <td style="padding:10px 0;border-bottom:1px solid #2a2a2a;">
            <span style="font-family:monospace;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.08em;">${label}</span><br/>
            <span style="font-size:15px;color:#f0f0f0;font-weight:500;margin-top:4px;display:block;">${value}</span>
          </td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>New Message — Kanwer Portfolio</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:28px;" align="center">
              <div style="display:inline-block;width:52px;height:52px;border-radius:14px;background:${BRAND};text-align:center;line-height:52px;font-size:22px;font-weight:800;color:#000;letter-spacing:-1px;font-family:Georgia,serif;">K</div>
              <p style="margin:10px 0 0;font-size:12px;color:#888;letter-spacing:0.1em;text-transform:uppercase;font-family:monospace;">kanwer.portfolio</p>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#1a1a1a;border-radius:16px;border:1px solid #2a2a2a;overflow:hidden;">

              <!-- Top accent bar -->
              <div style="height:4px;background:linear-gradient(90deg,${BRAND} 0%,${BRAND_DARK} 100%);"></div>

              <!-- Card body -->
              <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 32px 0;">

                <!-- Title -->
                <tr>
                  <td style="padding-bottom:24px;border-bottom:1px solid #2a2a2a;">
                    <p style="margin:0 0 6px;font-family:monospace;font-size:11px;color:${BRAND};text-transform:uppercase;letter-spacing:0.1em;">New Message</p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                      ${escapeHtml(subject) || `Message from ${escapeHtml(name)}`}
                    </h1>
                  </td>
                </tr>

                <!-- Fields -->
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0" style="padding-top:8px;">
                      ${field("From", escapeHtml(name))}
                      ${field("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND};text-decoration:none;">${escapeHtml(email)}</a>`)}
                      ${field("Company", escapeHtml(companyName))}
                      ${field("Website", website ? `<a href="${escapeHtml(website)}" style="color:${BRAND};text-decoration:none;" target="_blank">${escapeHtml(website)}</a>` : "")}
                    </table>
                  </td>
                </tr>

                <!-- Message block -->
                <tr>
                  <td style="padding-top:24px;padding-bottom:32px;">
                    <p style="margin:0 0 10px;font-family:monospace;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
                    <div style="background:#111;border:1px solid #2a2a2a;border-radius:10px;padding:20px 22px;font-size:15px;color:#d4d4d4;line-height:1.75;white-space:pre-wrap;">
                      ${escapeHtml(message).replace(/\n/g, "<br/>")}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border-top:1px solid #2a2a2a;padding:20px 32px;">
                <tr>
                  <td>
                    <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject || "Your message")}"
                       style="display:inline-block;padding:10px 22px;background:${BRAND};color:#000;font-weight:700;font-size:13px;border-radius:8px;text-decoration:none;letter-spacing:0.02em;">
                      Reply to ${escapeHtml(name)}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#555;">
                Sent via portfolio contact form &middot;
                <a href="https://kanwar-portfolio.vercel.app" style="color:#666;text-decoration:none;">Kanwar Portfolio</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
