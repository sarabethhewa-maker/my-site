import Link from "next/link";

export default function CategoriesPage() {
	const categories = [
		{ name: "Coffee", href: "/#shop" },
		{ name: "Packets", href: "/#shop" },
		{ name: "20 Packs", href: "/#shop" },
	];

	return (
		<main className="min-h-screen bg-[#fcfbf8] text-black">
			<section className="mx-auto max-w-4xl px-6 py-14">
				<h1 className="text-4xl font-semibold">Categories</h1>
				<p className="mt-4 text-sm text-black/70">Browse by category.</p>

				<div className="mt-10 grid gap-4 sm:grid-cols-2">
					{categories.map((c) => (
						<Link
							key={c.name}
							href={c.href}
							className="rounded-3xl border border-black/10 bg-white/60 p-6 hover:bg-white">
							<div className="text-lg font-semibold">{c.name}</div>
							<div className="mt-2 text-sm text-black/60">View products</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
