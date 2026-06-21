DROP POLICY "Anyone can submit a signup" ON public.email_signups;

CREATE POLICY "Anyone can submit a signup"
  ON public.email_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND (first_name IS NULL OR char_length(first_name) <= 100)
    AND (location IS NULL OR char_length(location) <= 200)
    AND (role IS NULL OR role IN ('activist','community_pro','gamer','curious'))
  );