import { useEffect, useState, useRef, useCallback } from 'react';

export default function useFetch(
	url,
	options = { method: 'GET' },
	deferred = false,
) {
	const [isLoading, setIsLoading] = useState(false);
	const [result, setResult] = useState(undefined);
	const [error, setError] = useState(undefined);
	const [load, setLoad] = useState(!deferred);

	const cachedOptions = useRef(options);

	const updateOptions = useCallback((nextOptions) => {
		cachedOptions.current = {
			...cachedOptions.current,
			...nextOptions,
		};
	}, []);

	const send = useCallback(() => {
		setLoad(true);
	}, []);

	const reset = useCallback(() => {
		setResult(undefined);
		setError(undefined);
		setLoad(false);
	}, []);

	const fetchData = useCallback(() => {
		setIsLoading(true);
		setResult(undefined);
		setError(undefined);
		return fetch(url, {
			...cachedOptions.current,
		})
			.then((res) => {
				if (!res.ok)
					throw new Error(`Request failed with status ${res.status}`);
				return res.json();
			})
			.then((res) => setResult(res))
			.catch((err) => setError(err))
			.finally(() => {
				setIsLoading(false);
				setLoad(false);
			});
	}, [url]);

	useEffect(() => {
		if (load) fetchData();
	}, [load, fetchData]);

	return [result, isLoading, error, send, updateOptions, reset];
}
