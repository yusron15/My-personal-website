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
  //   Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
class Headers extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="cd-section"
          id="headers"
          style={{
            backgroundImage:
              "url(" + require("assets/img/headerkomoditi.png") + ")",
            backgroundSize: "cover"
          }}
        >
          {/* ********* HEADER 4 w/ VIDEO ********* */}
          <BlurryNavbar />
          <div className="header header-4">
            {/* <ColoredNavbar /> */}
            <div className="header-wrapper">
              <div className="page-header" style={{ justifyContent: "center" }}>
                <div
                  style={{
                    backgroundColor: "rgba(179, 172, 172, 0.39)"
                  }}
                >
                  <Container style={{ paddingTop: 0 }}>
                    <h1 className="title text-center">KOMODITI</h1>
                    <p className="description">
                      Sebagai salah satu instrumen yang paling populer bagi
                      sebagian besar manajer investasi global, transaksi
                      komoditi mengakibatkan perputaran uang di pasar komoditas
                      menjadi cukup tinggi.
                      <br />
                      <br />
                      Komoditas dapat diinterpretasikan sebagai sesuatu dari
                      substansi fisik dan dibagi menjadi dua, yaitu komoditi
                      hasil pertambangan, seperti emas, perak, minyak dan
                      lainnya, dan komoditi hasil pertanian, seperti gula,
                      beras, kakao, kopi dan lainnya.
                      <br />
                      <br />
                      Komoditas lebih mudah dipahami karena banyak bergantung
                      pada kondisi fundamental permintaan dan penawaran.
                      Volatilitas harga komoditas lebih kecil dibandingkan saham
                      dan obligasi sehingga menyediakan pilihan diversifikasi
                      portofolio yang efisien untuk pelaku pasar. Yang membuat
                      komoditas lebih menarik dan lebih berisiko dalam transaksi
                      dibandingkan saham adalah jumlah leverage atau daya
                      ungkit. Akan tetapi pada kenyataannya, risiko perdagangan
                      di pasar komoditas tidak akan lebih dari risiko yang
                      ditentukan pengguna.
                      <br />
                      <br />
                      JFX (Jakarta Futures Exchange) dan ICDX (Indonesia
                      Commodity & Derivatives Exchange) sebagai bursa berjangka
                      di Indonesia berfungsi untuk mengembangkan pasar berjangka
                      melalui sistem yang lebih dinamis, transparan, dan likuid.
                      Transaksi multilateral memungkinkan banyak pihak untuk
                      membeli dan menjual instrumen keuangan di bursa melalui
                      sarana elektronik.
                    </p>
                  </Container>
                </div>
              </div>
            </div>
          </div>
          {/* ********* END HEADER 4 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Headers;
