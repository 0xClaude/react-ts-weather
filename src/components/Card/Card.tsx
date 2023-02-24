import styles from "./Card.module.css";
import Day from "./Day/Day";

interface cardProps {
	lat: number;
	lon: number;
}
const days: Array<Number> = [0, 1, 2, 3];
const weekdays: Array<string> = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];
const startDate: Date = new Date();

export default function Card(props: cardProps) {

	const dayElements = days.map((item, index) => {
		const date = new Date(startDate);
		date.setDate(startDate.getDate() + Number(item));
		const dayname = weekdays[date.getDay()];
		return (
			<>
				<Day day={dayname} key={index} />
			</>
		);
	});

	return (
		<>
			<div className={styles.card}>{dayElements}</div>
		</>
	);
}
