import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Workshops from "./pages/Workshops";
import { useState } from "react";

function App() {
  const [workshops, setWorkshops] = useState([
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
  ]);

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
        />} />
      </Routes>
    </>
  );

}
export default App;