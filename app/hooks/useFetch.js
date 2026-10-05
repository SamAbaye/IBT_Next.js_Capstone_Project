import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const ctrl = new AbortController();
        //setLoading(true);
        //setError(null);

        fetch(url, { signal: ctrl.signal })
        .then((res) => {
            if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then(setData)
        .catch((e) => {
            if (e.name !== "AbortError") setError(e.message);
        })
        .finally(() => setLoading(false));

        return () => ctrl.abort();
    }, [url]);

    return { data, loading, error };
}
