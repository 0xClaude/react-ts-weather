import styles from "./Card.module.css";
import Day from "./Day/Day";
import namespace from "./apiDefinition";

import useFetch from "../../Hooks/useFetch";
import { useEffect } from "react";

interface CardProps {
	lat: number;
	lon: number;
	API: string;
}

const days: number[] = [0, 1, 2, 3, 4];
//const previewDates: number[] = [0, 7, 15, 23, 31]
const weekdays: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const startDate: Date = new Date();

const Card = ({ lat, lon, API }: CardProps) => {
	const { loading, data, error } =
		useFetch<namespace.RootObject>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric
	`);

	useEffect(() => {
		console.log(data);
	}, [data]);

	const dayCards = days.map((item, index) => {
		const date = new Date(startDate);
		date.setDate(startDate.getDate() + Number(item));
		const dayname = weekdays[date.getDay()];

		if (data && !loading && !error) {
			const weather = data?.list[item].weather[0].description;
			const icon = data?.list[item].weather[0].icon;
			const temperature = data?.list[item].main.temp;

			return (
				<div key={index}>
					<Day day={dayname} />
					{weather} **
					{icon} **
					{temperature}
				</div>
			);
		} else {
			return (
				<div key={index}>
					<p>Loading</p>
				</div>
			);
		}
	});

	return (
		<>
			<div className={styles.card}>{dayCards}</div>
		</>
	);
};

export default Card;
