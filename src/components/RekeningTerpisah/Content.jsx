import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";
import { LangContext } from "../MyContext";

import ScrollAnimation from "react-animate-on-scroll";
import check from "../../assets/img/Check.png";
import dollar from "../../assets/img/header-rekening.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
class Content extends React.Component {
  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="projects">
                <div
                  // className="projects-3"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/dollar.png") + ")",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(52, 52, 52, 0.8)",
                    minHeight: "80vh"
                  }}
                >
                  <div
                    className="team-1 background-header"
                    style={{
                      backgroundImage: `url(${dollar})`,
                      padding: 0
                    }}
                  >
                    <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} />
                    <div className="title title-header">
                      {lang.rekeningterpisah.header}
                    </div>
                  </div>
                  <div
                    className="team-1 broken-white"
                    style={{ height: "70vh", padding: 0 }}
                  >
                    <Col>
                      <Row style={{ marginLeft: "10%" }}>
                        <Col md="8">
                          <h1
                            className="title"
                            style={{
                              fontStyle: "Helvetica Bold",
                              // fontSize: "2.5rem",
                              fontWeight: "bold",
                              color: "black"
                            }}
                          >
                            {lang.rekeningterpisah.content.title}
                          </h1>
                          <p
                            className="font-black"
                            style={{ lineHeight: "25px" }}
                          >
                            {lang.rekeningterpisah.content.content}
                            <br />

                            {lang.rekeningterpisah.content.subContent[0]}
                          </p>
                        </Col>
                      </Row>
                      <Row style={{ marginLeft: "10%" }}>
                        <Col md="4">
                          <Row>
                            <Col md="2">
                              <img src={check} />
                            </Col>
                            <Col>
                              <p
                                className="font-black"
                                style={{ lineHeight: "25px" }}
                              >
                                {lang.rekeningterpisah.content.subContent[1]}
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md="4">
                          <Row>
                            <Col md="2">
                              <img src={check} />
                            </Col>
                            <Col>
                              <p
                                className="font-black"
                                style={{ lineHeight: "25px" }}
                              >
                                {lang.rekeningterpisah.content.subContent[2]}
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </div>
              </div>{" "}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default Content;
