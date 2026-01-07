import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "OORINN LABS",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Top nav */}
        <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f3efe6]/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm tracking-[0.2em] text-black/70">
              OORINN LABS
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
              <Link href="/#shop" className="hover:text-black">
                Shop
              </Link>
              <Link href="/policies" className="hover:text-black">
                Policies
              </Link>
              <Link href="/#contact" className="hover:text-black">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              {/* optional: keep this as a “Shop” anchor */}
              <Link
                href="/#shop"
                className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white"
              >
                Shop
              </Link>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer id="contact" className="border-t border-black/5 bg-[#f3efe6]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
            <div>
              <div className="text-sm tracking-[0.2em] text-black/70">OORINN LABS</div>
              <p className="mt-3 text-sm text-black/60">
                Science-led essentials for your daily routine.
              </p>
              <p className="mt-6 text-xs text-black/50">
                These statements have not been evaluated by the FDA. Products are not intended to
                diagnose, treat, cure, or prevent any disease.
              </p>
            </div>

            <div className="text-sm">
              <div className="font-semibold text-black/80">Links</div>
              <div className="mt-3 flex flex-col gap-2 text-black/60">
                <Link className="hover:text-black" href="/#shop">
                  Shop
                </Link>
                <Link className="hover:text-black" href="/policies">
                  Policies
                </Link>
                <a className="hover:text-black" href="mailto:support@oorinn.com">
                  support@oorinn.com
                </a>
              </div>
            </div>

            <div className="text-sm">
              <div className="font-semibold text-black/80">Contact</div>
              <p className="mt-3 text-black/60">
                Questions, wholesale, or press:
              </p>
              <a className="mt-2 inline-block text-black hover:underline" href="mailto:support@oorinn.com">
                support@oorinn.com
              </a>
              <p className="mt-4 text-xs text-black/50">
                (Swap this email to whatever you want.)
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
