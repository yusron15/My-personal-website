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
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Card,
  Table
} from "reactstrap";

import "../../assets/css/main.css";
import { Route } from "react-router-dom";

import NewsMarketOutlook from "../NewsContent/NewsMarketOutlook";
import ShowMoreText from "react-show-more-text";
import ReadMoreReact from "read-more-react";
const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "black"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  top: "50%",
  fontSize: "1rem",
  color: "black",
  msTransform: "translateY(-50%)",
  transform: "translateY(-50%)"
};

class Content extends React.Component {
  render() {
    const { image, title, posted, description } = this.props;
    return (
      <>
        <Container fluid>
          <Row>
            <Col
              sm={{ size: 10, order: 2, offset: 1 }}
              style={{ marginTop: "50px" }}
            >
              <Row>
                <Col lg="4">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img alt="..." className="img rounded" src={image} />
                    </a>
                  </div>
                </Col>
                <Col lg="8">
                  <div style={textContent}>
                    <div
                      className="title-post font-black"
                      style={{ color: "black" }}
                    >
                      {title}
                    </div>
                    <div
                      className="text-posted font-black tag-space"
                      style={{ color: "black" }}
                    >
                      {posted}
                    </div>
                    <p className="font-black">
                      {`${description.substring(0, 190)} `}
                      <br />
                      <Link
                        // to={`/newspage/${title}`}
                        to="/forexcommodityinside"
                        state={{
                          data: {
                            title,
                            posted,
                            description
                          }
                        }}
                      >
                        Read More
                      </Link>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Content;
