import React, { useEffect, useState } from "react";
import features from "../../data/features";
import { useParams } from "react-router-dom";
import icons from '../../data/icons'

export default function ProductDetails() {
  // const [product, setProduct] = useState(null)
  // const productId = useParams(pid)
  // useEffect(() => {
  //   const productDetails = await axioms.get()
  // })
  const product = features[0];
  return (
    <div className="container mt-5 pt-3">
      <div className="container border border-dark rounded product-details my-2 mb-3 p-3">
        <div className="row gap-1">
          <div className="col-12 col-md-5 align-self-center">
            <img src={product.img} className="img img-fluid rounded" alt="" />
          </div>
          <div className="col-12 col-md-6 align-self-center">
            <h3 className="h3">{product.head}</h3>
            <p className="fw-bold">Price: $ 50</p>
            <p>Available Stock: 30</p>
            <p className="text-align-justify">{product.description.slice(0,300)}</p>
            <button type="submit" className="btn btn-warning">
              Add to cart <i className={icons.cart}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
