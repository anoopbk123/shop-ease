import React from "react";
import { Link } from "react-router-dom";
import footerData from "../../data/footerData";

export default function Footer() {
  return (
    <footer className="footer-container bg-dark text-light pt-3 position-relative">
      {/* || scroll button */}
      <Link
        className="position-absolute end-0 mx-3"
        onClick={() => {
          window.scroll(0, 0);
        }}
      >
        <i className="bi bi-arrow-up"></i>Move to top
      </Link>

      <div className="container">
        <div className="row">
          <h5 className="col-12">SHOP EASE</h5>
        </div>
        <div className="container">
          <div className="row">
            {/* || Customer Support */}
            <div className="col-12 col-md-7 my-3 mt-md-0 text-center">
              <h6 className="h6 text-center">
                <img
                  src={footerData.customerSupport.customerSupportIcon}
                  alt=""
                  className="mx-1"
                />
                 Customer Support
              </h6>
              <ul className="nav flex-column flex-sm-row">
                {footerData.customerSupport.customerSupportNumber.map(
                  (value) => (
                    <li className="nav-item"><i className={`${value.icon}`}>{value.text}</i>
                       <Link className="mx-5 nav-link text-light" to={value.link}>
                         {value.number}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
             {/* || Connect With Us */}
            <div className="col-12 col-md-5 text-center">
              <h6 className="h6 text-center">Connect With Us</h6>
              <div>
                {footerData.connectUs.map((value) => (
                  <a href={value.link} className="mx-2 text-light">
                    <i className={value.icon}></i>
                  </a>
                ))}
              </div>
              <div className="mt-3">
                &copy; 2024 Shop ease, All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
