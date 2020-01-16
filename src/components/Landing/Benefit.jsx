import React from "react";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
import { LangContext } from "../MyContext";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import { fadeInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { bounce } from "react-animations";
import ScrollAnimation from "react-animate-on-scroll";
// images
import Benefit from "../../assets/img/benefit.png";
import nextButton from "../../assets/img/nextbutton.png";
import prevButton from "../../assets/img/prevbutton.png";
import biaya from "../../assets/img/biaya.png";
import berita from "../../assets/img/berita.png";
import legalitas from "../../assets/img/legalitas.png";
import layanan from "../../assets/img/layanan.png";
import requote from "../../assets/img/requote.png";
import support from "../../assets/img/support.png";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

const styles = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(bounce, "bounce")
  }
};

const PrevButton = props => {
  return (
    <img
      className="btn-round slick-prev slick-arrow prev-btn"
      aria-label="Previous"
      onClick={props.onClick}
      src={prevButton}
      style={{ height: "30px", width: "auto", paddingLeft: "470px" }}
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
      style={{ height: "30px", width: "auto", paddingLeft: "470px" }}
    />
  );
};

class Testimonials extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    color: "#FFFFFF",
    biayaImg: require('"../../assets/img/biaya.png'),
    legalitasImg: require('"../../assets/img/legalitas.png'),
    layananImg: require('"../../assets/img/layanan.png'),
    beritaImg: require('"../../assets/img/berita.png'),
    requoteImg: require('"../../assets/img/requote.png'),
    supportImg: require('"../../assets/img/support.png'),
    bounce: {
      animation: "x 1s",
      animationName: Radium.keyframes(bounce, "bounce")
    }
  };

  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  handleBiayaEnter = () => {
    this.setState({ biayaImg: require('"../../assets/img/biaya-black.png') });
    this.setState({ color: "black" });
  };

  handleBiayaLeave = () => {
    this.setState({ biayaImg: require('"../../assets/img/biaya.png') });
    this.setState({ color: "#FFFFFF" });
  };

  handleLegalitasEnter = () => {
    this.setState({
      legalitasImg: require('"../../assets/img/legalitas-black.png')
    });
  };

  handleLegalitasLeave = () => {
    this.setState({ legalitasImg: require('"../../assets/img/legalitas.png') });
  };

  handleLayananEnter = () => {
    this.setState({
      layananImg: require('"../../assets/img/layanan-black.png')
    });
  };

  handleLayananLeave = () => {
    this.setState({ layananImg: require('"../../assets/img/layanan.png') });
  };

  handleBeritaEnter = () => {
    this.setState({
      beritaImg: require('"../../assets/img/berita-black.png')
    });
  };

  handleBeritaLeave = () => {
    this.setState({ beritaImg: require('"../../assets/img/berita.png') });
  };

  handleRequoteEnter = () => {
    this.setState({
      requoteImg: require('"../../assets/img/requote-black.png')
    });
  };

  handleRequoteLeave = () => {
    this.setState({ requoteImg: require('"../../assets/img/requote.png') });
  };

  handleSupportEnter = () => {
    this.setState({
      supportImg: require('"../../assets/img/support-black.png')
    });
  };

  handleSupportLeave = () => {
    this.setState({ supportImg: require('"../../assets/img/support.png') });
  };

  onExiting = carousel => {
    this["carousel" + carousel + "Animating"] = true;
  };

  onExited = carousel => {
    this["carousel" + carousel + "Animating"] = false;
  };
  next = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === items.length - 1
        ? 0
        : this.state["carousel" + carousel + "Index"] + 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  previous = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === 0
        ? items.length - 1
        : this.state["carousel" + carousel + "Index"] - 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  goToIndex = (newIndex, carousel) => {
    if (this["carousel" + carousel + "Animating"]) return;
    this.setState({ ["carousel" + carousel + "Index"]: newIndex });
  };
  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="testimonials">
                {/* ********* TESTIMONIALS 4 ********* */}
                <div
                  className="testimonials-4"
                  style={{
                    backgroundImage: `url(${Benefit})`,
                    backgroundSize: "cover"
                  }}
                >
                  <Container fluid>
                    <Row>
                      <Col className="ml-auto mr-auto" md="9">
                        <h2 className="title">
                          {this.props.pageStore.Landing.Benefit.title}
                        </h2>
                      </Col>
                    </Row>
                    <Row md="12" className="justify-content-center">
                      <Col md="3">
                        <ScrollAnimation
                          delay={100}
                          offset={200}
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div onMouseEnter={() => this.state.bounce}>
                            <div
                              className="card-benefit text-benefit"
                              // onMouseEnter={this.handleBiayaEnter}
                              // onMouseLeave={this.handleBiayaLeave}
                            >
                              <div
                                className="info text-left"
                                // style={styles.fadeInUp}
                                style={{
                                  backgroundColor: "rgba(112, 112, 112, 0.19)",
                                  color: "white",
                                  minHeight: "270px",
                                  minWidth: "200px",
                                  borderRadius: "10px"
                                }}
                              >
                                {/* <p className="title text-benefit" style={{ fontSize: "1.4rem" }}> */}
                                {/* <img onMouseEnter style={{ marginRight: "5%" }} />
                                 */}
                                <div
                                  style={{
                                    fontSize: "1.4rem",
                                    fontWeight: "bold",
                                    margin: "30px 0 30px 10px"
                                  }}
                                >
                                  <img
                                    src={this.state.biayaImg}
                                    style={{ marginRight: "10px" }}
                                  />
                                  {
                                    this.props.pageStore.Landing.Benefit
                                      .content[0].title
                                  }
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                  {
                                    this.props.pageStore.Landing.Benefit
                                      .content[0].subtitle
                                  }
                                </div>
                                <div className="author"></div>
                              </div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </Col>
                      <Col md="3">
                        <ScrollAnimation
                          delay={200}
                          offset={200}
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div
                            className="card-benefit text-benefit"
                            // onMouseEnter={this.handleLegalitasEnter}
                            // onMouseLeave={this.handleLegalitasLeave}
                          >
                            <div
                              className="info text-left"
                              style={{
                                backgroundColor: "rgba(112, 112, 112, 0.19)",
                                color: "white",
                                minHeight: "270px",
                                minWidth: "200px",
                                borderRadius: "10px"
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                <img
                                  src={this.state.legalitasImg}
                                  style={{ marginRight: "5%" }}
                                />
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[1].title
                                }
                              </div>

                              <div style={{ marginLeft: "10px" }}>
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[1].subtitle
                                }
                              </div>
                              <div className="author"></div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </Col>
                      <Col md="3">
                        <ScrollAnimation
                          delay={300}
                          offset={200}
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div
                            className="card-benefit text-benefit"
                            // onMouseEnter={this.handleLayananEnter}
                            // onMouseLeave={this.handleLayananLeave}
                          >
                            <div
                              className="info text-left"
                              style={{
                                backgroundColor: "rgba(112, 112, 112, 0.19)",
                                color: "white",
                                minHeight: "270px",
                                minWidth: "200px",
                                borderRadius: "10px"
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                <img
                                  src={this.state.layananImg}
                                  style={{ marginRight: "5%" }}
                                />
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[2].title
                                }
                              </div>

                              <div style={{ marginLeft: "10px" }}>
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[2].subtitle
                                }
                              </div>
                              <div className="author"></div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </Col>
                    </Row>
                    <Row
                      md="12"
                      className="justify-content-center"
                      style={{ marginTop: "20px" }}
                    >
                      <Col md="3">
                        <ScrollAnimation
                          delay={100}
                          offset={200}
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div
                            className="card-benefit text-benefit"
                            // onMouseEnter={this.handleBeritaEnter}
                            // onMouseLeave={this.handleBeritaLeave}
                          >
                            <div
                              className="info text-left"
                              style={{
                                backgroundColor: "rgba(112, 112, 112, 0.19)",
                                color: "white",
                                minHeight: "270px",
                                minWidth: "200px",
                                borderRadius: "10px"
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                <img
                                  src={this.state.beritaImg}
                                  style={{ marginRight: "5%" }}
                                />
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[3].title
                                }
                              </div>

                              <div style={{ marginLeft: "10px" }}>
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[3].subtitle
                                }
                              </div>
                              <div className="author"></div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </Col>
                      <Col md="3">
                        <ScrollAnimation
                          delay={200}
                          offset={200}
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div
                            className="card-benefit text-benefit"
                            // onMouseEnter={this.handleRequoteEnter}
                            // onMouseLeave={this.handleRequoteLeave}
                          >
                            <div
                              className="info text-left"
                              style={{
                                backgroundColor: "rgba(112, 112, 112, 0.19)",
                                color: "white",
                                minHeight: "270px",
                                minWidth: "200px",
                                borderRadius: "10px"
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                <img
                                  src={this.state.requoteImg}
                                  style={{ marginRight: "5%" }}
                                />
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[4].title
                                }
                              </div>

                              <div style={{ marginLeft: "10px" }}>
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[4].subtitle
                                }
                              </div>
                              <div className="author"></div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </Col>
                      <Col md="3">
                        <ScrollAnimation
                          delay={300}
                          offset={200}
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div
                            className="card-benefit text-benefit"
                            // onMouseEnter={this.handleSupportEnter}
                            // onMouseLeave={this.handleSupportLeave}
                          >
                            <div
                              className="info text-left"
                              style={{
                                backgroundColor: "rgba(112, 112, 112, 0.19)",
                                color: "white",
                                minHeight: "270px",
                                minWidth: "200px",
                                borderRadius: "10px"
                              }}
                            >
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                <img
                                  src={this.state.supportImg}
                                  style={{ marginRight: "5%" }}
                                />
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[5].title
                                }
                              </div>

                              <div style={{ marginLeft: "10px" }}>
                                {
                                  this.props.pageStore.Landing.Benefit
                                    .content[5].subtitle
                                }
                              </div>
                              <div className="author"></div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END TESTIMONIALS 4 ********* */}
              </div>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
