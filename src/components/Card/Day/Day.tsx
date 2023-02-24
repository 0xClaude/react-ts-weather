import styles from "./Day.module.css";

interface Props {
	day: string;
	weather: string;
	temperature: number;
}

export default function Day({ day, weather, temperature }: Props) {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.dayName}>
					<p>{String(day)}</p>
				</div>
				<div className={styles.forecast}>{temperature} °C</div>
				<div className={styles.forecast}>{weather}</div>
			</div>
		</>
	);
}
