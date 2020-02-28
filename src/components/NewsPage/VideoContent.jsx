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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
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

import { connect } from "react-redux";

import { getNews, getContent } from "../../redux/ducks/actions";
import moment from "moment";

const API_KEY = "AIzaSyBK9vHQHrRhSXDhj3K3Elo-yLB0EZxoHMc";
const PLAYLIST_PM_MARKET = "PLzeWDGNIcxbFRu8k6ee7nIngLotBGKgx1";
const PLAYLIST_MARKET_UPDATE = "PLzeWDGNIcxbHTHWk69y3gvyg_IkeDA-If";
const PLAYLIST_MORNING_NEWS = "PLzeWDGNIcxbGWpnm0wEHpRkAYIjXh5aAL";

class VideoContent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      loading: false,
      playListids: [
        {
          name: "Morning News",
          id: PLAYLIST_MORNING_NEWS,
          videos: [],
          pageToken: ""
        },
        {
          name: "Market Updates",
          id: PLAYLIST_MARKET_UPDATE,
          videos: [],
          pageToken: ""
        },
        {
          name: "PM Market News",
          id: PLAYLIST_PM_MARKET,
          videos: [],
          pageToken: ""
        }
      ]
    };
  }
  fetchingYoutubeVideos = async (next, indexVideos) => {
    try {
      await this.setState({ loading: true });

      let dataPlaylist = [...this.state.playListids];

      await Promise.all(
        dataPlaylist.map(async (item, index) => {
          let url = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${item.id}&part=snippet%2CcontentDetails&key=${API_KEY}`;

          if (next) {
            if (indexVideos === index) {
              url = `${url}&pageToken=${item.pageToken}`;
              const response = await fetch(url);
              const json = await response.json();
              item.videos = [...item.videos, ...json["items"]];
              item.pageToken = json.nextPageToken;
            }
          } else {
            const response = await fetch(url);
            const json = await response.json();
            item.videos = json.items;
            item.pageToken = json.nextPageToken;
          }

          return item;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    try {
      await this.fetchingYoutubeVideos();
      await this.props.getContent("Berita", this.props.currentLang, true);
      if (this.props.location.state.data) {
        await this.setState({
          activeTab: this.props.location.state.data
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

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
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.Video.image_background_mobile +
                    ")",
                  padding: 0
                }}
              >
                <div
                  className=" background-header-mobile"
                  style={{
                    padding: 0
                  }}
                >
                  <SidebarMobile />
                  <div className="title title-header-mobile">
                    {this.props.pageStore.Video.Header}
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="subheader font-white"
                  >
                    {ReactHtmlParser(this.props.pageStore.Video.subheader)}
                  </div>
                </div>
                <BreakingNews />
              </div>

              <div
                // className="broken-white"
                style={{
                  // backgroundColor: "#D4D4D4",
                  padding: "0 5% 2% 5%"
                }}
              >
                <Col>
                  <Nav>
                    <Col>
                      {this.state.playListids.map((item, index) => {
                        return (
                          <NavItem>
                            <div
                              onClick={() => {
                                this.toggle(index + 1);
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
                                    this.state.activeTab === index + 1
                                      ? "white"
                                      : "black",
                                  backgroundColor:
                                    this.state.activeTab === index + 1
                                      ? "#063980"
                                      : "transparent",
                                  opacity: "0.90"
                                }}
                              >
                                {item.name}
                              </div>
                            </div>
                          </NavItem>
                        );
                      })}
                    </Col>
                  </Nav>

                  <Col md="12">
                    <TabContent activeTab={this.state.activeTab}>
                      {this.state.playListids.map((item, index) => {
                        return (
                          <TabPane tabId={index + 1}>
                            <Row>
                              {item.videos.length > 0 &&
                                item.videos.map((item, index) => {
                                  return (
                                    <Col md="3">
                                      <Card
                                        style={{ backgroundColor: "white" }}
                                      >
                                        <ReactPlayer
                                          playing={false}
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
                                              <small className="text-muted">
                                                {moment(
                                                  item.snippet.publishedAt
                                                ).format("DD MM YYYY HH:mm") +
                                                  " WIB"}
                                              </small>
                                            </small>
                                          </CardText>
                                        </CardBody>
                                      </Card>
                                    </Col>
                                  );
                                })}
                            </Row>
                          </TabPane>
                        );
                      })}
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
                backgroundImage:
                  "url(" + this.props.pageStore.Video.background_image + ")",
                padding: 0,
                backgroundSize: "cover"
              }}
            >
              <div
                className="team-1"
                style={{
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div className="title title-header">
                  {this.props.pageStore.Video.Header}
                </div>
                <div
                  style={{ textAlign: "center", marginBottom: "5%" }}
                  className="subheader font-white"
                >
                  {ReactHtmlParser(this.props.pageStore.Video.subheader)}
                </div>
              </div>
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
                      {this.state.playListids.map((item, index) => {
                        return (
                          <NavItem>
                            <div
                              onClick={() => {
                                this.toggle(index + 1);
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1.2rem",
                                  paddingTop: "25px",
                                  minWidth: "200px",
                                  textAlign: "center",
                                  fontWeight: "bold",
                                  height: "80px",
                                  color:
                                    this.state.activeTab === index + 1
                                      ? "white"
                                      : "black",
                                  backgroundColor:
                                    this.state.activeTab === index + 1
                                      ? "#063980"
                                      : "transparent",
                                  opacity: "0.90",
                                  cursor: "pointer"
                                }}
                              >
                                {item.name}
                              </div>
                            </div>
                          </NavItem>
                        );
                      })}
                    </Row>
                  </Nav>
                </Row>
                <Col md="12">
                  <TabContent activeTab={this.state.activeTab}>
                    {this.state.playListids.map((item, index) => {
                      return (
                        <TabPane tabId={index + 1}>
                          <Row>
                            {item.videos.length > 0 &&
                              item.videos.map((item, index) => {
                                return (
                                  <Col md="3">
                                    <Card style={{ backgroundColor: "white" }}>
                                      <ReactPlayer
                                        controls={false}
                                        playing={false}
                                        key={item.contentDetails.videoId}
                                        url={`${youtubeUrl}${item.contentDetails.videoId}`}
                                        controls={true}
                                        height="200"
                                        width="250"
                                      />
                                      <CardBody style={{ minHeight: "150px" }}>
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
                      );
                    })}
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

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoContent);
