import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
	title: "OORINN LABS",
	icons: {
		icon: "/icon.png",
		apple: "/apple-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="h-full bg-[#a9a0a0]">
			<body
				className={`${poppins.className} min-h-screen bg-[#a9a0a0] text-black`}>
				{/* Top nav */}
				<header className="border-b border-black/10 bg-[#cfcac2]">
					<div className="ticker">
						<div className="ticker__inner">
							{/* Track 1 */}
							<div className="ticker__track">
								<span className="ticker__item">Mold-free coffee blends</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">
									Third-party tested formulas
								</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Clean ingredients only</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">No fillers ever</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Gentle on digestion</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Single-serve daily packets</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Simple daily routines</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">
									Science-led wellness essentials
								</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Nootropic-support formulas</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Focused brain performance</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Mental clarity support</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">
									Clean energy without crashes
								</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Made in the USA</span>
							</div>

							{/* Track 2 (duplicate for seamless loop) */}
							<div className="ticker__track" aria-hidden="true">
								<span className="ticker__item">Mold-free coffee blends</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">
									Third-party tested formulas
								</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Clean ingredients only</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">No fillers ever</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Gentle on digestion</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Single-serve daily packets</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Simple daily routines</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">
									Science-led wellness essentials
								</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Nootropic-support formulas</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Focused brain performance</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Mental clarity support</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">
									Clean energy without crashes
								</span>
								<span className="ticker__dot">•</span>
								<span className="ticker__item">Made in the USA</span>
							</div>
						</div>
					</div>
				</header>

				{/* Page content */}
				{children}

				{/* Footer */}
				<Footer />
			</body>
		</html>
	);
}
