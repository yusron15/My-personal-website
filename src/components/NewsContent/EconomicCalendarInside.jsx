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
const font = {
  color: "black"
};

class EconomicCalendarInside extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section broken-white"
          id="features"
          // style={{ backgroundColor: "#D4D4D4" }}
        >
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2
                className="title mb-4 font-black"
                style={{ paddingTop: "50px" }}
              >
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
                borderColor: "black",
                borderWidth: "0.8px",
                marginBottom: "50px"
              }}
            >
              <CardBody>
                <CardText
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "black"
                  }}
                >
                  Bank of Canada (BoC) Governor Poloz Speech
                </CardText>
                <CardTitle style={font}>
                  <img src={canada} style={{ marginRight: "10px" }} />
                  Canada, CAD
                </CardTitle>
                <hr className="line" />
                <CardText style={font}>Sector: Money</CardText>
                <CardText style={font}>Source: Bank of Canada</CardText>
                <hr className="line" />
                <CardText style={{ fontSize: "17px", color: "black" }}>
                  12 Dec 2019 17:30 GMT
                </CardText>
                <CardText style={font}>Next release</CardText>
                <hr className="line" />
                <CardText style={{ fontSize: "17px", color: "black" }}>
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
