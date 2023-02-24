import { useEffect, useState } from "react";
import axios from "axios";

interface cacheFunction<T> {
	loading: boolean;
	data: T | unknown;
	error: unknown;
}

const cache: { [url: string]: unknown } = {};

export default function useFetch<T>(url: string): cacheFunction<T> {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<unknown>(null);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			if (cache[url]) {
				setData(cache[url] as T);
				setLoading(false);
				return;
			}
			try {
				const axiosData = await axios.get<T>(url);
				cache[url] = axiosData.data;
				setData(axiosData.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [url]);

	return { loading, data, error };
}
