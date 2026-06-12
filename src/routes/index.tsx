import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
const heroImage = "https://jornaloguardiao.com/wp-content/uploads/2025/03/image-95.jpeg";
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
              Baixar o app
            </h1>
            <p className="mt-7 max-w-[580px] text-[16px] leading-[1.32] text-ink-soft sm:text-[18px]">
              A Vamus leva você aonde precisa ir por menos. Solicite sua viagem pelo aplicativo sem precisar fazer ligações. É rápido, fácil e funciona com iOS e Android.
            </p>

            <div className="mt-16 flex flex-col gap-7 sm:flex-row sm:items-center">
              <img
                className="h-[138px] w-[138px] object-contain"
                src="https://jornaloguardiao.com/wp-content/uploads/2025/03/image-95.jpeg"
                alt="QR code to current site"
              />
              <div className="max-w-[260px]">
                <h2 className="yango-headline text-[36px] font-black uppercase leading-none">
                  Adere A Vamus
                </h2>
                <p className="mt-5 text-[18px] leading-[1.25] text-ink-soft">
                  Abra a câmera do seu smartphone e escaneie o código.
                </p>
              </div>
            </div>

            <a
              className="mt-8 inline-flex rounded-md bg-brand px-6 py-3 text-base font-bold text-brand-foreground transition-transform hover:-translate-y-0.5 sm:hidden"
              href="https://firebasestorage.googleapis.com/v0/b/portifolio-527fa.firebasestorage.app/o/apps%2FOkubi.apk?alt=media&token=068b255f-e8f2-4b48-a3a4-5685a40d218f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Baixar App
            </a>
          </div>
        </div>
        <div className="min-h-[430px] overflow-hidden lg:min-h-[601px]">
          <img
            className="h-full w-full object-cover object-center"
            src={heroImage}
            alt="Passageiro da Vamus ao lado de um táxi"
          />
        </div>
      </section>

      <section className="grid min-h-[430px] lg:grid-cols-[34%_66%]">
        <div className="hidden bg-page-panel lg:block" />
        <div className="px-8 py-14 md:px-16 lg:px-32">
          <h2 className="yango-headline text-[42px] font-black uppercase sm:text-[54px]">
            Eis o que a Vamus oferece
          </h2>
          <div className="mt-16 grid gap-12 xl:grid-cols-2">
            <article className="flex items-center gap-8">
              <img
                className="h-[84px] w-[148px] object-contain"
                src={discountIcon}
                alt="Promocode ticket"
              />
              <p className="max-w-[310px] text-[30px] font-bold leading-[1.18] sm:text-[34px]">
                Campanhas regulares de descontos
                <span className="block font-normal">para os novos usuários</span>
              </p>
            </article>
            <article className="flex items-center gap-8">
              <img
                className="h-[150px] w-[98px] object-contain"
                src={priceIcon}
                alt="Affordable route price illustration"
              />
              <p className="max-w-[300px] text-[30px] font-bold leading-[1.18] sm:text-[34px]">
                Preços Confortaveis
                <span className="block font-normal">Para rotas populares</span>
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
