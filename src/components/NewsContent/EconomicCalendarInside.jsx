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
import { Image } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  CardHeader,
  CardText
} from "reactstrap";
import NewsLetter from "../NewsLetter/NewsLetter";

import canada from "../../assets/img/icon-canada.png";

import "../../assets/css/main.css";

class EconomicCalendarInside extends React.Component {
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
                Economic Calendar Inside
              </h2>
              <div className="section-space" />
            </Col>
          </Row>
          <Container>
            <Card
              style={{
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderColor: "#FFFFFF",
                borderWidth: "0.8px"
              }}
            >
              <CardBody>
                <CardText style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Bank of Canada (BoC) Governor Poloz Speech
                </CardText>
                <CardTitle>
                  <img src={canada} style={{ marginRight: "10px" }} />
                  Canada, CAD
                </CardTitle>
                <hr className="line" />
                <CardText>Sector: Money</CardText>
                <CardText>Source: Bank of Canada</CardText>
                <hr className="line" />
                <CardText style={{ fontSize: "17px" }}>
                  12 Dec 2019 17:30 GMT
                </CardText>
                <CardText>Next release</CardText>
                <hr className="line" />
                <CardText style={{ fontSize: "17px" }}>
                  Bank of Canada's (BoC) Governor Speech has the greatest impact
                  on the national currency among all official speeches. As head
                  of the BoC's Governing Council, the governor can provide clues
                  regarding future monetary policy and BoC interest rate
                  changes.
                </CardText>
              </CardBody>
            </Card>
          </Container>
          <NewsLetter />
        </div>{" "}
      </>
    );
  }
}

export default EconomicCalendarInside;
