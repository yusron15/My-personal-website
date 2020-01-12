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

import VizSensor from "react-visibility-sensor";

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
  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="cd-section header-filter"
            id="headers"
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/header-image.png") + ")",
            //   backgroundSize: "cover"
            // }}
          >
            <div>
              <BlurryNavbar />
              <div className="space-50" />
              <div
                className="header-filter"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/header-image.png") + ")",
                  backgroundSize: "cover"
                }}
                style={{ marginRight: 0, marginLeft: 0 }}
              >
                {/* offset-md-1 */}
                <Col md="5 offset-md-1 ">
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
                        className="page-header"
                        style={{ minHeight: "60vh" }}
                      >
                        {/* here */}
                        <Container style={{ paddingTop: "20%" }}>
                          <Row>
                            {/* <Navbar /> */}

                            <Col className="mr-auto text-left" md="12">
                              <div
                                style={{
                                  fontStyle: "Helvetica Bold",
                                  fontSize: "2rem",
                                  fontWeight: "bold"
                                }}

                                // className="title"
                              >
                                Trading Bersama Broker Terbaik
                              </div>

                              <h4>
                                Didirikan sejak tahun 2003, saat ini telah
                                berkembang menjadi Perusahaan Pialang Berjangka
                                Terbaik dan Terbesar di Indonesia.
                              </h4>
                              <br />
                            </Col>
                            {/* <Col md="5">
                              <Row className="vertical-center">
                            <Col>
                              <img src={best17} />
                            </Col>
                            <Col>
                              <img src={best18} />
                            </Col>
                          </Row>
                            </Col> */}
                          </Row>
                        </Container>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="page-header"
                        style={{ minHeight: "60vh" }}
                      >
                        <Container style={{ paddingTop: "20%" }}>
                          <Row>
                            {/* <Navbar /> */}
                            {/* <Col className="mr-auto text-left" lg="5" md="7">
                              <img
                                src={phoneHeader}
                                style={{ paddingBottom: "0" }}
                              />
                            </Col> */}
                            <Col md="12">
                              <Row className="vertical-center">
                                <div
                                  style={{
                                    fontStyle: "Helvetica Bold",
                                    fontSize: "2rem",
                                    fontWeight: "bold"
                                  }}

                                  // className="title"
                                >
                                  Platform Unggulan Pro I Trader
                                </div>

                                <h4>
                                  Proses Eksekusi Order yang SEDERHANA dan CEPAT
                                  LIVE QUOTES dalam bentuk Summary maupun
                                  Advance Mode CHARTING dilengkapi dengan TOOLS
                                  untuk bertrading secara TEKNIKAL BERITA
                                  REAL-TIME untuk bertrading secara fundamental
                                </h4>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div
                        className="page-header"
                        style={{ minHeight: "60vh" }}
                      >
                        <Container style={{ paddingTop: "20%" }}>
                          <Row className="vertical-center">
                            {/* <Navbar /> */}
                            {/* <Col className="mr-auto text-left" lg="5" md="7">
                              <img
                                src={iphone3}
                                style={{
                                  height: "50vh",
                                  width: "100vw"
                                }}
                              />
                            </Col> */}
                            <Col md="12">
                              <Row>
                                <div
                                  style={{
                                    fontStyle: "Helvetica Bold",
                                    fontSize: "2rem",
                                    fontWeight: "bold"
                                  }}

                                  // className="title"
                                >
                                  Topgrowth Futures Mobile
                                </div>

                                <h4>
                                  Untuk Berita Pasar Keuangan Ter-UPDATE,
                                  Rekomendasi TRADING, Ulasan Pasar & SIGNAL
                                  TRADING REAL TIME
                                </h4>
                                <br />
                                <Row>
                                  <Col>
                                    <img src={appstore} />
                                  </Col>
                                  <Col>
                                    <img
                                      src={playstore}
                                      // style={{ marginLeft: "20px" }}
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
                  // md=""
                  // offset-md-2
                  md="4 offset-md-2"
                  // style={{ padding: "2% 5% 5% 0" }}
                >
                  <ScrollAnimation
                    delay={100}
                    animateIn="fadeInRight"
                    animateOut="fadeOut"
                  >
                    <CardRegister />
                  </ScrollAnimation>
                </Col>
              </div>
            </div>
            <BreakingNews />
          </div>
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="cd-section "
                id="headers"
                // style={{
                //   backgroundImage:
                //     "url(" + require("assets/img/header-image1.png") + ")",
                //   backgroundSize: "cover"
                // }}
              >
                <div>
                  <BlurryNavbar />
                  <div className="space-50" />
                  {/* <Row
                    // className="header-filter"
                    // style={{
                    //   backgroundImage:
                    //     "url(" + require("assets/img/header-image.png") + ")",
                    //   backgroundSize: "cover"
                    // }}
                    style={{ marginRight: 0, marginLeft: 0 }}
                  > */}
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
                              require("assets/img/header-image.png") +
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
                                  {lang.Landing.HeaderLanding.slide[0].title}
                                </div>
                                <h4>
                                  {lang.Landing.HeaderLanding.slide[0].subtitle}
                                </h4>
                                <br />
                              </Col>
                              {/* <Col md="5">
                              <Row className="vertical-center">
                            <Col>
                              <img src={best17} />
                            </Col>
                            <Col>
                              <img src={best18} />
                            </Col>
                          </Row>
                            </Col> */}
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
                              require("assets/img/header-image1.png") +
                              ")",
                            backgroundSize: "cover"
                          }}
                        >
                          <Container style={{ paddingTop: 0 }}>
                            <Row>
                              {/* <Navbar /> */}
                              {/* <Col className="mr-auto text-left" lg="5" md="7">
                              <img
                                src={phoneHeader}
                                style={{ paddingBottom: "0" }}
                              />
                            </Col> */}
                              <Col md="8">
                                <Row className="vertical-center">
                                  <div
                                    style={{
                                      fontStyle: "Helvetica Bold",
                                      fontSize: "2.5rem",
                                      fontWeight: "bold"
                                    }}

                                    // className="title"
                                  >
                                    {lang.Landing.HeaderLanding.slide[1].title}
                                  </div>
                                  <h4>
                                    {
                                      lang.Landing.HeaderLanding.slide[1]
                                        .subtitle
                                    }
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
                              require("assets/img/header-image2.png") +
                              ")",
                            backgroundSize: "cover"
                          }}
                        >
                          <Container style={{ paddingTop: 0 }}>
                            <Row>
                              {/* <Navbar /> */}
                              {/* <Col className="mr-auto text-left" lg="5" md="7">
                              <img
                                src={iphone3}
                                style={{
                                  height: "50vh",
                                  width: "100vw"
                                }}
                              />
                            </Col> */}
                              <Col md="8">
                                <Row>
                                  <div
                                    style={{
                                      fontStyle: "Helvetica Bold",
                                      fontSize: "2.5rem",
                                      fontWeight: "bold"
                                    }}

                                    // className="title"
                                  >
                                    {lang.Landing.HeaderLanding.slide[2].title}
                                  </div>

                                  <h4>
                                    {
                                      lang.Landing.HeaderLanding.slide[2]
                                        .subtitle
                                    }
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
                      {/* <Col md="4 offset-md-2">
                          <CardRegister />
                        </Col>
                        <BreakingNews /> */}
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
                  {/* </Row> */}
                </div>
                {/* <BreakingNews /> */}
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

export default HeaderLanding;
