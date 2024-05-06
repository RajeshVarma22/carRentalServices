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
    // <footer className="footer">
    //   <Container>
    //     <Row>
    //       <Col lg="4" md="4" sm="12">
    //         <div className="logo footer__logo">
    //           <h1>
    //             <Link to="/home" className=" d-flex align-items-center gap-2">
    //               <i class="ri-car-line"></i>
    //               <span>
    //                 Rent Car  Service
    //               </span>
    //             </Link>
    //           </h1>
    //         </div>
    //         <p className="footer__logo-content">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
    //           quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
    //           Delectus et ad illo recusandae temporibus?
    //         </p>
    //       </Col>

    //       <Col lg="3" md="4" sm="6">
    //         <div className="mb-4">
    //           <h5 className="footer__link-title">Quick Links</h5>
    //           <ListGroup>
    //             {quickLinks.map((item, index) => (
    //               <ListGroupItem key={index} className="p-0 mt-3 quick__link">
    //                 <Link to={item.path}>{item.display}</Link>
    //               </ListGroupItem>
    //             ))}
    //           </ListGroup>
    //         </div>
    //       </Col>

    //       <Col lg="4" md="4" sm="6">
    //         <div className="mb-4">
    //           <h5 className="footer__link-title mb-4">Head Office</h5>
    //           <p className="office__info">Hebbal, Bengaluru, India</p>
    //           <p className="office__info">Phone: +91 999_999_9999</p>

    //           <p className="office__info">Email: info@rvRentals.com</p>

    //           <p className="office__info">Office Time: 10am - 7pm</p>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </footer>

    <footer className="footer">
  <Container>
    <Row>
      <Col lg="4" md="4" sm="12">
        <div className="footer__section">
          <h2 className="footer__section-title">About Us</h2>
          <p className="footer__section-content">
            We strive to provide the best car rental service to our customers,
            offering a wide range of vehicles and excellent customer support.
          </p>
        </div>
      </Col>

      <Col lg="3" md="4" sm="6">
        <div className="footer__section">
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
        <div className="footer__section">
          <h2 className="footer__section-title">Contact Us</h2>
          <ul className="footer__section-list">
            <li className="footer__section-item">Hebbal, Bengaluru, India</li>
            <li className="footer__section-item">Phone: +123 456 7890</li>
            <li className="footer__section-item">Email: info@rentalservice.com</li>
            <li className="footer__section-item">Mon - Fri: 7am - 8pm</li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
</footer>

  );
};

export default Footer;
