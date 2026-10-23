import { useParams } from "react-router-dom";

function WorkshopDetails(props) {
    const { id } = useParams();

    const workshop = props.workshops.find(
        (workshop) => workshop.id === Number(id)
    );

    if (!workshop) {
        return (
            <main>
                <h1>Workshop Not Found</h1>
                <p>The requested workshop does not exist.</p>
            </main>
        );
    }

    return (
        <main>
            <h1>{workshop.title}</h1>
            <p>{workshop.description}</p>
            <p>Date: {workshop.date}</p>
            <p>Location: {workshop.location}</p>
            <p>Price: €{workshop.price}</p>
        </main>
    );
}

export default WorkshopDetails;