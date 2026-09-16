import LeadForm from "@/components/literare/lead-form";
import MediaFrame from "@/components/literare/media-frame";
import VerticalVideoFrame from "@/components/literare/vertical-video-frame";
import SEO from "@/components/seo";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const fase = [
  {
    numero: "01",
    titulo: "Nova sede",
    texto:
      "Um espaço novo, com uma equipe editorial maior para cuidar de cada autor e cada projeto.",
  },
  {
    numero: "02",
    titulo: "Novos selos",
    texto:
      "Novas linhas e projetos de coautoria, com mais alcance para os livros e autores da casa.",
  },
  {
    numero: "03",
    titulo: "Mesmo cuidado",
    texto:
      "O acompanhamento próximo, autor por autor, continua sendo a marca da casa.",
  },
];

const capitulo = [
  {
    kicker: "Um capítulo",
    titulo: "Baixo compromisso",
    texto:
      "Uma participação pontual, o prazer de publicar sem carregar um livro inteiro nas costas.",
  },
  {
    kicker: "Com você",
    titulo: "Acompanhamento completo",
    texto: "Nossa equipe caminha do começo ao fim. Você escreve; a gente cuida do resto.",
  },
  {
    kicker: "Sem pressa",
    titulo: "No seu tempo",
    texto:
      "Não precisa decidir agora. A ideia é retomar a conversa, no ritmo que for melhor para você.",
  },
];

const comoFunciona = [
  {
    numero: "01",
    titulo: "Deixe seu contato",
    texto: "Preencha o formulário. Leva menos de um minuto.",
  },
  {
    numero: "02",
    titulo: "A gente conversa",
    texto: "Um editor entra em contato, sem compromisso, para colocar o papo em dia.",
  },
  {
    numero: "03",
    titulo: "Você escreve",
    texto: "Quando aparecer o projeto certo, com nosso acompanhamento do início ao fim.",
  },
];

