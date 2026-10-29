import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Workshops from "./pages/Workshops";
import WorkshopDetails from "./pages/WorkshopDetails";
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

function App() {
  const [workshops, setWorkshops] = useState(() => {
    const savedWorkshops = localStorage.getItem("workshops");

    return savedWorkshops
      ? JSON.parse(savedWorkshops)
      : initialWorkshops;
  });

  useEffect(() => {
    localStorage.setItem(
      "workshops",
      JSON.stringify(workshops)
    );
  }, [workshops]);

  function handleAddWorkshop(newWorkshop) {
    const workshopWithId = {
      ...newWorkshop,
      id: Date.now(),
    };

    setWorkshops([...workshops, workshopWithId]);
  }

  function handleUpdateWorkshop(updatedWorkshop) {
    const updatedWorkshops = workshops.map((workshop) =>
      workshop.id === updatedWorkshop.id
        ? updatedWorkshop
        : workshop
    );

    setWorkshops(updatedWorkshops);
  }

  function handleDeleteWorkshop(id) {
    const updatedWorkshops = workshops.filter(
      (workshop) => workshop.id !== id
    );

    setWorkshops(updatedWorkshops);
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

  return (

    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/workshops" element={<Workshops
          workshops={workshops}
          onAdd={handleAddWorkshop}
          onUpdate={handleUpdateWorkshop}
          onDelete={handleDeleteWorkshop}
          onReset={handleResetWorkshops}
        />} />
        <Route
          path="/workshops/:id"
          element={<WorkshopDetails workshops={workshops} />}
        />
      </Routes>
    </>
  );

}
export default App;