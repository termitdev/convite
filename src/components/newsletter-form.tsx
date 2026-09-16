import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { useRef, useState } from "react";
import { buttonVariants } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  buttonVariant?: VariantProps<typeof buttonVariants>["variant"];
  buttonClassName?: string;
  inputClassName?: string;
  formClassName?: string;
  gap?: string;
  onSubmit?: (email: string) => void;
}

const NewsletterForm = ({
  title = "Fique por dentro",
  description = "Deixe seus dados para entrarmos em contato.",
  placeholder = "Seu e-mail",
  buttonText = "Cadastrar",
  buttonVariant,
  buttonClassName,
  inputClassName,
  formClassName,
  gap,
  onSubmit,
}: NewsletterFormProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsLoading(true);
    setErrorMessage("");
    setIsSuccess(false);

    const formData = new FormData(e.currentTarget);

    const nomeCompleto = formData.get("nome_completo") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;

    try {
      const { error } = await supabase
        .from("contatos")
        .insert({
          nome_completo: nomeCompleto.trim(),
          email: email.trim(),
          telefone: telefone.trim(),
        });

      if (error) {
        console.error("Erro ao cadastrar contato:", error);
        setErrorMessage(
          "Não foi possível realizar o cadastro. Tente novamente."
        );
        return;
      }

      // Mantém o callback existente, caso o componente esteja sendo utilizado
      // em algum outro lugar do projeto.
      if (onSubmit) {
        onSubmit(email);
      }

      if (formRef.current) {
        formRef.current.reset();
      }

      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Erro inesperado:", error);

      setErrorMessage(
        "Ocorreu um erro. Tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const gapClass = gap || "gap-2.5";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn("block", formClassName)}
    >
      <div className="flex flex-col gap-2.5">

        {/* Nome completo */}
        <Input
          type="text"
          name="nome_completo"
          placeholder="Nome Completo"
          autoComplete="name"
          className={cn(
            "w-full text-white placeholder:text-muted-foreground focus:border-primary",
            isSuccess && "border-green-500 focus:border-green-500",
            inputClassName
          )}
          required
        />

        {/* E-mail */}
        <Input
          type="email"
          name="email"
          placeholder={placeholder}
          autoComplete="email"
          className={cn(
            "w-full text-white placeholder:text-muted-foreground focus:border-primary",
            isSuccess && "border-green-500 focus:border-green-500",
            inputClassName
          )}
          required
        />

        {/* Telefone */}
        <Input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          autoComplete="tel"
          className={cn(
            "w-full text-white placeholder:text-muted-foreground focus:border-primary",
            isSuccess && "border-green-500 focus:border-green-500",
            inputClassName
          )}
          required
        />

        <div className={cn("flex", gapClass)}>
          <Button
            type="submit"
            variant={buttonVariant}
            className={cn("w-full", buttonClassName)}
            disabled={isLoading}
          >
            {isLoading ? "Enviando..." : buttonText}
          </Button>
        </div>

        {/* Mensagem de sucesso */}
        <p
          className={cn(
            "text-sm mt-1 min-h-[20px] transition-opacity duration-200",
            isSuccess
              ? "text-green-500 opacity-100"
              : "opacity-0 invisible"
          )}
        >
          Cadastro realizado com sucesso!
        </p>

        {/* Mensagem de erro */}
        <p
          className={cn(
            "text-sm mt-1 min-h-[20px] transition-opacity duration-200",
            errorMessage
              ? "text-red-500 opacity-100"
              : "opacity-0 invisible"
          )}
        >
          {errorMessage || " "}
        </p>
      </div>
    </form>
  );
};

export default NewsletterForm;