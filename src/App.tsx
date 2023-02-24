import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Preview from "./components/Preview/Preview";
import useFetch from "./components/Hooks/useFetch";

const API = import.meta.env.VITE_API;

function App() {
	const [location, setLocation] = useState<string>("Luxembourg");
	const [lat, setLat] = useState<Number>(0);
	const [lon, setLon] = useState<Number>(0);
	const locationProps = { location, setLocation };

	const { loading, data, error } = useFetch(
		`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API}`
	);

	useEffect(() => {
		if (Array.isArray(data) && data.length > 0) {
			setLat(Number(data[0].lat));
			setLon(Number(data[0].lon));
		}
	}, [data]);
	
	return (
		<div className="App">
			<Header />
			<Location {...locationProps} />
			<Preview city={location} />
			<Card lat={lat} lon={lon} />
		</div>
	);
}

export default App;
