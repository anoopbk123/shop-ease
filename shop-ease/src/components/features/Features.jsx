import React from "react";
import "./Features.css";
import features from "../../data/features";

export default function Features() {
  return (
    <>
      <section id="features-container  pt-2 mt-5" className="container my-3">
        <h2 className="h2 text-center">Our Special Features</h2>
        {features.map(feature => (<article className="row m-3 mt-5 feature">
          <img
            className="img-fluid rounded col-12 col-md-6 feature-img align-self-center"
            src={feature.img}
            alt=""
          />
          <div className="col-12 col-md-6 align-self-center">
            <h3 className="text-center mt-2">{feature.head}</h3>
            <p className="feature-description">
              {feature.description}
            </p>
          </div>
        </article>))}
      </section>
    </>
  );
}
