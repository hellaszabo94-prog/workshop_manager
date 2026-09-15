function WorkshopCard(props) {
  return (
    <article>
      <h2>{props.title}</h2>

      <p>{props.description}</p>

      <p>Date: {props.date}</p>
      <p>Location: {props.location}</p>
      <p>Price: €{props.price}</p>

      <button>View Details</button>
    </article>
  );
}

export default WorkshopCard;