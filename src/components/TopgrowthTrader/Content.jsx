import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem
} from "reactstrap";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { LangContext } from "../MyContext";
import { isMobile } from "react-device-detect";
import ScrollAnimation from "react-animate-on-scroll";
import SidebarMobile from "components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Download from "../../components/Download/Download.jsx";
import bgDownload from "../../assets/img/download-bg.png";

import bg from "../../assets/img/header-trader.png";
import rating from "../../assets/img/rating.png";
import report from "../../assets/img/report.png";
import list from "../../assets/img/list.png";
import submit from "../../assets/img/submit.png";
import demand from "../../assets/img/demand.png";
import sorting from "../../assets/img/sorting.png";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "2.5rem"
};

const textSubtitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "1.5rem",
  textAlign: "justify"
};

const textDesc = {
  //   color: "black",
  fontSize: "1rem",
  textAign: "justify"
};

// core components
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA HONGKONG (HANGSENG))</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

class Content extends React.Component {
  state = {
    activeIndex: 0,
    rating: require("../../assets/img/rating.png"),
    report: require("../../assets/img/report.png"),
    list: require("../../assets/img/list.png"),
    submit: require("../../assets/img/submit.png"),
    demand: require("../../assets/img/demand.png"),
    sorting: require("../../assets/img/sorting.png")
  };

  handleRatingEnter = () => {
    this.setState({
      rating: require("../../assets/img/blue-rating.png")
    });
  };

  handleRatingLeave = () => {
    this.setState({ rating: require("../../assets/img/rating.png") });
  };

  handleReportEnter = () => {
    this.setState({
      report: require("../../assets/img/blue-report.png")
    });
  };

  handleReportLeave = () => {
    this.setState({ report: require("../../assets/img/report.png") });
  };

  handleListEnter = () => {
    this.setState({
      list: require("../../assets/img/blue-list.png")
    });
  };

  handleListLeave = () => {
    this.setState({ list: require("../../assets/img/list.png") });
  };

  handleSubmitEnter = () => {
    this.setState({
      submit: require("../../assets/img/blue-submit.png")
    });
  };

  handleSubmitLeave = () => {
    this.setState({ submit: require("../../assets/img/submit.png") });
  };

  handleDemandEnter = () => {
    this.setState({
      demand: require("../../assets/img/blue-demand.png")
    });
  };

  handleDemandLeave = () => {
    this.setState({ demand: require("../../assets/img/demand.png") });
  };

  handleSortingEnter = () => {
    this.setState({
      sorting: require("../../assets/img/blue-sorting.png")
    });
  };

