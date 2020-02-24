import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

// reactstrap components
import { isMobile } from "react-device-detect";
import { Badge, Button, Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import laptop from "../../assets/img/download-image.png";
import pc from "../../assets/img/downloadwindows.png";
import mac from "../../assets/img/downloadmac.png";
import android from "../../assets/img/downloadandroid.png";
import ios from "../../assets/img/downloadios.png";
import mobile from "../../assets/img/downloadmobile.png";
import mobilese from "../../assets/img/downloadmobilese.png";

import googleplay from "../../assets/img/playstore.png";
import appstore from "../../assets/img/appstore.png";
import windows from "../../assets/img/windows-download.png";

// import windows from "../../assets/img/download-windows.png";
import world from "../../assets/img/world.png";
import bg from "../../assets/img/download-bg.png";
import { getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";
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
                    <Row>
                      <Col>
                        {/* <a
                          href="https://download.mql5.com/cdn/web/3785/mt4/topgrowth4setup.exe"
                          target="_blank"
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "50vw",
                              margin: "20px 1px 0 2px",
                              height: "auto"
                            }}
                            src={pc}
                          />
                        </a> */}
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[0]
                          }
                        >
                          <img
                            alt="..."
                            style={{
                              width: "50vw",
                              margin: "20px 2px 0 2px",
                              height: "auto"
                            }}
                            src={pc}
                          />
                        </a>
                      </Col>
                      <Col>
                        {/* <a
                          href="http://www.pro-itrading.com/products/proitrading2_5_0/proitradingV5_macos_5_0_en.zip"
                          target="_blank"
                        > */}
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[1]
                          }
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "50vw",
                              margin: "20px 1px 0 2px",
                              height: "auto"
                            }}
                            src={mac}
                          />
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {/* <a
                          href="https://download.mql5.com/cdn/mobile/mt4/android?server=Topgrowth-Demo"
                          target="_blank"
                        > */}
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[2]
                          }
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "50vw",
                              margin: "20px 1px 0 2px",
                              height: "auto"
                            }}
                            src={android}
                          />
                        </a>
                      </Col>
                      <Col>
                        {/* <a
                          href="https://download.mql5.com/cdn/mobile/mt4/ios?server=Topgrowth-Demo"
                          target="_blank"
                        > */}
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[3]
                          }
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "50vw",
                              margin: "20px 1px 0 2px",
                              height: "auto"
                            }}
                            src={ios}
                          />
                        </a>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {/* <a
                          href="http://files.metaquotes.net/3785/mt4/topgrowth4mobilesetup.cab"
                          target="_blank"
                        > */}
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[4]
                          }
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "50vw",
                              margin: "20px 1px 0 2px",
                              height: "auto"
                            }}
                            src={mobile}
                          />
                        </a>
                      </Col>
                      <Col>
                        {/* <a
                          href="http://files.metaquotes.net/3785/mt4/topgrowth4mobilesetup.se.cab"
                          target="_blank"
                        > */}
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[5]
                          }
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "50vw",
                              margin: "20px 1px 0 2px",
                              height: "auto"
                            }}
                            src={mobilese}
                          />
                        </a>
                      </Col>
                    </Row>
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
                        <a
                          href={
                            this.props.pageStore.topgrowthtrader.download[0]
                          }
                          target="_blank"
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
                        </a>
                      </ScrollAnimation>
                    </Col>
                    <Col md="4">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOut"
                      >
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[1]
                          }
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
                        </a>
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
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[2]
                          }
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
                        </a>
                      </ScrollAnimation>
                    </Col>
                    <Col md="4">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOut"
                      >
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[3]
                          }
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
                        </a>
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
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[4]
                          }
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "15vw",
                              height: "auto"
                            }}
                            src={mobilese}
                          />
                        </a>
                      </ScrollAnimation>
                    </Col>
                    <Col md="4">
                      <ScrollAnimation
                        animateIn="fadeInUp"
                        animateOut="fadeOut"
                      >
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent" }}
                          href={
                            this.props.pageStore.topgrowthtrader.download[5]
                          }
                        >
                          <img
                            alt="..."
                            className="bg-blob"
                            style={{
                              width: "15vw",
                              height: "auto"
                            }}
                            src={mobile}
                          />
                        </a>
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

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Features);
