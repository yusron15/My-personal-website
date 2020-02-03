import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  CardText,
  TabPane,
  NavItem,
  TabContent,
  Nav
} from "reactstrap";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ReactPlayer from "react-player";
import videos from "../../assets/video/nyc-exchange.mp4";
import Select from "react-select";
import BreakingNews from "../../components/Landing/BreakingNews";
import NewsLetter from "../NewsLetter/NewsLetter";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/video-header.png";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/Layout";
import NewsTicker from "./NewsTicker";
import fc1 from "../../assets/img/fc1.png";
import fc2 from "../../assets/img/fc2.png";
import fc5 from "../../assets/img/fc5.png";
import fc3 from "../../assets/img/fc3.png";
import fc4 from "../../assets/img/fc4.png";

class HeaderContent extends React.Component {
  render() {
    return (
      <div
        className="team-1"
        style={{
          padding: 0
        }}
      >
        <BlurryNavbar />
        <ColoredNavbar location={{ ...this.props.location }} />
        <div className="title title-header">Video</div>
      </div>
    );
  }
}

class HeaderContentMobile extends React.Component {
  render() {
    return (
      <>
        <div
          className=" background-header-mobile"
          style={{
            padding: 0
          }}
        >
          <SidebarMobile />
          <div className="title title-header-mobile">Video</div>
        </div>
      </>
    );
  }
}

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  componentDidMount = () => {
    window.scroll(0, 0);
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="projects">
            <div
              className="project-raised broken-white"
              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <div
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <HeaderContentMobile />
                <BreakingNews />
              </div>

              <div
                // className="broken-white"
                style={{
                  // backgroundColor: "#D4D4D4",
                  padding: "0 12% 2% 12%"
                }}
              >
                <Col>
                  <Nav>
                    <Col>
                      <NavItem>
                        <div
                          onClick={() => {
                            this.toggle("1");
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              fontSize: "0.8rem",
                              paddingLeft: "10px",
                              paddingTop: "15px",
                              paddingRight: "10px",
                              fontWeight: "bold",
                              height: "50px",
                              color:
                                this.state.activeTab === "1"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "1"
                                  ? "#063980"
                                  : "transparent",
                              opacity: "0.90"
                            }}
                          >
                            Market Updates
                          </div>
                        </div>
                      </NavItem>
                      <NavItem>
                        <div
                          onClick={() => {
                            this.toggle("2");
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              fontSize: "0.8rem",
                              paddingLeft: "10px",
                              paddingTop: "15px",
                              paddingRight: "10px",
                              fontWeight: "bold",
                              height: "50px",

                              color:
                                this.state.activeTab === "2"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "2"
                                  ? "#063980"
                                  : "transparent",
                              opacity: "0.90"
                            }}
                          >
                            Morning News
                          </div>
                        </div>
                      </NavItem>
                      <NavItem>
                        <div
                          onClick={() => {
                            this.toggle("3");
                          }}
                        >
                          <div
                            style={{
                              textAlign: "center",
                              fontSize: "0.8rem",
                              paddingLeft: "10px",
                              paddingTop: "15px",
                              paddingRight: "10px",
                              fontWeight: "bold",
                              height: "50px",

                              color:
                                this.state.activeTab === "3"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "3"
                                  ? "#063980"
                                  : "transparent",
                              opacity: "0.90"
                            }}
                          >
                            PM Market
                          </div>
                        </div>
                      </NavItem>
                    </Col>
                  </Nav>

                  <Col md="12">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
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
                      </TabPane>
                      <TabPane tabId="2">
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
                        </Row>
                      </TabPane>
                      <TabPane tabId="3">
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
                      </TabPane>
                    </TabContent>
                  </Col>
                </Col>
              </div>
            </div>
            {/* ********* END PROJECTS 2 ********* */}
          </div>
          <NewsLetter />
          <Footer />
        </>
      );
    }
    return (
      <>
        <div className="cd-section" id="projects">
          <div
            className="project-raised broken-white"
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            <div
              className="team-1"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <HeaderContent />
              <BreakingNews />
            </div>

            <div
              // className="broken-white"
              style={{
                // backgroundColor: "#D4D4D4",
                padding: "0 12% 2% 12%"
              }}
            >
              <Col>
                <Row md="4">
                  <Nav tabs vertical pills>
                    <Row>
                      <NavItem>
                        <div
                          onClick={() => {
                            this.toggle("1");
                          }}
                        >
                          <div
                            style={{
                              fontSize: "1.2rem",
                              paddingLeft: "10px",
                              paddingTop: "25px",
                              paddingRight: "10px",
                              fontWeight: "bold",
                              height: "80px",
                              color:
                                this.state.activeTab === "1"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "1"
                                  ? "#063980"
                                  : "transparent",
                              opacity: "0.90",
                              cursor: "pointer"
                            }}
                          >
                            Market Updates
                          </div>
                        </div>
                      </NavItem>
                      <NavItem>
                        <div
                          onClick={() => {
                            this.toggle("2");
                          }}
                        >
                          <div
                            style={{
                              fontSize: "1.2rem",
                              paddingLeft: "10px",
                              paddingTop: "25px",
                              paddingRight: "10px",
                              fontWeight: "bold",
                              height: "80px",

                              color:
                                this.state.activeTab === "2"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "2"
                                  ? "#063980"
                                  : "transparent",
                              opacity: "0.90",
                              cursor: "pointer"
                            }}
                          >
                            Morning News
                          </div>
                        </div>
                      </NavItem>
                      <NavItem>
                        <div
                          onClick={() => {
                            this.toggle("3");
                          }}
                        >
                          <div
                            style={{
                              fontSize: "1.2rem",
                              paddingLeft: "10px",
                              paddingTop: "25px",
                              paddingRight: "10px",
                              fontWeight: "bold",
                              height: "80px",

                              color:
                                this.state.activeTab === "3"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "3"
                                  ? "#063980"
                                  : "transparent",
                              opacity: "0.90",
                              cursor: "pointer"
                            }}
                          >
                            PM Market
                          </div>
                        </div>
                      </NavItem>
                    </Row>
                  </Nav>
                </Row>
                <Col md="12">
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
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
                    </TabPane>
                    <TabPane tabId="2">
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
                      </Row>
                    </TabPane>
                    <TabPane tabId="3">
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
                    </TabPane>
                  </TabContent>
                </Col>
              </Col>
            </div>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
        </div>
        <NewsLetter />
        <Footer />
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Blogs;
