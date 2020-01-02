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
            className="project-raised broken-white"
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            <div
              className="team-1 bg-header background-header"
              style={{
                backgroundImage: `url(${bg})`
              }}
            >
              <div className="title title-header">Edukasi</div>
            </div>

            <div
              className="broken-white"
              style={{
                // backgroundColor: "#D4D4D4",
                padding: "0 12% 2% 12%"
              }}
            >
              <ReactPlayer
                url={videos}
                controls={true}
                height="300"
                width="100%"
                style={{ margin: "20px 0 20px 0" }}
              />
              <div
              // style={{
              //   padding: "0 15% 2% 15%"
              // }}
              >
                <div
                  className="title"
                  style={{
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "bold"
                  }}
                >
                  Belajar Forex untuk Pemula
                </div>

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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
                        <CardTitle
                          style={{ color: "black", fontWeight: "bold" }}
                        >
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
          </div>
          {/* ********* END PROJECTS 2 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
