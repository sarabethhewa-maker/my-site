"use client";

import { useEffect, useMemo, useState } from "react";
import SyringeImage from "@/components/calculator/SyringeImage";

type Preset<T extends number> = {
	label: string;
	value: T;
};

type SyringeUnits = 30 | 50 | 100;

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

function unitsFromSyringeMl(syringeMl: number): SyringeUnits {
	// common insulin syringe mapping:
	// 0.3 ml = 30 units, 0.5 ml = 50 units, 1.0 ml = 100 units
	if (syringeMl <= 0.3) return 30;
	if (syringeMl <= 0.5) return 50;
	return 100;
}

function PresetRow(props: {
	title: string;
	presets: Preset<number>[];
	value: number;
	onPick: (n: number) => void;

	otherOpen: boolean;
	setOtherOpen: (b: boolean) => void;
	otherValue: string;
	setOtherValue: (v: string) => void;
	otherSuffix: string;
	onApplyOther: () => void;
}) {
	const {
		title,
		presets,
		value,
		onPick,
		otherOpen,
		setOtherOpen,
		otherValue,
		setOtherValue,
		otherSuffix,
		onApplyOther,
	} = props;

	return (
		<div className="rounded-2xl border border-black/10 bg-white p-5">
			<div className="text-sm font-semibold">{title}</div>

			<div className="mt-4 flex flex-wrap gap-2">
				{presets.map((p) => {
					const selected = value === p.value && !otherOpen;

					return (
						<button
							key={p.label}
							type="button"
							onClick={() => {
								setOtherOpen(false);
								onPick(p.value);
							}}
							className={[
								"rounded-xl border px-4 py-2 text-sm transition",
								selected
									? "border-black bg-black text-white"
									: "border-black/10 bg-white hover:bg-black/5",
							].join(" ")}>
							{p.label}
						</button>
					);
				})}

				<button
					type="button"
					onClick={() => setOtherOpen(!otherOpen)}
					className={[
						"rounded-xl border px-4 py-2 text-sm transition",
						otherOpen
							? "border-black bg-black text-white"
							: "border-black/10 bg-white hover:bg-black/5",
					].join(" ")}>
					Other
				</button>
			</div>

			{otherOpen ? (
				<div className="mt-4 flex items-center gap-3">
					<input
						value={otherValue}
						onChange={(e) => setOtherValue(e.target.value)}
						placeholder="Enter value"
						className="w-40 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:border-black/20"
					/>
					<div className="text-sm text-black/50">{otherSuffix}</div>
					<button
						type="button"
						onClick={onApplyOther}
						className="ml-auto rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/5">
						Apply
					</button>
				</div>
			) : null}
		</div>
	);
}

