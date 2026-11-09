import useWorkshopApi from "../hooks/useWorkshopApi";

export default function ApiWorkshops() {
  const { workshops, loading, error } = useWorkshopApi();

  if (loading) {
    return <p>Loading workshops...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      <h1>Workshops from our API</h1>

      {workshops.length === 0 ? (
        <p>No workshops found.</p>
      ) : (
        <div>
          {workshops.map((workshop) => (
            <article key={workshop.id}>
              <h2>{workshop.title}</h2>
              <p>Location: {workshop.location}</p>
              <p>Price: {workshop.price} EUR</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}