import { Link, createFileRoute } from "@tanstack/react-router";
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
      <header className="fixed inset-x-0 top-0 z-20 flex h-16 items-center justify-between bg-brand px-8 text-brand-foreground md:px-10">
        <div className="flex items-center gap-8">
          <Link to="/" className="yango-logo text-[34px] font-black leading-none">
            OKUBI
          </Link>
          <nav className="hidden items-center gap-6 text-base font-semibold md:flex">
            <Link className="transition-opacity hover:opacity-75" to="/driver">
              Driver
            </Link>
            <Link className="transition-opacity hover:opacity-75" to="/career">
              Career
            </Link>
          </nav>
        </div>
        <button className="flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-75" type="button">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-foreground">
            <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              <path d="M3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.3 3.3 5.3 3.3 9S14.2 18.7 12 21c-2.2-2.3-3.3-5.3-3.3-9S9.8 5.3 12 3Z" />
            </svg>
          </span>
          <span className="hidden sm:inline">English</span>
          <svg aria-hidden="true" className="hidden h-4 w-4 sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </header>

      <section className="grid min-h-[665px] pt-16 lg:grid-cols-2">
        <div className="yango-fade-in flex items-center px-8 py-14 md:px-10 lg:pb-8 lg:pt-24">
          <div className="w-full max-w-[610px]">
            <h1 className="yango-headline max-w-[520px] text-[52px] font-black uppercase sm:text-[64px] lg:text-[66px]">
              Download the app
            </h1>
            <p className="mt-7 max-w-[580px] text-[16px] leading-[1.32] text-ink-soft sm:text-[18px]">
              Okubi gets you where you need to go for less. Request your ride in the app without making calls. It’s fast, easy, and works with iOS and Android.
            </p>

            <div className="mt-16 flex flex-col gap-7 sm:flex-row sm:items-center">
              <img className="h-[138px] w-[138px] object-contain" src={qrCode} alt="QR code to download Okubi app" />
              <div className="max-w-[260px]">
                <h2 className="yango-headline text-[36px] font-black uppercase leading-none">Join Okubi</h2>
                <p className="mt-5 text-[18px] leading-[1.25] text-ink-soft">
                  Open the camera on your smartphone and scan the code
                </p>
              </div>
            </div>

            <a className="mt-8 inline-flex rounded-md bg-brand px-6 py-3 text-base font-bold text-brand-foreground transition-transform hover:-translate-y-0.5 sm:hidden" href="https://ubq5.adj.st/?adj_t=g1iknwt_auyp5y3&adj_campaign=main-plug">
              Download App
            </a>
          </div>
        </div>
        <div className="min-h-[430px] overflow-hidden lg:min-h-[601px]">
          <img className="h-full w-full object-cover object-center" src={heroImage} alt="Okubi rider standing beside a taxi" />
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
              <img className="h-[84px] w-[148px] object-contain" src={discountIcon} alt="Promocode ticket" />
              <p className="max-w-[310px] text-[30px] font-bold leading-[1.18] sm:text-[34px]">
                Regular discount campaigns
                <span className="block font-normal">for the new users</span>
              </p>
            </article>
            <article className="flex items-center gap-8">
              <img className="h-[150px] w-[98px] object-contain" src={priceIcon} alt="Affordable route price illustration" />
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
