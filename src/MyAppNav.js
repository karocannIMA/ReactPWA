import { NavLink } from "react-router";

export function MyAppNav() {
  return (
    <nav>
        <ul className="app-menu">
            <li>
                <NavLink to="/" end>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" end>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/users" end>
                    Users
                </NavLink>
            </li> 
        </ul>      
    </nav>
  );
}
