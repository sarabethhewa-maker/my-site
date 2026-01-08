export default function PeptideFAQPage() {
	return (
		<main className="mx-auto max-w-4xl px-6 py-16 text-black">
			<h1 className="text-4xl font-semibold">Peptide FAQ</h1>
			<p className="mt-4 text-sm text-black/70">
				Commonly asked questions about research peptides. For research and
				educational purposes only.
			</p>

			<div className="mt-12 space-y-10">
				{/* FAQ ITEM */}
				<div>
					<h3 className="text-lg font-semibold">What are peptides?</h3>
					<p className="mt-2 text-sm text-black/70">
						Peptides are short chains of amino acids that act as signaling
						molecules in biological systems. In research settings, they are
						studied for their role in cellular communication, metabolism,
						recovery, and aging-related pathways.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">
						Are peptides the same as proteins?
					</h3>
					<p className="mt-2 text-sm text-black/70">
						Peptides are smaller than proteins. Proteins are long, complex
						chains of amino acids, while peptides are shorter and often more
						targeted in their biological signaling behavior.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">
						What does “research use only” mean?
					</h3>
					<p className="mt-2 text-sm text-black/70">
						“Research use only” means these compounds are intended solely for
						laboratory and scientific research. They are not approved for human
						consumption, medical treatment, or diagnostic use.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">
						Why are peptides stored as powders?
					</h3>
					<p className="mt-2 text-sm text-black/70">
						Peptides are typically lyophilized (freeze-dried) to improve
						stability during storage. This allows researchers to reconstitute
						the peptide under controlled conditions when needed.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">
						How should peptides be stored?
					</h3>
					<p className="mt-2 text-sm text-black/70">
						Unreconstituted peptides are usually stored in a cool, dry
						environment. Once reconstituted, researchers typically store them
						under refrigerated or frozen conditions depending on study duration
						and protocol.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold">
						Why do different peptides require different dosing calculations?
					</h3>
					<p className="mt-2 text-sm text-black/70">
						Each peptide has a unique molecular weight, concentration, and
						research protocol. Dosing calculations depend on vial size,
						reconstitution volume, syringe size, and desired microgram amount
						per dose.
					</p>
				</div>

				<div className="rounded-xl bg-black/5 p-4 text-xs text-black/60">
					These statements have not been evaluated by the FDA. Products are not
					intended to diagnose, treat, cure, or prevent any disease. All
					products are for research use only.
				</div>
			</div>
		</main>
	);
}
