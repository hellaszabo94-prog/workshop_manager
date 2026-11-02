import WorkshopCard from "../components/WorkshopCard";
import WorkshopForm from "../components/WorkshopForm";
import { useState } from "react";

function getDateValue(dateString) {
    const date = new Date(dateString);
    return date.getTime();
}

function Workshops(props) {


    const [editingWorkshop, setEditingWorkshop] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("default");


    function handleReset() {
        const wasReset = props.onReset();
        if (wasReset) {
            setEditingWorkshop(null);
        }
    }

    function handleEditWorkshop(workshop) {
        setEditingWorkshop(workshop);
    }
    function handleUpdateWorkshop(updatedWorkshop) {
        props.onUpdate(updatedWorkshop);
        setEditingWorkshop(null);
    }
    function handleCancelEdit() {
        setEditingWorkshop(null);
    }

    const filteredWorkshops = props.workshops.filter((workshop) => {
        const search = searchTerm.toLowerCase();

        return (
            workshop.title.toLowerCase().includes(search) ||
            workshop.location.toLowerCase().includes(search)
        );
    });

    const sortedWorkshops = [...filteredWorkshops].sort((a, b) => {
        if (sortBy === "price-asc") {
            return Number(a.price) - Number(b.price);
        }

        if (sortBy === "price-desc") {
            return Number(b.price) - Number(a.price);
        }

        if (sortBy === "date-asc") {
            return getDateValue(a.date) - getDateValue(b.date);
        }

        if (sortBy === "date-desc") {
            return getDateValue(b.date) - getDateValue(a.date);
        }

        return 0;
    });


    return (


        <main>
            <h1>Workshop Manager</h1>

            <p>Discover creative workshops and find your next experience.</p>

            <button onClick={handleReset}>
                Reset Workshops
            </button>

            <div>
                <label htmlFor="workshop-search">Search Workshops</label>

                <input
                    id="workshop-search"
                    type="text"
                    placeholder="Search by title or location..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>

            <div>
                <label htmlFor="workshop-sort">Sort Workshops</label>

                <select
                    id="workshop-sort"
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                >
                    <option value="default">Default order</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="date-asc">Date: Earliest First</option>
                    <option value="date-desc">Date: Latest First</option>
                </select>
            </div>

            <WorkshopForm
                onAdd={props.onAdd}
                onUpdate={handleUpdateWorkshop}
                editingWorkshop={editingWorkshop}
                onCancelEdit={handleCancelEdit}

            />

            {sortedWorkshops.map((workshop) => (
                <WorkshopCard
                    key={workshop.id}
                    id={workshop.id}
                    title={workshop.title}
                    description={workshop.description}
                    date={workshop.date}
                    location={workshop.location}
                    price={workshop.price}
                    workshop={workshop}
                    onDelete={props.onDelete}
                    onEdit={handleEditWorkshop}
                />
            ))}
            {props.workshops.length === 0 && (
                <p>No workshops available. Add your first workshop!</p>
            )}

            {props.workshops.length > 0 && filteredWorkshops.length === 0 && (
                <p>No workshops match your search.</p>
            )}
        </main>

    );
}


export default Workshops;