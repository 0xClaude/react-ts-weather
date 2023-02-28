interface Props {
	day: string;
	weather: string;
	temperature: number;
	icon: string;
	rainProbability: number;
}

export default function Day({
	day,
	weather,
	temperature,
	icon,
	rainProbability,
}: Props) {
	return (
		<>
			<div className="flex flex-col justify-evenly h-full">
				<div className="border-b-white border-b w-full">
					<p className="text-xl font-bold">{String(day)}</p>
				</div>
				<div className="flex items-center w-full justify-evenly">
					<img
						src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
					/>{" "}
					{temperature}° C with {weather}. Rain probability: {rainProbability * 100}%.
				</div>
			</div>
		</>
	);
}
