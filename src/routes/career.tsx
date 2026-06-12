import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Carreira — Vamus" },
      {
        name: "description",
        content: "Construa uma carreira na Vamus e ajude a criar uma experiência de mobilidade urbana mais inteligente.",
      },
      { property: "og:title", content: "Carreira — Vamus" },
      {
        property: "og:description",
        content: "Construa uma carreira na Vamus e ajude a criar uma experiência de mobilidade urbana mais inteligente.",
      },
    ],
  }),
  component: CareerPage,
});

function CareerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="min-h-screen px-8 pt-32 md:px-10 lg:px-20">
        <div className="yango-fade-in mx-auto max-w-[1160px]">
          <p className="text-lg font-bold text-brand">Carreira</p>
          <h1 className="yango-headline mt-5 max-w-[860px] text-[56px] font-black uppercase sm:text-[72px]">
            Construa uma mobilidade em que as pessoas confiam
          </h1>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Operações",
                "Garanta o bom funcionamento do lançamento em novas cidades, do suporte ao motorista e da qualidade do serviço ao passageiro.",
              ],
              ["Produto", "Crie experiências digitais simples para passageiros, motoristas e equipas locais."],
              [
                "Crescimento",
                "Crie campanhas práticas que tornem a Vamus a escolha mais fácil em todas as cidades.",
              ],
            ].map(([title, copy]) => (
              <article
                className="min-h-[240px] border-t-4 border-brand bg-page-panel p-7"
                key={title}
              >
                <h2 className="text-3xl font-black">{title}</h2>
                <p className="mt-6 text-lg leading-[1.35] text-ink-soft">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
