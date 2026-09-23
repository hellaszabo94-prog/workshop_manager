import WorkshopCard from "./components/WorkshopCard";
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

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  function handleAddWorkshop() {
    const newWorkshop = {
      id: workshops.length + 1,
      title: "Painting Workshop",
      description: "Learn basic painting techniques.",
      date: "20 November 2026",
      location: "Linz",
      price: 35,
    };

    setWorkshops([...workshops, newWorkshop]);
  };

  return (
    <main>
      <h1>Workshop Manager</h1>

      <p>Discover creative workshops and find your next experience.</p>

      <button onClick={handleAddWorkshop}>Add Workshop</button>

      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Workshop title"
      />
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Workshop title"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Workshop description"
      />
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Location"
      />
      <input
        type="number"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Price"
      />

      {workshops.map((workshop) => (
        <WorkshopCard
          key={workshop.id}
          title={workshop.title}
          description={workshop.description}
          date={workshop.date}
          location={workshop.location}
          price={workshop.price} 
        />
      ))}

    </main>
  );
}

export default App;