import React from "react";

// reactstrap components
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { isMobile } from "react-device-detect";

import user from "../../assets/img/user-black-icon.png";
import calendar from "../../assets/img/icon-calendar.png";
import "../../assets/css/main.css";

class CardNews extends React.Component {
  renderContent = () => {
    const { title, description, image, person, date } = this.props;
    if (isMobile) {
      return (
        <>
          <div>
            <CardImg
              top
              width="100%"
              height="50%"
              src={image}
              alt="Card image cap"
            />
            <div className=" font-black">
              <CardBody
                // className="broken-white"
                style={{
                  textAlign: "left"
                  // backgroundColor: "#D4D4D4"
                }}
              >
                <h4 style={{ color: "black" }}>{title}</h4>
                <p style={{ color: "black" }}>{description}</p>
                <Container>
                  <Row>
                    <Col>
                      <Row>
                        <img
                          src={user}
                          style={{ height: "20px", width: "auto" }}
                        />
                        <p
                          className="vertical-center font-black"
                          style={{ color: "black", paddingLeft: "30px" }}
                        >
                          {person}
                        </p>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <img
                          src={calendar}
                          style={{ height: "20px", width: "auto" }}
                        />
                        <p
                          className="vertical-center font-black"
                          style={{ color: "black", paddingLeft: "30px" }}
                        >
                          {date}
                        </p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </CardBody>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          <CardImg
            top
            width="100%"
            height="50%"
            src={image}
            alt="Card image cap"
          />
          <div className=" font-black">
            <CardBody
              // className="broken-white"
              style={{
                textAlign: "left"
                // backgroundColor: "#D4D4D4"
              }}
            >
              <h4 style={{ color: "black" }}>{title}</h4>
              <p style={{ color: "black" }}>{description}</p>
              <Container>
                <Row>
                  <Col md="6">
                    <Row>
                      <img
                        src={user}
                        style={{ height: "20px", width: "auto" }}
                      />
                      <p
                        className="vertical-center font-black"
                        style={{ color: "black", paddingLeft: "30px" }}
                      >
                        {person}
                      </p>
                    </Row>
                  </Col>
                  <Col md="6">
                    <Row>
                      <img
                        src={calendar}
                        style={{ height: "20px", width: "auto" }}
                      />
                      <p
                        className="vertical-center font-black"
                        style={{ color: "black", paddingLeft: "30px" }}
                      >
                        {date}
                      </p>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </div>
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default CardNews;
