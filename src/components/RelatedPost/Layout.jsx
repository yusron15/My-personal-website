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
import { isMobile } from "react-device-detect";

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

const textContentMobile = {
  textAlign: "justify",
  fontStyle: "Helvetica Bold",
  // margin: "0 20px 0 20px",
  // marginLeft: "20px",
  // marginRight: "20px",
  // position: "absolute",
  top: "2%",
  fontSize: "1rem",
  color: "black"
};

class Content extends React.Component {
  renderContent = () => {
    const { image, title, posted, description, link } = this.props;

    if (isMobile) {
      return (
        <>
          <Container>
            <Col>
              <div style={{ marginTop: "20px" }}>
                <div className="card-image">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img alt="..." className="img rounded" src={image} />
                  </a>
                </div>
              </div>
              <div>
                <Col style={textContentMobile}>
                  <div
                    className="title-post font-black"
                    style={{ color: "black", marginTop: "1vh" }}
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
                      to="/stock-index-inside"
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
                </Col>
              </div>
            </Col>
          </Container>
        </>
      );
    }
    return (
      <>
        <Container fluid>
          <Row>
            <Col
              sm={{ size: 10, order: 2, offset: 1 }}
              style={{ marginTop: "50px", cursor: "default" }}
            >
              <Row>
                <Col lg="4">
                  <div className="card-image">
                    <a href={link}>
                      <img
                        alt="..."
                        style={{ cursor: "pointer" }}
                        className="img rounded"
                        src={image}
                      />
                    </a>
                  </div>
                </Col>
                <Col lg="8">
                  <div style={textContent}>
                    <div
                      className="title-post font-black"
                      style={{ color: "black", cursor: "pointer" }}
                    >
                      {title}
                    </div>
                    <div
                      className="text-posted font-black tag-space"
                      style={{ color: "black", cursor: "pointer" }}
                    >
                      {posted}
                    </div>
                    <p className="font-black">
                      {`${description.substring(0, 190)} `}
                      <br />
                      <a
                        href={link}
                        style={{ color: "#dba1f6", cursor: "pointer" }}
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Content;
