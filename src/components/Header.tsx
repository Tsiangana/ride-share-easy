import { Link } from "@tanstack/react-router";

export function Header() {
  return (
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
      <a
        href="https://firebasestorage.googleapis.com/v0/b/portifolio-527fa.firebasestorage.app/o/apps%2FOkubi.apk?alt=media&token=068b255f-e8f2-4b48-a3a4-5685a40d218f"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-base font-semibold transition-opacity hover:opacity-75"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-foreground">
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </span>
        <span className="hidden sm:inline">Download</span>
      </a>
    </header>
  );
}
