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
// ReactJS plugin for a nice carousel
import "../../assets/css/helper.css";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  TabPane,
  TabContent,
  Row,
  Col,
  NavLink,
  NavItem,
  Nav,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import news1 from "../../assets/img/newscontent1.png";
import news2 from "../../assets/img/newscontent2.png";
import news3 from "../../assets/img/newscontent3.png";
import news4 from "../../assets/img/newscontent4.png";
import news5 from "../../assets/img/newscontent5.png";

import BeritaEkonomi from "./LayoutNews.jsx";

class News extends React.Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "#D4D4D4" }}>
          <Container>
            <Row>
              <Col style={{ padding: 0 }}>
                <div className="mr-auto ml-auto" md="9" id="features">
                  <div className="features-3">
                    <div
                      classname="title"
                      style={{
                        color: "black",
                        fontSize: "1.5rem",
                        textAlign: "left",
                        fontWeight: "bold",
                        marginLeft: "12%"
                      }}
                    >
                      Berita Ekonomi
                    </div>
                    <div>
                      <BeritaEkonomi
                        image={news1}
                        title="Pasar Saham Asia Tunggu Komentar Terkait Trade War"
                        description="Cina ingin membuat perjanjian perdagangan awal dengan Amerika Serikat dan berusaha menghindari perang dagang, tetapi tidak takut untuk membalas jika perlu, kata Presiden..."
                      />

                      <BeritaEkonomi
                        image={news2}
                        title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
                        description="Cina ingin membuat perjanjian perdagangan awal dengan Amerika Serikat dan berusaha menghindari perang dagang, tetapi tidak takut untuk membalas jika perlu, kata Presiden..."
                      />

                      <BeritaEkonomi
                        image={news3}
                        title="Pasar Saham Asia Pulih Dari Level Rendah"
                        description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan tat.."
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col style={{ padding: 0 }}>
                <div
                  className="cd-section"
                  id="features"
                  style={{ backgroundColor: "#D4D4D4" }}
                >
                  <div className="features-3">
                    <div
                      classname="title"
                      style={{
                        color: "black",
                        fontSize: "1.5rem",
                        textAlign: "left",
                        fontWeight: "bold",
                        marginLeft: "12%"
                      }}
                    >
                      Analisa Harian
                    </div>
                    <div>
                      <BeritaEkonomi
                        image={news1}
                        title="Pasar Saham Asia Tunggu Komentar Terkait Trade War"
                        description="Cina ingin membuat perjanjian perdagangan awal dengan Amerika Serikat dan berusaha menghindari perang dagang, tetapi tidak takut untuk membalas jika perlu, kata Presiden..."
                      />

                      <BeritaEkonomi
                        image={news2}
                        title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
                        description="Cina ingin membuat perjanjian perdagangan awal dengan Amerika Serikat dan berusaha menghindari perang dagang, tetapi tidak takut untuk membalas jika perlu, kata Presiden..."
                      />

                      <BeritaEkonomi
                        image={news3}
                        title="Pasar Saham Asia Pulih Dari Level Rendah"
                        description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan tat.."
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default News;
