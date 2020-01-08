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
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  // Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

import "../../../src/App.css";
import ScrollAnimation from "react-animate-on-scroll";
import tentangkami from "../../assets/img/header-aboutus.png";
import ColoredNavbar from "../Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "components/Navbars/BlurryNavbar";

import "../../assets/css/main.css";

const styles = {
  fadeIn: {
    animation: "x 3s",
    // animationDuration: "2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

class HeaderAboutUs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="headers">
          {/* ********* HEADER 6 ********* */}
          <div
            className="header header-6  broken-white"

            // style={{ backgroundColor: "#1D1E1F" }}
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            <div
              className="team-1 background-header"
              style={{
                backgroundImage: `url(${tentangkami})`,
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />
              <div className="title title-header">
                Tentang Topgrowth Futures
              </div>
            </div>
            {/* <div className="page-header" style={{ minHeight: "50vh" }}> */}
            <div className="content-center broken-white">
              <Container>
                <Row className="align-items-center text-left">
                  <Col lg="12" xs="12">
                    {/* <ScrollAnimation
                        animateIn="fadeInDown"
                        delay={300}
                        animateOut="fadeOut"
                      > */}
                    {/* <h1 className="title font-black" style={{ color: "black" }}>
                      Tentang Topgrowth Future
                    </h1> */}
                    <p
                      className="description font-black desc-text"
                      style={{
                        color: "black",
                        textAlign: "justify",
                        lineHeight: "30px"
                      }}
                    >
                      Didirikan sejak tahun 2003, Topgrowth Futures telah
                      berkembang menjadi perusahaan pialang terbaik dan terbesar
                      di Indonesia yang menyediakan layanan transaksi produk
                      forex, index, dan komoditi dengan ekspansi yang
                      kompetitif.
                      <br />
                      Topgrowth Futures merupakan perusahaan yang telah diakui
                      secara hukum dan mendapat penghargaan, baik dari sisi
                      kepatuhan hukum maupun kinerja keuangan, serta beroperasi
                      atas izin resmi dan berada di bawah pengawasan BAPPEBTI.
                      <br />
                      Topgrowth Futures menyediakan fasilitas online trading di
                      pasar valuta asing dan derivatif dunia serta berencana
                      untuk memanfaatkan potensi pasar komoditi Indonesia yang
                      sudah terkenal sejak dahulu.
                      <br />
                      Bagi masyarakat Indonesia yang sudah terbiasa bertransaksi
                      dengan teknologi trading online, kecanggihan platform
                      Topgrowth Online Trading akan menjadi tempat yang tepat
                      bagi para investor maupun nasabah.
                    </p>
                    {/* </ScrollAnimation> */}
                  </Col>
                  {/* <Col lg="6" xs="12">
                      <StyleRoot>
                        <div style={styles.fadeIn}>
                          <img src={tentangkami} />
                        </div>
                      </StyleRoot>
                    </Col> */}
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* ********* END HEADER 6 ********* */}
        {/* </div>{" "} */}
      </>
    );
  }
}

export default HeaderAboutUs;
