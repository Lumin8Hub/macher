// Server function: persists signups to Lovable Cloud DB and (optionally)
// forwards the email to a third-party provider when the constants below
// are set. The forwarder is a no-op until the owner pastes their endpoint.
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// === Optional provider forward (Mailchimp / ConvertKit / Formspree) =========
// Leave blank to skip. Read from env vars at runtime so secrets stay server-side.
// Examples:
//   SIGNUP_FORWARD_URL = "https://app.kit.com/forms/XXXX/subscriptions"
//   SIGNUP_FORWARD_URL = "https://formspree.io/f/XXXXXXX"
// ============================================================================

const Role = z.enum(["activist", "community_pro", "gamer", "curious"]);

const SignupSchema = z.object({
  email: z.string().trim().toLowerCase().email().max(320),
  first_name: z.string().trim().max(100).optional().or(z.literal("")),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  role: Role.optional(),
  // honeypot — must stay empty
  website: z.string().max(0).optional().or(z.literal("")),
});

export const submitSignup = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => SignupSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // honeypot tripped — pretend success
      return { ok: true } as const;
    }

    const payload = {
      email: data.email,
      first_name: data.first_name || null,
      location: data.location || null,
      role: data.role || null,
    };

    // 1) Insert into Lovable Cloud
    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_PUBLISHABLE_KEY!,
      { auth: { storage: undefined, persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("email_signups").insert(payload);

    if (error) {
      // unique_violation = already on list; treat as success
      if (error.code !== "23505") {
        console.error("[signup] insert failed", error);
        throw new Error("Could not save your signup. Try again?");
      }
    }

    // 2) Optional forward to provider
    const forwardUrl = process.env.SIGNUP_FORWARD_URL;
    const forwardKey = process.env.SIGNUP_FORWARD_KEY;
    if (forwardUrl) {
      try {
        await fetch(forwardUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(forwardKey ? { Authorization: `Bearer ${forwardKey}` } : {}),
          },
          body: JSON.stringify({
            email: payload.email,
            first_name: payload.first_name,
            fields: { location: payload.location, role: payload.role },
          }),
        });
      } catch (e) {
        // Don't fail the user submission on forwarder errors
        console.warn("[signup] forwarder failed", e);
      }
    }

    return { ok: true } as const;
  });
