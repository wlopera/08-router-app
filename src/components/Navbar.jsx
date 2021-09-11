import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <h2 className="navbar-brand">DB-App</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/men"
              >
                Hombres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/women"
              >
                Mujeres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                className="nav-link"
                aria-current="page"
                to="/search"
              >
                Buscar
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavLink
              activeClassName="active text-white"
              className="nav-link"
              aria-current="page"
              to="/promise"
            >
              Promise-map
            </NavLink>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
