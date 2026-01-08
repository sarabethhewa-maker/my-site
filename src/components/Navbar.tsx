"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar({
	query,
	setQuery,
}: {
	query: string;
	setQuery: (v: string) => void;
}) {
	const [categoriesOpen, setCategoriesOpen] = useState(false);
	const [peptidesOpen, setPeptidesOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);


	// close delay so it’s not “too sensitive”
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	function openMenu() {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setCategoriesOpen(true);
	}

	function scheduleCloseMenu() {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => {
			setCategoriesOpen(false);
			setPeptidesOpen(false);
			setAboutOpen(false);

		}, 350); // bump to 450 if you want even stickier
	}

	useEffect(() => {
		return () => {
			if (closeTimer.current) clearTimeout(closeTimer.current);
		};
	}, []);

	return (
		<header className="sticky top-0 z-40 border-b border-black/10 bg-[#fbf9f5]">
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center">
					{/* LEFT */}
					<div className="flex items-center gap-3">
						<img
							src="/us-flag.svg"
							alt="Made in USA"
							className="h-6 w-auto opacity-80"
						/>
						<div className="text-sm tracking-[0.25em] text-black/60">
							OORINN LABS
						</div>
					</div>

					{/* CENTER */}
					<nav className="flex items-center justify-center gap-6 text-sm">
						<Link href="/#shop" className="hover:opacity-70">
							Shop
						</Link>

						{/* CATEGORIES DROPDOWN */}
						<div
							className="relative"
							onMouseEnter={openMenu}
							onMouseLeave={scheduleCloseMenu}>
							<button className="hover:opacity-70">Categories</button>

							{categoriesOpen && (
								<div
									className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[360px] rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-xl overflow-hidden"
									onMouseEnter={openMenu}
									onMouseLeave={scheduleCloseMenu}>
									<div className="p-5">
										<div className="text-xs tracking-[0.2em] text-black/40 mb-3">
											CATEGORIES
										</div>

										<div className="flex flex-col text-sm">
											{/* Supplements */}
											<Link
												href="/categories/supplements"
												className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5 text-black/80">
												<span>Supplements</span>
												<span className="text-black/30">&rsaquo;</span>
											</Link>

											{/* Peptides (hover shows indented submenu underneath) */}
											<div
												className="rounded-lg px-3 py-2 hover:bg-black/5 text-black/80"
												onMouseEnter={() => setPeptidesOpen(true)}
												onMouseLeave={() => setPeptidesOpen(false)}>
												<div className="flex items-center justify-between cursor-pointer">
													<span>Peptides</span>
													<span className="text-black/30">&rsaquo;</span>
												</div>

												{/* INDENTED SUBMENU UNDER PEPTIDES */}
												{peptidesOpen && (
													<div className="mt-2 ml-4 pl-4 border-l border-black/10 flex flex-col gap-1">
														<Link
															href="/categories/peptides/longevity"
															className="rounded-md px-2 py-1 hover:bg-black/5 text-black/70">
															Longevity
														</Link>

														<Link
															href="/categories/peptides/fat-loss"
															className="rounded-md px-2 py-1 hover:bg-black/5 text-black/70">
															Fat loss
														</Link>

														<Link
															href="/categories/peptides/muscle-retention"
															className="rounded-md px-2 py-1 hover:bg-black/5 text-black/70">
															Muscle retention
														</Link>

														<div className="pt-2 text-xs text-black/40">
															Research use only. Not medical advice.
														</div>
													</div>
												)}
											</div>

											{/* Bioregulators */}
											<Link
												href="/categories/bioregulators"
												className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5 text-black/80">
												<span>Bioregulators</span>
												<span className="text-black/30">&rsaquo;</span>
											</Link>

											{/* Topical peptides */}
											<Link
												href="/categories/topical-peptides"
												className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5 text-black/80">
												<span>Topical peptides</span>
												<span className="text-black/30">&rsaquo;</span>
											</Link>
										</div>
									</div>
								</div>
							)}
						</div>

						<div
							className="relative"
							onMouseEnter={() => {
								if (closeTimer.current) clearTimeout(closeTimer.current);
								setAboutOpen(true);
							}}
							onMouseLeave={scheduleCloseMenu}>
							<button className="hover:opacity-70">About</button>

							{aboutOpen && (
								<div
									className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[360px] rounded-2xl bg-white/85 backdrop-blur border border-black/10 shadow-xl overflow-hidden"
									onMouseEnter={() => {
										if (closeTimer.current) clearTimeout(closeTimer.current);
										setAboutOpen(true);
									}}
									onMouseLeave={scheduleCloseMenu}>
									<div className="p-5">
										<div className="text-xs tracking-[0.2em] text-black/40 mb-3">
											ABOUT
										</div>

										<div className="flex flex-col text-sm">
											<Link
												href="/about"
												className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5 text-black/80">
												<span>Overview</span>
												<span className="text-black/30">&rsaquo;</span>
											</Link>

											<Link
												href="/about/peptide-faq"
												className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5 text-black/80">
												<span>Peptide FAQ</span>
												<span className="text-black/30">&rsaquo;</span>
											</Link>

											<Link
												href="/about/peptide-calculator"
												className="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-black/5 text-black/80">
												<span>Peptide Calculator</span>
												<span className="text-black/30">&rsaquo;</span>
											</Link>

											<div className="pt-3 text-xs text-black/40">
												Research use only. Not medical advice.
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

                        
						<Link href="/contact" className="hover:opacity-70">
							Contact
						</Link>
						<Link href="/policies" className="hover:opacity-70">
							Policies
						</Link>
					</nav>

					{/* RIGHT */}
					<div className="flex items-center justify-end gap-3">
						<input
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search products..."
							className="hidden w-56 rounded-full border border-black/10 bg-white px-4 py-2 text-sm outline-none md:block"
						/>
						<Link
							href="/#shop"
							className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white">
							Shop
						</Link>
					</div>
				</div>

				{/* tiny spacing under nav */}
				<div className="h-2" />
			</div>
		</header>
	);
}
