import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3 className="navItems">Excercise Tracker</h3>
          </a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className=" nav-link active"
                  aria-current="page"
                  to="/user"
                >
                  <h5 className="navItems">Login</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  <h5 className="navItems">Create Exercises</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <h5 className="navItems"> Exercises</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
