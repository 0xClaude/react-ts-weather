import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	SetStateAction,
	useEffect,
	useState,
} from "react";
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

	const { data } = useFetch(
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
		if (input === "" || input === null || input === undefined) {
			props.setLocation("Luxembourg");
		} else {
			props.setLocation(input);
		}
	};

	return (
		<>
			<form className="m-8 flex gap-8 h-8 border-0" onSubmit={updateLocation}>
				<input
					type="text"
					placeholder="Your city"
					onChange={updateInput}
					className="rounded-xl bg-gray-600 h-8 p-4 text-white w-64"
				/>
				<button type="submit" className="bg-sky-400 hover:bg-sky-900 hover:text-white rounded-md h-8 w-32 px-6">
					Search
				</button>
			</form>
		</>
	);
}
