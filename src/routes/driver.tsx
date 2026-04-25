import { Link, createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import heroImage from "../assets/yango/hero.jpg";

export const Route = createFileRoute("/driver")({
  head: () => ({
    meta: [
      { title: "Driver — Okubi" },
      {
        name: "description",
        content:
          "Drive with Okubi on a simple, professional platform built for flexible city earnings.",
      },
      { property: "og:title", content: "Driver — Okubi" },
      {
        property: "og:description",
        content:
          "Drive with Okubi on a simple, professional platform built for flexible city earnings.",
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
            <p className="text-lg font-bold text-brand">Driver</p>
            <h1 className="yango-headline mt-5 text-[56px] font-black uppercase sm:text-[72px]">
              Drive your city forward
            </h1>
            <p className="mt-7 max-w-[560px] text-[19px] leading-[1.35] text-ink-soft">
              Join Okubi as a driver and earn with clear rides, simple tools, and support designed
              for everyday professionals.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {["Flexible hours", "Fast weekly payouts", "Transparent trip details"].map((item) => (
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
            alt="Okubi driver beside a taxi"
          />
        </div>
      </section>
    </main>
  );
}
