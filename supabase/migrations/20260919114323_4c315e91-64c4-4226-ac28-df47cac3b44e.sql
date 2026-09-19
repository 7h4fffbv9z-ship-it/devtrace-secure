DROP POLICY IF EXISTS "Public insert access to scans" ON public.scans;
DROP POLICY IF EXISTS "Public read access to scans" ON public.scans;

REVOKE ALL ON public.scans FROM anon;
REVOKE ALL ON public.scans FROM authenticated;
GRANT ALL ON public.scans TO service_role;

ALTER TABLE public.scans ENABLE ROW LEVEL SECURITY;