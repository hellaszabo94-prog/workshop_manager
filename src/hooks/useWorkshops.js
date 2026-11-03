import { useState, useEffect } from "react";

const initialWorkshops = [
  {
    id: 1,
    title: "Candle Making Workshop",
    description: "Learn how to create your own handmade scented candles.",
    date: "25 October 2026",
    location: "Linz",
    price: 29,
  },
  {
    id: 2,
    title: "Italian Cooking Workshop",
    description: "Learn how to prepare authentic Italian dishes.",
    date: "3 November 2026",
    location: "Vienna",
    price: 49,
  },
  {
    id: 3,
    title: "Pottery Workshop",
    description: "Create your own handmade ceramic piece.",
    date: "12 November 2026",
    location: "Linz",
    price: 39,
  },
];

function useWorkshops() {
  const [workshops, setWorkshops] = useState(() => {
    const savedWorkshops = localStorage.getItem("workshops");

    return savedWorkshops
      ? JSON.parse(savedWorkshops)
      : initialWorkshops;
  });

  useEffect(() => {
    localStorage.setItem("workshops", JSON.stringify(workshops));
  }, [workshops]);

  function handleAddWorkshop(newWorkshop) {
    const workshopWithId = {
      ...newWorkshop,
      id: Date.now(),
    };

    setWorkshops((previousWorkshops) => [
      ...previousWorkshops,
      workshopWithId,
    ]);
  }

  function handleUpdateWorkshop(updatedWorkshop) {
    setWorkshops((previousWorkshops) =>
      previousWorkshops.map((workshop) =>
        workshop.id === updatedWorkshop.id
          ? updatedWorkshop
          : workshop
      )
    );
  }

  function handleDeleteWorkshop(id) {
    setWorkshops((previousWorkshops) =>
      previousWorkshops.filter((workshop) => workshop.id !== id)
    );
  }

  function handleResetWorkshops() {
    const confirmed = window.confirm(
      "Are you sure you want to reset all workshops? This action cannot be undone."
    );

    if (!confirmed) {
      return false;
    }

    setWorkshops([...initialWorkshops]);
    return true;
  }

  return {
    workshops,
    handleAddWorkshop,
    handleUpdateWorkshop,
    handleDeleteWorkshop,
    handleResetWorkshops,
  };
}

export default useWorkshops;