function WorkshopCard(props) {
  return (
    <article>
      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <p>Date: {props.date}</p>
      <p>Location: {props.location}</p>
      <p>Price: €{props.price}</p>


      <button onClick={() => props.onEdit(props.workshop)}>Edit</button>
      
      <button onClick={() => props.onDelete(props.id)}>Delete</button>

    </article>
  );
}

export default WorkshopCard;