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
  CarouselIndicators,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  CarouselControl,
  Carousel,
  CarouselItem
} from "reactstrap";
import { LangContext } from "../MyContext";
import ScrollAnimation from "react-animate-on-scroll";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import SidebarMobile from "components/Navbars/SidebarMobile";
import bg1 from "../../assets/img/indexfutures1.png";
import bg from "../../assets/img/header-indexfutures2.png";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";
import { isMobile } from "react-device-detect";

import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1.7rem"
};

const textSubtitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1rem"
};

const textDesc = {
  color: "white",
  fontSize: "1rem"
};

// core components
const items = [
  {
    // </div>
    content: (
      // <div
      //   className="team-1"
      //   style={{
      //     backgroundImage: "url(" + require("assets/img/coin.png") + ")",
      //     backgroundSize: "cover"
      //   }}
      // >
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <Row>
              <Col md="11" className="offset-md-1">
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.66)"
                  }}
                >
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          <b>{lang.indexfutures.slide[0].title}</b>
                        </div>
                        <div style={textSubtitle}>
                          <b>{lang.indexfutures.slide[0].subtitle}</b>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {lang.indexfutures.slide[0].content}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                </div>
              </Col>
            </Row>
          );
        }}
      </LangContext.Consumer>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    // </div>
    content: (
      // <div
      //   className="team-1"
      //   style={{
      //     backgroundImage: "url(" + require("assets/img/business.png") + ")",
      //     backgroundSize: "cover"
      //   }}
      // >
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <Row>
              <Col md="11" className="offset-md-1">
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.66)"
                  }}
                >
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          <b>{lang.indexfutures.slide[1].title}</b>
                        </div>
                        <div style={textSubtitle}>
                          <b>{lang.indexfutures.slide[1].subtitle}</b>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {lang.indexfutures.slide[1].content}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                </div>
              </Col>
            </Row>
          );
        }}
      </LangContext.Consumer>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    // </div>
    content: (
      // <div
      //   className="team-1"
      //   style={{
      //     backgroundImage: "url(" + require("assets/img/social.png") + ")",
      //     backgroundSize: "cover"
      //   }}
      // >
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <Row>
              <Col md="11" className="offset-md-1">
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.66)"
                  }}
                >
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          <b>{lang.indexfutures.slide[2].title}</b>
                        </div>
                        <div style={textSubtitle}>
                          <b>{lang.indexfutures.slide[2].subtitle}</b>
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {lang.indexfutures.slide[2].content}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                </div>
              </Col>
            </Row>
          );
        }}
      </LangContext.Consumer>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

const font = {
  //   color: "black",
  textAlign: "left"
};

class Content extends React.Component {
  state = {
    activeIndex: 0
  };

  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

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
            className="team-1 background-header-mobile"
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0
            }}
          >
            <SidebarMobile />

            {/* <BlurryNavbar />
            <ColoredNavbar location={{ ...this.props.location }} /> */}
            <div className="title title-header-mobile">
              {this.props.pageStore.indexfutures.header}
            </div>
          </div>
          <div className="cd-section broken-white" id="teams">
            <div className="team-1">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="12">
                    <p
                      className="description font-black"
                      style={{ textAlign: "justify" }}
                    >
                      {this.props.pageStore.indexfutures.content}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <div
                className="team-1"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/coin.png") + ")",
                  backgroundSize: "cover"
                }}
              >
                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
                  <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={this.state.activeIndex}
                      onClickHandler={this.goToIndex}
                    />
                    {items.map((item, key) => {
                      return (
                        <CarouselItem
                          onExiting={this.onExiting}
                          onExited={this.onExited}
                          key={key}
                        >
                          {item.content}
                        </CarouselItem>
                      );
                    })}
                  </Carousel>
                </ScrollAnimation>
              </div>
            </div>
          </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="team-1 background-header"
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div className="title title-header">
                  {this.props.pageStore.indexfutures.header}
                </div>
              </div>
              <div
                className="cd-section broken-white"
                id="teams"
                // style={{ backgroundColor: "#D4D4D4" }}
              >
                <div className="team-1">
                  <Container>
                    <Row>
                      <Col className="ml-auto mr-auto" md="12">
                        {/* <h1 className="title" style={font}>
                    INDEX FUTURES
                  </h1> */}
                        <p className="description font-black">
                          {this.props.pageStore.indexfutures.content}
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div>
                  <div
                    className="team-1"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/coin.png") + ")",
                      backgroundSize: "cover"
                    }}
                  >
                    <ScrollAnimation
                      animateIn="fadeInRight"
                      animateOut="fadeOut"
                    >
                      <Carousel
                        activeIndex={this.state.activeIndex}
                        next={this.next}
                        previous={this.previous}
                      >
                        <CarouselIndicators
                          items={items}
                          activeIndex={this.state.activeIndex}
                          onClickHandler={this.goToIndex}
                        />
                        {items.map((item, key) => {
                          return (
                            <CarouselItem
                              onExiting={this.onExiting}
                              onExited={this.onExited}
                              key={key}
                            >
                              {item.content}
                            </CarouselItem>
                          );
                        })}

                        {/* <Col
                sm="12"
                //  md={{ size: 6, offset: 10 }}
              > */}
                        <div
                          style={{
                            position: "absolute",
                            left: "80%",
                            top: "450px"
                          }}
                        >
                          {/* <Button
                            className="btn-round btn-icon btn-simple slick-prev slick-arrow"
                            data-slide="prev"
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault();
                              this.previous();
                            }}
                          >

                            <img src={prevButton} />
                          </Button> */}

                          {/* <img
                            className="slick-prev slick-arrow"
                            data-slide="prev"
                            src={prevButton}
                            onClick={e => {
                              e.preventDefault();
                              this.previous();
                            }}
                            style={{ height: "30px", width: "auto" }}
                          />
                          <img
                            className="slick-arrow"
                            src={nextButton}
                            onClick={e => {
                              e.preventDefault();
                              this.next();
                            }}
                            style={{ height: "30px", width: "auto" }}
                          /> */}

                          {/* <Button
                            className="btn-round btn-icon btn-simple slick-arrow"
                            data-slide="next"
                            href="#pablo"
                            onClick={e => {
                              e.preventDefault();
                              this.next();
                            }}
                            role="button"
                          >

                            <img src={nextButton} />
                          </Button>  */}
                        </div>
                        {/* </Col> */}
                      </Carousel>
                    </ScrollAnimation>
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
