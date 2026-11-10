import useWorkshopApi from "../hooks/useWorkshopApi";
import ApiWorkshopForm from "../components/ApiWorkshopForm";

export default function ApiWorkshops() {
  const { workshops, loading, error, addWorkshop } =
    useWorkshopApi();

  if (loading) {
    return <p>Loading workshops...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <h1>Workshops from our API</h1>

      <ApiWorkshopForm onAddWorkshop={addWorkshop} />

      <h2>Workshop List</h2>

      {workshops.length === 0 ? (
        <p>No workshops found.</p>
      ) : (
        <div>
          {workshops.map((workshop) => (
            <article key={workshop.id}>
              <h3>{workshop.title}</h3>
              <p>Location: {workshop.location}</p>
              <p>Price: {workshop.price} EUR</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}