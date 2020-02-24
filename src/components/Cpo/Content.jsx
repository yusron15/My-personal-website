import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem
} from "reactstrap";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import { LangContext } from "../MyContext";
import ScrollAnimation from "react-animate-on-scroll";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import rightButton from "../../assets/img/right-blue-arrow.png";
import leftButton from "../../assets/img/left-blue-arrow.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg from "../../assets/img/bg-cfd.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import { TableContent3, TableContent4, TableContent5 } from "../Table/Table";

import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.4rem"
};

const textDesc = {
  color: "black",
  fontSize: "1rem",
  textAlign: "justify"
};

const titleTable = {
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  fontSize: "1rem"
};

const descHeader = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  margin: 0,
  fontSize: "1rem",
  color: "white"
};

const text = {
  // fontWeight: "bold",
  color: "black",
  textAlign: "center",
  fontSize: "1rem"
};

class Content extends React.Component {
  state = {
    activeIndex: 0
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section broken-white" id="features">
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage:
                  "url(" + this.props.pageStore.cpo.image_background + ")",
                padding: 0
              }}
            >
              <SidebarMobile />
              {/* <BlurryNavbar /> */}

              <div className="title-header-mobile">
                {this.props.pageStore.cpo.header}
              </div>
              <Container>
                <div style={descHeader}>
                  {ReactHtmlParser(this.props.pageStore.cpo.sub_header)}
                </div>
              </Container>
            </div>

            <div className="team-1 broken-white">
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.cpo.content.title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description font-black" style={textDesc}>
                      {ReactHtmlParser(
                        this.props.pageStore.cpo.content.content
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>Bursa ICDX</div>
                  </Col>
                  <Col md="12">
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
                                : "Sellers and buyers can submit by: Exchange for Physical (EFP) or Alternative Delivery Procedure (ADP); aside from the aforementioned procedures, sellers and buyers agree to settle in cash"}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
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
                            <b>O L E I N</b>
                          </td>
                          <td className="text-white text-center">
                            <b>BBJ</b>
                          </td>
                          <td className="text-white text-center">
                            <b>ICDX</b>
                          </td>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#d1d1d1" }}>
                        <tr>
                          <td style={text}>Kode Kontrak</td>
                          <td style={text}>OLEJFX</td>
                          <td style={text}>OLE10</td>
                          <td style={text}>OLEINTR</td>
                        </tr>
                        <tr>
                          <td style={text}>Satuan Kontrak</td>
                          <td style={text}>20 Ton (20.000 Kg)</td>
                          <td style={text}>10 Ton (10.000 Kg)</td>
                          <td style={text}>10 Ton (10.000 Kg)</td>
                        </tr>
                        <tr>
                          <td colspan="2" style={text}>
                            Denominasi
                          </td>
                          <td style={text}>IDR</td>
                          <td style={text}>IDR</td>
                        </tr>
                        <tr>
                          <td colspan="2" style={text}>
                            Minimum Perubahan Harga (Tick Size)
                          </td>
                          <td style={text}>Rp. 5/Kg</td>
                          <td style={text}>Rp. 5/Kg</td>
                        </tr>
                        <tr>
                          <td colspan="2" style={text}>
                            Bulan Kontrak
                          </td>
                          <td style={text}>6 bulan berturut-turut</td>
                          <td style={text}>12 bulan berurutan</td>
                        </tr>
                        <tr>
                          <td colspan="2" style={text}>
                            Waktu Perdagangan
                          </td>
                          <td style={text}>09:30 – 17:30</td>
                          <td style={text}>09.30 – 17.00</td>
                        </tr>
                        <tr>
                          <td colspan="4" style={text}>
                            Mutu Standar Pasar
                          </td>
                        </tr>
                        <tr>
                          <td style={text}>Free Fatty Acids (FFA)</td>
                          <td style={text}>≤ 0.15%</td>
                          <td style={text}>AOCS Method Ca 5a-40</td>
                          <td style={text}>maks 0.1%</td>
                        </tr>
                        <tr>
                          <td style={text}>Moisture & Impurities</td>
                          <td style={text}>≤ 0.1%</td>
                          <td style={text}>
                            AOCS Method Ca 2b-38 AOCS Method Ca 3a-46
                          </td>
                          <td style={text}>maks. 0,1%</td>
                        </tr>
                        <tr>
                          <td style={text}>Iodine Value (WIJS)</td>
                          <td style={text}>≥ 56</td>
                          <td style={text}>AOCS Method Cd 1d-92</td>
                          <td style={text}>min. 56</td>
                        </tr>
                        <tr>
                          <td style={text}>Warna Merah (Lovibond 5.25”)</td>
                          <td style={text}>≤ 4 Red</td>
                          <td style={text}>AOCS Method Cc 13b-45</td>
                          <td style={text}>maks. 4 Mera</td>
                        </tr>
                        <tr>
                          <td style={text}>Slip Melt Point</td>
                          <td style={text}>≤ 24°C</td>
                          <td style={text}>AOCS Method Cc 1-25</td>
                          <td style={text}>maks. 24⁰C</td>
                        </tr>
                        <tr>
                          <td style={text}>Cloud Point</td>
                          <td style={text}>10.75°C</td>
                          <td style={text}></td>
                          <td style={text}></td>
                        </tr>
                        <tr>
                          <td style={text}>Satuan Penyerahan Minimum</td>
                          <td style={text}></td>
                          <td colspan="2" style={text}>
                            2 lot (20 Metric Ton) dengan toleransi +/- 2%
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* ********* END TEAM 1 ********* */}
          </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section broken-white" id="teams">
                {/* ********* TEAM 1 ********* */}
                <div
                  className="team-1 background-header"
                  style={{
                    backgroundImage:
                      "url(" + this.props.pageStore.cpo.image_background + ")",
                    padding: 0
                  }}
                >
                  <BlurryNavbar />
                  <ColoredNavbar location={{ ...this.props.location }} />
                  <div className="title title-header">
                    {this.props.pageStore.cpo.header}
                  </div>
                  <Container>
                    <div
                      style={{ textAlign: "center" }}
                      className="subheader font-white"
                    >
                      {this.props.pageStore.cpo.sub_header}
                    </div>
                  </Container>
                </div>
                <div className="team-1 broken-white">
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {this.props.pageStore.cpo.content.title}
                        </div>
                      </Col>
                      <Col md="12">
                        <div
                          className="description font-black"
                          style={textDesc}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.cpo.content.content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>Bursa ICDX</div>
                      </Col>
                      <Col md="12">
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
                                  : "Sellers and buyers can submit by: Exchange for Physical (EFP) or Alternative Delivery Procedure (ADP); aside from the aforementioned procedures, sellers and buyers agree to settle in cash"}
                              </td>
                            </tr>
                          </tbody>
                        </Table>

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
                                <b>O L E I N</b>
                              </td>
                              <td className="text-white text-center">
                                <b>BBJ</b>
                              </td>
                              <td className="text-white text-center">
                                <b>ICDX</b>
                              </td>
                            </tr>
                          </thead>
                          <tbody style={{ backgroundColor: "#d1d1d1" }}>
                            <tr>
                              <td style={text}>Kode Kontrak</td>
                              <td style={text}>OLEJFX</td>
                              <td style={text}>OLE10</td>
                              <td style={text}>OLEINTR</td>
                            </tr>
                            <tr>
                              <td style={text}>Satuan Kontrak</td>
                              <td style={text}>20 Ton (20.000 Kg)</td>
                              <td style={text}>10 Ton (10.000 Kg)</td>
                              <td style={text}>10 Ton (10.000 Kg)</td>
                            </tr>
                            <tr>
                              <td colspan="2" style={text}>
                                Denominasi
                              </td>
                              <td style={text}>IDR</td>
                              <td style={text}>IDR</td>
                            </tr>
                            <tr>
                              <td colspan="2" style={text}>
                                Minimum Perubahan Harga (Tick Size)
                              </td>
                              <td style={text}>Rp. 5/Kg</td>
                              <td style={text}>Rp. 5/Kg</td>
                            </tr>
                            <tr>
                              <td colspan="2" style={text}>
                                Bulan Kontrak
                              </td>
                              <td style={text}>6 bulan berturut-turut</td>
                              <td style={text}>12 bulan berurutan</td>
                            </tr>
                            <tr>
                              <td colspan="2" style={text}>
                                Waktu Perdagangan
                              </td>
                              <td style={text}>09:30 – 17:30</td>
                              <td style={text}>09.30 – 17.00</td>
                            </tr>
                            <tr>
                              <td colspan="4" style={text}>
                                Mutu Standar Pasar
                              </td>
                            </tr>
                            <tr>
                              <td style={text}>Free Fatty Acids (FFA)</td>
                              <td style={text}>≤ 0.15%</td>
                              <td style={text}>AOCS Method Ca 5a-40</td>
                              <td style={text}>maks 0.1%</td>
                            </tr>
                            <tr>
                              <td style={text}>Moisture & Impurities</td>
                              <td style={text}>≤ 0.1%</td>
                              <td style={text}>
                                AOCS Method Ca 2b-38 AOCS Method Ca 3a-46
                              </td>
                              <td style={text}>maks. 0,1%</td>
                            </tr>
                            <tr>
                              <td style={text}>Iodine Value (WIJS)</td>
                              <td style={text}>≥ 56</td>
                              <td style={text}>AOCS Method Cd 1d-92</td>
                              <td style={text}>min. 56</td>
                            </tr>
                            <tr>
                              <td style={text}>Warna Merah (Lovibond 5.25”)</td>
                              <td style={text}>≤ 4 Red</td>
                              <td style={text}>AOCS Method Cc 13b-45</td>
                              <td style={text}>maks. 4 Mera</td>
                            </tr>
                            <tr>
                              <td style={text}>Slip Melt Point</td>
                              <td style={text}>≤ 24°C</td>
                              <td style={text}>AOCS Method Cc 1-25</td>
                              <td style={text}>maks. 24⁰C</td>
                            </tr>
                            <tr>
                              <td style={text}>Cloud Point</td>
                              <td style={text}>10.75°C</td>
                              <td style={text}></td>
                              <td style={text}></td>
                            </tr>
                            <tr>
                              <td style={text}>Satuan Penyerahan Minimum</td>
                              <td style={text}></td>
                              <td colspan="2" style={text}>
                                2 lot (20 Metric Ton) dengan toleransi +/- 2%
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END TEAM 1 ********* */}
              </div>{" "}
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

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
