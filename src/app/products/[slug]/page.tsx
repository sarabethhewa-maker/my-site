import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	const slug = decodeURIComponent(params.slug).trim();
	const product = products.find((p) => p.slug.trim() === slug);



	if (!product) {
		return (
			<main className="min-h-screen bg-[#080816] text-white flex items-center justify-center">
				<div className="text-white/80">
					Product not found.{" "}

    {/* DEBUG (temporary) */}
          <p className="text-xs text-white/70">slug from URL: {params.slug}</p>
          <p className="text-xs text-white/70">
            available: {products.map((p) => p.slug).join(", ")}
          </p>


					<Link className="underline" href="/">
						Go back
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-[#080816] text-white">
			<div className="mx-auto max-w-6xl px-6 py-16">
				<Link href="/products" className="text-sm text-white/60 hover:text-white">
					← Back to shop
				</Link>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
					<div className="rounded-2xl bg-white/5 border border-white/10 p-8">
						<div className="relative aspect-4/5">
							<Image
								src={product.image}
								alt={product.name}
								fill
								className="object-contain"
							/>
						</div>
					</div>

					<div>
						<p className="text-xs uppercase tracking-widest text-white/60">
							Oorinn Labs
						</p>
						<h1 className="mt-3 text-4xl font-semibold">{product.name}</h1>
						<p className="mt-2 text-white/70">{product.price}</p>

						<p className="mt-6 text-white/70">{product.subtitle}</p>

						<div className="mt-8 flex gap-3">
							<a
								href={product.stripeUrl}
								target="_blank"
								rel="noreferrer"
								className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black">
								Buy now
							</a>

							<Link
								href="/policies"
								className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white">
								Policies
							</Link>
						</div>

						<p className="mt-8 text-xs text-white/50">
							These statements have not been evaluated by the FDA. products are
							not intended to diagnose, treat, cure, or prevent any disease.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
