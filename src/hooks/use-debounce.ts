import { useEffect, useState } from "react";

/**
 * Custom hook that returns a debounced value.
 * @template T - The type of the value.
 * @param {T} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {T | null} - The debounced value.
 */
function useDebounce<T>(value: T, delay: number): T | null {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
