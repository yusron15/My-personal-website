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
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle
} from "reactstrap";

import fg1 from "../../assets/img/forexgold1.png";
import fg2 from "../../assets/img/forexgold2.png";
import fg3 from "../../assets/img/forexgold3.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

const textTitle = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  top: "50%",
  msTransform: "translateY(-50%)",
  transform: "translateY(-50%)"
};

class Features extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section"
          id="features"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          {/* ********* FEATURES 3 ********* */}
          <BlurryNavbar />
          <div className="features-3">
            <Container fluid>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>
                  <div
                    // className="title"
                    style={textTitle}
                  >
                    FOREX & GOLD
                  </div>
                  <p style={{ textAlign: "left" }}>
                    Saat ini, Foreign Exchange (Forex) merupakan pasar terbesar
                    dan paling likuid di dunia dengan perputaran nilai transaksi
                    yang tiga kali lipat lebih besar dari jumlah gabungan pasar
                    saham dan obligasi. Pasar forex atau valuta asing ini
                    beroperasi selama 24 jam penuh melalui jaringan bank global,
                    dari kawasan Asia, Eropa, hingga Amerika, tanpa bursa
                    terpusat sehingga disebut sebagai produk OTC (Over the
                    Counter). Transaksi ini dilakukan dengan cara membeli atau
                    menjual mata uang dengan memanfaatkan fluktuasi harga.
                  </p>
                  {/* <Col className="mr-auto ml-auto" md="5"> */}
                  {/* </Col> */}
                </Col>
              </Row>
              <Row>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={fg1} />
                        </a>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div style={textContent}>
                        <div className="title-content">
                          KEUNTUNGAN TRANSAKSI FOREX
                        </div>
                        <p>
                          Likuiditas tinggi karena selalu adanya penawaran dan
                          permintaan Potensi keuntungan dua arah yang didapatkan
                          pada saat harga naik maupun turun karena tidak adanya
                          batasan untuk perdagangan terarah Biaya investasi awal
                          yang relatif rendah karena forex diperdagangkan dengan
                          leverage Transparansi akibat berdagang secara langsung
                          dengan pasar yang bertanggung jawab atas harga
                          pasangan mata uang Biaya perdagangan yang rendah
                          karena biaya tersebut dihitung ke dalam spread Dapat
                          dilakukan di manapun dan kapanpun selama ada koneksi
                          internet
                        </p>{" "}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="8">
                      <div style={textContent}>
                        <div className="title-content">
                          KEUNGGULAN TRANSAKSI FOREX BERSAMA TOPGROWTH
                        </div>
                        <p>
                          Transaksi bisa dilakukan kapan dan dimana saja Data
                          dan informasi terbuka untuk seluruh nasabah Didukung
                          oleh tim Research dan Development, baik online maupun
                          offline Adanya modul pelatihan untuk meningkatkan
                          kemampuan sebagai trader profesional Keamanan dana
                          investasi terjamin dengan adanya Segregated Account
                          Proses penarikan dana (withdrawal) yang cepat dan
                          efisien Eksekusi instan order yang superior Spread
                          yang tetap pada segala kondisi Teknologi trading yang
                          unggul dan terpercaya
                        </p>{" "}
                      </div>
                    </Col>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={fg2} />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={fg3} />
                        </a>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div style={textContent}>
                        <div className="title-content">GOLD</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                        </p>{" "}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 0.5,
                width: "100vw",
                borderColor: "grey"
              }}
            />
          </div>

          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
