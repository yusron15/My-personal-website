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
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import check from "../../assets/img/Check.png";
import dollar from "../../assets/img/header-rekening.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
class Content extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          <div
            // className="projects-3"
            style={{
              backgroundImage: "url(" + require("assets/img/dollar.png") + ")",
              backgroundSize: "cover",
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              minHeight: "80vh"
            }}
          >
            <div
              className="team-1 background-header"
              style={{
                backgroundImage: `url(${dollar})`,
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />
              <div className="title title-header">Rekening Terpisah</div>
            </div>
            <div
              className="team-1 broken-white"
              style={{ height: "70vh", padding: 0 }}
            >
              <Col>
                <Row style={{ marginLeft: "10%" }}>
                  <Col md="8">
                    <h1
                      className="title"
                      style={{
                        fontStyle: "Helvetica Bold",
                        // fontSize: "2.5rem",
                        fontWeight: "bold",
                        color: "black"
                      }}
                    >
                      Rekening Terpisah
                    </h1>
                    <p className="font-black" style={{ lineHeight: "25px" }}>
                      Rekening Terpisah (Segregated Account) adalah sebuah
                      rekening bank atas nama perusahaan pialang berjangka yang
                      difungsikan khusus untuk menampung dana kolektif semua
                      nasabah dalam suatu perusahaan pialang berjangka dan hanya
                      digunakan untuk keperluan transaksi nasabah yang terpisah
                      dari rekening operasional perusahaan. Rekening ini diawasi
                      secara ketat dan berkala oleh Badan Pengawas Perdagangan
                      Berjangka Komoditi (BAPPEBTI).
                      <br />
                      Berikut ini adalah rekening terpisah resmi yang dimiliki
                      oleh PT. Topgrowth Futures:
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginLeft: "10%" }}>
                  <Col md="4">
                    <Row>
                      <Col md="2">
                        <img src={check} />
                      </Col>
                      <Col>
                        <p
                          className="font-black"
                          style={{ lineHeight: "25px" }}
                        >
                          BCA RUPIAH Nomor Akun // Account Number: 035.311.8568
                          Swiftcode: CENAIDJA a.n. // Account Name: PT.
                          Topgrowth Futures
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4">
                    <Row>
                      <Col md="2">
                        <img src={check} />
                      </Col>
                      <Col>
                        <p
                          className="font-black"
                          style={{ lineHeight: "25px" }}
                        >
                          BCA Dollar Nomor Akun: // Account Number: 035.317.7718
                          Swiftcode: CENAIDJA a.n. // Account Name: PT.
                          Topgrowth Futures
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Content;
