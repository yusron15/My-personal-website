import React from "react";
import Slick from "react-slick";
import "../../assets/css/helper.css";

import { connect } from "react-redux";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  TabPane,
  TabContent,
  Row,
  Col,
  NavLink,
  NavItem,
  Nav,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import { LangContext } from "../MyContext";

// import { NewsContent } from "./NewsContent";
import ScrollAnimation from "react-animate-on-scroll";
import work from "assets/img/work.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import prevButton from "../../assets/img/blue-left.png";
import nextButton from "../../assets/img/blue-right.png";
import bg from "../../assets/img/header-cabang.png";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import sungaigerong from "../../assets/img/sumgaigerong.png";
import bgcard from "../../assets/img/header-rekening.png";

import "../../assets/css/main.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const PrevButton = props => {
  return (
    <img
      className="btn-round slick-prev slick-arrow prev-btn"
      aria-label="Previous"
      onClick={props.onClick}
      src={prevButton}
      style={{
        height: "50px",
        width: "auto",
        marginBottom: "20px",
        paddingLeft: "30%"
      }}
    />
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <img
      className="btn-round slick-arrow next-btn"
      // aria-label="Next"
      onClick={props.onClick}
      src={nextButton}
      style={{
        height: "50px",
        width: "auto",
        marginBottom: "20px",
        paddingLeft: "32%"
      }}
    />
  );
};

