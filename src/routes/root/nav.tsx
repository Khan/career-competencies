import { NavLink } from "react-router-dom";
import "./root.css";

export const Nav = () => (
  <nav id="footer">
    <ul>
      <li>
        <NavLink
          to="/overview"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/questionnaire"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Questionnaire
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/result"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Result
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);
