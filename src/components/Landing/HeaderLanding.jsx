import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  CarouselItem,
  UncontrolledCarousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
import { isMobile } from "react-device-detect";
import { fadeInRight } from "react-animations";
import { LangContext } from "../MyContext";
import Radium, { StyleRoot } from "radium";
import ScrollAnimation from "react-animate-on-scroll";
import TextField from "@material-ui/core/TextField";
// import Carousel from "nuka-carousel";
// import { Carousel } from "react-responsive-carousel";
import classnames from "classnames";
import "../../assets/css/main.css";
import { Carousel } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
import BreakingNews from "../../components/Landing/BreakingNews.jsx";
import Navbar from "../../components/Navbars/Navbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbarHome.jsx";
import CardRegister from "../../components/Register/CardRegister.jsx";
import HeaaderContent from "./HeaderContent.jsx";
import image from "../../assets/img/bglanding.png";
import best17 from "../../assets/img/best2017.png";
import best18 from "../../assets/img/best2018.png";
import phoneHeader from "../../assets/img/phone-header.png";
import phoneHeader2 from "../../assets/img/phoneHeader2.png";
import appstore from "../../assets/img/appstore.png";
import playstore from "../../assets/img/playstore.png";
import iphone3 from "../../assets/img/iphone3.png";
import headerimage from "../../assets/img/header-image1.png";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import VizSensor from "react-visibility-sensor";
import { throwStatement } from "@babel/types";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

const styles = {
  fadeInRight: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight")
  }
};

class HeaderLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section " id="headers">
            <div>
              {/* <BlurryNavbar /> */}
              <div className="space-50" />
              <Col md="12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                <Carousel
                  indicators={false}
                  controls={false}
                  slide={true}
                  touch={true}
                  interval="5000"
                  pauseOnHover={false}
                >
                  <Carousel.Item>
                    <div
                      className="page-header minHeight header-filter"
                      style={{
                        backgroundImage:
                          "url(" +
                          this.props.pageStore.Landing.HeaderLanding.slide[0]
                            .image +
                          ")",
                        backgroundSize: "cover"
                      }}
                    >
                      {/* here */}
                      <Container style={{ paddingTop: 0 }}>
                        <Row>
                          {/* <Navbar /> */}
                          <Col className="mr-auto text-left" md="8">
                            <div
                              className="title-header"
                              style={{
                                fontStyle: "Helvetica Bold",
                                fontWeight: "bold",
                                fontSize: "2rem"
                              }}
                            >
                              {ReactHtmlParser(
                                this.props.pageStore.Landing.HeaderLanding
                                  .slide[0].title
                              )}
                            </div>
                            <h4
                              style={{
                                textAlign: "center",
                                fontSize: "0.8rem"
                              }}
                            >
                              {ReactHtmlParser(
                                this.props.pageStore.Landing.HeaderLanding
                                  .slide[0].subtitle
                              )}
                            </h4>
                            <br />
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div
                      className="page-header minHeight"
                      style={{
                        backgroundImage:
                          "url(" +
                          this.props.pageStore.Landing.HeaderLanding.slide[1]
                            .image +
                          ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <Container style={{ paddingTop: 0 }}>
                        <Row>
                          <Col md="8">
                            <Row className="vertical-center">
                              <div
                                className="title-header"
                                style={{
                                  fontStyle: "Helvetica Bold",
                                  fontWeight: "bold",
                                  fontSize: "2rem"
                                }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Landing.HeaderLanding
                                    .slide[1].title
                                )}
                              </div>
                              <h4
                                style={{
                                  textAlign: "center",
                                  fontSize: "0.8rem"
                                }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Landing.HeaderLanding
                                    .slide[1].subtitle
                                )}
                              </h4>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div
                      className="page-header minHeight"
                      style={{
                        backgroundImage:
                          "url(" +
                          this.props.pageStore.Landing.HeaderLanding.slide[2]
                            .image +
                          ")",
                        backgroundSize: "cover"
                      }}
                    >
                      <Container style={{ paddingTop: 0 }}>
                        <Row>
                          <Col md="8">
                            <Row className="vertical-center">
                              <div
                                className="title-header"
                                style={{
                                  fontStyle: "Helvetica Bold",
                                  fontWeight: "bold",
                                  fontSize: "2rem"
                                }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Landing.HeaderLanding
                                    .slide[2].title
                                )}
                              </div>

                              <h4
                                style={{
                                  textAlign: "center",
                                  fontSize: "0.8rem"
                                }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Landing.HeaderLanding
                                    .slide[2].subtitle
                                )}
                              </h4>
                              <br />
                              <Row>
                                <Col>
                                  <img src={appstore} />
                                </Col>
                                <Col>
                                  <img
                                    src={playstore}
                                    style={{ marginLeft: "20px" }}
                                  />
                                </Col>
                              </Row>
                            </Row>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </div>
          </div>
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section " id="headers">
                <div>
                  <BlurryNavbar />
                  <div className="space-50" />
                  <Col md="12" style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <Carousel
                      indicators={false}
                      controls={false}
                      slide={true}
                      touch={true}
                      interval="5000"
                      pauseOnHover={false}
                    >
                      <Carousel.Item>
                        <div
                          className="page-header minHeight header-filter"
                          style={{
                            backgroundImage:
                              "url(" +
                              this.props.pageStore.Landing.HeaderLanding
                                .slide[0].image +
                              // == null ? :  this.props.pageStore.Landing.HeaderLanding
                              // .slide[0].image
                              ")",
                            backgroundSize: "cover"
                          }}
                        >
                          {/* here */}
                          <Container style={{ paddingTop: 0 }}>
                            <Row>
                              {/* <Navbar /> */}
                              <Col className="mr-auto text-left" md="8">
                                <div
                                  style={{
                                    fontStyle: "Helvetica Bold",
                                    fontSize: "2.5rem",
                                    fontWeight: "bold"
                                  }}
                                >
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.HeaderLanding
                                      .slide[0].title
                                  )}
                                </div>
                                <h4>
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.HeaderLanding
                                      .slide[0].subtitle
                                  )}
                                </h4>
                                <br />
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div
                          className="page-header minHeight"
                          style={{
                            backgroundImage:
                              "url(" +
                              this.props.pageStore.Landing.HeaderLanding
                                .slide[1].image +
                              ")",
                            backgroundSize: "cover"
                          }}
                        >
                          <Container style={{ paddingTop: 0 }}>
                            <Row>
                              <Col md="8">
                                <Row className="vertical-center">
                                  <div
                                    style={{
                                      fontStyle: "Helvetica Bold",
                                      fontSize: "2.5rem",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    {ReactHtmlParser(
                                      this.props.pageStore.Landing.HeaderLanding
                                        .slide[1].title
                                    )}
                                  </div>
                                  <h4>
                                    {ReactHtmlParser(
                                      this.props.pageStore.Landing.HeaderLanding
                                        .slide[1].subtitle
                                    )}
                                  </h4>
                                </Row>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </Carousel.Item>
                      <Carousel.Item>
                        <div
                          className="page-header minHeight"
                          style={{
                            backgroundImage:
                              "url(" +
                              this.props.pageStore.Landing.HeaderLanding
                                .slide[2].image +
                              ")",
                            backgroundSize: "cover"
                          }}
                        >
                          <Container style={{ paddingTop: 0 }}>
                            <Row>
                              <Col md="8">
                                <Row>
                                  <div
                                    style={{
                                      fontStyle: "Helvetica Bold",
                                      fontSize: "2.5rem",
                                      fontWeight: "bold"
                                    }}
                                  >
                                    {ReactHtmlParser(
                                      this.props.pageStore.Landing.HeaderLanding
                                        .slide[2].title
                                    )}
                                  </div>

                                  <h4>
                                    {ReactHtmlParser(
                                      this.props.pageStore.Landing.HeaderLanding
                                        .slide[2].subtitle
                                    )}
                                  </h4>
                                  <br />
                                  <Row>
                                    <Col>
                                      <img src={appstore} />
                                    </Col>
                                    <Col>
                                      <img
                                        src={playstore}
                                        style={{ marginLeft: "20px" }}
                                      />
                                    </Col>
                                  </Row>
                                </Row>
                              </Col>
                            </Row>
                          </Container>
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                  <Col
                    md="4 offset-md-8"
                    style={{
                      top: "17vh",
                      position: "absolute"
                    }}
                  >
                    <CardRegister />
                  </Col>
                  <Col
                    md="12"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      paddingRight: 0,
                      paddingLeft: 0
                    }}
                  >
                    <BreakingNews />
                  </Col>
                </div>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLanding);
