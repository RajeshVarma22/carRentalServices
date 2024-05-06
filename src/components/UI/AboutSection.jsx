import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/Audi s5 sportback.webp";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "10px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <div className="about__section-text">
                <h1 className="section__title">Discover Our Story</h1>
                <p className="section__description">
                  We welcome you to Car Rent Service, where every journey begins
                  with comfort, reliability, and affordability. Our commitment
                  is to provide exceptional car rental experiences tailored to
                  your needs.
                </p>
              </div>
              <div className="about__section-features">
                <div className="about__section-item">
                  <i className="ri-checkbox-circle-line"></i>
                  <p className="section__description">
                    Convenient booking process
                  </p>
                </div>
                <div className="about__section-item">
                  <i className="ri-checkbox-circle-line"></i>
                  <p className="section__description">
                    Wide selection of vehicles
                  </p>
                </div>
                <div className="about__section-item">
                  <i className="ri-checkbox-circle-line"></i>
                  <p className="section__description">
                    Exceptional customer service
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
