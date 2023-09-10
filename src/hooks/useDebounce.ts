import { useEffect, useState } from "react";

export function useDebounce<T>(delay: number, value: T) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {setDebounce(value)}, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounce;
}