const Convite = () => {
  return (
    <>
      <SEO
        title="Um convite Literare Books para autores da casa"
        description="Você já publicou com a Literare Books. A porta continua aberta: retomamos o contato para conversar sobre publicar de novo, quando fizer sentido para você."
        canonicalUrl="/"
        ogType="website"
      />

      <main className="overflow-x-hidden bg-background text-foreground">
        {/* Topo discreto */}
        <header className="border-b border-foreground/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <img
              src="/images/homepage/logo-literare.png"
              alt="Literare Books"
              className="h-10 w-auto object-contain"
              />
            <a
              href="#contato"
              className="text-sm text-muted-foreground underline-offset-8 transition-colors hover:text-primary hover:underline"
            >
              Falar com um editor
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <AnimateOnView>
                <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Um convite Literare Books
                </p>
              </AnimateOnView>

              <AnimateOnView delay={0.1} blur>
                <h1 className="mt-6 text-[30px] font-medium leading-[1.25] tracking-tight md:text-[42px] lg:text-[46px]">
                  Tem uma história sua aqui, e a vontade de escrever a{" "}
                  <span className="text-primary">próxima</span>.
                </h1>
              </AnimateOnView>

              <AnimateOnView delay={0.2}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Você já publicou com a gente, e isso deixou marca. Queríamos retomar o contato
                  e conversar sobre publicar de novo, quando fizer sentido para você.
                </p>
              </AnimateOnView>

              <AnimateOnView delay={0.3}>
                <div className="mt-10">
                  <Button asChild size="lg" className="rounded-sm">
                    <a href="#contato">Quero saber mais</a>
                  </Button>
                  <p className="mt-4 text-sm text-muted-foreground">1 minuto · sem compromisso</p>
                </div>
              </AnimateOnView>
            </div>

            <AnimateOnView delay={0.25} className="relative">
              <MediaFrame
               
                src="/images/homepage/mauricio.png"
                alt="Presidente do Conselho"
                caption="Mauricio Sita, presidente do Conselho Literare Books"
                ratio="4/5"
              />
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                Seu livro segue nas nossas estantes. E o seu jeito de escrever continua bem-vindo
                aqui.
              </p>
            </AnimateOnView>
          </div>
        </section>

        {/* ABERTURA / POSICIONAMENTO */}
        <section className="bg-foreground py-20 text-background md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <AnimateOnView>
              <span className="block h-px w-16 bg-primary" aria-hidden="true" />
              <p className="mt-8 text-[22px] leading-[1.6] text-background/90 md:text-[28px]">
                Este contato não é sobre vender. É sobre estar por perto de novo e deixar claro
                que <span className="text-primary">a porta continua aberta</span> para você,
                quando e se fizer sentido.
              </p>
            </AnimateOnView>
          </div>
        </section>

        ```tsx
{/* UM CONVITE DE AMIGO — vídeo vertical */}
<section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
  <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
    <AnimateOnView>
      <h2 className="text-[26px] font-medium leading-tight tracking-tight md:text-[34px]">
        Um convite de amigo
      </h2>

      <p className="mt-5 text-lg text-muted-foreground">
        Um recado rápido da casa, para você ver com calma.
      </p>

      <p className="mt-3 text-lg text-muted-foreground">
        
          A Literare está vivendo uma fase nova. A casa mudou, novos projetos chegaram, novas histórias começaram mas algumas relações continuam fazendo sentido.

          Por isso, este convite chegou até você.

          Não é uma proposta pronta, nem uma conversa com pressa. É só uma forma de dizer que, se você também sente vontade de escrever novamente, a nossa porta continua aberta.

          Talvez exista uma próxima história esperando para ser contada. E, quem sabe, ela possa nascer aqui outra vez.
      </p>
    </AnimateOnView>

    <AnimateOnView delay={0.15}>
      <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-sm">
        <video
          className="aspect-[9/16] h-auto w-full object-cover"
          src="/images/homepage/video-convite.mp4"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </AnimateOnView>
  </div>
</section>
```


        {/* FASE NOVA */}
        <section className="border-y border-foreground/10 bg-secondary/60 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <AnimateOnView>
              <h2 className="max-w-2xl text-[26px] font-medium leading-snug tracking-tight md:text-[34px]">
                A casa está numa fase nova, e faz bem compartilhar isso com você.
              </h2>
            </AnimateOnView>

            <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
              {fase.map((item, index) => (
                <AnimateOnView key={item.numero} delay={0.1 * index}>
                  <div className="border-t border-foreground/15 pt-6">
                    <span className="text-3xl font-medium text-primary">{item.numero}</span>
                    <h3 className="mt-5 text-xl font-medium">{item.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.texto}</p>
                  </div>
                </AnimateOnView>
              ))}
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              <AnimateOnView>
                <MediaFrame
                src="/images/homepage/nova-sede.png"
                alt="Nova sede da Literare Books"
                caption="Nova sede"
                ratio="3/2"
                />
              </AnimateOnView>
              <AnimateOnView delay={0.12} className="sm:mt-12">
                <MediaFrame
                  src="/images/homepage/bastidores-editorial.png"
                  alt="Bastidores editoriais da Literare Books"
                  caption="Equipe!"
                  ratio="3/1.5"
                />
              </AnimateOnView>
            </div>
          </div>
        </section>

        {/* NOVO CAPÍTULO */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <AnimateOnView>
              <MediaFrame
                src="/images/homepage/livros-momentos.png"
                alt="Livros publicados pela Literare Books"
                caption="Momentos"
                ratio="4/5"
              />
            </AnimateOnView>

            <div>
              <AnimateOnView>
                <h2 className="text-[26px] font-medium leading-tight tracking-tight md:text-[34px]">
                  Quem sabe, um novo capítulo.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Quando surgir um projeto de coautoria com a sua cara, adoraríamos ter você. Uma
                  participação leve, do seu jeito.
                </p>
              </AnimateOnView>

              <div className="mt-12 space-y-10">
                {capitulo.map((item, index) => (
                  <AnimateOnView key={item.titulo} delay={0.08 * index}>
                    <div className="border-l border-primary/50 pl-6">
                      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        {item.kicker}
                      </span>
                      <h3 className="mt-3 text-xl font-medium">{item.titulo}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{item.texto}</p>
                    </div>
                  </AnimateOnView>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="bg-foreground py-20 text-background md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 md:grid-cols-3">
              {comoFunciona.map((item, index) => (
                <AnimateOnView key={item.numero} delay={0.1 * index}>
                  <div className="border-t border-background/20 pt-6">
                    <span className="text-3xl font-medium text-primary">{item.numero}</span>
                    <h3 className="mt-5 text-xl font-medium text-background">{item.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-background/70">{item.texto}</p>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </div>
        </section>

        {/* CARTA */}
        <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <AnimateOnView>
            <div className="border border-foreground/12 bg-secondary/50 px-7 py-12 md:px-16 md:py-16">
              <span className="block h-px w-12 bg-primary" aria-hidden="true" />
              <p className="mt-8 text-[20px] leading-[1.7] md:text-[24px]">
                Escrever um livro com a gente nunca foi só um contrato. Foi uma convivência. Se
                der vontade de escrever de novo, um capítulo, uma ideia, uma conversa, é só
                responder. Vou gostar de saber de você.
              </p>
              <div className="mt-10">
                <p className="text-xl font-medium text-primary">Mauricio Sita</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Literare Books International
                </p>
              </div>
            </div>
          </AnimateOnView>
        </section>

        {/* FORMULÁRIO */}
        <section id="contato" className="border-t border-foreground/10 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <AnimateOnView>
              <MediaFrame
                src="/images/homepage/equipe2.png"
                alt="Equipe Literare Books"
                caption="Equipe Literare Books"
                ratio="3/2"
              />
            </AnimateOnView>

            <AnimateOnView delay={0.1}>
              <h2 className="text-[26px] font-medium leading-tight tracking-tight md:text-[34px]">
                Vamos colocar o papo em dia
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Deixe seus dados. Um editor entra em contato, sem compromisso.
              </p>
              <div className="mt-10">
                <LeadForm />
              </div>
            </AnimateOnView>
          </div>
        </section>

        <footer className="border-t border-foreground/10 py-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <img
              src="/images/homepage/logo-literare.png"
              alt="Literare Books"
              className="h-10 w-auto object-contain"
              />
          </div>
        </footer>
      </main>
    </>
  );
};

export default Convite;
