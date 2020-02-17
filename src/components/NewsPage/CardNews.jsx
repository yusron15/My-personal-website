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
    const { title, description, image, person, date, link } = this.props;

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
        <a href={link}>
          <div
            style={{ display: "flex", height: "100%", flexDirection: "column" }}
          >
            <CardImg
              top
              width="100%"
              style={{ height: 180 }}
              src={image}
              alt="Card image cap"
            />
            <div className="textnews" style={{ height: "100%" }}>
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}
              >
                <h4
                  className="textnews"
                  style={{ flexGrow: 1, display: "flex" }}
                >
                  {title}
                </h4>
                <p
                  className="textnews"
                  style={{ flexGrow: 1, display: "flex" }}
                >
                  {description}
                </p>
                <div style={{ display: "flex", marginTop: 15 }}>
                  {/* <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row"
                  }}
                >
                  <img src={user} style={{ height: "20px", width: "auto" }} />
                  <p
                    className="font-black"
                    style={{ color: "black", paddingLeft: "10px" }}
                  >
                    {person}
                  </p>
                </div> */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "flex-end"
                    }}
                  >
                    <img
                      src={calendar}
                      style={{ height: "20px", width: "auto" }}
                    />
                    <p
                      className="font-black"
                      style={{ color: "black", paddingLeft: "10px" }}
                    >
                      {date}
                    </p>
                  </div>
                </div>
              </CardBody>
            </div>
          </div>
        </a>
      </>
    );
  };
  render() {
    return this.renderContent();
  }
}

export default CardNews;
