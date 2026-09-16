import WorkshopCard from "./components/WorkshopCard";

const workshops = [
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
  return (
    <main>
      <h1>Workshop Manager</h1>

      <p>Discover creative workshops and find your next experience.</p>

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