import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import heroImage from "../assets/yango/hero.jpg";
import qrCode from "../assets/yango/qr-code.png";
import discountIcon from "../assets/yango/discount.png";
import priceIcon from "../assets/yango/price.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="grid min-h-[665px] pt-16 lg:grid-cols-2">
        <div className="yango-fade-in flex items-center px-8 py-14 md:px-10 lg:pb-8 lg:pt-24">
          <div className="w-full max-w-[610px]">
            <h1 className="yango-headline max-w-[520px] text-[52px] font-black uppercase sm:text-[64px] lg:text-[66px]">
              Download the app
            </h1>
            <p className="mt-7 max-w-[580px] text-[16px] leading-[1.32] text-ink-soft sm:text-[18px]">
              Okubi gets you where you need to go for less. Request your ride in the app without
              making calls. It’s fast, easy, and works with iOS and Android.
            </p>

            <div className="mt-16 flex flex-col gap-7 sm:flex-row sm:items-center">
              <img
                className="h-[138px] w-[138px] object-contain"
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://pzau.github.io/ride-share-easy/"
                alt="QR code to current site"
              />
              <div className="max-w-[260px]">
                <h2 className="yango-headline text-[36px] font-black uppercase leading-none">
                  Join Okubi
                </h2>
                <p className="mt-5 text-[18px] leading-[1.25] text-ink-soft">
                  Open the camera on your smartphone and scan the code
                </p>
              </div>
            </div>

            <a
              className="mt-8 inline-flex rounded-md bg-brand px-6 py-3 text-base font-bold text-brand-foreground transition-transform hover:-translate-y-0.5 sm:hidden"
              href="/src/assets/Okubi.apk"
              download
            >
              Download App
            </a>
          </div>
        </div>
        <div className="min-h-[430px] overflow-hidden lg:min-h-[601px]">
          <img
            className="h-full w-full object-cover object-center"
            src={heroImage}
            alt="Okubi rider standing beside a taxi"
          />
        </div>
      </section>

      <section className="grid min-h-[430px] lg:grid-cols-[34%_66%]">
        <div className="hidden bg-page-panel lg:block" />
        <div className="px-8 py-14 md:px-16 lg:px-32">
          <h2 className="yango-headline text-[42px] font-black uppercase sm:text-[54px]">
            Here's what Okubi offers
          </h2>
          <div className="mt-16 grid gap-12 xl:grid-cols-2">
            <article className="flex items-center gap-8">
              <img
                className="h-[84px] w-[148px] object-contain"
                src={discountIcon}
                alt="Promocode ticket"
              />
              <p className="max-w-[310px] text-[30px] font-bold leading-[1.18] sm:text-[34px]">
                Regular discount campaigns
                <span className="block font-normal">for the new users</span>
              </p>
            </article>
            <article className="flex items-center gap-8">
              <img
                className="h-[150px] w-[98px] object-contain"
                src={priceIcon}
                alt="Affordable route price illustration"
              />
              <p className="max-w-[300px] text-[30px] font-bold leading-[1.18] sm:text-[34px]">
                Affordable prices
                <span className="block font-normal">for the popular routes</span>
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
