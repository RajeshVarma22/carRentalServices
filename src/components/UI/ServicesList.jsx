import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__list">
      <div className="service__icon">
        <i className={item.icon} />
      </div>
      <div className="service__info">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  </Col>
);

export default ServicesList;
