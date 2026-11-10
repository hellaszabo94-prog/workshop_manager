import { useState } from "react";

export default function ApiWorkshopForm({ onAddWorkshop }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const workshopData = {
      title: title.trim(),
      location: location.trim(),
      price: Number(price),
    };

    if (
      !workshopData.title ||
      !workshopData.location ||
      price.trim() === "" ||
      !Number.isFinite(workshopData.price) ||
      workshopData.price < 0
    ) {
      setError("Please enter valid workshop details.");
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      await onAddWorkshop(workshopData);

      setTitle("");
      setLocation("");
      setPrice("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Workshop</h2>

      <div>
        <label htmlFor="api-title">Title</label>
        <input
          id="api-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="api-location">Location</label>
        <input
          id="api-location"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="api-price">Price (EUR)</label>
        <input
          id="api-price"
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
      </div>

      {error && <p role="alert">{error}</p>}

      <button type="submit" disabled={submitting}>
        {submitting ? "Adding..." : "Add Workshop"}
      </button>
    </form>
  );
}