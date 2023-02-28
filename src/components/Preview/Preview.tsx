interface previewProps {
	city: string
}

export default function Preview(props: previewProps) {
	return (
		<>
			<h1 className="text-xl mb-}">Weather forecast for {props.city}</h1>
		</>
	);
}
