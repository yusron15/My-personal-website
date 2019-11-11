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

import laptop from "../../assets/img/macbook.png";

import "../../assets/css/main.css";

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
          {/* ********* FEATURES 3 ********* */}
          <div className="features-3" style={{ backgroundColor: "white" }}>
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
                  className="ml-auto mr-auto"
                  md="6"
                  // md={{ size: 12, order: 2, offset: 2 }}
                >
                  <Row>
                    {/* <Col> */}
                    <Col>
                      <div className="info info-horizontal">
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            src={require("assets/img/cfdicon.png")}
                            // height="70"
                            // width="70"
                          />
                        </div>
                        <div className="description">
                          <h3
                            className="info-title"
                            style={{ color: "black", fontSize: "1.2rem" }}
                          >
                            Foreign Exchange
                          </h3>
                          <p style={{ textAlign: "left", fontSize: "0.8rem" }}>
                            Forex pasar keuangan populer di dunia.
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-warning">
                          <img
                            alt="..."
                            src={require("assets/img/cfdicon.png")}
                          />
                        </div>
                        <div className="description">
                          <h3
                            className="info-title"
                            style={{ color: "black", fontSize: "1.2rem" }}
                          >
                            CFD
                          </h3>
                          <p style={{ textAlign: "left", fontSize: "0.8rem" }}>
                            CFD menawarkan kesempatan untuk membangun portofolio
                            yang beragam, multiproduk dari satu akun.
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* </Col> */}

                    {/* <Col> */}
                    <Col>
                      <div className="info info-horizontal">
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            src={require("assets/img/futureicon.png")}
                          />
                        </div>
                        <div className="description">
                          <h3
                            className="info-title"
                            style={{ color: "black", fontSize: "1.2rem" }}
                          >
                            Future Index
                          </h3>
                          <p style={{ textAlign: "left", fontSize: "0.8rem" }}>
                            Alternatif investasi di saham perdagangan
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-warning">
                          <img
                            alt="..."
                            src={require("assets/img/komoditiicon.png")}
                          />
                        </div>
                        <div className="description">
                          <h3
                            className="info-title"
                            style={{ color: "black", fontSize: "1.2rem" }}
                          >
                            Komoditi
                          </h3>
                          <p style={{ textAlign: "left", fontSize: "0.8rem" }}>
                            Komoditi adalah subjek kontrak berjangka yang
                            diperdagangkan di Bursa Berjangka.
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* </Col> */}

                    {/* <Col> */}
                    {/* <Col>
                    <img src={laptop} />
                  </Col> */}
                    {/* </Col> */}
                  </Row>
                </Col>
                <Col md="3" style={{ paddingRight: 0, paddingTop: "50px" }}>
                  <img src={laptop} />
                </Col>
              </Row>
              {/* <Row>
                <Col className="ml-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/danger.png")}
                      />
                      <i className="tim-icons icon-chart-bar-32" />
                    </div>
                    <div className="description">
                      <h3 className="info-title" style={{color:"black"}}>Foreign Exchange</h3>
                      <p>
                      Alternatif investasi di saham perdagangan yang bisa meminimalkan risiko fluktuasi harga.
                      </p>
                      <Button
                        className="btn-link"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Explore now{" "}
                        <i className="tim-icons icon-minimal-right" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/info.png")}
                      />
                      <i className="tim-icons icon-paper" />
                    </div>
                    <div className="description">
                      <h3 className="info-title" style={{color:"black"}}>
                        Komoditi{" "}
                        <Badge color="info" pill>
                          v2.0
                        </Badge>
                      </h3>
                      <p>
                      Komoditi adalah subjek kontrak berjangka yang diperdagangkan di Bursa Berjangka.
                      </p>
                      <Button
                        className="btn-link"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Explore now{" "}
                        <i className="tim-icons icon-minimal-right" />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row> */}
            </Container>
          </div>
          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
