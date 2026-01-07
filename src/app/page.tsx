"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";


export default function HomePage() {
	const [query, setQuery] = useState("");

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return products;
		return products.filter((p) => {
			return (
				p.name.toLowerCase().includes(q) ||
				(p.subtitle ?? "").toLowerCase().includes(q)
			);
		});
	}, [query]);

	return (
		<main className="min-h-screen bg-[#f3efe6] text-black">
			{/* Hero */}
			<section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
				<div>
					<div className="text-xs tracking-[0.25em] text-black/60">
						OORINN LABS
					</div>
					<h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl">
						Science-led
						<br />
						essentials
						<br />
						for your daily
						<br />
						routine
					</h1>

					<p className="mt-6 max-w-md text-sm leading-6 text-black/70">
						Clean, simple checkout. Start with single-serve packets or stock up
						with a 20-pack.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Link
							href="/#shop"
							className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">
							Shop now
						</Link>
						<Link
							href="/policies"
							className="rounded-full border border-black/20 px-5 py-2.5 text-sm font-semibold text-black">
							Policies
						</Link>
					</div>
				</div>

				{/* Hero image */}
				<div className="rounded-3xl border border-black/10 bg-white/50 p-6">
					<div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl">
						<Image
							src="/hero.png" // <-- put your hero image at public/hero.png
							alt="OORINN LABS"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</section>

			{/* Shop + Search */}
			<section id="shop" className="mx-auto max-w-6xl px-6 pb-20">
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<h2 className="text-xl font-semibold">Shop</h2>
						<p className="mt-1 text-sm text-black/60">
							{filtered.length} product{filtered.length === 1 ? "" : "s"}
						</p>
					</div>

					{/* Search bar */}
					<div className="w-full md:w-90">
						<label className="block text-xs tracking-wide text-black/60">
							Search
						</label>
						<input
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search products…"
							className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-black/40 focus:border-black/20"
						/>
					</div>
				</div>

				{/* Products grid */}
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{filtered.map((p) => (
						<div
							key={p.slug}
							className="rounded-3xl border border-black/10 bg-white/55 p-4 shadow-sm">
							<div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-white">
								<Image
									src={p.image}
									alt={p.name}
									fill
									className="object-contain p-6"
								/>
							</div>

							<div className="mt-4 flex items-start justify-between gap-3">
								<div>
									<div className="text-sm font-semibold">{p.name}</div>
									<div className="mt-1 text-xs text-black/60">{p.subtitle}</div>
								</div>
								<div className="text-sm font-semibold">{p.price}</div>
							</div>

							<div className="mt-4 flex gap-2">
								<Link
									href={`/products/${p.slug}`}
									className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
									View
								</Link>
								<a
									href={p.stripeUrl}
									target="_blank"
									rel="noreferrer"
									className="rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-semibold">
									Buy
								</a>
							</div>
						</div>
					))}
				</div>

				<p className="mt-10 text-xs text-black/50">
					These statements have not been evaluated by the FDA. products are not
					intended to diagnose, treat, cure, or prevent any disease.
				</p>
			</section>
		</main>
	);
}
