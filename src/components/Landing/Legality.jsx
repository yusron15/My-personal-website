import React from "react";
import { LangContext } from "../MyContext";

// reactstrap components
import {
  Badge,
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
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import { isMobile } from "react-device-detect";
import bappebti from "../../assets/img/legalitas1.png";
import jfx from "../../assets/img/legalitas2.png";
import icdx from "../../assets/img/legalitas3.png";
import kbi from "../../assets/img/legalitas4.png";
import ich from "../../assets/img/legalitas5.png";
import bglegalitas from "../../assets/img/bg-legalitas.png";
import DarkNavbar from "../../components/Navbars/DarkNavbar.jsx";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

class Projects extends React.Component {
  state = {
    activeTab: "1",
    content: [
      {
        bappebti:
          "BAPPEBTI (Badan Pengawas Perdagangan Berjangka Komoditi) merupakan institusi pemerintah yang berada di bawah naungan Kementerian Perdagangan Republik Indonesia dan bertugas untuk menerbitkan izin usaha baik bagi perusahaan maupun perorangan, membuat peraturan dan tata tertib, melakukan inspeksi dan kontrol terhadap seluruh aktivitas dalam industri pialang berjangka. PT. Topgrowth Futures beroperasi berdasarkan izin dan berada di bawah pengawasan BAPPEBTI, dengan Nomor Izin: No. 300/BAPPEBTI/SI/III/2004."
      },
      {
        jfx:
          "PT. Bursa Berjangka Jakarta (BBJ) merupakan bursa berjangka komoditi pertama di Indonesia yang bertugas menyediakan fasilitas bagi anggota untuk melaksanakan transaksi kontrak-kontrak berjangka. BBJ didirikan pada tanggal 19 Agustus 1999 di Jakarta oleh 29 perusahaan berbentuk Perseroan Terbatas (PT) sesuai PP No 9/99, dan telah memulai perdagangan perdana sejak 15 Desember 2000. PT. Topgrowth Futures merupakan perusahaan pialang berjangka dengan nomor keanggotaan BBJ: SPAB-059/BBJ/01/04."
      },
      {
        kbi:
          "PT. Kliring Berjangka Indonesia (KBI) adalah perusahaan Badan Usaha Milik Pemerintah (BUMN) yang berfungsi sebagai lembaga Kliring dan Penjaminan berdasarkan keputusan BAPPEBTI dengan nomor No.128/BAPPEBTI/IX/2001. Seluruh penyelesaian transaksi kontrak berjangka yang didaftarkan oleh anggota kliring dilaksanakan oleh KBI. Selain sebagai pialang anggota bursa, PT. Topgrowth Futures juga merupakan anggota dari Kliring Berjangka Indonesia dengan nomor: 21/AK-KBI/III/2004"
      },
      {
        ich:
          "PT. Kliring Berjangka Indonesia (KBI) adalah perusahaan Badan Usaha Milik Pemerintah (BUMN) yang berfungsi sebagai lembaga Kliring dan Penjaminan berdasarkan keputusan BAPPEBTI dengan nomor No.128/BAPPEBTI/IX/2001. Seluruh penyelesaian transaksi kontrak berjangka yang didaftarkan oleh anggota kliring dilaksanakan oleh KBI. Selain sebagai pialang anggota bursa, PT. Topgrowth Futures juga merupakan anggota dari Kliring Berjangka Indonesia dengan nomor: 21/AK-KBI/III/2004"
      },
      {
        icdx:
          "PT. Bursa Komoditi dan Derivatif Indonesia merupakan bursa berjangka kedua berdiri di Indonesia dan memiliki fungsi menjadi penyedia sarana bagi anggotanya untuk melaksanakan transaksi kontrak berjangka. BKDI mendapatkan izin sebagai bursa dengan No. 26/BAPPEBTI/KP/6/2009, dan telah memulai perdagangan perdana sejak 30 November 2009. PT. Topgrowth Futures adalah perusahaan pialang berjangka anggota dari Bursa Komoditi dan Derivatif Indonesia (BKDI) dengan nomor: 047/SPKB/ICDX/Dir/IX/2010."
      }
    ]
  };

  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="projects">
            {/* ********* PROJECTS 2 ********* */}
            <div
              className="project-raised broken-white"
              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <DarkNavbar />
              <Container
                style={{
                  height: "100vh",
                  minWidth: "100vw",
                  backgroundSize: "cover",
                  backgroundImage: `url(${bglegalitas})`
                }}
              >
                <Row>
                  <Col className="ml-auto mr-auto text-center" lg="8">
                    <h2 className="title font-black">
                      {this.props.pageStore.Landing.Legality.header}
                    </h2>
                    <div className="section-space" />
                  </Col>
                </Row>
                <Col>
                  <Col>
                    <TabContent
                      className="tab-space"
                      activeTab={"project" + this.state.activeTab}
                    >
                      <TabPane tabId="project1" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[0]
                                .title
                            }
                          </h2>
                          <p className="description mb-5 font-black">
                            {/* {this.state.content[0].bappebti} */}
                            {
                              this.props.pageStore.Landing.Legality.content[0]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project2" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {
                                this.props.pageStore.Landing.Legality.content[1]
                                  .title
                              }
                            </h2>
                            {
                              this.props.pageStore.Landing.Legality.content[1]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project3" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {
                                this.props.pageStore.Landing.Legality.content[2]
                                  .title
                              }
                            </h2>
                            {
                              this.props.pageStore.Landing.Legality.content[2]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project4" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[3]
                                .title
                            }
                          </h2>
                          <p className="description mb-5 font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[3]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project5" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[4]
                                .title
                            }
                          </h2>
                          <p className="description mb-5 font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[4]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                    </TabContent>
                  </Col>
                  <Col style={{ marginTop: "25vh" }}>
                    <Nav
                      className="nav-pills-info nav-pills-icons nav-pills-lg"
                      pills
                      role="tablist"
                    >
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "1"
                                ? require('"../../assets/img/colored-bappebti.png')
                                : require('"../../assets/img/grey-bappebti.png')
                            }
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "1" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "1" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "2"
                                ? require('"../../assets/img/colored-jfx.png')
                                : require('"../../assets/img/grey-jfx.png')
                            }
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "2" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "2" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("2");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "3"
                                ? require('"../../assets/img/colored-kbi.png')
                                : require('"../../assets/img/grey-kbi.png')
                            }
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "3" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "3" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("3");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "4"
                                ? require('"../../assets/img/colored-ich.png')
                                : require('"../../assets/img/grey-ich.png')
                            }
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "4" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "4" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("4");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "5"
                                ? require('"../../assets/img/colored-icdx.png')
                                : require('"../../assets/img/grey-icdx.png')
                            }
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "5" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "5" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("5");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                    </Nav>
                  </Col>
                </Col>
              </Container>
            </div>
            {/* ********* END PROJECTS 2 ********* */}
          </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="projects">
                {/* ********* PROJECTS 2 ********* */}
                <div
                  className="project-raised broken-white"
                  // style={{ backgroundColor: "#D4D4D4" }}
                >
                  <DarkNavbar />
                  <Container
                    style={{
                      height: "75vh",
                      minWidth: "100vw",
                      backgroundSize: "cover",
                      backgroundImage: `url(${bglegalitas})`
                    }}
                  >
                    <Row>
                      <Col className="ml-auto mr-auto text-center" lg="8">
                        <h2 className="title font-black">
                          {this.props.pageStore.Landing.Legality.header}
                        </h2>
                        <div className="section-space" />
                      </Col>
                    </Row>

                    <TabContent
                      className="tab-space"
                      activeTab={"project" + this.state.activeTab}
                    >
                      <TabPane tabId="project1" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[0]
                                .title
                            }
                          </h2>
                          <p className="description mb-5 font-black">
                            {/* {this.state.content[0].bappebti} */}
                            {
                              this.props.pageStore.Landing.Legality.content[0]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project2" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {
                                this.props.pageStore.Landing.Legality.content[1]
                                  .title
                              }
                            </h2>
                            {
                              this.props.pageStore.Landing.Legality.content[1]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project3" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {
                                this.props.pageStore.Landing.Legality.content[2]
                                  .title
                              }
                            </h2>
                            {
                              this.props.pageStore.Landing.Legality.content[2]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project4" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[3]
                                .title
                            }
                          </h2>
                          <p className="description mb-5 font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[3]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project5" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[4]
                                .title
                            }
                          </h2>
                          <p className="description mb-5 font-black">
                            {
                              this.props.pageStore.Landing.Legality.content[4]
                                .content
                            }
                          </p>
                        </Col>
                      </TabPane>
                    </TabContent>

                    <Nav
                      className="nav-pills-info nav-pills-icons nav-pills-lg"
                      pills
                      role="tablist"
                    >
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "1"
                                ? require('"../../assets/img/colored-bappebti.png')
                                : require('"../../assets/img/grey-bappebti.png')
                            }
                            width={this.state.activeTab === "1" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "1" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("1");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "2"
                                ? require('"../../assets/img/colored-jfx.png')
                                : require('"../../assets/img/grey-jfx.png')
                            }
                            width={this.state.activeTab === "2" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "2" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("2");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "3"
                                ? require('"../../assets/img/colored-kbi.png')
                                : require('"../../assets/img/grey-kbi.png')
                            }
                            width={this.state.activeTab === "3" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "3" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("3");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "4"
                                ? require('"../../assets/img/colored-ich.png')
                                : require('"../../assets/img/grey-ich.png')
                            }
                            width={this.state.activeTab === "4" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "4" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("4");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                      <NavItem className="m-auto">
                        <ScrollAnimation
                          animateIn="fadeInUp"
                          offset={100}
                          animateOut="fadeOutDown"
                        >
                          <img
                            src={
                              this.state.activeTab === "5"
                                ? require('"../../assets/img/colored-icdx.png')
                                : require('"../../assets/img/grey-icdx.png')
                            }
                            width={this.state.activeTab === "5" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "5" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("5");
                            }}
                          />
                        </ScrollAnimation>
                      </NavItem>
                    </Nav>
                  </Container>
                </div>
                {/* ********* END PROJECTS 2 ********* */}
              </div>{" "}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  };

  render() {
    // console.log(this.state.content[2].kbi);
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
