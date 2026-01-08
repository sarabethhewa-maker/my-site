export default function AboutPage() {
	return (
		<main className="min-h-screen bg-[#fcfbf8] text-black">
			<section className="mx-auto max-w-4xl px-6 py-14">
				<h1 className="text-4xl font-semibold leading-tight">About OORINN</h1>

				<p className="mt-6 text-sm leading-7 text-black/70">
					OORINN Labs is built around clean, research-minded essentials —
					crafted to fit seamlessly into a simple daily routine.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-2">
					<div className="rounded-3xl border border-black/10 bg-white/60 p-6">
						<h2 className="text-lg font-semibold">Our standard</h2>
						<p className="mt-2 text-sm leading-6 text-black/70">
							Clean ingredients, transparent sourcing, and third-party testing
							where applicable.
						</p>
					</div>

					<div className="rounded-3xl border border-black/10 bg-white/60 p-6">
						<h2 className="text-lg font-semibold">Our goal</h2>
						<p className="mt-2 text-sm leading-6 text-black/70">
							Make high-quality wellness essentials feel effortless, minimal,
							and consistent.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
