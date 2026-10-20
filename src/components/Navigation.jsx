import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <h2>Workshop Manager</h2>

      <div className="navigation-links">
        <Link to="/">Home</Link>
        <Link to="/workshops">Workshops</Link>
      </div>
    </nav>
  );
}

export default Navigation;