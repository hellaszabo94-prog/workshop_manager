import { useEffect, useState } from "react";

export default function useWorkshopApi() {
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWorkshops() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/workshops", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch workshops: ${response.status}`
          );
        }

        const data = await response.json();

        setWorkshops(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchWorkshops();

    return () => {
      controller.abort();
    };
  }, []);

  return { workshops, loading, error };
}
