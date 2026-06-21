CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT,
  location TEXT,
  role TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX email_signups_email_key ON public.email_signups (lower(email));

GRANT INSERT ON public.email_signups TO anon, authenticated;
GRANT ALL ON public.email_signups TO service_role;

ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a signup"
  ON public.email_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);