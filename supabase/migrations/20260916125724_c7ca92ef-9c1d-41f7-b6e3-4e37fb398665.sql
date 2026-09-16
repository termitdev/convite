CREATE TABLE public.literare_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT NOT NULL,
  cargo TEXT NOT NULL,
  aceite_comunicacoes BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT INSERT ON public.literare_leads TO anon;
GRANT INSERT, SELECT ON public.literare_leads TO authenticated;
GRANT ALL ON public.literare_leads TO service_role;
ALTER TABLE public.literare_leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit the invitation form" ON public.literare_leads FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Signed-in team can read submissions" ON public.literare_leads FOR SELECT TO authenticated USING (true);