  handleSortingLeave = () => {
    this.setState({ sorting: require("../../assets/img/sorting.png") });
  };

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="cd-section"
            id="teams"
            style={{ backgroundColor: "#1D1E1F" }}
          >
            {/* ********* TEAM 1 ********* */}
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage:
                  "url(" +
                  this.props.pageStore.topgrowthtrader.image_background_mobile +
                  ")",
                padding: 0,
                backgroundSize: "cover"
              }}
            >
              <SidebarMobile />
              {/* <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} /> */}
              <div className="title title-header-mobile">
                {this.props.pageStore.topgrowthtrader.header}
              </div>
              <Container>
                <div
                  style={{ textAlign: "center" }}
                  className="subheader font-white"
                >
                  {ReactHtmlParser(
                    this.props.pageStore.topgrowthtrader.sub_header
                  )}
                </div>
              </Container>
            </div>
            <div className="team-1 broken-white">
              <Container>
                <Row>
                  <Col md="12">
                    <div
                      className="description font-black"
                      style={{ ...textDesc, textAlign: "justify" }}
                    >
                      {this.props.pageStore.topgrowthtrader.top}
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="team-1" style={{ backgroundColor: "#1D1E1F" }}>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="9">
                  <h3 className="title">
                    {this.props.pageStore.topgrowthtrader.title}
                  </h3>
                </Col>
              </Row>
              <div>
                <Row style={{ marginRight: 0, marginLeft: 0 }}>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <div
                      onMouseEnter={this.handleRatingEnter}
                      onMouseLeave={this.handleRatingLeave}
                      className="text-fitur"
                    >
                      <img
                        style={{
                          height: "50px",
                          width: "auto",
                          marginBottom: "20px",
                          marginTop: "30px"
                        }}
                        src={this.state.rating}
                      />
                      <div style={{ margin: "0 50px 0 50px" }}>
                        {
                          this.props.pageStore.topgrowthtrader.content[0]
                            .content
                        }
                      </div>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <div
                      onMouseEnter={this.handleReportEnter}
                      onMouseLeave={this.handleReportLeave}
                      className="text-fitur"
                    >
                      <img
                        style={{
                          height: "50px",
                          width: "auto",
                          marginBottom: "20px",
                          marginTop: "30px"
                        }}
                        src={this.state.report}
                      />
                      <div style={{ margin: "0 50px 0 50px" }}>
                        {
                          this.props.pageStore.topgrowthtrader.content[1]
                            .content
                        }
                      </div>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <div
                      onMouseEnter={this.handleDemandEnter}
                      onMouseLeave={this.handleDemandLeave}
                      className="text-fitur"
                    >
                      <img
                        style={{
                          height: "50px",
                          width: "auto",
                          marginBottom: "20px",
                          marginTop: "30px"
                        }}
                        src={this.state.demand}
                      />
                      <div style={{ margin: "0 50px 0 50px" }}>
                        {
                          this.props.pageStore.topgrowthtrader.content[2]
                            .content
                        }
                      </div>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <div
                      onMouseEnter={this.handleListEnter}
                      onMouseLeave={this.handleListLeave}
                      className="text-fitur"
                    >
                      <img
                        style={{
                          height: "50px",
                          width: "auto",
                          marginBottom: "20px",
                          marginTop: "30px"
                        }}
                        src={this.state.list}
                      />
                      <div style={{ margin: "0 50px 0 50px" }}>
                        {
                          this.props.pageStore.topgrowthtrader.content[3]
                            .content
                        }
                      </div>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <div
                      onMouseEnter={this.handleSortingEnter}
                      onMouseLeave={this.handleSortingLeave}
                      className="text-fitur"
                    >
                      <img
                        style={{
                          height: "30px",
                          width: "auto",
                          marginBottom: "20px",
                          marginTop: "30px"
                        }}
                        src={this.state.sorting}
                      />
                      <div style={{ margin: "0 50px 0 50px" }}>
                        {
                          this.props.pageStore.topgrowthtrader.content[4]
                            .content
                        }
                      </div>
                    </div>
                  </Col>
                  <Col className="ml-auto mr-auto text-center" md="12">
                    <div
                      onMouseEnter={this.handleSubmitEnter}
                      onMouseLeave={this.handleSubmitLeave}
                      className="text-fitur"
                    >
                      <img
                        style={{
                          height: "50px",
                          width: "auto",
                          marginBottom: "20px",
                          marginTop: "30px"
                        }}
                        src={this.state.submit}
                      />
                      <div style={{ margin: "0 50px 0 50px" }}>
                        {
                          this.props.pageStore.topgrowthtrader.content[5]
                            .content
                        }
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            {/* ********* END TEAM 1 ********* */}
          </div>
          <Download />
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="cd-section"
                id="teams"
                style={{ backgroundColor: "#1D1E1F" }}
              >
                {/* ********* TEAM 1 ********* */}
                <div
                  className="team-1 background-header"
                  style={{
                    backgroundImage:
                      "url(" +
                      this.props.pageStore.topgrowthtrader.image_background +
                      ")",
                    // backgroundImage: `url(${bgDownload})`,
                    padding: 0
                  }}
                >
                  <BlurryNavbar />
                  <ColoredNavbar location={{ ...this.props.location }} />
                  <div className="space-50" />
                  <Download />

                  {/* <div className="title title-header">
                    {ReactHtmlParser(
                      this.props.pageStore.topgrowthtrader.header
                    )}
                  </div>
                  <Container>
                    <div
                      style={{ textAlign: "center" }}
                      className="subheader font-white"
                    >
                      {ReactHtmlParser(
                        this.props.pageStore.topgrowthtrader.sub_header
                      )}
                    </div>
                  </Container> */}
                </div>
                <div className="team-1 broken-white">
                  <Container>
                    <Row>
                      <Col md="12">
                        <div
                          className="description font-black"
                          style={{ ...textDesc, textAlign: "justify" }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.topgrowthtrader.top
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="team-1" style={{ backgroundColor: "#1D1E1F" }}>
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="9">
                      <h1 className="title">
                        {ReactHtmlParser(
                          this.props.pageStore.topgrowthtrader.title
                        )}
                      </h1>
                    </Col>
                  </Row>
                  <div style={{ marginTop: "50px" }}>
                    <Row style={{ marginRight: 0, marginLeft: 0 }}>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <div
                          onMouseEnter={this.handleRatingEnter}
                          onMouseLeave={this.handleRatingLeave}
                          className="text-fitur"
                        >
                          <img
                            style={{ marginBottom: "20px" }}
                            src={this.state.rating}
                          />
                          <div>
                            {ReactHtmlParser(
                              this.props.pageStore.topgrowthtrader.content[0]
                                .content
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <div
                          onMouseEnter={this.handleReportEnter}
                          onMouseLeave={this.handleReportLeave}
                          className="text-fitur"
                        >
                          <img
                            style={{ marginBottom: "20px" }}
                            src={this.state.report}
                          />
                          <div>
                            {ReactHtmlParser(
                              this.props.pageStore.topgrowthtrader.content[1]
                                .content
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <div
                          onMouseEnter={this.handleDemandEnter}
                          onMouseLeave={this.handleDemandLeave}
                          className="text-fitur"
                        >
                          <img
                            style={{ marginBottom: "20px" }}
                            src={this.state.demand}
                          />
                          <div>
                            {ReactHtmlParser(
                              this.props.pageStore.topgrowthtrader.content[2]
                                .content
                            )}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row
                      className="ml-auto mr-auto text-center"
                      md="9"
                      style={{ marginTop: "30px" }}
                    >
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <div
                          onMouseEnter={this.handleListEnter}
                          onMouseLeave={this.handleListLeave}
                          className="text-fitur"
                        >
                          <img
                            style={{ marginBottom: "20px" }}
                            src={this.state.list}
                          />
                          <div>
                            {ReactHtmlParser(
                              this.props.pageStore.topgrowthtrader.content[3]
                                .content
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <div
                          onMouseEnter={this.handleSortingEnter}
                          onMouseLeave={this.handleSortingLeave}
                          className="text-fitur"
                        >
                          <img
                            style={{ marginBottom: "20px" }}
                            src={this.state.sorting}
                          />
                          <div style={{ marginTop: "35px" }}>
                            {ReactHtmlParser(
                              this.props.pageStore.topgrowthtrader.content[4]
                                .content
                            )}
                          </div>
                        </div>
                      </Col>
                      <Col className="ml-auto mr-auto text-center" md="2">
                        <div
                          onMouseEnter={this.handleSubmitEnter}
                          onMouseLeave={this.handleSubmitLeave}
                          className="text-fitur"
                        >
                          <img
                            style={{ marginBottom: "20px" }}
                            src={this.state.submit}
                          />
                          <div>
                            {ReactHtmlParser(
                              this.props.pageStore.topgrowthtrader.content[5]
                                .content
                            )}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                {/* ********* END TEAM 1 ********* */}
              </div>{" "}
            </>
          );
        }}
      </LangContext.Consumer>
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
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
