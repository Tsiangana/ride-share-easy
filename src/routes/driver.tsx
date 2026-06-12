import { Link, createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
const heroImage = "https://jornaloguardiao.com/wp-content/uploads/2025/03/image-95.jpeg";

export const Route = createFileRoute("/driver")({
  head: () => ({
    meta: [
      { title: "Motorista — Vamus" },
      {
        name: "description",
        content:
          "Conduza com a Vamus numa plataforma simples e profissional feita para ganhos flexíveis na cidade.",
      },
      { property: "og:title", content: "Motorista — Vamus" },
      {
        property: "og:description",
        content:
          "Conduza com a Vamus numa plataforma simples e profissional feita para ganhos flexíveis na cidade.",
      },
    ],
  }),
  component: DriverPage,
});

function DriverPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="grid min-h-screen pt-16 lg:grid-cols-2">
        <div className="yango-fade-in flex items-center px-8 py-16 md:px-10 lg:py-24">
          <div className="max-w-[620px]">
            <p className="text-lg font-bold text-brand">Motorista</p>
            <h1 className="yango-headline mt-5 text-[56px] font-black uppercase sm:text-[72px]">
              Faça a sua cidade avançar
            </h1>
            <p className="mt-7 max-w-[560px] text-[19px] leading-[1.35] text-ink-soft">
              Junte-se à Vamus como motorista e ganhe com viagens claras, ferramentas simples e suporte desenhado
              para profissionais do dia a dia.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {["Horários flexíveis", "Pagamentos semanais rápidos", "Detalhes transparentes das viagens"].map((item) => (
                <div
                  className="border-t-4 border-brand bg-page-panel p-5 text-xl font-bold leading-tight"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="min-h-[440px] overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src={heroImage}
            alt="Motorista da Vamus ao lado de um táxi"
          />
        </div>
      </section>
    </main>
  );
}
