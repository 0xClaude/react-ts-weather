import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import styles from "./Location.module.css";
import useFetch from "../../Hooks/useFetch";

interface LocationProps {
	location: string;
	setLocation: Dispatch<SetStateAction<string>>;
	lat: number;
	setLat: Dispatch<SetStateAction<number>>;
	lon: number;
	setLon: Dispatch<SetStateAction<number>>;
	API: string;
}

export default function Location(props: LocationProps) {
	const [input, setInput] = useState<string>("");

	const { loading, data, error } = useFetch(
		`https://api.openweathermap.org/geo/1.0/direct?q=${props.location}&appid=${props.API}`
	);

	useEffect(() => {
		if (Array.isArray(data) && data.length > 0) {
			props.setLat(Number(data[0].lat));
			props.setLon(Number(data[0].lon));
		}
	}, [data]);

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
