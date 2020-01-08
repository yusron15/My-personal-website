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
import { LangContext } from "../MyContext";

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
      <LangContext.Consumer>
        {({ lang }) => {
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
                  <ScrollAnimation
                    animateIn="fadeInRight"
                    delay={300}
                    animateOut="fadeOut"
                  >
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.66)" }}>
                      <Container>
                        <div className="space-50" />
                        <Row>
                          <Col md="6">
                            <ScrollAnimation
                              animateIn="fadeInRight"
                              delay={900}
                              animateOut="fadeOut"
                            >
                              <h2 className="title">
                                {lang.tentangkami.visi.title}
                              </h2>
                              <p style={{ textAlign: "justify" }}>
                                {lang.tentangkami.visi.content}
                              </p>
                            </ScrollAnimation>
                          </Col>
                          <Col md="6">
                            <ScrollAnimation
                              animateIn="fadeInRight"
                              delay={1200}
                              animateOut="fadeOut"
                            >
                              <h2 className="title">
                                {lang.tentangkami.misi.title}
                              </h2>
                              <p style={{ textAlign: "justify" }}>
                                {lang.tentangkami.misi.content}

                                {/* Menyediakan fasilitas transaksi terbaik dengan beragam
                          produk investasi serta layanan informasi pasar
                          keuangan terkini dan terpercaya
                          <br /> <br />
                          Menyediakan fasilitas perdagangan online bagi investor
                          dalam lingkup lokal maupun global melalui teknologi
                          online trading yang inovatif
                          <br /> <br />
                          Aktif berpartisipasi dalam membangun industri
                          perdagangan berjangka yang transparan melalui program
                          edukasi berkesinambungan
                          <br /> <br />
                          Senantiasa meningkatkan dan mengembangkan kualitas
                          sumber daya manusia yang profesional */}
                              </p>
                            </ScrollAnimation>
                          </Col>
                        </Row>

                        <div className="space-50" />
                      </Container>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>{" "}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default VisiMisi;