export default function PeptideCalculatorPage() {
	// Presets like your reference
	const syringePresets: Preset<number>[] = [
		{ label: "0.3 ml", value: 0.3 },
		{ label: "0.5 ml", value: 0.5 },
		{ label: "1.0 ml", value: 1.0 },
	];

	const vialPresets: Preset<number>[] = [
		{ label: "5 mg", value: 5 },
		{ label: "10 mg", value: 10 },
		{ label: "15 mg", value: 15 },
	];

	const waterPresets: Preset<number>[] = [
		{ label: "1 ml", value: 1 },
		{ label: "2 ml", value: 2 },
		{ label: "3 ml", value: 3 },
		{ label: "5 ml", value: 5 },
	];

	const dosePresets: Preset<number>[] = [
		{ label: "50 mcg", value: 50 },
		{ label: "100 mcg", value: 100 },
		{ label: "250 mcg", value: 250 },
		{ label: "500 mcg", value: 500 },
	];

	// Default selections
	const [syringeMl, setSyringeMl] = useState<number>(1.0);
	const [vialMg, setVialMg] = useState<number>(5);
	const [waterMl, setWaterMl] = useState<number>(1);
	const [doseMcg, setDoseMcg] = useState<number>(50);

	// Syringe image selection (units)
	const [syringeUnits, setSyringeUnits] = useState<SyringeUnits>(100);

	// "Other" toggles + values
	const [syringeOtherOpen, setSyringeOtherOpen] = useState(false);
	const [vialOtherOpen, setVialOtherOpen] = useState(false);
	const [waterOtherOpen, setWaterOtherOpen] = useState(false);
	const [doseOtherOpen, setDoseOtherOpen] = useState(false);

	const [syringeOther, setSyringeOther] = useState<string>("1");
	const [vialOther, setVialOther] = useState<string>("5");
	const [waterOther, setWaterOther] = useState<string>("1");
	const [doseOther, setDoseOther] = useState<string>("50");

	// Toasts
	const [savedMsg, setSavedMsg] = useState<string>("");
	const [sharedMsg, setSharedMsg] = useState<string>("");

	// Disclaimer modal
	const [disclaimerOpen, setDisclaimerOpen] = useState(false);

	// Keep syringe image in sync when user picks syringe ml presets
	useEffect(() => {
		const nextUnits = unitsFromSyringeMl(syringeMl);
		setSyringeUnits((prev) => (prev === nextUnits ? prev : nextUnits));
	}, [syringeMl]);

	// Calculations
	const totalMcg = useMemo(() => vialMg * 1000, [vialMg]);

	const concentrationMcgPerMl = useMemo(() => {
		if (!waterMl) return 0;
		return totalMcg / waterMl;
	}, [totalMcg, waterMl]);

	const mlNeeded = useMemo(() => {
		if (!concentrationMcgPerMl) return 0;
		return doseMcg / concentrationMcgPerMl;
	}, [doseMcg, concentrationMcgPerMl]);

	// units = mL * 100
	const unitsNeeded = useMemo(() => mlNeeded * 100, [mlNeeded]);

	// Use the IMAGE syringe capacity (30/50/100 units) as the max
	const maxUnits = syringeUnits;

	const unitsClamped = useMemo(
		() => clamp(unitsNeeded, 0, maxUnits || 1),
		[unitsNeeded, maxUnits]
	);

	const percent = useMemo(() => {
		if (!maxUnits) return 0;
		return clamp((unitsClamped / maxUnits) * 100, 0, 100);
	}, [unitsClamped, maxUnits]);

	const exceedsSyringe = useMemo(
		() => unitsNeeded > maxUnits + 1e-9,
		[unitsNeeded, maxUnits]
	);

	function applyOther(group: "syringe" | "vial" | "water" | "dose") {
		if (group === "syringe") {
			const n = Number(syringeOther);
			if (Number.isFinite(n) && n > 0) setSyringeMl(n);
		}
		if (group === "vial") {
			const n = Number(vialOther);
			if (Number.isFinite(n) && n > 0) setVialMg(n);
		}
		if (group === "water") {
			const n = Number(waterOther);
			if (Number.isFinite(n) && n > 0) setWaterMl(n);
		}
		if (group === "dose") {
			const n = Number(doseOther);
			if (Number.isFinite(n) && n > 0) setDoseMcg(n);
		}
	}

	function handleSave() {
		try {
			const payload = { syringeMl, vialMg, waterMl, doseMcg, syringeUnits };
			localStorage.setItem("oorinn_peptide_calc", JSON.stringify(payload));
			setSavedMsg("Saved ✅");
			setTimeout(() => setSavedMsg(""), 1400);
		} catch {
			setSavedMsg("Couldn’t save");
			setTimeout(() => setSavedMsg(""), 1400);
		}
	}

	function buildShareUrl() {
		const url = new URL(window.location.href);
		url.searchParams.set("syringe", String(syringeMl));
		url.searchParams.set("vial", String(vialMg));
		url.searchParams.set("water", String(waterMl));
		url.searchParams.set("dose", String(doseMcg));
		url.searchParams.set("units", String(syringeUnits));
		return url.toString();
	}

	async function handleShare() {
		const url = buildShareUrl();

		try {
			if (navigator.share) {
				await navigator.share({
					title: "OORINN Peptide Calculator",
					text: "Peptide calculator settings",
					url,
				});
				setSharedMsg("Shared ✅");
				setTimeout(() => setSharedMsg(""), 1400);
				return;
			}

			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(url);
				setSharedMsg("Link copied ✅");
				setTimeout(() => setSharedMsg(""), 1400);
				return;
			}

			window.prompt("Copy this link:", url);
		} catch {
			setSharedMsg("Couldn’t share");
			setTimeout(() => setSharedMsg(""), 1400);
		}
	}

	useEffect(() => {
		// Disclaimer modal (show once until accepted)
		try {
			const ack = localStorage.getItem("oorinn_peptide_calc_disclaimer_ack");
			if (!ack) setDisclaimerOpen(true);
		} catch {
			setDisclaimerOpen(true);
		}

		// URL params first
		try {
			const params = new URLSearchParams(window.location.search);

			const qsSyringe = params.get("syringe");
			const qsVial = params.get("vial");
			const qsWater = params.get("water");
			const qsDose = params.get("dose");
			const qsUnits = params.get("units");

			const hasQuery =
				qsSyringe !== null ||
				qsVial !== null ||
				qsWater !== null ||
				qsDose !== null ||
				qsUnits !== null;

			if (hasQuery) {
				const s = Number(qsSyringe ?? "1");
				const v = Number(qsVial ?? "5");
				const w = Number(qsWater ?? "1");
				const d = Number(qsDose ?? "50");
				const u = Number(qsUnits ?? "100");

				if (Number.isFinite(s) && s > 0) setSyringeMl(s);
				if (Number.isFinite(v) && v > 0) setVialMg(v);
				if (Number.isFinite(w) && w > 0) setWaterMl(w);
				if (Number.isFinite(d) && d > 0) setDoseMcg(d);

				if (u === 30 || u === 50 || u === 100) setSyringeUnits(u);

				return;
			}
		} catch {}

		// localStorage fallback
		try {
			const raw = localStorage.getItem("oorinn_peptide_calc");
			if (!raw) return;

			const parsed = JSON.parse(raw);

			if (typeof parsed?.syringeMl === "number" && parsed.syringeMl > 0)
				setSyringeMl(parsed.syringeMl);
			if (typeof parsed?.vialMg === "number" && parsed.vialMg > 0)
				setVialMg(parsed.vialMg);
			if (typeof parsed?.waterMl === "number" && parsed.waterMl > 0)
				setWaterMl(parsed.waterMl);
			if (typeof parsed?.doseMcg === "number" && parsed.doseMcg > 0)
				setDoseMcg(parsed.doseMcg);

			if (
				parsed?.syringeUnits === 30 ||
				parsed?.syringeUnits === 50 ||
				parsed?.syringeUnits === 100
			)
				setSyringeUnits(parsed.syringeUnits);
		} catch {}
	}, []);

	function acceptDisclaimer() {
		try {
			localStorage.setItem("oorinn_peptide_calc_disclaimer_ack", "1");
		} catch {}
		setDisclaimerOpen(false);
	}

	return (
		<main className="w-full bg-[#f6f5f3] text-[#4a4040]">
			<div className="mx-auto max-w-6xl px-6 py-16">
				{/* Disclaimer Modal */}
				{disclaimerOpen ? (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-6">
						<div className="w-full max-w-xl rounded-3xl bg-[#fcfbf8] p-8 shadow-xl">
							<div className="text-lg font-semibold">Quick disclaimer</div>
							<p className="mt-3 text-sm text-black/70">
								This calculator is for research and educational math only. It
								does not provide medical advice, dosing guidance, or treatment
								recommendations. All products are for research use only.
							</p>

							<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
								<button
									type="button"
									onClick={acceptDisclaimer}
									className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">
									I understand
								</button>
							</div>

							<p className="mt-5 text-xs text-black/50">
								These statements have not been evaluated by the FDA. Products
								are not intended to diagnose, treat, cure, or prevent any
								disease.
							</p>
						</div>
					</div>
				) : null}

				<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
					<div>
						<h1 className="text-4xl font-semibold">Peptide Calculator</h1>
						<p className="mt-3 text-sm text-black/70">
							Research calculation helper. Choose presets or use “Other”.
						</p>
					</div>

					<div className="flex flex-wrap items-center gap-2">
						<button
							type="button"
							onClick={handleSave}
							className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/5">
							Save
						</button>
						<button
							type="button"
							onClick={handleShare}
							className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
							Share
						</button>

						{savedMsg ? (
							<div className="ml-2 text-sm text-black/60">{savedMsg}</div>
						) : null}
						{sharedMsg ? (
							<div className="ml-2 text-sm text-black/60">{sharedMsg}</div>
						) : null}
					</div>
				</div>

				<div className="mt-10 grid gap-6 lg:grid-cols-2">
					{/* LEFT: Presets */}
					<div className="space-y-6">
						<PresetRow
							title="What is the total volume of your syringe?"
							presets={syringePresets}
							value={syringeMl}
							onPick={setSyringeMl}
							otherOpen={syringeOtherOpen}
							setOtherOpen={setSyringeOtherOpen}
							otherValue={syringeOther}
							setOtherValue={setSyringeOther}
							otherSuffix="ml"
							onApplyOther={() => applyOther("syringe")}
						/>

						<PresetRow
							title="Select peptide vial quantity"
							presets={vialPresets}
							value={vialMg}
							onPick={setVialMg}
							otherOpen={vialOtherOpen}
							setOtherOpen={setVialOtherOpen}
							otherValue={vialOther}
							setOtherValue={setVialOther}
							otherSuffix="mg"
							onApplyOther={() => applyOther("vial")}
						/>

						<PresetRow
							title="How much bacteriostatic water are you adding?"
							presets={waterPresets}
							value={waterMl}
							onPick={setWaterMl}
							otherOpen={waterOtherOpen}
							setOtherOpen={setWaterOtherOpen}
							otherValue={waterOther}
							setOtherValue={setWaterOther}
							otherSuffix="ml"
							onApplyOther={() => applyOther("water")}
						/>

						<PresetRow
							title="How much do you want in each dose?"
							presets={dosePresets}
							value={doseMcg}
							onPick={setDoseMcg}
							otherOpen={doseOtherOpen}
							setOtherOpen={setDoseOtherOpen}
							otherValue={doseOther}
							setOtherValue={setDoseOther}
							otherSuffix="mcg"
							onApplyOther={() => applyOther("dose")}
						/>
					</div>

					{/* RIGHT: Syringe visualization */}
					<div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
						<div className="flex items-start justify-between gap-6">
							<div>
								<div className="text-xs tracking-[0.2em] text-black/50">
									RESULT
								</div>
								<div className="mt-3 text-sm text-black/60">
									Draw syringe to
								</div>
								<div className="mt-2 text-5xl font-semibold">
									{Number.isFinite(unitsNeeded)
										? unitsNeeded.toFixed(1)
										: "0.0"}
								</div>
								<div className="mt-2 text-sm text-black/60">
									units (max {maxUnits})
								</div>

								{exceedsSyringe ? (
									<div className="mt-4 rounded-xl border border-black/10 bg-black/5 p-3 text-sm text-black/70">
										This exceeds your syringe capacity. Increase syringe size or
										adjust inputs.
									</div>
								) : null}
							</div>

							<div className="rounded-2xl bg-black/5 px-4 py-3 text-sm text-black/70">
								<div>Total: {totalMcg.toFixed(0)} mcg</div>
								<div className="mt-1">
									Conc:{" "}
									{concentrationMcgPerMl
										? `${concentrationMcgPerMl.toFixed(1)} mcg/ml`
										: "—"}
								</div>
							</div>
						</div>

						{/* Syringe image + unit buttons */}
						<div className="mt-10 rounded-2xl border border-black/10 bg-[#fcfbf8] p-6">
							<div className="text-sm font-semibold">Syringe scale preview</div>
							<p className="mt-2 text-xs text-black/60">
								Visual estimate of where to pull on a {syringeUnits}-unit
								syringe.
							</p>

							<div className="mt-6">
								<SyringeImage units={syringeUnits} />

								<div className="mt-4 flex justify-center gap-2">
									{([30, 50, 100] as SyringeUnits[]).map((u) => {
										const selected = syringeUnits === u;
										return (
											<button
												key={u}
												type="button"
												onClick={() => setSyringeUnits(u)}
												className={[
													"rounded-full border px-4 py-2 text-sm transition",
													selected
														? "border-black bg-black text-white"
														: "border-black/10 bg-white hover:bg-black/5",
												].join(" ")}>
												{u} units
											</button>
										);
									})}
								</div>
							</div>

							{/* Slider-style bar */}
							<div className="mt-6">
								<div className="relative h-12 w-full overflow-hidden rounded-xl border border-black/10 bg-white">
									<div
										className="absolute inset-0"
										style={{
											backgroundImage:
												"repeating-linear-gradient(to right, rgba(0,0,0,0.10), rgba(0,0,0,0.10) 1px, transparent 1px, transparent 6%)",
										}}
									/>

									<div
										className="absolute left-0 top-0 h-full bg-black/10"
										style={{ width: `${percent}%` }}
									/>

									<div
										className="absolute top-0 h-full w-1 bg-black"
										style={{ left: `calc(${percent}% - 2px)` }}
									/>
								</div>

								<div className="mt-3 flex justify-between text-xs text-black/50">
									<span>0</span>
									<span>{Math.round(maxUnits / 2)}</span>
									<span>{Math.round(maxUnits)}</span>
								</div>
							</div>

							<div className="mt-6 text-xs text-black/50">
								Math helper only. Not medical advice.
							</div>
						</div>
					</div>
				</div>

				<p className="mt-10 text-xs text-black/50">
					These statements have not been evaluated by the FDA. Products are not
					intended to diagnose, treat, cure, or prevent any disease. Research
					use only.
				</p>
			</div>
		</main>
	);
}

