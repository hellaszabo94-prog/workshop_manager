import WorkshopCard from "./components/WorkshopCard";

function App() {
  return (
    <main>
      <h1>Workshop Manager</h1>

      <p>Discover creative workshops and find your next experience.</p>

      <WorkshopCard
        title="Candle Making Workshop"
        description="Learn how to create your own handmade scented candles."
        date="25 October 2026"
        location="Linz"
        price={29}
      />

      <WorkshopCard
        title="Italian Cooking Workshop"
        description="Learn how to prepare authentic Italian dishes."
        date="3 November 2026"
        location="Vienna"
        price={49}
      />
    </main>
  );
}

export default App;