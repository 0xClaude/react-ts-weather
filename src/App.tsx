import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Preview from "./components/Preview/Preview";

const API = import.meta.env.VITE_API;

function App() {
	const [location, setLocation] = useState<string>("Luxembourg");
	const [lat, setLat] = useState<number>(49.6112768);
	const [lon, setLon] = useState<number>(6.129799);

	const locationProps = {
		location,
		setLocation,
		lat,
		setLat,
		lon,
		setLon,
		API,
	};
	const cardProps = { lat, lon, API };

	return (
		<div className="App h-screen">
			<Header />
			<Location {...locationProps} />
			<Preview city={location} />
			<Card {...cardProps} />
		</div>
	);
}

export default App;
