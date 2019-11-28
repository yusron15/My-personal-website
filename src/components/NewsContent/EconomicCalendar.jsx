/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import NewsLetter from "../NewsLetter/NewsLetter";

import "../../assets/css/main.css";

class EconomicCalendar extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section"
          id="features"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title mb-4" style={{ paddingTop: "50px" }}>
                Economic Calendar
              </h2>
              <div className="section-space" />
            </Col>
          </Row>
          <NewsLetter />
        </div>{" "}
      </>
    );
  }
}

export default EconomicCalendar;
