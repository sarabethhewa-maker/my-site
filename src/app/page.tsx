import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-gradient-to-r from-[#f4efe6] via-[#e8dcc2] to-[#f4efe6] text-black">
			{/* Hero */}
			<section className="mx-auto max-w-7xl px-8 pt-20 pb-12">
				<p className="text-xs uppercase tracking-widest text-black/60">
					Oorinn Labs
				</p>

				<div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
					<h1 className="text-5xl md:text-6xl font-semibold leading-tight">
						Science-led essentials
						<br />
						for your daily routine
					</h1>

					<div className="max-w-xl text-black/70">
						Clean, simple checkout. Start with single-serve packets or stock up
						with a 20-pack.
					</div>
				</div>
			</section>

			{/* Product grid */}
			<section className="mx-auto max-w-7xl px-8 pb-24">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{PRODUCTS.map((p) => (
						<div
							key={p.slug}
							className="rounded-2xl bg-white/70 backdrop-blur border border-black/10 overflow-hidden shadow-sm">
							<div className="relative aspect-[4/5] bg-white">
								{p.badge ? (
									<div className="absolute left-4 top-4 z-10 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
										{p.badge}
									</div>
								) : null}

								<Image
									src={p.image}
									alt={p.name}
									fill
									className="object-contain p-6"
								/>
							</div>

							<div className="p-5">
								<div className="flex items-baseline justify-between gap-3">
									<h3 className="text-base font-semibold leading-snug">
										{p.name}
									</h3>
									<span className="text-sm font-semibold text-black/70">
										{p.price}
									</span>
								</div>

								<p className="mt-2 text-sm text-black/60">{p.subtitle}</p>

								<div className="mt-5 flex gap-3">
									<Link
										href={`/products/${p.slug}`}
										className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
										View
									</Link>

									<a
										href={p.stripeUrl}
										target="_blank"
										rel="noreferrer"
										className="rounded-full border border-black/20 px-4 py-2 text-xs font-semibold text-black">
										Buy
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				<p className="mt-10 text-xs text-black/50">
					These statements have not been evaluated by the FDA. Products are not
					intended to diagnose, treat, cure, or prevent any disease.
				</p>
			</section>
		</main>
	);
}