const styleCard = {
  backgroundImage: "url(" + require("assets/img/news1.png") + ")",
  height: "30vh",
  backgroundSize: "cover"
};
const items2 = [
  {
    content: (
      <div
        className="info info-warning broken-white"
        style={{
          backgroundImage: `url(${bgcard})`,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          backgroundSize: "cover"
        }}
      >
        <h4 className="title" style={{ color: "white" }}>
          Best Quality
        </h4>
        <p style={{ color: "white" }}>
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <div
        className="info info-warning broken-white"
        style={{
          backgroundImage: `url(${bgcard})`,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          backgroundSize: "cover"
        }}
      >
        <h4 className="title" style={{ color: "white" }}>
          Best Quality
        </h4>
        <p style={{ color: "white" }}>
          Gain access to the demographics, psychographics, and location of
          unique people.
        </p>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  }
];

class News extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    // activeTab: "1,

    oldSlide: 0,
    mounted: false,
    activeSlide: 0
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  onExiting = carousel => {
    this["carousel" + carousel + "Animating"] = true;
  };

  onExited = carousel => {
    this["carousel" + carousel + "Animating"] = false;
  };
  next = (carousel, items, tab) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === items.length - 1
        ? 0
        : this.state["carousel" + carousel + "Index"] + 1;
    this.setState({
      ["carousel" + carousel + "Index"]: nextIndex,
      activeTab: nextIndex
    });
  };

  previous = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === 0
        ? items.length - 1
        : this.state["carousel" + carousel + "Index"] - 1;
    this.setState({
      ["carousel" + carousel + "Index"]: nextIndex,
      activeTab: nextIndex
    });
  };

  goToIndex = (newIndex, carousel) => {
    if (this["carousel" + carousel + "Animating"]) return;
    this.setState({
      ["carousel" + carousel + "Index"]: newIndex,
      activeTab: newIndex
    });
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        mounted: true
      });
    }, 500);
  };

  renderContent = () => {
    let slickSettings = {
      dots: false,
      autoplay: true,
      // infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: 0,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />,
      afterChange: current => {
        this.setState({ activeSlide: current });
      },
      // className: "center slider",
      slide: "section",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    if (isMobile) {
      return (
        <>
          {/* <div className="space-50" />
          <div className="space-50" /> */}
          <div className="testimonials-2" style={{ padding: 0 }}>
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage:
                  "url(" + this.props.cabangStore.image_background + ")",
                padding: 0
              }}
            >
              <SidebarMobile />
              <div className="title title-header-mobile">
                {this.props.cabangStore.header}
              </div>
              <div
                style={{ textAlign: "center" }}
                className="subheader font-white"
              >
                {ReactHtmlParser(this.props.cabangStore.subtitle)}
              </div>
            </div>
            <div className="space-50" />
            <Container>
              <Row>
                <Col md="12">
                  <Carousel
                    activeIndex={this.state.carousel2Index}
                    next={() => this.next(2, items2)}
                    previous={() => this.previous(2, items2)}
                  >
                    <CarouselIndicators
                      items={this.props.cabangList.map((item, index) => {
                        return {
                          content: (
                            <div
                              className="info info-warning broken-white"
                              style={{
                                backgroundImage: `url(${bgcard})`,
                                backgroundColor: "rgba(0, 0, 0, 0.25)",
                                backgroundSize: "cover"
                              }}
                            >
                              <h4 className="title" style={{ color: "white" }}>
                                Best Quality
                              </h4>
                              <p style={{ color: "white" }}>
                                Gain access to the demographics, psychographics,
                                and location of unique people.
                              </p>
                            </div>
                          ),
                          altText: "",
                          caption: "",
                          src: "0"
                        };
                      })}
                      activeIndex={this.state.carousel2Index}
                      onClickHandler={newIndex => this.goToIndex(newIndex, 2)}
                    />
                    {this.props.cabangList.map((item, key) => {
                      return (
                        <CarouselItem
                          onExiting={() => this.onExiting(2)}
                          onExited={() => this.onExited(2)}
                          key={key}
                          className="justify-content-center"
                        >
                          <div
                            className="info info-warning broken-white"
                            style={{
                              backgroundImage: "url(" + item.image_url + ")",
                              backgroundColor: "rgba(0, 0, 0, 0.25)",
                              backgroundSize: "cover",
                              margin: 0,
                              marginBottom: "25px",
                              padding: 0
                            }}
                          >
                            <div
                              style={{
                                backgroundImage:
                                  "linear-gradient(180deg, rgba(0,0,0,0) 33%, rgba(0,0,0,0.32396708683473385) 56%, rgba(0,0,0,0.6713060224089635) 68%, rgba(0,0,0,0.8346113445378151) 85%)",
                                height: "45vh",
                                width: "100%",

                                zIndex: 99
                              }}
                            >
                              <h4
                                className="title"
                                style={{
                                  color: "white",
                                  paddingTop: "150px"
                                }}
                              >
                                {item.nama}
                              </h4>
                              <h5
                                className="title"
                                style={{
                                  color: "white",
                                  paddingTop: "5px",
                                  zIndex: 100
                                }}
                              >
                                {ReactHtmlParser(item.alamat)}
                              </h5>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.previous(2, items2);
                      }}
                      role="button"
                    >
                      <i className="tim-icons icon-minimal-left" />
                    </a>
                    <a
                      className="carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.next(2, items2);
                      }}
                      role="button"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </a>
                  </Carousel>
                </Col>
              </Row>
            </Container>
          </div>{" "}
        </>
      );
    }
    return (
      <>
        <div
          className="cd-section broken-white"
          id="testimonials"
          // style={{ backgroundColor: "#D4D4D4" }}
        >
          <div
            className="team-1 background-header"
            style={{
              // backgroundImage: `url(${bg})`,
              backgroundImage:
                "url(" + this.props.cabangList.image_background + ")",
              padding: 0
            }}
          >
            <BlurryNavbar />
            <ColoredNavbar location={{ ...this.props.location }} />
            <div className="title title-header">
              {this.props.cabangList.header}
            </div>
            <div
              style={{ textAlign: "center" }}
              className="subheader font-white"
            >
              {ReactHtmlParser(this.props.cabangList.subtitle)}
            </div>
          </div>

          <div className="cd-section" id="testimonials">
            <div
              className="testimonials-4"
              style={{ padding: 0, backgroundColor: "#FCFCFC" }}
            >
              {/* <ColoredNavbar /> */}
              <Container>
                <Row>
                  {this.state.mounted && (
                    <>
                      <Col
                        md={{ size: 12, offset: 3 }}
                        // style={{ paddingTop: "15vh" }}
                        style={{ minHeight: "50vh" }}
                      >
                        <Slick {...slickSettings}>
                          {this.props.cabangList.cabangList.map(
                            (item, index) => {
                              return (
                                <div key={index}>
                                  <NavLink
                                    style={{
                                      backgroundImage:
                                        "url(" + item.image_url + ")",
                                      height: "30vh",
                                      backgroundSize: "cover"
                                      // borderRadius: 12
                                    }}
                                  ></NavLink>
                                </div>
                              );
                            }
                          )}
                        </Slick>
                      </Col>
                      <Col
                        className="positioned"
                        style={{
                          backgroundColor: "transparent",
                          marginTop: "5%"
                        }}
                        lg="4"
                        md="8"
                        xs="10"
                      >
                        <h1 className="title font-black">
                          {ReactHtmlParser(this.props.pageStore.cabang.heading)}
                        </h1>
                        <p
                          className="description"
                          style={{ margin: 0, minHeight: "20vh" }}
                        >
                          <TabContent
                            activeTab={"project" + this.state.activeSlide}
                          >
                            {this.props.cabangList.cabangList.map(
                              (item, index) => (
                                <TabPane tabId={`project${index}`}>
                                  {/* <Col> */}
                                  <div className="title font-black">
                                    {item.nama}
                                  </div>

                                  <p className="description font-black">
                                    {ReactHtmlParser(item.alamat)}
                                  </p>
                                  {/* </Col> */}
                                </TabPane>
                              )
                            )}
                          </TabContent>
                        </p>
                      </Col>
                    </>
                  )}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  cabangList: state.cabangStore
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(News);
