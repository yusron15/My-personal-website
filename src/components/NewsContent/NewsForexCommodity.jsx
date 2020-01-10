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

import NewsLetter from "../NewsLetter/NewsLetter";
import RelatedPost from "../RelatedPost/Content";

import Layout from "../RelatedPost/Layout";
import Comment from "../Comments/Comment";

import fc1 from "../../assets/img/fc1.png";
import fc2 from "../../assets/img/fc2.png";
import fc3 from "../../assets/img/fc3.png";
import fc4 from "../../assets/img/fc4.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "white"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  top: "50%",
  color: "black",
  fontSize: "1rem",
  msTransform: "translateY(-50%)",
  transform: "translateY(-50%)"
};

class NewsForexCommodity extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section broken-white"
          id="features"
          // style={{ backgroundColor: "#1D1E1F" }}
        >
          {/* ********* FEATURES 3 ********* */}
          <div className="features-3">
            <Container fluid>
              <Row>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  // style={{ marginTop: "150px" }}
                >
                  <Row>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={fc1} />
                        </a>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div style={textContent}>
                        <div
                          style={{ color: "black" }}
                          className="title-content font-black"
                        >
                          ECB Lagarde Minta Dukungan Kebijakan Fiskal Anggota
                          Zona Euro
                        </div>
                        <p style={{ color: "black" }}>
                          Presiden Bank Sentral Eropa Christine Lagarde
                          menyerukan bauran kebijakan baru. Ia mengatakan
                          investasi publik harus ditingkatkan untuk meringankan
                          beban pada stimulus moneter dan memastikan kawasan itu
                          dapat berkembang di dunia yang tidak pasti.
                          <br /> <br />
                          Dalam pidatonya yang pertama, tiga minggu setelah
                          menjabat, kepala ECB yang baru mengatakan lembaganya
                          akan terus mendukung ekonomi zona euro. Tetapi dia
                          juga mengatakan kebijakan fiskal adalah elemen kunci
                          untuk mengatasi dua tantangan utama yang dihadapi blok
                          euro: perubahan sifat perdagangan global, dan
                          penurunan pertumbuhan domestik. Beberapa menit setelah
                          dia selesai, data baru menunjukkan pelambatan saat ini
                          memburuk.
                        </p>{" "}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Comment />
              <h3 className="title text-center font-black">Related Post</h3>
            </Container>
            <div style={{ marginTop: "20px" }}>
              <Layout
                image={fc2}
                title="Yen Menguat Seiring Permintaan Safe Haven Atas Kekhawatiran Hubungan AS dan China"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Mata uang yen Jepang menguat terhadap dolar pada hari Kamis setelah sumber yang dekat dengan Gedung Putih mengatakan kepada Reuters bahwa kesepakatan perdagangan AS-China..."
              />

              <Layout
                image={fc3}
                title="Inflasi Konsumen Jepang Tumbuh Moderat Meskipun Ada Kenaikan Pajak"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Inflasi konsumen inti tahunan Jepang naik tipis hanya pada bulan Oktober meskipun ada dorongan dari kenaikan pajak penjualan selama bulan tersebut, menunjukkan sentimen r..."
              />

              <Layout
                image={fc4}
                title="Dolar Masih Bergerak Sempit Pertahankan Penguatan"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Dolar mempertahankan kenaikan semalam pada hari Jumat ini, karena investor berpegang teguh pada safe-haven menunggu perkembangan dalam negosiasi perdagangan China –..."
              />
            </div>
          </div>
        </div>
        <NewsLetter />
      </>
    );
  }
}

export default NewsForexCommodity;
