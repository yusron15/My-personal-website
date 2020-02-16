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

import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

import { getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";

import DarkNavbar from "../../components/Navbars/DarkNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";

import "../../assets/css/main.css";
import moment from "moment";

const PLAYLIST_ID = "PLzeWDGNIcxbHeQhDrk-kHvBOrPJJHffen";
const MAX_RESULT = 20;
const API_KEY = "AIzaSyD_yfX0r6bhW5G3Kq2w9LGWym7TEf1M5q0";

const PLAYLIST_PM_MARKET = "PLzeWDGNIcxbFRu8k6ee7nIngLotBGKgx1";
const PLAYLIST_MARKET_UPDATE = "PLzeWDGNIcxbHTHWk69y3gvyg_IkeDA-If";
const PLAYLIST_MORNING_NEWS = "PLzeWDGNIcxbGWpnm0wEHpRkAYIjXh5aAL";
const PLAYLIST_TOPGROWTH_FUTURES = "PLzeWDGNIcxbHeQhDrk-kHvBOrPJJHffen";

const playListids = [
  {
    name: "Market News",
    title: "Pengenalan Topgrowth Futures",
    id: PLAYLIST_PM_MARKET
  },
  {
    name: "Market Update",
    title: "Trading Untuk Pemula",
    id: PLAYLIST_MARKET_UPDATE
  },
  {
    name: "Morning News",
    title: "Platform",
    title: "Platform Topgrowth Trader & ProTrader",
    id: PLAYLIST_MORNING_NEWS
  },
  {
    name: "Topgrowth Futures",
    title: "Webinar",
    id: PLAYLIST_TOPGROWTH_FUTURES
  }
];

const styles = {
  fadeIn: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      loading: true,
      playListids: [
        {
          name: "Pengenalan Topgrowth Futures",
          id: PLAYLIST_PM_MARKET,
          videos: [],
          pageToken: ""
        },
        {
          name: "Trading Untuk Pemula",
          id: PLAYLIST_MARKET_UPDATE,
          videos: [],
          pageToken: ""
        },
        {
          name: "Platform Topgrowth Trader & ProTrader",
          id: PLAYLIST_MORNING_NEWS,
          videos: [],
          pageToken: ""
        },
        {
          name: "Webinar",
          id: PLAYLIST_TOPGROWTH_FUTURES,
          videos: [],
          pageToken: ""
        }
      ],
      selectedVideoId: ""
    };
  }

  async componentDidMount() {
    try {
      await this.setState({
        playListids: this.state.playListids.map((item, index) => {
          item.name = this.props.pageStore.edukasi.video[index].videoButton;
          return item;
        })
      });

      await this.fetchingYoutubeVideos();
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

  componentDidUpdate = async prevProps => {
    if (prevProps.pageStore.edukasi !== this.props.pageStore.edukasi) {
      await this.setState({
        playListids: this.state.playListids.map((item, index) => {
          console.log(
            this.props.pageStore.edukasi.video[index].videoButton,
            "asdasdasdas"
          );
          item.name = this.props.pageStore.edukasi.video[index].videoButton;
          return item;
        })
      });

      await this.fetchingYoutubeVideos();
    }
  };

  fetchingYoutubeVideos = async () => {
    try {
      await this.setState({ loading: true });

      let dataPlaylist = this.state.playListids;
      await Promise.all(
        dataPlaylist.map(async (item, index) => {
          let url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${item.id}&part=snippet%2CcontentDetails&key=${API_KEY}`;
          const response = await fetch(url);
          const json = await response.json();

          item.videos = [...item.videos, ...json["items"]];

          return item;
        })
      );

      console.log(dataPlaylist, "dataPlaylist");
    } catch (error) {
      console.log(error);
    }
  };
  // state = {
  //   dataSelect: "Belajar Forex untuk Pemula"
  // };

  renderContent = () => {
    let youtubeUrl = "https://www.youtube.com/watch?v=";
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
                <div className="title title-header-mobile">
                  {this.props.pageStore.edukasi.Header}
                </div>
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
                      {this.state.playListids.map((item, index) => {
                        return (
                          <NavItem>
                            <div
                              // className={classnames({
                              //   active: this.state.activeTab === "1"
                              // })}
                              onClick={() => {
                                this.toggle(index + 1);
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
                                    this.state.activeTab === index + 1
                                      ? "white"
                                      : "black",
                                  backgroundColor:
                                    this.state.activeTab === index + 1
                                      ? "#063980"
                                      : "transparent"
                                }}
                              >
                                {item.name}
                              </div>
                            </div>
                          </NavItem>
                        );
                      })}{" "}
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent activeTab={this.state.activeTab}>
                      {this.state.playListids.map((item, index) => {
                        return (
                          <>
                            <TabPane tabId={index + 1}>
                              <Row>
                                {item.videos.length > 0 &&
                                  item.videos
                                    .filter((item, index) => index !== 0)
                                    .map((item, index) => {
                                      return (
                                        <Col
                                          md="4"
                                          key={item.contentDetails.videoId}
                                        >
                                          <Card
                                            style={{ backgroundColor: "white" }}
                                          >
                                            <ReactPlayer
                                              key={item.contentDetails.videoId}
                                              url={`${youtubeUrl}${item.contentDetails.videoId}`}
                                              controls={true}
                                              height="200"
                                              width="250"
                                            />
                                            <CardBody
                                              style={{ minHeight: "150px" }}
                                            >
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
                                                  ).format("DD MM YYYY HH:mm") +
                                                    " WIB"}
                                                </small>
                                              </CardText>
                                            </CardBody>
                                          </Card>
                                        </Col>
                                      );
                                    })}
                              </Row>
                            </TabPane>
                          </>
                        );
                      })}
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
                {this.props.pageStore.edukasi.Header}
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
                  <div className={this.state.animate ? "fade" : ""}>
                    <ReactPlayer
                      url={
                        this.state.selectedVideoId !== ""
                          ? `${youtubeUrl}${this.state.selectedVideoId}`
                          : ""
                      }
                      width="100"
                      controls={true}
                      style={{
                        margin: "20px 0 20px 0"
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4" style={{ marginTop: "22px" }}>
                  <Nav tabs vertical pills>
                    {this.state.playListids.map((item, index) => {
                      return (
                        <NavItem>
                          <div
                            // className={classnames({
                            //   active: this.state.activeTab === "1"
                            // })}
                            onClick={() => {
                              this.toggle(index + 1);
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
                                  this.state.activeTab === index + 1
                                    ? "white"
                                    : "black",
                                backgroundColor:
                                  this.state.activeTab === index + 1
                                    ? "#063980"
                                    : "transparent"
                              }}
                            >
                              {item.name}
                            </div>
                          </div>
                        </NavItem>
                      );
                    })}
                  </Nav>
                </Col>
                <Col md="8">
                  <TabContent activeTab={this.state.activeTab}>
                    {this.state.playListids.map((item, index) => {
                      return (
                        <>
                          <TabPane tabId={index + 1}>
                            <Row>
                              {item.videos.length > 0 &&
                                item.videos
                                  .filter((item, index) => index !== 0)
                                  .map((item, index) => {
                                    return (
                                      <Col
                                        md="4"
                                        key={item.contentDetails.videoId}
                                      >
                                        <Card
                                          style={{
                                            backgroundColor:
                                              this.state.selectedVideoId ===
                                              item.contentDetails.videoId
                                                ? "#cccfcc"
                                                : "white"
                                          }}
                                        >
                                          <ReactPlayer
                                            controls={false}
                                            playing={false}
                                            key={item.contentDetails.videoId}
                                            url={`${youtubeUrl}${item.contentDetails.videoId}`}
                                            controls={true}
                                            height="200"
                                            width="250"
                                          />
                                          <div
                                            style={{
                                              backgroundColor: "transparent",
                                              position: "absolute",
                                              height: "100%",
                                              width: "100%"
                                            }}
                                            onClick={async () => {
                                              await this.setState({
                                                selectedVideoId:
                                                  item.contentDetails.videoId,
                                                animate: true
                                              });
                                            }}
                                          ></div>
                                          <CardBody
                                            style={{ minHeight: "150px" }}
                                          >
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
                                                ).format("DD MM YYYY HH:mm") +
                                                  " WIB"}
                                              </small>
                                            </CardText>
                                          </CardBody>
                                        </Card>
                                      </Col>
                                    );
                                  })}
                            </Row>
                          </TabPane>
                        </>
                      );
                    })}
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
    // console.log(
    //   "Edukasiiiiiii",
    //   this.props.pageStore.edukasi.video[0].videoButton
    // );
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  // getContent: (page, lang) => dispatch(getContent(page, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);

// export default Content;
