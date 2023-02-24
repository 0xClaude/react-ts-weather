import styles from "./Preview.module.css";

interface previewProps {
	city: string
}

export default function Preview(props: previewProps) {
	return (
		<>
			<h1 className={styles.title}>Weather forecast for {props.city}</h1>
		</>
	);
}
