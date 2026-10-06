
import { useState } from "react";

function WorkshopForm(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
    event.preventDefault();

        if (title.trim() === "" || location.trim() === "") {
            setError("Please enter a title and location.");
            return;
        }

        const newWorkshop = {
            id: workshops.length + 1,
            title: title,
            description: description,
            date: date,
            location: location,
            price: Number(price),
        };

        props.onAdd(newWorkshop);

        setTitle("");
        setDescription("");
        setDate("");
        setLocation("");
        setPrice("");
        setError("");
    }
    return (<form onSubmit={handleSubmit}>
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

            {error && <p>{error}</p>}

            <button type="submit">Add Workshop</button>
        </form>
        );
}

export default WorkshopForm;
  