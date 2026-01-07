export default function PoliciesPage() {
	return (
		<main className="min-h-screen bg-[#080816] text-white">
			<div className="mx-auto max-w-3xl px-6 py-16">
				<h1 className="text-3xl font-semibold">Policies</h1>

				<div className="mt-8 space-y-8 text-white/75">
					<section>
						<h2 className="text-lg font-semibold text-white">Shipping</h2>
						<p className="mt-2">Add your shipping times + where you ship.</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white">Returns</h2>
						<p className="mt-2">Add your refund/return policy.</p>
					</section>

					<section>
						<h2 className="text-lg font-semibold text-white">Disclaimer</h2>
						<p className="mt-2">
							Not intended to diagnose, treat, cure, or prevent any disease.
							Patch test first. External use only.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
