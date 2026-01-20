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

	const fetchData = useCallback(() => {
		setIsLoading(true);
		return fetch(url, {
			...cachedOptions.current,
		})
			.then((res) => res.json())
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

	return [result, isLoading, error, send, updateOptions];
}
