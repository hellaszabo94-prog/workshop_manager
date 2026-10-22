import WorkshopCard from "../components/WorkshopCard";
import WorkshopForm from "../components/WorkshopForm";
import { useState } from "react";

function Workshops(props) {


    const [editingWorkshop, setEditingWorkshop] = useState(null);



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

   


    return (


        <main>
            <h1>Workshop Manager</h1>

            <p>Discover creative workshops and find your next experience.</p>

            <WorkshopForm
                onAdd={props.onAdd}
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
                    onDelete={props.onDelete}
                    onEdit={handleEditWorkshop}
                />
            ))}

        </main>

    );
}


export default Workshops;