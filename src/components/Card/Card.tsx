import Day from "./Day/Day";
import namespace from "./apiDefinition";

import useFetch from "../../Hooks/useFetch";

interface CardProps {
	lat: number;
	lon: number;
	API: string;
}

const days: number[] = [1, 2, 3, 4];

const Card = ({ lat, lon, API }: CardProps) => {
	const { loading, data, error } =
		useFetch<namespace.RootObject>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric
	`);

	const todayCast = () => {
		if (data && !loading && !error) {
			const city = data?.city.name;
			const country = data?.city.country;
			const description = data?.list[0].weather[0].description;
			const temperature = data?.list[0].main.temp;
			const min = data?.list[0].main.temp_min;
			const max = data?.list[0].main.temp_max;
			const feelsLike = data?.list[0].main.feels_like;
			const windSpeed = data?.list[0].wind.speed;
			const icon = data?.list[0].weather[0].icon;
			const rainProbability = data?.list[0].pop;
			const sunRise = new Date(data?.city.sunrise * 1000);
			const sunSet = new Date(data?.city.sunset * 1000);


			return (
				<div className="flex flex-col text-lg">
					<p className="w-full flex justify-center"><img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} /></p>
					<p className="text-3xl flex w-full justify-center">{temperature}° C</p>
					<p className="items-start mt-4">Today the weather for {city} in {country} is {description} with a temperature between {min.toFixed(1)}° C and {max.toFixed(1)}° C. It feels like {feelsLike.toFixed(1)} °C.</p>
					<p className="mt-4">Sunrise was at {sunRise.getHours()}:{sunRise.getMinutes()} and sunset is at {sunSet.getHours()}:{sunSet.getMinutes()}</p>
					<p className="text-2xl my-4">Precipiation</p>
					<p className="items-start">Probability for rainfall is {rainProbability * 100} %. Wind blows with {windSpeed} m/s.</p>
				</div>
			);
		} else {
			return;
		}
	};

	const dayCards = days.map((item) => {
		if (data && !loading && !error) {
			const timestamp = new Date(
				data?.list[item * 8].dt_txt
			).toLocaleDateString();
			const weather = data?.list[item * 8].weather[0].description;
			const temperature = data?.list[item * 8].main.temp;
			const dayProps = {
				day: timestamp,
				weather,
				temperature,
			};

			return (
				<div key={data?.list[item * 8].dt_txt}>
					<Day {...dayProps} />
				</div>
			);
		} else {
			return (
				<div key={item}>
					<p>Loading</p>
				</div>
			);
		}
	});

	return (
		<>
			<div className="text-white shadow-slate-700 shadow-2xl flex flex-row justify-evenly flex-wrap gap-8 w-4/5 rounded-lg bg-green-800 h-2/3 items-center py-10 mt-4">
				<div className="border-r border-white w-2/5 h-full items-center flex flex-col pr-8">
					<p className="text-3xl flex items-center">
						Forecast for {new Date().toLocaleDateString()}
					</p>
					<div>{todayCast()}</div>
				</div>
				<div className="w-2/5 h-full flex flex-col justify-evenly">{dayCards}</div>
			</div>
		</>
	);
};

export default Card;
