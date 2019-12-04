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
  CardTitle,
  Card,
  Table
} from "reactstrap";

import fg1 from "../../assets/img/forex.png";
import fg2 from "../../assets/img/forex2.png";
import fg3 from "../../assets/img/forexgold3.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "white"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  top: "50%",
  fontSize: "1rem",
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
            <div className="space-50" />
            <Container fluid>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <div
                    // className="title"
                    style={textTitle}
                  >
                    FOREX
                  </div>
                  <p style={{ textAlign: "center" }}>
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
                          permintaan, Potensi keuntungan dua arah yang
                          didapatkan pada saat harga naik maupun turun karena
                          tidak adanya batasan untuk perdagangan terarah, Biaya
                          investasi awal yang relatif rendah karena forex
                          diperdagangkan dengan leverage, Transparansi akibat
                          berdagang secara langsung dengan pasar yang
                          bertanggung jawab atas harga pasangan mata uang, Biaya
                          perdagangan yang rendah karena biaya tersebut dihitung
                          ke dalam spread, Dapat dilakukan di manapun dan
                          kapanpun selama ada koneksi internet.
                        </p>{" "}
                      </div>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: "50px" }}>
                    <Col lg="8">
                      <div style={textContent}>
                        <div className="title-content">
                          KEUNTUNGAN TRANSAKSI FOREX
                        </div>
                        <p>
                          Likuiditas tinggi karena selalu adanya penawaran dan
                          permintaan, Potensi keuntungan dua arah yang
                          didapatkan pada saat harga naik maupun turun karena
                          tidak adanya batasan untuk perdagangan terarah, Biaya
                          investasi awal yang relatif rendah karena forex
                          diperdagangkan dengan leverage, Transparansi akibat
                          berdagang secara langsung dengan pasar yang
                          bertanggung jawab atas harga pasangan mata uang, Biaya
                          perdagangan yang rendah karena biaya tersebut dihitung
                          ke dalam spread, Dapat dilakukan di manapun dan
                          kapanpun selama ada koneksi internet.
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
                  //   style={{ marginTop: "50px" }}
                >
                  <Row style={{ marginTop: "50px" }}>
                    <Col lg="12">
                      <div>
                        <div style={textTitle}>Tagam Produk Forex</div>
                        <p>
                          Trading forex dengan TOPGROWTH memberi Anda akses
                          untuk bertransaksi ke banyak produk valuta asing,
                          terlepas dari apakah Anda mengunduh Pro-I Trading pada
                          PC atau Mac Anda, bertransaksi menggunakan gadget Anda
                          melalui Pro-I Trader yang tersedia untuk Android
                          maupun iOS, atau melakukan transaksi melalui telepon.
                          <br />
                          <br />
                          Di bawah ini adalah ragam pasangan mata uang yang
                          dapat Anda perdagangkan.
                        </p>{" "}
                      </div>
                      <div style={{ marginTop: "30px" }}>
                        <div style={textTitle}>Major Pairs</div>

                        <Table style={{ marginTop: "20px" }}>
                          <tbody>
                            <tr style={{ backgroundColor: "#224377" }}>
                              <td className="text-white">
                                <b>Cross Currency Pairs </b>
                              </td>
                              <td className="text-white">
                                <b>Nickname</b>
                              </td>
                              <td className="text-white">
                                <b>Contract Size </b>
                              </td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>EUR / USD</td>
                              <td>Euro</td>
                              <td>EUR 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>USD / JPY </td>
                              <td> Japanese Yen</td>
                              <td>USD 100,000 </td>
                            </tr>
                            <tr className="black-newsletter">
                              <td> GBP / USD</td>
                              <td> Poundsterling</td>
                              <td> GBP 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td> USD / CHF</td>
                              <td> Swiss Franc</td>
                              <td> USD 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td> AUD / USD</td>
                              <td> Australian Dollar</td>
                              <td> AUD 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td> NZD / USD</td>
                              <td> New Zealand Dollar</td>
                              <td> NZD 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>USD / CAD </td>
                              <td> Canadian Dollar</td>
                              <td>USD 100,000 </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                      <div style={{ marginTop: "50px" }}>
                        <div style={textTitle}>Cross Pairs</div>

                        <Table style={{ marginTop: "20px" }}>
                          <tbody>
                            <tr style={{ backgroundColor: "#224377" }}>
                              <td className="text-white">
                                <b>Cross Currency Pairs </b>
                              </td>
                              <td className="text-white">
                                <b>Nickname</b>
                              </td>
                              <td className="text-white">
                                <b>Contract Size </b>
                              </td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>EURGBP</td>
                              <td>Euro / British Pound </td>
                              <td>EUR 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>EURJPY</td>
                              <td>Euro / Japanese Yen </td>
                              <td>EUR 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>GBPJPY</td>
                              <td>British Pound / Japanese Yen</td>
                              <td>GBP 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>CHFJPY</td>
                              <td>Swiss Franc / Japanese Yen</td>
                              <td>CHF 100,000</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>AUDJPY</td>
                              <td>Australian Dollar / Japanese Yen</td>
                              <td>AUD 100,000</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            {/* <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 0.5,
                width: "100vw",
                borderColor: "grey"
              }}
            /> */}
          </div>

          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
