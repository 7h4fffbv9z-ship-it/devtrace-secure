CREATE TABLE public.scans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  repo_url TEXT,
  security_score INTEGER,
  secrets_count INTEGER,
  vulnerabilities_count INTEGER,
  license_status TEXT,
  report_data JSONB
);

GRANT SELECT, INSERT ON public.scans TO anon;
GRANT SELECT, INSERT ON public.scans TO authenticated;
GRANT ALL ON public.scans TO service_role;

ALTER TABLE public.scans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access to scans"
  ON public.scans
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public insert access to scans"
  ON public.scans
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);