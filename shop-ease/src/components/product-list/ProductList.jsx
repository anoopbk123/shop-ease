import React from "react";
import './ProductList.css'
import features from "../../data/features.js";
import { Link } from "react-router-dom";

export default function ProductList() {
  return (
    <div className="product-list-container container mt-5 pt-3">
      <h2 className="h2 text-center">Our Products</h2>
      <div className="my-3 d-flex flex-wrap justify-content-evenly">
      {features.map((value) => (
        <div class="card m-2 p-1 product-card d-flex flex-column justify-content-between" style={{ width: "18rem" }}>
        <img src={value.img} class="card-img-top" alt="..." />
        <div class="card-bod">
          <h5 class="card-title">{value.head}</h5>
          <p class="card-text">
            Price: $50
          </p>
        </div>
        <div>
        <Link to="/productdetails" class="btn btn-info">
            view details
          </Link>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
}
