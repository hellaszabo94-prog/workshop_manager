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

  async function addWorkshop(workshopData) {
    const response = await fetch("/api/workshops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workshopData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to add workshop: ${response.status}`
      );
    }

    const newWorkshop = await response.json();

    setWorkshops((previousWorkshops) => [
      ...previousWorkshops,
      newWorkshop,
    ]);

    return newWorkshop;
  }

  return {
    workshops,
    loading,
    error,
    addWorkshop,
  };
}