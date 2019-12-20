/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Badge, Button, Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import laptop from "../../assets/img/macbook.png";
import feature from "../../assets/img/all-device.png";

import "../../assets/css/main.css";

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
          {/* ********* FEATURES 3 ********* */}
          <div className="features-3 broken-white">
            <Container fluid>
              <Row>
                <Col className="mr-auto ml-auto" md="9">
                  <h1
                    className="title"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    Trading Forex, Future Index, CFD dan Komoditi Bersama
                    Topgrowth
                  </h1>
                  <h4 className="description" style={{ textAlign: "left" }}>
                    Berikut adalah ulasan singkat dari produk - produk yang
                    tersedia untuk Anda.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col
                  // className="ml-auto mr-auto"
                  md={{ size: 7, offset: 1 }}
                  // md={{ size: 12, order: 2, offset: 2 }}
                  style={{ left: "3%" }}
                >
                  <Row>
                    {/* <Col> */}
                    <Col>
                      <div className="info">
                        <Row>
                          <Col
                            md="3"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="icon icon-success">
                              <ScrollAnimation
                                delay={100}
                                animateIn="fadeInUp"
                                animateOut="fadeOut"
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/blue-foreign.png")}
                                  height="60"
                                  width="60"
                                />
                              </ScrollAnimation>
                            </div>
                          </Col>
                          <Col
                            md="9"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="description">
                              <h3
                                // className="info-title"
                                style={{
                                  color: "black",
                                  fontSize: "1.2rem",
                                  marginBottom: 0,
                                  textAlign: "left"
                                }}
                              >
                                Foreign Exchange
                              </h3>
                              <p
                                style={{
                                  textAlign: "left",
                                  fontSize: "0.8rem",
                                  padding: 0,
                                  paddingRight: "10px"
                                }}
                              >
                                Forex pasar keuangan yang paling populer di
                                dunia.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="info">
                        <Row>
                          <Col
                            md="3"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="icon icon-success">
                              <ScrollAnimation
                                delay={300}
                                animateIn="fadeInUp"
                                animateOut="fadeOut"
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/blue-cfd.png")}
                                  height="60"
                                  width="60"
                                />
                              </ScrollAnimation>
                            </div>
                          </Col>
                          <Col
                            md="9"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="description">
                              <h3
                                // className="info-title"
                                style={{
                                  color: "black",
                                  fontSize: "1.2rem",
                                  marginBottom: 0,
                                  textAlign: "left"
                                }}
                              >
                                CFD
                              </h3>
                              <p
                                style={{
                                  textAlign: "left",
                                  fontSize: "0.8rem",
                                  padding: 0,
                                  paddingRight: "10px"
                                }}
                              >
                                CFD menawarkan kesempatan untuk membangun
                                portofolio yang beragam, multiproduk dari satu
                                akun.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    {/* </Col> */}

                    {/* <Col> */}
                    <Col>
                      <div className="info">
                        <Row>
                          <Col
                            md="3"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="icon icon-success">
                              <ScrollAnimation
                                delay={200}
                                animateIn="fadeInUp"
                                animateOut="fadeOut"
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/blue-komoditi.png")}
                                  height="60"
                                  width="60"
                                />
                              </ScrollAnimation>
                            </div>
                          </Col>
                          <Col
                            md="9"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="description">
                              <h3
                                // className="info-title"
                                style={{
                                  color: "black",
                                  fontSize: "1.2rem",
                                  marginBottom: 0,
                                  textAlign: "left"
                                }}
                              >
                                Komoditi
                              </h3>
                              <p
                                style={{
                                  textAlign: "left",
                                  fontSize: "0.8rem",
                                  padding: 0,
                                  paddingRight: "10px"
                                }}
                              >
                                Komoditi adalah subjek kontrak berjangka yang
                                diperdagangkan di Bursa Berjangka.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="info">
                        <Row>
                          <Col
                            md="3"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="icon icon-success">
                              <ScrollAnimation
                                delay={400}
                                animateIn="fadeInUp"
                                animateOut="fadeOut"
                              >
                                <img
                                  alt="..."
                                  src={require("assets/img/blue-future.png")}
                                  height="60"
                                  width="60"
                                />
                              </ScrollAnimation>
                            </div>
                          </Col>
                          <Col
                            md="9"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                          >
                            <div className="description">
                              <h3
                                // className="info-title"
                                style={{
                                  color: "black",
                                  fontSize: "1.2rem",
                                  marginBottom: 0,
                                  textAlign: "left"
                                }}
                              >
                                Future Index
                              </h3>
                              <p
                                style={{
                                  textAlign: "left",
                                  fontSize: "0.8rem",
                                  padding: 0,
                                  paddingRight: "10px"
                                }}
                              >
                                Alternatif investasi di saham perdagangan yang
                                bisa meminimalkan risiko fluktuasi harga.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md="4" style={{ paddingRight: 0, paddingTop: "50px" }}>
                  <ScrollAnimation
                    offset={100}
                    animateIn="fadeInRight"
                    animateOut="fadeOut"
                  >
                    <img
                      src={feature}
                      style={{
                        width: "100%",
                        height: "auto"
                        // marginLeft: "10%"
                      }}
                    />
                  </ScrollAnimation>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
