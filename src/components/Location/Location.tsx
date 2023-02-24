import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";
import styles from "./Location.module.css";

interface LocationProps {
	location: string;
	setLocation: Dispatch<SetStateAction<string>>;
}

export default function Location(props: LocationProps) {
	const [input, setInput] = useState<string>("");

	const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
	};

	const updateLocation = (e: FormEvent) => {
		e.preventDefault();
		props.setLocation(input);
	};

	return (
		<>
			<form className={styles.searchbar} onSubmit={updateLocation}>
				<input
					type="text"
					placeholder="Your city"
					onChange={updateInput}
				></input>
			</form>
		</>
	);
}
