import React from "react";
import { LangContext } from "../MyContext";
import { Container, Row, Col, Table } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import "../../assets/css/main.css";
const textTitle = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.4rem"
};

const textTitleSub = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.2rem",
  marginTop: "20px"
};

const textDesc = {
  color: "black",
  fontSize: "1rem",
  textAlign: "justify"
};

const text = {
  // fontWeight: "bold",
  color: "black",
  textAlign: "center",
  fontSize: "1rem"
};

const textLeft = {
  color: "black",
  textAlign: "left",
  fontSize: "1rem"
};
class Content extends React.Component {
  async componentDidMount() {
    await this.props.getContent("Komoditi", "id");
  }

  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    color: "#FFFFFF",
    komoditi: require('"../../assets/img/komoditi-black.png'),
    money: require('"../../assets/img/money-black.png'),
    shield: require('"../../assets/img/shield-black.png')
  };

  handleIncreaseEnter = () => {
    this.setState({
      komoditi: require('"../../assets/img/komoditi-white.png')
    });
  };

  handleIncreaseLeave = () => {
    this.setState({
      komoditi: require('"../../assets/img/komoditi-black.png')
    });
  };

  handleMoneyEnter = () => {
    this.setState({
      money: require('"../../assets/img/money-white.png')
    });
  };

  handleMoneyLeave = () => {
    this.setState({ money: require('"../../assets/img/money-black.png') });
  };

  handleShieldEnter = () => {
    this.setState({
      shield: require('"../../assets/img/shield-white.png')
    });
  };

  handleShieldLeave = () => {
    this.setState({ shield: require('"../../assets/img/shield-black.png') });
  };

  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="testimonials">
                <div
                  className="testimonials-4 broken-white"
                  style={{
                    // backgroundColor: "#D4D4D4",
                    backgroundSize: "cover",
                    paddingTop: 0
                  }}
                >
                  <Container>
                    <div className="space-50" />
                    <div style={textTitle}>
                      {ReactHtmlParser(
                        this.props.pageStore.Komoditi.contentList4.title
                      )}
                    </div>
                    <div className="font-black" style={textDesc}>
                      {ReactHtmlParser(
                        this.props.pageStore.Komoditi.contentList4.content
                      )}
                    </div>
                    <div className="space-50" />
                    <div style={textTitle}>Bursa ICDX</div>
                    <div style={{ overflow: "scroll" }}>
                      <Table
                        className="table-shopping"
                        style={{
                          backgroundColor: "#1565ff",
                          borderRadius: "5px",
                          borderCollapse: "inherit"
                        }}
                      >
                        <thead>
                          <tr style={{ backgroundColor: "#1565ff" }}>
                            <td className="text-white text-center">
                              <b>
                                {this.props.currentLang === "ID"
                                  ? "Kode Kontrak"
                                  : "Code Contract"}
                              </b>
                            </td>
                            <td className="text-white text-center">
                              <b>
                                {this.props.currentLang === "ID"
                                  ? "Denominasi"
                                  : "Denomination"}
                              </b>
                            </td>
                            <td className="text-white text-center">
                              <b>
                                {this.props.currentLang === "ID"
                                  ? "Satuan Kontrak"
                                  : "Contract Unit"}
                              </b>
                            </td>
                            <td className="text-white text-center">
                              <b>
                                {this.props.currentLang === "ID"
                                  ? "Minimum Perubahan Harga (Tick Size)"
                                  : "Minimum Price Change (Tick Size)"}
                              </b>
                            </td>
                            <td className="text-white text-center">
                              <b>
                                {this.props.currentLang === "ID"
                                  ? "Settlement-to-Market "
                                  : "Settlement-to-Market "}
                              </b>
                            </td>
                            <td className="text-white text-center">
                              <b>
                                {this.props.currentLang === "ID"
                                  ? "Kualitas"
                                  : "Quality"}
                              </b>
                            </td>
                          </tr>
                        </thead>
                        <tbody style={{ backgroundColor: "#d1d1d1" }}>
                          <tr>
                            <td style={text}>CPOTR</td>
                            <td style={text}>IDR</td>
                            <td style={text}>10 Metric Ton (10.000 kg)</td>
                            <td style={text}>Rp. 5,- per Kg</td>
                            <td style={text}>
                              {this.props.currentLang === "ID"
                                ? "Penjual dan pembeli dapat melakukan penyerahan dengan cara: • Exchange-for-Physical (EFP); atau • Alternative Delivery Procedure (ADP) Diluar cara tersebut di atas, penjual dan pembeli sepakat untuk menyelesaikan secara tunai"
                                : "Sellers and buyers can submit by: Exchange for Physical (EFP) or Alternative Delivery Procedure (ADP); aside from the aforementioned procedures, sellers and buyers agree to settle in cash"}
                            </td>
                            <td style={text}>
                              {this.props.currentLang === "ID"
                                ? "§ Asam Lemak Bebas (Free Fatty Acid) maks 4,5%; Tingkat Kelembaban dan Kotoran (Moisture and Impurities) maks. 0,5%"
                                : "§ Free Fatty Acid max. 4.5%; Moisture and Impurities max. 0.5%"}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                    <div style={{ overflow: "scroll" }}>
                      <Table
                        className="table-shopping"
                        style={{
                          backgroundColor: "#1565ff",
                          borderRadius: "5px",
                          borderCollapse: "inherit"
                        }}
                      >
                        <thead>
                          <tr style={{ backgroundColor: "#1565ff" }}>
                            <td className="text-white">
                              <b>O L E I N</b>
                            </td>
                            <td className="text-white" colspan="2">
                              <b>BBJ</b>
                            </td>
                            <td className="text-white">
                              <b>ICDX</b>
                            </td>
                          </tr>
                        </thead>
                        <tbody style={{ backgroundColor: "#d1d1d1" }}>
                          <tr width="100%">
                            <td width="25%" style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Satuan Kontrak"
                                : "Contract Unit "}
                            </td>
                            <td width="25%" style={text}>
                              OLEJFX
                            </td>
                            <td width="25%" style={text}>
                              OLE10
                            </td>
                            <td width="25%" style={text}>
                              OLEINTR
                            </td>
                          </tr>
                          <tr>
                            <td style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Kode Kontrak"
                                : "Code Contract"}
                            </td>
                            <td style={text}>20 Ton (20.000 Kg)</td>
                            <td style={text}>10 Ton (10.000 Kg)</td>
                            <td style={text}>10 Ton (10.000 Kg)</td>
                          </tr>
                          <tr width="100%">
                            <td width="33%" style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Denominasi"
                                : "Denomination"}
                            </td>
                            <td width="33%" colspan="2" style={text}>
                              IDR
                            </td>
                            <td width="33%" style={text}>
                              IDR
                            </td>
                          </tr>
                          <tr>
                            <td style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Minimum Perubahan Harga (Tick Size)"
                                : "Minimum Price Change (Tick Size) "}
                            </td>
                            <td style={text} colspan="2">
                              Rp. 5/Kg
                            </td>
                            <td style={text}>Rp. 5/Kg</td>
                          </tr>
                          <tr>
                            <td style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Bulan Kontrak"
                                : "Contract Term"}
                            </td>
                            <td style={text} colspan="2">
                              {this.props.currentLang === "ID"
                                ? "6 bulan berturut-turut"
                                : "6 months in a row"}
                            </td>
                            <td style={text}>
                              {this.props.currentLang === "ID"
                                ? "12 bulan berturut-turut"
                                : "12 months in a row"}
                            </td>
                          </tr>
                          <tr>
                            <td style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Waktu Perdagangan"
                                : "Trading Hours"}
                            </td>
                            <td style={text} colspan="2">
                              09:30 – 17:30
                            </td>
                            <td style={text}>09.30 – 17.00</td>
                          </tr>
                          <tr>
                            <td colspan="4" style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Mutu Standar Pasar"
                                : "Quality Standards"}
                            </td>
                          </tr>
                          <tr>
                            <td style={textLeft}>Free Fatty Acids (FFA)</td>
                            <td style={text}>≤ 0.15%</td>
                            <td style={text}>AOCS Method Ca 5a-40</td>
                            <td style={text}>
                              {this.props.currentLang === "ID"
                                ? "Maks 0.1%"
                                : "Max 0.1%"}
                            </td>
                          </tr>
                          <tr>
                            <td style={textLeft}>Moisture & Impurities</td>
                            <td style={text}>≤ 0.1%</td>
                            <td style={text}>
                              AOCS Method Ca 2b-38 AOCS Method Ca 3a-46
                            </td>
                            <td style={text}>maks. 0,1%</td>
                          </tr>
                          <tr>
                            <td style={textLeft}>Iodine Value (WIJS)</td>
                            <td style={text}>≥ 56</td>
                            <td style={text}>AOCS Method Cd 1d-92</td>
                            <td style={text}>Min. 56</td>
                          </tr>
                          <tr>
                            <td style={textLeft}>
                              {" "}
                              {this.props.currentLang === "ID"
                                ? "Warna Merah"
                                : "Red Colored"}
                              (Lovibond 5.25”)
                            </td>
                            <td style={text}>
                              ≤ 4{" "}
                              {this.props.currentLang === "ID"
                                ? "Merah"
                                : "Red"}
                            </td>
                            <td style={text}>AOCS Method Cc 13b-45</td>
                            <td style={text}>
                              {this.props.currentLang === "ID"
                                ? "Maks 4 Merah"
                                : "Max 4 Red"}{" "}
                            </td>
                          </tr>
                          <tr>
                            <td style={textLeft}>Slip Melt Point</td>
                            <td style={text}>≤ 24°C</td>
                            <td style={text}>AOCS Method Cc 1-25</td>
                            <td style={text}>
                              {this.props.currentLang === "ID"
                                ? "Maks. 24⁰C"
                                : "Max 24⁰C"}
                            </td>
                          </tr>
                          <tr>
                            <td style={textLeft}>Cloud Point</td>
                            <td style={text}>10.75°C</td>
                            <td style={text}></td>
                            <td style={text}></td>
                          </tr>
                          <tr>
                            <td style={textLeft}>
                              {this.props.currentLang === "ID"
                                ? "Satuan Penyerahan Minimum"
                                : "Minimum Submission Unit "}{" "}
                            </td>
                            <td style={text}></td>
                            <td style={text} colspan="2">
                              {this.props.currentLang === "ID"
                                ? " 2 lot (20 Metric Ton) dengan toleransi +/- 2%"
                                : "2 lots (20 Metric Ton) with a +/- 2% tolerance"}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <div style={textTitle}>
                      {ReactHtmlParser(
                        this.props.pageStore.Komoditi.contentList1.title
                      )}
                    </div>
                  </Container>
                  <div className="space-50" />
                  <Container fluid>
                    <Row md="12" className="justify-content-center">
                      <Col md="3">
                        <ScrollAnimation
                          delay={100}
                          offset={200}
                          animateIn="fadeInUp"
                          animateOut="fadeOut"
                        >
                          <div
                            // className="card-benefit "
                            onMouseEnter={this.handleIncreaseEnter}
                            onMouseLeave={this.handleIncreaseLeave}
                          >
                            <div
                              className="info card-komoditi"
                              style={{
                                minHeight: "400px",
                                maxWidth: "300px",
                                borderRadius: "10px",
                                justifyContent: "center"
                              }}
                            >
                              <div style={{ alignSelf: "center" }}>
                                <img
                                  src={this.state.komoditi}
                                  style={{ marginTop: "50px" }}
                                />
                              </div>
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Komoditi.contentList1
                                    .content[1].title
                                )}
                              </div>

                              <div style={{ marginLeft: "10px" }}>
                                {ReactHtmlParser(
                                  this.props.pageStore.Komoditi.contentList1
                                    .content[0].content
                                )}
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
                            // className="card-benefit "
                            onMouseEnter={this.handleMoneyEnter}
                            onMouseLeave={this.handleMoneyLeave}
                          >
                            <div
                              className="info card-komoditi"
                              style={{
                                minHeight: "400px",
                                maxWidth: "300px",
                                borderRadius: "10px",
                                justifyContent: "center"
                              }}
                            >
                              <div style={{ alignSelf: "center" }}>
                                <img
                                  src={this.state.money}
                                  style={{ marginTop: "50px" }}
                                />
                              </div>
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Komoditi.contentList1
                                    .content[1].title
                                )}
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                {ReactHtmlParser(
                                  this.props.pageStore.Komoditi.contentList1
                                    .content[1].content
                                )}
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
                            // className="card-benefit "
                            onMouseEnter={this.handleShieldEnter}
                            onMouseLeave={this.handleShieldLeave}
                          >
                            <div
                              className="info card-komoditi"
                              style={{
                                minHeight: "400px",
                                maxWidth: "300px",
                                borderRadius: "10px",
                                justifyContent: "center"
                              }}
                            >
                              <div style={{ alignSelf: "center" }}>
                                <img
                                  src={this.state.shield}
                                  style={{ marginTop: "50px" }}
                                />
                              </div>
                              <div
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: "bold",
                                  margin: "30px 0 30px 10px"
                                }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Komoditi.contentList1
                                    .content[2].title
                                )}
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                {ReactHtmlParser(
                                  this.props.pageStore.Komoditi.contentList1
                                    .content[2].content
                                )}
                              </div>
                              <div className="author"></div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>

              <div
                className="section section-footers"
                style={{ backgroundColor: "#1D1E1F" }}
              >
                {/* ********* BIG WHITE FOOTER V2 ********* */}
                {/* <Container>
                  <div className="content">
                    <h2>
                      <b>
                        {this.props.pageStore.Komoditi.footerKomoditi.title}
                      </b>
                    </h2>
                    <Row>
                      <Col md="4">
                        <p>
                          <b>
                            {
                              this.props.pageStore.Komoditi.footerKomoditi
                                .content[0].title
                            }
                          </b>
                        </p>
                        <p>
                          {
                            this.props.pageStore.Komoditi.footerKomoditi
                              .content[0].subtitle
                          }
                        </p>
                      </Col>
                      <Col md="4">
                        <p>
                          <b>
                            {
                              this.props.pageStore.Komoditi.footerKomoditi
                                .content[1].title
                            }
                          </b>
                        </p>
                        <p>
                          {
                            this.props.pageStore.Komoditi.footerKomoditi
                              .content[1].subtitle
                          }
                        </p>
                      </Col>
                      <Col md="4">
                        <p>
                          <b>
                            {
                              this.props.pageStore.Komoditi.footerKomoditi
                                .content[2].title
                            }
                          </b>
                        </p>
                        <p>
                          {
                            this.props.pageStore.Komoditi.footerKomoditi
                              .content[2].subtitle
                          }
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Container> */}
                {/* ********* END BIG WHITE FOOTER v2 ********* */}
              </div>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
