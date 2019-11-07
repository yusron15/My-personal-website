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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import "../../assets/css/main.css";
class Footers extends React.Component {
  render() {
    return (
      <>
        <div
          className="section section-footers"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          
          {/* ********* BIG WHITE FOOTER V2 ********* */}
          {/* <footer className="footer footer-white footer-big"> */}
          <Container>
            <div className="content">
              <Row>
                <Col md="3">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <h4>
                      <b>PT. Topgrowth Futures</b>
                    </h4>
                    <p>
                      Didirikan sejak tahun 2003, saat ini telah berkembang
                      menjadi perusahaan pialang berjangka terbaik dan terbesar
                      di Indonesia yang menyediakan sarana serta layanan untuk
                      transaksi produk forex, index, dan komoditi dengan spread
                      yang kompetitif.
                    </p>
                  </a>
                </Col>
                <Col md="3">
                  <h5>Tentang Kami</h5>
                  {/* <ul className="links-vertical"> */}
                  {/* <li> */}
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    style={{ color: "white" }}
                  >
                    Tentang Topgrowth Futures
                  </a>
                  {/* </li> */}
                  {/* <li> */}
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    style={{ color: "white" }}
                  >
                    Legalitas
                  </a>
                  {/* </li> */}
                  {/* <li> */}
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    style={{ color: "white" }}
                  >
                    Rekening Terpisah
                  </a>
                  {/* </li> */}
                  {/* <li> */}
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    style={{ color: "white" }}
                  >
                    Cabang Kami
                  </a>
                  {/* </li> */}
                  {/* </ul> */}
                </Col>
                <Col md="3">
                  <h5>Layanan</h5>
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    style={{ color: "white" }}
                  >
                    Research & Analysis
                  </a>
                </Col>
                <Col md="3">
                  <h5>Hubungi Kami</h5>
                  <a
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    style={{ color: "white" }}
                  >
                    Alamat Kantor Sahid Sudirman Center, lantai 40 Jl. Jend
                    Sudirman Kav 86 Jakarta 10220 Indonesia Email:
                    customerservices@topgrowthfutures.com Tel: 021 2788-9366
                    Fax: 021 2788-9395
                  </a>
                </Col>
              </Row>
            </div>
            <hr />
            <div className="copyright pull-center">
              Copyright © {new Date().getFullYear()} topgrowthfuture.co.id
            </div>
          </Container>
          {/* </footer> */}
          {/* ********* END BIG WHITE FOOTER v2 ********* */}
        </div>
      </>
    );
  }
}

export default Footers;
