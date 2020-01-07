import React from "react";

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
import ScrollAnimation from "react-animate-on-scroll";
import fg1 from "../../assets/img/forex.png";
import fg2 from "../../assets/img/forex2.png";
import fg3 from "../../assets/img/forexgold3.png";
import bg from "../../assets/img/forex-header.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import { styles } from "react-animations/lib/swing";

const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "black"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  fontSize: "1rem",
  color: "black"
};

const intermezzo = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  margin: 0,
  fontSize: "1rem",
  color: "black"
};

class Features extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section broken-white"
          id="features"
          // style={{ backgroundColor: "#D4D4D4" }}
        >
          {/* ********* FEATURES 3 ********* */}
          <BlurryNavbar />
          <div
            className="team-1 background-header"
            style={{
              backgroundImage: `url(${bg})`
            }}
          >
            <div className="title title-header">Forex</div>
          </div>
          <div className="features-3" style={{ paddingTop: 0 }}>
            <Container fluid>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  {/* <div
                    // className="title"
                    style={textTitle}
                  >
                    FOREX
                  </div> */}
                  <div className="space-50" />
                  <p style={intermezzo}>
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
                      <ScrollAnimation
                        animateIn="fadeInLeft"
                        animateOut="fadeOut"
                      >
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." className="img rounded" src={fg1} />
                          </a>
                        </div>
                      </ScrollAnimation>
                    </Col>
                    <Col lg="8">
                      <div style={textContent}>
                        <ScrollAnimation
                          animateIn="fadeInRight"
                          animateOut="fadeOut"
                        >
                          <div
                            className="title-content"
                            style={{ color: "black" }}
                          >
                            KEUNTUNGAN TRANSAKSI FOREX
                          </div>
                          <p style={{ color: "black", textAlign: "justify" }}>
                            Likuiditas tinggi karena selalu adanya penawaran dan
                            permintaan, Potensi keuntungan dua arah yang
                            didapatkan pada saat harga naik maupun turun karena
                            tidak adanya batasan untuk perdagangan terarah,
                            Biaya investasi awal yang relatif rendah karena
                            forex diperdagangkan dengan leverage, Transparansi
                            akibat berdagang secara langsung dengan pasar yang
                            bertanggung jawab atas harga pasangan mata uang,
                            Biaya perdagangan yang rendah karena biaya tersebut
                            dihitung ke dalam spread, Dapat dilakukan di manapun
                            dan kapanpun selama ada koneksi internet.
                          </p>{" "}
                        </ScrollAnimation>
                      </div>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: "50px" }}>
                    <Col lg="8">
                      <div style={textContent}>
                        <ScrollAnimation
                          animateIn="fadeInLeft"
                          animateOut="fadeOut"
                        >
                          <div
                            className="title-content"
                            style={{ color: "black" }}
                          >
                            KEUNTUNGAN TRANSAKSI FOREX
                          </div>
                          <p style={{ color: "black", textAlign: "justify" }}>
                            Likuiditas tinggi karena selalu adanya penawaran dan
                            permintaan, Potensi keuntungan dua arah yang
                            didapatkan pada saat harga naik maupun turun karena
                            tidak adanya batasan untuk perdagangan terarah,
                            Biaya investasi awal yang relatif rendah karena
                            forex diperdagangkan dengan leverage, Transparansi
                            akibat berdagang secara langsung dengan pasar yang
                            bertanggung jawab atas harga pasangan mata uang,
                            Biaya perdagangan yang rendah karena biaya tersebut
                            dihitung ke dalam spread, Dapat dilakukan di manapun
                            dan kapanpun selama ada koneksi internet.
                          </p>{" "}
                        </ScrollAnimation>
                      </div>
                    </Col>
                    <Col lg="4">
                      <ScrollAnimation
                        animateIn="fadeInRight"
                        animateOut="fadeOut"
                      >
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." className="img rounded" src={fg2} />
                          </a>
                        </div>
                      </ScrollAnimation>
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
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div style={textTitle}>Ragam Produk Forex</div>
                          <p style={intermezzo}>
                            Trading forex dengan TOPGROWTH memberi Anda akses
                            untuk bertransaksi ke banyak produk valuta asing,
                            terlepas dari apakah Anda mengunduh Pro-I Trading
                            pada PC atau Mac Anda, bertransaksi menggunakan
                            gadget Anda melalui Pro-I Trader yang tersedia untuk
                            Android maupun iOS, atau melakukan transaksi melalui
                            telepon.
                            <br />
                            <br />
                            Di bawah ini adalah ragam pasangan mata uang yang
                            dapat Anda perdagangkan.
                          </p>{" "}
                        </ScrollAnimation>
                      </div>

                      <div style={{ marginTop: "20px" }}>
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

                      <div style={{ marginTop: "20px" }}>
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
