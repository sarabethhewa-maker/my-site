import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-[#b6b4ac] text-white">
			{/* TOP FOOTER (lighter section) */}
			<div className="mx-auto max-w-6xl px-6 py-16">
				<div className="grid gap-10 md:grid-cols-4">
					{/* Brand */}
					<div>
						<div className="text-sm tracking-[0.25em] text-white/80">
							OORINN LABS
						</div>
						<p className="mt-3 text-sm text-white/70">
							Science-led essentials for your daily routine.
						</p>
					</div>

					{/* Quick links */}
					<div>
						<div className="text-xs font-semibold tracking-[0.18em] text-white/80">
							QUICK LINKS
						</div>
						<div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
							<Link href="/" className="hover:text-white">
								Home
							</Link>
							<Link href="/about" className="hover:text-white">
								About
							</Link>
							<Link href="/#shop" className="hover:text-white">
								Shop
							</Link>
						</div>
					</div>

					{/* Policies */}
					<div>
						<div className="text-xs font-semibold tracking-[0.18em] text-white/80">
							POLICIES
						</div>
						<div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
							<Link href="/policies" className="hover:text-white">
								Policies
							</Link>
							<Link href="/policies#shipping" className="hover:text-white">
								Shipping & Returns
							</Link>
							<Link href="/policies#terms" className="hover:text-white">
								Terms & Conditions
							</Link>
							<Link href="/policies#privacy" className="hover:text-white">
								Privacy Policy
							</Link>
						</div>
					</div>

					{/* Contact */}
					<div>
						<div className="text-xs font-semibold tracking-[0.18em] text-white/80">
							CONTACT
						</div>
						<div className="mt-4 text-sm text-white/70">
							<p>Questions, wholesale, or press:</p>
							<a
								href="mailto:support@oorinn.com"
								className="mt-2 inline-block font-semibold text-white hover:underline">
								support@oorinn.com
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* SOFT DIVIDER */}
			<div className="h-px w-full bg-white/50" />

			{/* BOTTOM DISCLAIMER (slightly darker section) */}
			<div className="bg-[#9f9d95]">
				<div className="mx-auto max-w-6xl px-6 py-12">
					<div className="max-w-5xl text-xs leading-6 text-white/70">
						<p>
							All products on this site are for research and development use
							only. Products are not for human consumption of any kind.
						</p>

						<p className="mt-6">
							These statements have not been evaluated by the Food and Drug
							Administration (FDA). The statements and products on this website
							are not intended to diagnose, treat, cure, or prevent any disease.
						</p>

						<p className="mt-6">
							By purchasing from this site, you acknowledge and agree that you
							will use these products solely in accordance with applicable laws
							and regulations and that you accept full responsibility for their
							use.
						</p>
					</div>

					{/* Bottom row */}
					<div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-8 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
						<div>© {new Date().getFullYear()} OORINN LABS</div>
						<div className="flex flex-wrap gap-x-4 gap-y-2">
							<Link href="/policies" className="hover:text-white">
								Policies
							</Link>
							<a href="mailto:support@oorinn.com" className="hover:text-white">
								Contact
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
