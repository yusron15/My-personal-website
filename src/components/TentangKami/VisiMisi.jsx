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

class VisiMisi extends React.Component {
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
            className="projects-3 header-filter"
            style={{
              backgroundImage:
                "url(" + require("assets/img/visimisi.png") + ")",
              backgroundSize: "cover",
              backgroundColor: "rgba(52, 52, 52, 0.8)"
            }}
          >
            <Container>
              <div className="space-50" />
              <Row>
                <Col md="6">
                  <h2 className="title">VISI KAMI</h2>
                  <p>
                    Menjadi perusahaan yang unggul dalam industri perdagangan
                    berjangka melalui pelayanan berkualitas dan program kerja
                    yang inovatif demi menciptakan hubungan kerjasama yang ideal
                    dengan para nasabah, baik dalam lingkup lokal maupun global.
                  </p>
                </Col>
                <Col md="6">
                  <h2 className="title">MISI KAMI</h2>
                  <p>
                    Menyediakan fasilitas transaksi terbaik dengan beragam
                    produk investasi serta layanan informasi pasar keuangan
                    terkini dan terpercaya
                    <br /> <br />
                    Menyediakan fasilitas perdagangan online bagi investor dalam
                    lingkup lokal maupun global melalui teknologi online trading
                    yang inovatif
                    <br /> <br />
                    Aktif berpartisipasi dalam membangun industri perdagangan
                    berjangka yang transparan melalui program edukasi
                    berkesinambungan
                    <br /> <br />
                    Senantiasa meningkatkan dan mengembangkan kualitas sumber
                    daya manusia yang profesional
                  </p>
                </Col>
              </Row>
              <div className="space-50" />
            </Container>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default VisiMisi;
