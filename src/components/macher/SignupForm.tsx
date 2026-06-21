import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SocialIcons } from "./icons";

const roles = [
  { value: "activist", label: "Activist" },
  { value: "community_pro", label: "Community professional" },
  { value: "gamer", label: "Gamer" },
  { value: "curious", label: "Just curious" },
] as const;

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function SignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrMsg("");
    const fd = new FormData(e.currentTarget);

    // honeypot
    if (String(fd.get("website") || "").trim().length > 0) {
      setStatus("success");
      return;
    }

    const email = String(fd.get("email") || "").trim().toLowerCase();
    const first_name = String(fd.get("first_name") || "").trim() || null;
    const location = String(fd.get("location") || "").trim() || null;
    const roleRaw = String(fd.get("role") || "").trim();
    const role = roleRaw && roles.some((r) => r.value === roleRaw) ? roleRaw : null;

    if (!EMAIL_RE.test(email) || email.length > 320) {
      setStatus("error");
      setErrMsg("Please enter a valid email.");
      return;
    }

    try {
      const { error } = await supabase.from("email_signups").insert({
        email,
        first_name,
        location,
        role,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
      });
      if (error) throw error;
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="panel p-8 md:p-10" aria-live="polite">
        <p
          className="font-eyebrow text-[11px]"
          style={{ fontFamily: "var(--font-eyebrow)", color: "var(--color-teal-bright)", textTransform: "uppercase", letterSpacing: "0.22em" }}
        >
          You're In
        </p>
        <p
          className="mt-3 font-display text-[clamp(1.75rem,3.4vw,2.5rem)]"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-cream)", lineHeight: 1 }}
        >
          You're on the list.
        </p>
        <p className="mt-3 text-base" style={{ color: "var(--color-body)" }}>
          Watch your inbox — and your group chat.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {([
            ["Instagram", SocialIcons.Instagram],
            ["TikTok", SocialIcons.TikTok],
            ["Facebook", SocialIcons.Facebook],
            ["X", SocialIcons.X],
            ["YouTube", SocialIcons.YouTube],
          ] as const).map(([label, Icon]) => (
            <a
              key={label}
              href="#"
              aria-label={`Follow on ${label}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors"
              style={{ borderColor: "rgba(236,231,217,0.35)", color: "var(--color-cream)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(236,231,217,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  const fieldStyle: React.CSSProperties = {
    background: "rgba(15,22,32,0.6)",
    border: "1px solid rgba(78,124,168,0.3)",
    color: "var(--color-cream)",
    borderRadius: 4,
    padding: "12px 14px",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    width: "100%",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-eyebrow)",
    color: "var(--color-cream-dim)",
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    fontSize: 11,
    display: "block",
    marginBottom: 6,
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      {/* honeypot */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email <span style={{ color: "var(--color-teal-bright)" }}>*</span></label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" style={fieldStyle} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="first_name" style={labelStyle}>First name <span style={{ opacity: 0.6 }}>(optional)</span></label>
          <input id="first_name" name="first_name" type="text" autoComplete="given-name" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor="location" style={labelStyle}>Where are you? <span style={{ opacity: 0.6 }}>(optional)</span></label>
          <input id="location" name="location" type="text" placeholder="City / region" style={fieldStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="role" style={labelStyle}>I'm a… <span style={{ opacity: 0.6 }}>(optional)</span></label>
        <select id="role" name="role" defaultValue="" style={fieldStyle}>
          <option value="">Select one</option>
          {roles.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex items-center justify-center rounded-sm px-6 py-3.5 transition-colors disabled:opacity-60"
        style={{
          background: "var(--color-teal)",
          color: "var(--color-navy-deep)",
          fontFamily: "var(--font-eyebrow)",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          fontWeight: 600,
          fontSize: 13,
        }}
        onMouseEnter={(e) => { if (status !== "loading") e.currentTarget.style.background = "var(--color-teal-bright)"; }}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-teal)")}
      >
        {status === "loading" ? "Adding you…" : "Notify me when we launch"}
      </button>

      {status === "error" && (
        <p role="alert" aria-live="polite" className="text-sm" style={{ color: "#FF8A8A" }}>
          {errMsg || "Something went wrong. Try again?"}
        </p>
      )}

      <p className="mt-1 text-[13px]" style={{ color: "var(--color-cream-dim)" }}>
        No spam. Just launch news and a few chances to weigh in. Unsubscribe anytime.
      </p>
    </form>
  );
}
