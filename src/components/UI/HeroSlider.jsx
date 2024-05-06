import React from "react";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  return (
    <div className="slider__item slider__item-01 mt0">
      <Container>
        <div className="slider__content ">
          <h4 className="text-light mb-3">Unlock Exclusive Deals</h4>
          <h1 className="text-light mb-4">
            Explore our wide range of vehicles available for rent at unbeatable
            prices.
          </h1>

          <button className="btn reserve__btn mt-4">
            <Link to="/cars">Browse Vehicles</Link>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSlider;
