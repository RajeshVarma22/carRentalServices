import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="footer__section">
              <h2 className="footer__section-title">About Us</h2>
              <p className="footer__section-content">
                We strive to provide the best car rental service to our
                customers, offering a wide range of vehicles and excellent
                customer support.
              </p>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="footer__section ft_sec_mid">
              <h2 className="footer__section-title">Explore</h2>
              <ul className="footer__section-list">
                {quickLinks.map((item, index) => (
                  <li key={index} className="footer__section-item">
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="footer__section ft_sec_mid">
              <div>
                <h2 className="footer__section-title lft-1">Contact Us</h2>
                <ul className="footer__section-list">
                  <li className="footer__section-item">
                    Hebbal, Bengaluru, India
                  </li>
                  <li className="footer__section-item">Phone: +123 456 7890</li>
                  <li className="footer__section-item">
                    Email: info@rentalservice.com
                  </li>
                  <li className="footer__section-item">Mon - Fri: 7am - 8pm</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
