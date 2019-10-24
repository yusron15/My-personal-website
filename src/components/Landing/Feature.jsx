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

import laptop from "../../assets/img/maclanding.jpg";

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
                <Col md="4 offset-m-1">
                  <Col>
                    <div className="info info-horizontal">
                      <div className="icon icon-success">
                        <img
                          alt="..."
                          className="bg-blob"
                          src={require("assets/img/feature-blob/success.png")}
                        />
                        <i className="tim-icons icon-html5" />
                      </div>
                      <div className="description">
                        <h3 className="info-title" style={{ color: "black" }}>
                          Foreign Exchange
                        </h3>
                        <p>
                          Forex adalah pasar keuangan yang paling populer di
                          dunia.
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
                    <div className="info info-horizontal">
                      <div className="icon icon-warning">
                        <img
                          alt="..."
                          className="bg-blob"
                          src={require("assets/img/feature-blob/warning.png")}
                        />
                        <i className="tim-icons icon-heart-2" />
                      </div>
                      <div className="description">
                        <h3 className="info-title" style={{ color: "black" }}>
                          CFD
                        </h3>
                        <p>
                          CFD menawarkan kesempatan untuk membangun portofolio
                          yang beragam, multiproduk dari satu akun.
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
                </Col>

                <Col md="4">
                  <Col>
                    <div className="info info-horizontal">
                      <div className="icon icon-success">
                        <img
                          alt="..."
                          className="bg-blob"
                          src={require("assets/img/feature-blob/success.png")}
                        />
                        <i className="tim-icons icon-html5" />
                      </div>
                      <div className="description">
                        <h3 className="info-title" style={{ color: "black" }}>
                          Future Index
                        </h3>
                        <p>
                          Alternatif investasi di saham perdagangan yang bisa
                          meminimalkan risiko fluktuasi harga.
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
                    <div className="info info-horizontal">
                      <div className="icon icon-warning">
                        <img
                          alt="..."
                          className="bg-blob"
                          src={require("assets/img/feature-blob/warning.png")}
                        />
                        <i className="tim-icons icon-heart-2" />
                      </div>
                      <div className="description">
                        <h3 className="info-title" style={{ color: "black" }}>
                          Komoditi
                        </h3>
                        <p>
                          Komoditi adalah subjek kontrak berjangka yang
                          diperdagangkan di Bursa Berjangka.
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
                </Col>

                <Col md="4">
                  <Col>
                    <img src={laptop} />
                  </Col>
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
