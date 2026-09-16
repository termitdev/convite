import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const fields = [
  { name: "nome", label: "Nome", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "empresa", label: "Empresa", type: "text", autoComplete: "organization" },
  { name: "cargo", label: "Cargo", type: "text", autoComplete: "organization-title" },
] as const;

const LeadForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [aceite, setAceite] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setLoading(true);

    const { error } = await supabase.from("literare_leads").insert({
      nome: String(data.get("nome") ?? ""),
      email: String(data.get("email") ?? ""),
      empresa: String(data.get("empresa") ?? ""),
      cargo: String(data.get("cargo") ?? ""),
      aceite_comunicacoes: aceite,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Não conseguimos enviar agora",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
      return;
    }

    form.reset();
    setAceite(false);
    setSent(true);
    toast({
      title: "Recebemos seu contato",
      description: "Um editor entra em contato com você.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label
              htmlFor={field.name}
              className="block text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              {field.label}
              <span className="text-primary">*</span>
            </label>
            <Input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required
              className="h-12 rounded-sm border-foreground/15 bg-background text-foreground placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
        ))}
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="aceite"
          checked={aceite}
          onCheckedChange={(value) => setAceite(value === true)}
          className="mt-1 border-foreground/30 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        <label htmlFor="aceite" className="text-sm leading-relaxed text-muted-foreground">
          Eu concordo em receber comunicações da Editora Literare Books.
        </label>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground/80">
        A nossa empresa está comprometida a proteger e respeitar sua privacidade, utilizaremos
        seus dados apenas para fins de marketing. Você pode alterar suas preferências a qualquer
        momento.
      </p>

      <Button type="submit" size="lg" disabled={loading} className="w-full rounded-sm sm:w-auto">
        {loading ? "Enviando..." : "Cadastrar"}
      </Button>

      {sent && (
        <p className="text-sm text-foreground">
          Obrigado. Seu contato chegou até nós.
        </p>
      )}
    </form>
  );
};

export default LeadForm;
