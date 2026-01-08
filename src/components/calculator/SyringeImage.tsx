type SyringeUnits = 30 | 50 | 100;

export default function SyringeImage({ units }: { units: SyringeUnits }) {
	let src = "/calculator/syringe-50-units.png";

	if (units === 30) src = "/calculator/syringe-30-units.png";
	if (units === 100) src = "/calculator/syringe-100-units.png";

	return (
		<div className="flex justify-center">
			<img
				src={src}
				alt={`${units} unit syringe`}
				className="h-28 w-auto object-contain"
			/>
		</div>
	);
}
