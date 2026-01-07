import Image from "next/image";
import Link from "next/link";

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/4gMaEX9MV22L0QMgSje3e00";

export default function ProductPage() {
	return (
		<main className="min-h-screen bg-[#080816] text-white">
			<div className="mx-auto max-w-5xl px-6 py-16">
				<div className="grid gap-10 md:grid-cols-2">
					{/* Product image */}
					<div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5">
						<Image
							src="/products/evlabs-protein-coffee.png"
							alt="EV Labs Protein Coffee Packets"
							fill
							className="object-contain p-6"
							priority
						/>
					</div>

					{/* Product info */}
					<div>
						<p className="text-sm text-white/60">Elevation Wellness Labs</p>

						<h1 className="mt-2 text-3xl font-semibold">
							EV Labs Protein Coffee Packets
						</h1>

						<p className="mt-3 text-white/80">
							$38.00 <span className="text-white/50">/ 20-pack</span>
						</p>

						<p className="mt-4 text-white/70">
							Convenient single-serve packets designed for a fast coffee
							routine.
						</p>

						<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
							<p className="text-sm text-white/70">
								<span className="font-semibold text-white">
									What’s included:
								</span>{" "}
								20 single-serve packets
							</p>

							<p className="mt-2 text-sm text-white/70">
								<span className="font-semibold text-white">Directions:</span>{" "}
								Mix 1 packet with water or your preferred drink. Stir or shake
								until fully dissolved.
							</p>

							<p className="mt-2 text-sm text-white/70">
								<span className="font-semibold text-white">Notes:</span> Check
								the label for full ingredients and nutrition facts.
							</p>
						</div>

						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href={STRIPE_PAYMENT_LINK}
								className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black">
								Buy now
							</a>

							<Link
								href="/"
								className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white">
								Back
							</Link>
						</div>

						{/* IMPORTANT: keep this compliant */}
						<p className="mt-6 text-xs text-white/50">
							These statements have not been evaluated by the Food and Drug
							Administration. This product is not intended to diagnose, treat,
							cure, or prevent any disease.
						</p>

						<p className="mt-2 text-xs text-white/50">
							If you intend to sell this as something people consume
							(coffee/supplement), I’d avoid calling it “research use” on the
							public page—Stripe and regulators typically expect accurate
							consumer positioning.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
