import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const product = products.find((p) => p.slug === slug);

	if (!product) {
		return (
			<main className="min-h-screen bg-[#080816] text-white flex items-center justify-center">
				<div className="text-white/80">
					<div>Product not found.</div>

					<pre className="mt-3 text-xs text-white/70 whitespace-pre-wrap">
						{`slug(raw): ${JSON.stringify(slug)}

available: ${products.map((p) => JSON.stringify(p.slug)).join(", ")}`}
					</pre>

					<Link className="underline" href="/products">
						Go back
					</Link>
				</div>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-[#080816] text-white">
			<div className="mx-auto max-w-6xl px-6 py-16">
				<Link
					href="/products"
					className="text-sm text-white/60 hover:text-white">
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
							These statements have not been evaluated by the FDA. Products are
							not intended to diagnose, treat, cure, or prevent any disease.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
