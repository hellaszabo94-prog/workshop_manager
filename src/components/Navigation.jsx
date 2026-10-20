import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <h2>Workshop Manager</h2>

            <div className="navigation-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/workshops">Workshops</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;