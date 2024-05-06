import React from "react";
import "../../styles/ourSuccess.css";

const OurSuccess = () => {
  return (
    <div id="OurSuccess">
      <ul className="succededList">
        <li className="succededListItems">
          <span className="successCount">25,000+</span>
          <span>Verified Cars</span>
        </li>
        <li className="succededListItems">
          <span className="successCount">20,000+</span>
          <span>Trusted Hosts</span>
        </li>
        <li className="succededListItems">
          <span className="successCount">2 Billion+</span>
          <span>KMs Driven</span>
        </li>
        <li className="succededListItems">
          <span className="successCount">38+ Cities</span>
          <span>And Counting...</span>
        </li>
        <li className="succededListItems">
          <span className="successCount">20+ Airports</span>
          <span>Live On Zoomcar platform</span>
        </li>
      </ul>
    </div>
  );
};

export default OurSuccess;
