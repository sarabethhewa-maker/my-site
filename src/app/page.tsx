"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/lib/products";

type SortOption =
	| "featured"
	| "price-asc"
	| "price-desc"
	| "name-asc"
	| "name-desc";

export default function HomePage() {
	const [query, setQuery] = useState("");

	const [sort, setSort] = useState<SortOption>("featured");

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

	const priceToNumber = (price: string) =>
		Number(price.replace(/[^0-9.]/g, "")) || 0;

	const sorted = useMemo(() => {
		const arr = [...filtered];

		switch (sort) {
			case "price-asc":
				arr.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
				break;
			case "price-desc":
				arr.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
				break;
			case "name-asc":
				arr.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "name-desc":
				arr.sort((a, b) => b.name.localeCompare(a.name));
				break;
			case "featured":
			default:
				// keep original order
				break;
		}

		return arr;
	}, [filtered, sort]);

	return (
		<main className="min-h-screen bg-[#fcfbf8] text-black">
			<Navbar query={query} setQuery={setQuery} />

			{/* Hero */}
			<section className="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-2 md:items-center">
				<div>
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
				<div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl">
					<Image
						src="/hero.png"
						alt="OORINN LABS"
						fill
						className="object-cover"
						priority
					/>
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

					{/* Sort by */}
					<div className="w-full md:w-90">
						<label className="block text-xs tracking-wide text-black/60">
							Sort by
						</label>
						<select
							value={sort}
							onChange={(e) => setSort(e.target.value as SortOption)}
							className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/20">
							<option value="featured">Featured</option>
							<option value="price-asc">Price: Low → High</option>
							<option value="price-desc">Price: High → Low</option>
							<option value="name-asc">Name: A → Z</option>
							<option value="name-desc">Name: Z → A</option>
						</select>
					</div>
				</div>

				{/* Products grid */}
				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{sorted.map((p) => (
						<div
							key={p.slug}
							className="flex h-full flex-col rounded-3xl border border-black/10 bg-white/55 p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
							{/* Image area */}
							<div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-white">
								{/* Base image */}
								<Image
									src={p.image}
									alt={p.name}
									fill
									className="object-contain p-6 transition-opacity duration-300 group-hover:opacity-20"
								/>

								{/* Hover image (only if exists) */}
								{p.hoverImage ? (
									<Image
										src={p.hoverImage}
										alt={`${p.name} hover`}
										fill
										className="object-contain p-6 opacity-0 transition-all duration-300 group-hover:opacity-100"
									/>
								) : null}

								{/* Optional subtle glow */}
								<div
									className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									style={{
										background:
											"radial-gradient(circle at 50% 55%, rgba(0,0,0,0.08), transparent 55%)",
									}}
								/>
							</div>

							<div className="flex flex-1 flex-col">
								{/* Text */}
								<div className="mt-4 flex items-start justify-between gap-3">
									<div>
										<div className="text-sm font-semibold">{p.name}</div>
										<div className="mt-1 text-xs text-black/60">
											{p.subtitle}
										</div>
									</div>
									<div className="text-sm font-semibold">{p.price}</div>
								</div>

								{/* Buttons pinned to bottom */}
								<div className="mt-auto pt-4 flex gap-2">
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
