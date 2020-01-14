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
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          <div
            className="project-raised broken-white"
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            <div
              className="team-1 bg-header background-header"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />

              <div className="title title-header">Video</div>
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
                                  ? "#167AFF"
                                  : "transparent"
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
                                  ? "#167AFF"
                                  : "transparent"
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
                                  ? "#167AFF"
                                  : "transparent"
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
  }
}

export default Blogs;
