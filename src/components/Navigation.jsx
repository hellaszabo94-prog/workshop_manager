import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/workshops">Workshops</Link>
    </nav>
  );
}

export default Navigation;