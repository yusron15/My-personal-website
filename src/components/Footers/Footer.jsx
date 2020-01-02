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
                  <div style={{ cursor: "default" }}>
                    <h4>
                      <b style={{ cursor: "default" }}>PT. Topgrowth Futures</b>
                    </h4>
                    <p>
                      Didirikan sejak tahun 2003, saat ini telah berkembang
                      menjadi perusahaan pialang berjangka terbaik dan terbesar
                      di Indonesia yang menyediakan sarana serta layanan untuk
                      transaksi produk forex, index, dan komoditi dengan spread
                      yang kompetitif.
                    </p>
                  </div>
                </Col>
                <Col md="3">
                  <h4 style={{ cursor: "default" }}>Tentang Kami</h4>
                  <p>
                    <Link to="/tentangkami" style={{ color: "white" }}>
                      Tentang Topgrowth Futures
                    </Link>
                  </p>
                  <p>
                    <Link to="/legalitas" style={{ color: "white" }}>
                      Legalitas
                    </Link>
                  </p>
                  <p>
                    <Link to="/rekeningterpisah" style={{ color: "white" }}>
                      Rekening Terpisah
                    </Link>
                  </p>
                  <p>
                    <Link to="/cabang" style={{ color: "white" }}>
                      Cabang Kami
                    </Link>
                  </p>
                </Col>
                <Col md="2">
                  <h4 style={{ cursor: "default" }}>Layanan</h4>
                  <Link to="/newspage" style={{ color: "white" }}>
                    Berita
                  </Link>
                </Col>
                <Col md="4">
                  <Link to="" style={{ color: "white", cursor: "default" }}>
                    <h4>Hubungi Kami</h4>

                    <p> Sahid Sudirman Center, lantai 40</p>
                    <p>Blok F &/ G</p>
                    <p>Jakarta 10220 Indonesia</p>
                    <p>Email: customerservices@topgrowthfutures.com</p>
                    <p>Tel: 021 2788-9366</p>
                    <p>Fax: 021 2788-9395</p>

                    {/* Sudirman Kav 86 Jakarta 10220 Indonesia Email:
                    customerservices@topgrowthfutures.com Tel: 021 2788-9366
                    Fax: 021 2788-9395 */}
                  </Link>
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
