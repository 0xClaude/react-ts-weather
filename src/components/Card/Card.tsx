import styles from "./Card.module.css";
import Day from "./Day/Day";
import namespace from "./apiDefinition";

import useFetch from "../../Hooks/useFetch";

interface CardProps {
	lat: number;
	lon: number;
	API: string;
}

const days: number[] = [0, 1, 2, 3, 4];

const Card = ({ lat, lon, API }: CardProps) => {
	const { loading, data, error } =
		useFetch<namespace.RootObject>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric
	`);

	const dayCards = days.map((item, index) => {
		if (data && !loading && !error) {
			const timestamp = new Date(
				data?.list[item * 8].dt_txt
			).toDateString();
			const weather = data?.list[item * 8].weather[0].description;
			const temperature = data?.list[item * 8].main.temp;
			const dayProps = {
				day: timestamp,
				weather,
				temperature,
			};

			return (
				<div key={index}>
					<Day {...dayProps} />
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
