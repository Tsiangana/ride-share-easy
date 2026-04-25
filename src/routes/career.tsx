import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Okubi" },
      {
        name: "description",
        content: "Build a career at Okubi and help create a sharper urban mobility experience.",
      },
      { property: "og:title", content: "Career — Okubi" },
      {
        property: "og:description",
        content: "Build a career at Okubi and help create a sharper urban mobility experience.",
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
          <p className="text-lg font-bold text-brand">Career</p>
          <h1 className="yango-headline mt-5 max-w-[860px] text-[56px] font-black uppercase sm:text-[72px]">
            Build mobility people can trust
          </h1>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              [
                "Operations",
                "Keep city launches, driver support, and rider quality running smoothly.",
              ],
              ["Product", "Shape simple digital experiences for riders, drivers, and local teams."],
              [
                "Growth",
                "Create practical campaigns that make Okubi the easy choice in every city.",
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
