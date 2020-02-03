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
import Select from "react-select";
import classnames from "classnames";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import { isMobile } from "react-device-detect";
import { VideoPlayer } from "react-video-players";
import ReactPlayer from "react-player";
import videos from "../../assets/video/nyc-exchange.mp4";
import bappebti from "../../assets/img/legalitas1.png";
import jfx from "../../assets/img/legalitas2.png";
import icdx from "../../assets/img/legalitas3.png";
import kbi from "../../assets/img/legalitas4.png";
import ich from "../../assets/img/legalitas5.png";
import bg from "../../assets/img/edukasi-header.png";

import { getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

import DarkNavbar from "../../components/Navbars/DarkNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";

import "../../assets/css/main.css";
import moment from "moment";

const PLAYLIST_ID = "PLzeWDGNIcxbFRu8k6ee7nIngLotBGKgx1";
const MAX_RESULT = 20;
const API_KEY = "AIzaSyD_yfX0r6bhW5G3Kq2w9LGWym7TEf1M5q0";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      loading: true,
      pageToken: "",
      videos: []
    };
  }

  async componentDidMount() {
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&part=snippet%2CcontentDetails&key=${API_KEY}`;

    try {
      await this.props.getContent("edukasi", "id");

      await this.setState({ loading: true });
      const response = await fetch(url);
      const json = await response.json();
      let dataVideos = [...this.state.videos, ...json["items"]];
      this.setState({
        pageToken: json.nextPageToken,
        videos: dataVideos
      });
    } catch (error) {
      console.log(error);
    }
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  // state = {
  //   dataSelect: "Belajar Forex untuk Pemula"
  // };

  renderContent = () => {
    let youtubeUrl = "https://www.youtube.com/watch?v=";
    console.log(this.state.videos[0]);
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="projects">
            <div
              className="project-raised broken-white"
              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <div
                className="team-1 bg-header background-header-mobile"
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <SidebarMobile />
                <div className="title title-header-mobile">Edukasi</div>
              </div>

              <div
                className="broken-white"
                style={{
                  // backgroundColor: "#D4D4D4",
                  padding: "0 2% 2% 2%"
                }}
              >
                <ReactPlayer
                  url={videos}
                  controls={true}
                  height="300"
                  width="100%"
                  style={{ margin: "20px 0 20px 0" }}
                />
                <Row>
                  <Col md="4">
                    <Nav tabs vertical pills>
                      <NavItem>
                        <div
                          // className={classnames({
                          //   active: this.state.activeTab === "1"
                          // })}
                          onClick={() => {
                            this.toggle("1");
                          }}
                        >
                          <div
                            style={{
                              fontSize: "1.2rem",
                              paddingLeft: "10px",
                              paddingTop: "25px",
                              fontWeight: "bold",
                              height: "80px",
                              color:
                                this.state.activeTab === "1"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "1"
                                  ? "#063980"
                                  : "transparent"
                            }}
                          >
                            Pengenalan Topgrowth Futures
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
                              fontWeight: "bold",
                              height: "80px",

                              color:
                                this.state.activeTab === "2"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "2"
                                  ? "#063980"
                                  : "transparent"
                            }}
                          >
                            Trading Untuk Pemula
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
                              paddingTop: "15px",
                              fontWeight: "bold",
                              height: "80px",

                              color:
                                this.state.activeTab === "3"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "3"
                                  ? "#063980"
                                  : "transparent"
                            }}
                          >
                            Platform Topgrowth Trader & ProTrader
                          </div>
                        </div>
                      </NavItem>
                      <NavItem>
                        <div
                          onClick={() => {
                            this.toggle("4");
                          }}
                        >
                          <div
                            style={{
                              fontSize: "1.2rem",
                              paddingLeft: "10px",
                              paddingTop: "25px",
                              fontWeight: "bold",
                              height: "80px",

                              color:
                                this.state.activeTab === "4"
                                  ? "white"
                                  : "black",
                              backgroundColor:
                                this.state.activeTab === "4"
                                  ? "#063980"
                                  : "transparent"
                            }}
                          >
                            Webinar
                          </div>
                        </div>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId="1">
                        <Row>
                          <Col md="4">
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

                          <Col md="4">
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

                          <Col md="4">
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
                          <Col md="4">
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

                          <Col md="4">
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
                          <Col md="4">
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

                          <Col md="4">
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

                          <Col md="4">
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
                      <TabPane tabId="4">
                        <Row>
                          <Col md="4">
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

                          <Col md="4">
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
                </Row>
              </div>
            </div>
            {/* ********* END PROJECTS 2 ********* */}
          </div>{" "}
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
              className="team-1 bg-header background-header"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />
              <div className="title title-header">
              Edukasi
                {/* {this.props.pageStore.edukasi.Header} */}
              </div>
            </div>

            <div
              className="broken-white"
              style={{
                // backgroundColor: "#D4D4D4",
                padding: "0 2% 2% 2%"
              }}
            >
              <Row>
                <Col md={12}>
                  <ReactPlayer
                    url={
                      this.state.videos.length > 0
                        ? `${youtubeUrl}${this.state.videos[0].contentDetails.videoId}`
                        : ""
                    }
                    width="100"
                    controls={true}
                    style={{
                      margin: "20px 0 20px 0"
                      // height: "100%",
                      // width: "100%"
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Nav tabs vertical pills>
                    <NavItem>
                      <div
                        // className={classnames({
                        //   active: this.state.activeTab === "1"
                        // })}
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        <div
                          style={{
                            fontSize: "1.2rem",
                            paddingLeft: "10px",
                            paddingTop: "25px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            height: "80px",
                            color:
                              this.state.activeTab === "1" ? "white" : "black",
                            backgroundColor:
                              this.state.activeTab === "1"
                                ? "#063980"
                                : "transparent"
                          }}
                        >
                          Pengenalan Topgrowth Futures
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
                            fontWeight: "bold",
                            height: "80px",
                            cursor: "pointer",
                            color:
                              this.state.activeTab === "2" ? "white" : "black",
                            backgroundColor:
                              this.state.activeTab === "2"
                                ? "#063980"
                                : "transparent"
                          }}
                        >
                          Trading Untuk Pemula
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
                            fontWeight: "bold",
                            height: "80px",
                            cursor: "pointer",
                            color:
                              this.state.activeTab === "3" ? "white" : "black",
                            backgroundColor:
                              this.state.activeTab === "3"
                                ? "#063980"
                                : "transparent"
                          }}
                        >
                          Platform Topgrowth Trader & ProTrader
                        </div>
                      </div>
                    </NavItem>
                    <NavItem>
                      <div
                        onClick={() => {
                          this.toggle("4");
                        }}
                      >
                        <div
                          style={{
                            fontSize: "1.2rem",
                            paddingLeft: "10px",
                            paddingTop: "25px",
                            fontWeight: "bold",
                            height: "80px",
                            cursor: "pointer",
                            color:
                              this.state.activeTab === "4" ? "white" : "black",
                            backgroundColor:
                              this.state.activeTab === "4"
                                ? "#063980"
                                : "transparent"
                          }}
                        >
                          Webinar
                        </div>
                      </div>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="8">
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Row>
                        {this.state.videos.length > 0 &&
                          this.state.videos
                            .filter((item, index) => index !== 0)
                            .map((item, index) => {
                              console.log();
                              return (
                                <Col md="4" key={item.contentDetails.videoId}>
                                  <Card style={{ backgroundColor: "white" }}>
                                    <ReactPlayer
                                      key={item.contentDetails.videoId}
                                      url={`${youtubeUrl}${item.contentDetails.videoId}`}
                                      controls={true}
                                      height="200"
                                      width="250"
                                    />
                                    <CardBody>
                                      <CardTitle
                                        style={{
                                          color: "black",
                                          fontWeight: "bold"
                                        }}
                                      >
                                        {item.snippet.title}
                                      </CardTitle>
                                      <CardText>
                                        <small className="text-muted">
                                          {moment(
                                            item.snippet.publishedAt
                                          ).format("DD MM YYYY HH:mm") + " WIB"}
                                        </small>
                                      </CardText>
                                    </CardBody>
                                  </Card>
                                </Col>
                              );
                            })}
                      </Row>
                    </TabPane>
                    <TabPane tabId="2">
                      <Row>
                        <Col md="4">
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

                        <Col md="4">
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
                        <Col md="4">
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

                        <Col md="4">
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

                        <Col md="4">
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
                    <TabPane tabId="4">
                      <Row>
                        <Col md="4">
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

                        <Col md="4">
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
              </Row>
            </div>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
        </div>{" "}
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (page, lang) => dispatch(getContent(page, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);

// export default Content;