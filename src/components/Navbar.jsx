import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../context/cartContext";

const Navbar = () => {
  const { cartCount } = useContext(cartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/009/291/628/non_2x/restaurant-logo-design-vector.jpg"
            alt="Restaurant Logo"
            width="40"
            height="40"
            className="rounded-circle me-2"
          />
          <span className="fw-bold">Healthy Kitchen</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ marginLeft: 430 }}>
            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " active" : "")
                }
              >
                Menu
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Cart icon */}
        <div className="px-3 py-1 position-relative">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              "nav-link position-relative" + (isActive ? " active" : "")
            }
          >
            <i className="bi bi-cart3 text-danger" style={{ fontSize: 25 }}></i>
            <span
              className="bg-danger text-white text-center position-absolute"
              style={{
                borderRadius: 10,
                top: 0,
                right: -15,
                width: 22,
                fontSize: 12,
              }}
            >
              {cartCount}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
