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
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Card,
  Table
} from "reactstrap";

import fg1 from "../../assets/img/gold.png";
import fg2 from "../../assets/img/forexgold2.png";
import fg3 from "../../assets/img/forexgold3.png";

import bg from "../../assets/img/bg-gold.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  top: "50%",
  fontSize: "1rem",
  msTransform: "translateY(-50%)",
  transform: "translateY(-50%)"
};

class Features extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section"
          id="features"
          style={{ backgroundColor: "#D4D4D4" }}
        >
          {/* ********* FEATURES 3 ********* */}
          <BlurryNavbar />
          <div className="space-50" />
          <div
            className="team-1"
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
          >
            <div
              className="title"
              style={{
                textAlign: "center",
                fontStyle: "Helvetica Bold",
                fontSize: "2rem"
              }}
            >
              GOLD
            </div>
          </div>
          <div className="space-50" />
          <div className="features-3">
            <Container fluid>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  {/* <div
                    // className="title"
                    style={textTitle}
                  >
                    GOLD
                  </div> */}
                  <p style={{ textAlign: "center", color: "black" }}>
                    London Bullion Market adalah grosir pasar over-the-counter
                    untuk perdagangan emas dan perak. Perdagangan dilakukan di
                    antara anggota Asosiasi Pasar Bullion London (LBMA), diawasi
                    secara longgar oleh Bank of England. Sebagian besar
                    anggotanya adalah bank atau dealer emas batangan dan
                    penyuling utama.
                  </p>
                  {/* <Col className="mr-auto ml-auto" md="5"> */}
                  {/* </Col> */}
                </Col>
              </Row>
              <Row>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={fg1} />
                        </a>
                      </div>
                      <div style={{ marginTop: "30px" }}>
                        <Table>
                          <tbody>
                            <tr style={{ backgroundColor: "#224377" }}>
                              <td className="text-white">
                                <b>Product</b>
                              </td>
                              <td className="text-white">
                                <b>LLG</b>
                              </td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>Contract Size</td>
                              <td>100 Troy Ounces</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>Fixed Exchanged Rate </td>
                              <td>USD 1.00 = Rp. 10,000-</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>Minimum Tick </td>
                              <td>10 cents</td>
                            </tr>
                            <tr className="black-newsletter">
                              <td>Value Per 10 Cents </td>
                              <td>Rp. 100,000</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div style={textContent}>
                        <div
                          className="title-content"
                          style={{ color: "black" }}
                        >
                          KEUNTUNGAN TRANSAKSI FOREX
                        </div>
                        <p style={{ color: "black" }}>
                          Secara internasional, emas diperdagangkan terutama
                          melalui transaksi over-the-counter (OTC) dengan
                          perdagangan dalam jumlah terbatas di New York
                          Mercantile Exchange (NYMEX) dan Tokyo Commodity
                          Exchange (TOCOM).
                          <br />
                          <br />
                          Kontrak forward ini dikenal sebagai kontrak emas
                          berjangka. Spot emas diperdagangkan untuk penyelesaian
                          dua hari kerja setelah tanggal perdagangan, dengan
                          hari kerja ketika kedua pasar New York dan London buka
                          untuk bisnis.
                          <br />
                          <br />
                          Tidak seperti layaknya pasar komoditas, pasar forward
                          untuk emas didorong oleh harga spot dan selisih suku
                          bunga, mirip dengan pasar valuta asing, dan bukan
                          didasari oleh dinamika pasokan dan permintaan (supply
                          & demand). Ini karena emas, seperti mata uang,
                          dipinjam dan dipinjamkan oleh bank sentral dan di
                          pasar antar bank. Pinjaman Emas lebih menarik karena
                          suku bunga untuk emas cenderung lebih rendah daripada
                          suku bunga domestik AS – sehingga bank-bank sentral
                          dapat memperoleh bunga atas kepemilikan emas mereka
                          yang besar – kecuali dalam situasi khusus pasar emas
                          cenderung berada dalam contango, yaitu harga forward
                          dari emas lebih tinggi dari harga spot. Secara
                          historis ini menjadikannya pasar yang menarik untuk
                          penjualan ke depan oleh produsen emas dan
                          berkontribusi pada pasar derivatif yang aktif dan
                          relatif likuid.
                        </p>{" "}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  //   style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="12">
                      <div style={{ marginTop: "50px" }}>
                        <div
                          className="title-content"
                          style={{ color: "black" }}
                        >
                          Market Size
                        </div>
                        <p style={{ textAlign: "left", color: "black" }}>
                          Sebagian besar perdagangan global dalam emas dan perak
                          dilakukan di pasar over-the-counter (OTC). London
                          sejauh ini merupakan pusat global terbesar untuk
                          transaksi OTC yang diikuti oleh New York, Zurich, dan
                          Tokyo. Perdagangan dalam bursa telah berkembang dalam
                          beberapa tahun terakhir dengan Comex di New York dan
                          Tocom di Tokyo menghasilkan sebagian besar aktivitas.
                          <br /> <br />
                          Emas juga diperdagangkan dalam bentuk surat berharga,
                          seperti dana yang diperdagangkan di bursa (ETF), di
                          London, New York, Johannesburg, dan bursa saham
                          Australia. Meskipun pasar fisik untuk emas dan perak
                          didistribusikan secara global, Kliring sebagian besar
                          perdagangan OTC grosir dilakukan melalui London.
                          Volume Kliring harian rata-rata emas dan perak di
                          London Bullion Market Association (LBMA) pada November
                          2008 adalah 18,3 juta ons (senilai $ 13,9 miliar) dan
                          107,6 juta ons (senilai $ 1,1 miliar) masing-masing.
                          Ini berarti bahwa jumlah kliring selam 4,4 hari di
                          LBMA sama dengan produksi tambang emas tahunan, dan
                          untuk produksi perak tahunan setiap 6,2 hari.
                        </p>{" "}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            {/* <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 0.5,
                width: "100vw",
                borderColor: "grey"
              }}
            /> */}
          </div>

          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
