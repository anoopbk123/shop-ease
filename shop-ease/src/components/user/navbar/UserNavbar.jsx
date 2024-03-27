import React from "react";
import "../../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAuth } from "../../../Redux/slices/userAuth";

export default function UserNavbar() {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.isAuthorizedUser);
  const navigators = [""];
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(updateUserAuth());
  };
  return (
    <header>
      <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand text-light" to="/">
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
                <Link class="nav-link text-dark" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>

              {isAuthorized ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" href="#">
                      Cart
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/userprofile">
                      Profile
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      <button onClick={handleLogout} className="btn btn-danger">
                        Logout
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
