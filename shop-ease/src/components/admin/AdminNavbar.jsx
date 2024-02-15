import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand text-light" to="#">
            SHOP EASE
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link text-dark" aria-current="page" to="/admin/createproduct">
                  Create Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admin/manageproducts">
                  Manage Products
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Orders
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admin/userlist">
                  Users
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/admin">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
