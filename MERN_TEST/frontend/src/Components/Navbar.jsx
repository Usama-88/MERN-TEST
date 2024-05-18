import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white  ">
      <div
        className="container-fluid py-4 px-5"
        style={{ boxShadow: "0px 3px 15px #6B6B6B1A" }}
      >
        <h1 style={{ fontSize: "1.8rem", fontWeight: "700" }}>CUSTOMERS</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
