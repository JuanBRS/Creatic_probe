// @ts-ignore
import { NavLink } from "react-router-dom";
import "./navbar.scss";
export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink
          activeClassName="active"
          className="navbar__container__item"
          exact
          to="/home"
        >
          Inicio
        </NavLink>

        <NavLink
          activeClassName="active"
          className="navbar__container__item"
          exact
          to="/about"
        >
          Quienes Somos
        </NavLink>

        <NavLink
          activeClassName="active"
          className="navbar__container__item"
          exact
          to="/contact"
        >
          Contacto
        </NavLink>

        <NavLink
          activeClassName="active"
          className="navbar__container__item"
          exact
          to="/register"
        >
          Registrate
        </NavLink>
      </div>
    </nav>
  );
};
