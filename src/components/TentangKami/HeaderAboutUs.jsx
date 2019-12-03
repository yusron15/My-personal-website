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

import "../../../src/App.css";

import tentangkami from "../../assets/img/tentangkamiheader.png";
import ColoredNavbar from "../Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "components/Navbars/BlurryNavbar";

import "../../assets/css/main.css";

class HeaderAboutUs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="headers">
          {/* ********* HEADER 6 ********* */}
          <div
            className="header header-6 image-overlay"
            // style={{ backgroundColor: "#1D1E1F" }}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <BlurryNavbar />
            <ColoredNavbar />
            <div className="page-header">
              <div className="content-center">
                <Container>
                  <Row className="align-items-center text-left">
                    <Col lg="6" xs="12">
                      <h1
                        className="title font-black"
                        style={{ color: "black" }}
                      >
                        Tentang <br /> Topgrowth Future
                      </h1>
                      <p
                        className="description font-black"
                        style={{ color: "black" }}
                      >
                        Didirikan sejak tahun 2003, Topgrowth Futures telah
                        berkembang menjadi perusahaan pialang terbaik dan
                        terbesar di Indonesia yang menyediakan layanan transaksi
                        produk forex, index, dan komoditi dengan ekspansi yang
                        kompetitif.
                        <br />
                        Topgrowth Futures merupakan perusahaan yang telah diakui
                        secara hukum dan mendapat penghargaan, baik dari sisi
                        kepatuhan hukum maupun kinerja keuangan, serta
                        beroperasi atas izin resmi dan berada di bawah
                        pengawasan BAPPEBTI.
                        <br />
                        Topgrowth Futures menyediakan fasilitas online trading
                        di pasar valuta asing dan derivatif dunia serta
                        berencana untuk memanfaatkan potensi pasar komoditi
                        Indonesia yang sudah terkenal sejak dahulu.
                        <br />
                        Bagi masyarakat Indonesia yang sudah terbiasa
                        bertransaksi dengan teknologi trading online,
                        kecanggihan platform Topgrowth Online Trading akan
                        menjadi tempat yang tepat bagi para investor maupun
                        nasabah.
                      </p>
                    </Col>
                    <Col lg="6" xs="12">
                      <img src={tentangkami} />
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          {/* ********* END HEADER 6 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default HeaderAboutUs;
