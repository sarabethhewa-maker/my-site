import Link from "next/link";

export default function HomePage() {
	return (
		<main className="min-h-screen bg-[#080816] text-white">
			<div className="mx-auto max-w-4xl px-6 py-16">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-10">
					<p className="text-sm text-white/60">SB Shop</p>

					<h1 className="mt-3 text-4xl font-semibold tracking-tight">
						Hair + Skin essentials
					</h1>

					<p className="mt-4 max-w-2xl text-white/70">
						One product to start. Clean, simple checkout.
					</p>

					<div className="mt-8 flex flex-wrap gap-3">
						<Link
							href="/product"
							className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black">
							View product
						</Link>

						<Link
							href="/policies"
							className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white">
							Policies
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
