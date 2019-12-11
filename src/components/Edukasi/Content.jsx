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

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { VideoPlayer } from "react-video-players";
import ReactPlayer from "react-player";
import videos from "../../assets/video/nyc-exchange.mp4";
import bappebti from "../../assets/img/legalitas1.png";
import jfx from "../../assets/img/legalitas2.png";
import icdx from "../../assets/img/legalitas3.png";
import kbi from "../../assets/img/legalitas4.png";
import ich from "../../assets/img/legalitas5.png";
import bg from "../../assets/img/bg-edukasi.png";

import DarkNavbar from "../../components/Navbars/DarkNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";

import "../../assets/css/main.css";

class Content extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          <BlurryNavbar />
          <div
            className="project-raised"
            style={{ backgroundColor: "#D4D4D4" }}
          >
            <div className="space-50" />
            <div
              className="team-1"
              style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
            >
              <div
                className="title"
                style={{
                  textAlign: "center",
                  fontStyle: "Helvetica Bold",
                  fontSize: "2rem"
                }}
              >
                Edukasi
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#D4D4D4",
                padding: "0 15% 2% 15%"
              }}
            >
              <div
                className="title"
                style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}
              >
                {" "}
                Belajar Forex untuk Pemula
              </div>
              <ReactPlayer
                url={videos}
                controls={true}
                height="500"
                width="550"
              />
              <Row>
                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      playIcon
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      controls={true}
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      controls={true}
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      controls={true}
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      controls={true}
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      controls={true}
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      controls={true}
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>

                <Col md="3">
                  <Card style={{ backgroundColor: "white" }}>
                    <ReactPlayer
                      url={videos}
                      controls={true}
                      height="200"
                      width="250"
                    />
                    <CardBody>
                      <CardTitle style={{ color: "black", fontWeight: "bold" }}>
                        Course 1: Pengenalan Trading
                      </CardTitle>
                      <CardText>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
