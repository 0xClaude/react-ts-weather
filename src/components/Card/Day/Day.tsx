import styles from "./Day.module.css";

interface props {
	day: string,
    key: number
}

export default function Day(props: props) {
	return (
		<>
			<div className={styles.wrapper} key={props.key}>
				<div className={styles.dayName}>
					<p>{String(props.day)}</p>
				</div>
                <div className={styles.forecast}>s
                Test</div>
			</div>
		</>
	);
}
