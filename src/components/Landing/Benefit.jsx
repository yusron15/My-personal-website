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
import Slick from "react-slick";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// images
import Benefit from "../../assets/img/benefit.png";
import nextButton from "../../assets/img/nextbutton.png";
import prevButton from "../../assets/img/prevbutton.png";
import biaya from "../../assets/img/biaya.png";
import berita from "../../assets/img/berita.png";
import legalitas from "../../assets/img/legalitas.png";
import layanan from "../../assets/img/layanan.png";
import requote from "../../assets/img/requote.png";
import support from "../../assets/img/support.png";

import "../../assets/css/main.css";

// core components

const PrevButton = props => {
  return (
    <img
      className="btn-round slick-prev slick-arrow prev-btn"
      aria-label="Previous"
      onClick={props.onClick}
      src={prevButton}
      style={{ height: "30px", width: "auto", paddingLeft: "470px" }}
    />
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <img
      className="btn-round slick-arrow next-btn"
      // aria-label="Next"
      onClick={props.onClick}
      src={nextButton}
      style={{ height: "30px", width: "auto", paddingLeft: "470px" }}
    />
  );
};

let slickSettings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider",
  slide: "section",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

class Testimonials extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    color: "#FFFFFF",
    biayaImg: require('"../../assets/img/biaya.png'),
    legalitasImg: require('"../../assets/img/legalitas.png'),
    layananImg: require('"../../assets/img/layanan.png'),
    beritaImg: require('"../../assets/img/berita.png'),
    requoteImg: require('"../../assets/img/requote.png'),
    supportImg: require('"../../assets/img/support.png')
  };

  handleBiayaEnter = () => {
    this.setState({ biayaImg: require('"../../assets/img/biaya-black.png') });
    this.setState({ color: "black" });
  };

  handleBiayaLeave = () => {
    this.setState({ biayaImg: require('"../../assets/img/biaya.png') });
    this.setState({ color: "#FFFFFF" });
  };

  handleLegalitasEnter = () => {
    this.setState({
      legalitasImg: require('"../../assets/img/legalitas-black.png')
    });
  };

  handleLegalitasLeave = () => {
    this.setState({ legalitasImg: require('"../../assets/img/legalitas.png') });
  };

  handleLayananEnter = () => {
    this.setState({
      layananImg: require('"../../assets/img/layanan-black.png')
    });
  };

  handleLayananLeave = () => {
    this.setState({ layananImg: require('"../../assets/img/layanan.png') });
  };

  handleBeritaEnter = () => {
    this.setState({
      beritaImg: require('"../../assets/img/berita-black.png')
    });
  };

  handleBeritaLeave = () => {
    this.setState({ beritaImg: require('"../../assets/img/berita.png') });
  };

  handleRequoteEnter = () => {
    this.setState({
      requoteImg: require('"../../assets/img/requote-black.png')
    });
  };

  handleRequoteLeave = () => {
    this.setState({ requoteImg: require('"../../assets/img/requote.png') });
  };

  handleSupportEnter = () => {
    this.setState({
      supportImg: require('"../../assets/img/support-black.png')
    });
  };

  handleSupportLeave = () => {
    this.setState({ supportImg: require('"../../assets/img/support.png') });
  };

  onExiting = carousel => {
    this["carousel" + carousel + "Animating"] = true;
  };

  onExited = carousel => {
    this["carousel" + carousel + "Animating"] = false;
  };
  next = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === items.length - 1
        ? 0
        : this.state["carousel" + carousel + "Index"] + 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  previous = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === 0
        ? items.length - 1
        : this.state["carousel" + carousel + "Index"] - 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  goToIndex = (newIndex, carousel) => {
    if (this["carousel" + carousel + "Animating"]) return;
    this.setState({ ["carousel" + carousel + "Index"]: newIndex });
  };
  render() {
    return (
      <>
        <div className="cd-section" id="testimonials">
          {/* ********* TESTIMONIALS 4 ********* */}
          <div
            className="testimonials-4"
            style={{
              backgroundImage: `url(${Benefit})`,
              backgroundSize: "cover"
            }}
          >
            <Container fluid>
              <Row>
                <Col className="ml-auto mr-auto" md="9">
                  <h2 className="title">
                    Kenapa bertransaksi di Topgrowth Futures.
                  </h2>
                </Col>
              </Row>
              <Row md="12" className="justify-content-center">
                <Col md="3">
                  <div
                    className="card-benefit text-benefit"
                    onMouseEnter={this.handleBiayaEnter}
                    onMouseLeave={this.handleBiayaLeave}
                  >
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px",
                        borderRadius: "10px"
                      }}
                    >
                      {/* <p className="title text-benefit" style={{ fontSize: "1.4rem" }}> */}
                      {/* <img onMouseEnter style={{ marginRight: "5%" }} />
                       */}
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        <img
                          src={this.state.biayaImg}
                          style={{ marginRight: "10px" }}
                        />
                        Biaya Rendah
                      </div>
                      <div style={{ marginLeft: "10px" }}>
                        {/* </p> */}
                        {/* <p className="text-benefit"> */}
                        Memungkinkan nasabah untuk memaksimalkan keuntungan
                        serta menerapkan money management
                        {/* </p> */}
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div
                    className="card-benefit text-benefit"
                    onMouseEnter={this.handleLegalitasEnter}
                    onMouseLeave={this.handleLegalitasLeave}
                  >
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px",
                        borderRadius: "10px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        <img
                          src={this.state.legalitasImg}
                          style={{ marginRight: "5%" }}
                        />
                        Legalitas Terjamin
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        Perusahaan pialang berjangka berstandar internasional
                        yang memiliki izin di Bappebti serta terdaftar sebagai
                        anggota BBJ, ICDX, KBI, dan ICH
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div
                    className="card-benefit text-benefit"
                    onMouseEnter={this.handleLayananEnter}
                    onMouseLeave={this.handleLayananLeave}
                  >
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px",
                        borderRadius: "10px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        <img
                          src={this.state.layananImg}
                          style={{ marginRight: "5%" }}
                        />
                        Layanan Prima
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        Memberikan pelayanan terbaik kepada para nasabah, mulai
                        dari pendidikan nasabah hingga penarikan dana
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row
                md="12"
                className="justify-content-center"
                style={{ marginTop: "20px" }}
              >
                <Col md="3">
                  <div
                    className="card-benefit text-benefit"
                    onMouseEnter={this.handleBeritaEnter}
                    onMouseLeave={this.handleBeritaLeave}
                  >
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px",
                        borderRadius: "10px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        <img
                          src={this.state.beritaImg}
                          style={{ marginRight: "5%" }}
                        />
                        Riset & Berita
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        Dapatkan informasi berita terkini serta analisa
                        komprehensif setiap harinya di email Anda
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div
                    className="card-benefit text-benefit"
                    onMouseEnter={this.handleRequoteEnter}
                    onMouseLeave={this.handleRequoteLeave}
                  >
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px",
                        borderRadius: "10px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        <img
                          src={this.state.requoteImg}
                          style={{ marginRight: "5%" }}
                        />
                        Tanpa Requote
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        Dapatkan pengalaman bertransaksi tanpa requote dengan
                        platform unggulan Pro-I Trading
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div
                    className="card-benefit text-benefit"
                    onMouseEnter={this.handleSupportEnter}
                    onMouseLeave={this.handleSupportLeave}
                  >
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px",
                        borderRadius: "10px"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        <img
                          src={this.state.supportImg}
                          style={{ marginRight: "5%" }}
                        />
                        Support 24 Jam
                      </div>

                      <div style={{ marginLeft: "10px" }}>
                        Kami berkomitmen untuk memberikan pelayanan terbaik
                        kepada para nasabah mulai dari edukasi nasabah sampai
                        dengan mudahnya penarikan dana.
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END TESTIMONIALS 4 ********* */}
        </div>
      </>
    );
  }
}

export default Testimonials;
