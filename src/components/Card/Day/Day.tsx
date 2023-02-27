interface Props {
	day: string;
	weather: string;
	temperature: number;
}

export default function Day({ day, weather, temperature }: Props) {
	return (
		<>
			<div className="flex flex-col">
				<div className="border-b-white border-b w-full">
					<p className="text-xl font-bold">{String(day)}</p>
				</div>
				<div className="mt-4">{temperature} °C</div>
				<div className="mt-4">{weather}</div>
			</div>
		</>
	);
}
