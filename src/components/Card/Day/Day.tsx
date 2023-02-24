import styles from "./Day.module.css";

interface Props {
	day: string;
}

export default function Day(props: Props) {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.dayName}>
					<p>{String(props.day)}</p>
				</div>
				<div className={styles.forecast}>bleh</div>
			</div>
		</>
	);
}
