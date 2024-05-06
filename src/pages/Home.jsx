import React from "react";

import HeroSlider from "../components/UI/HeroSlider";

import { Container, Row, Col, Button } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import "../styles/suitableCars.css";
import "../styles/homeStylingDiff.css";
import OurSuccess from "../components/UI/OurSuccess";

const Home = () => {
  return (
    <>
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="suitableCar">
          <Container>
            <Row className="content__row lstestModels">
              <Col
                lg="6"
                md="6"
                sm="12"
                className="content__column latest_content_models"
              >
                <div className="feature__section suitable_content">
                  <h2 id="latest_models_heading">Discover the Latest Models</h2>
                  <p>Explore our wide range of cars from top manufacturers.</p>
                  <Button color="primary">Explore</Button>
                </div>
              </Col>

              <Col lg="6" md="6" sm="12" className="content__column">
                <div className="testimonial__section suitable_content_2">
                  <h2>What Our Customers Say</h2>
                  <p>"This is the best car buying experience I've ever had!"</p>
                  <p>"I found my dream car at an unbeatable price!"</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* =========== car offer section ============= */}
      <section id="car_sectoion_reverb">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <div className="section__header">
                <span className="section__subtitle">Exciting Deals Await</span>
                <h1 className="section__title">
                  Unlock Exclusive Offers on Premium cars Only
                </h1>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =========== Succeded section ================ */}
      <OurSuccess />
      {/* =========== about section ================ */}
      <AboutSection />

      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="section__header">
                <h3 className="section__subtitle">Discover Our</h3>
                <h1 className="section__title">Top-Rated Services</h1>
              </div>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
