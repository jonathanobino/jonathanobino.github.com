import { useEffect, useState, useRef, useCallback } from 'react';

export default function useFetch(
  url,
  options = { method: 'GET' },
  deferred = false
) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [load, setLoad] = useState(!deferred);

  let cachedOptions = useRef(options);

  const updateOptions = useCallback(function (nextOptions) {
    cachedOptions.current = {
      ...cachedOptions.current,
      ...nextOptions,
    };
  }, [])

  const send = useCallback(function () {
    setLoad(true);
  }, []);

  const fetchData = useCallback(function () {
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
  }, []);

  useEffect(() => {
    if (load) fetchData();
  }, [load]);

  return [result, isLoading, error, send, updateOptions];
}
