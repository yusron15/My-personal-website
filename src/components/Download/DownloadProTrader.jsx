import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

// reactstrap components
import { isMobile } from "react-device-detect";
import { Badge, Button, Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import laptop from "../../assets/img/download-pc.png";

import windows from "../../assets/img/windows-download.png";
import appstore from "../../assets/img/appstore.png";
import googleplay from "../../assets/img/playstore.png";

import pc from "../../assets/img/downloadwindows.png";
import mac from "../../assets/img/downloadmac.png";
import android from "../../assets/img/downloadandroid.png";
import ios from "../../assets/img/downloadios.png";

import world from "../../assets/img/world.png";
import bg from "../../assets/img/download-bg.png";

import "../../assets/css/main.css";
class Features extends React.Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="features">
            <div
              className="features-3 broken-white"
              style={{
                padding: "50px",
                paddingTop: "20px",
                backgroundImage: `url(${bg})`
              }}
            >
              <Container fluid>
                <Row>
                  <Col className="mr-auto ml-auto" md="10">
                    <h1
                      className="title"
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "1.5rem"
                      }}
                    >
                      Download
                    </h1>
                  </Col>
                </Row>
                <Col>
                  <div>
                    <Row>
                      <ScrollAnimation
                        animateIn="fadeInLeft"
                        animateOut="fadeOut"
                      >
                        <img src={laptop} />
                      </ScrollAnimation>
                    </Row>
                  </div>
                  <div>
                    <Col>
                      <Row>
                        <Col>
                          <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeOut"
                          >
                            <img
                              alt="..."
                              className="bg-blob"
                              style={{
                                width: "70vw",
                                marginTop: "20px",
                                height: "auto"
                              }}
                              src={pc}
                            />
                          </ScrollAnimation>
                        </Col>
                        <Col>
                          <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeOut"
                          >
                            <img
                              alt="..."
                              className="bg-blob"
                              style={{
                                width: "70vw",
                                marginTop: "20px",
                                height: "auto"
                              }}
                              src={mac}
                            />
                          </ScrollAnimation>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeOut"
                          >
                            <img
                              alt="..."
                              className="bg-blob"
                              style={{
                                width: "70vw",
                                marginTop: "20px",
                                height: "auto"
                              }}
                              src={android}
                            />
                          </ScrollAnimation>
                        </Col>
                        <Col>
                          <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeOut"
                          >
                            <img
                              alt="..."
                              className="bg-blob"
                              style={{
                                width: "70vw",
                                marginTop: "20px",
                                height: "auto"
                              }}
                              src={ios}
                            />
                          </ScrollAnimation>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Col>
              </Container>
            </div>
          </div>{" "}
        </>
      );
    }
    return (
      <>
        <div className="cd-section" id="features">
          {/* ********* FEATURES 3 ********* */}
          <div
            className="features-3 broken-white"
            style={{
              padding: "50px",
              paddingTop: "20px",
              backgroundImage: `url(${bg})`
            }}
          >
            <Container fluid>
              {/* <Parallax
                className="custom-class"
                y={[-20, 20]}
                tagOuter="figure"
              >
                <image src={bg} />
              </Parallax> */}

              <Row>
                <Col className="mr-auto ml-auto" md="10">
                  <h1
                    className="title"
                    style={{ color: "white", textAlign: "left" }}
                  >
                    Download
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Col>
                    <ScrollAnimation
                      animateIn="fadeInLeft"
                      animateOut="fadeOut"
                    >
                      <img src={laptop} height="250" width="auto" />
                    </ScrollAnimation>
                  </Col>
                </Col>
                <Col md="6">
                  <Row>
                    <Col md="4">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOut"
                      >
                        <img
                          alt="..."
                          className="bg-blob"
                          style={{
                            width: "15vw",
                            height: "auto"
                          }}
                          src={pc}
                        />
                      </ScrollAnimation>
                    </Col>
                    <Col md="4">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOut"
                      >
                        <img
                          alt="..."
                          className="bg-blob"
                          style={{
                            width: "15vw",
                            height: "auto"
                          }}
                          src={mac}
                        />
                      </ScrollAnimation>
                    </Col>
                  </Row>
                  <Row
                    style={{
                      marginTop: "20px"
                    }}
                  >
                    <Col md="4">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOut"
                      >
                        <img
                          alt="..."
                          className="bg-blob"
                          style={{
                            width: "15vw",
                            height: "auto"
                          }}
                          src={android}
                        />
                      </ScrollAnimation>
                    </Col>
                    <Col md="4">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOut"
                      >
                        <img
                          alt="..."
                          className="bg-blob"
                          style={{
                            width: "15vw",
                            height: "auto"
                          }}
                          src={ios}
                        />
                      </ScrollAnimation>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default Features;
