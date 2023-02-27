interface previewProps {
	city: string
}

export default function Preview(props: previewProps) {
	return (
		<>
			<h1 className="text-xl">Weather forecast for {props.city}</h1>
		</>
	);
}
