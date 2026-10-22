import WorkshopCard from "../components/WorkshopCard";
import WorkshopForm from "../components/WorkshopForm";
import { useState } from "react";

function Workshops(props) {


    const [editingWorkshop, setEditingWorkshop] = useState(null);



    function handleAddWorkshop(newWorkshop) {
        const workshopWithId = {
            ...newWorkshop,
            id: Date.now(),
        };

        setWorkshops([...workshops, workshopWithId]);
    };

    function handleEditWorkshop(workshop) {
        setEditingWorkshop(workshop);
    }

    function handleUpdateWorkshop(updatedWorkshop) {
        const updatedWorkshops = workshops.map((workshop) =>
            workshop.id === updatedWorkshop.id
                ? updatedWorkshop
                : workshop
        );

        setWorkshops(updatedWorkshops);
        setEditingWorkshop(null);
    }
    function handleCancelEdit() {
        setEditingWorkshop(null);
    }

    function handleDeleteWorkshop(id) {
        const updatedWorkshops = workshops.filter(
            (workshop) => workshop.id !== id
        );

        setWorkshops(updatedWorkshops);


    }


    return (


        <main>
            <h1>Workshop Manager</h1>

            <p>Discover creative workshops and find your next experience.</p>

            <WorkshopForm
                onAdd={handleAddWorkshop}
                onUpdate={handleUpdateWorkshop}
                editingWorkshop={editingWorkshop}
                onCancelEdit={handleCancelEdit}
            />

            {props.workshops.map((workshop) => (
                <WorkshopCard
                    key={workshop.id}
                    id={workshop.id}
                    title={workshop.title}
                    description={workshop.description}
                    date={workshop.date}
                    location={workshop.location}
                    price={workshop.price}
                    workshop={workshop}
                    onDelete={handleDeleteWorkshop}
                    onEdit={handleEditWorkshop}
                />
            ))}

        </main>

    );
}


export default Workshops;