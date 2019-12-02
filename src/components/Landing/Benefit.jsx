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
    carousel2Index: 0
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
                  <div className="card-benefit">
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px"
                      }}
                    >
                      <p className="title text-white">
                        {" "}
                        <img 
                         src={biaya} style={{ marginRight: "5%" }}
                         />
                        {`"Biaya Rendah"`}
                      </p>
                      <p className="text-white">
                        Memungkinkan nasabah untuk memaksimalkan keuntungan
                        serta menerapkan money management
                      </p>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div>
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px"
                      }}
                    >
                      <p className="title text-white">
                        <img src={legalitas} style={{ marginRight: "5%" }} />
                        {`"Legalitas Terjamin"`}
                      </p>
                      <p className="text-white">
                        Perusahaan pialang berjangka berstandar internasional
                        yang memiliki izin di Bappebti serta terdaftar sebagai
                        anggota BBJ, ICDX, KBI, dan ICH
                      </p>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div>
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px"
                      }}
                    >
                      <p className="title text-white">
                        <img src={layanan} style={{ marginRight: "5%" }} />
                        {`"Layanan Prima"`}
                      </p>
                      <p className="text-white">
                        Memberikan pelayanan terbaik kepada para nasabah, mulai
                        dari pendidikan nasabah hingga penarikan dana
                      </p>
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
                  <div>
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px"
                      }}
                    >
                      <p className="title text-white">
                        <img src={berita} style={{ marginRight: "5%" }} />
                        {`"Riset & Berita"`}
                      </p>
                      <p className="text-white">
                        Dapatkan informasi berita terkini serta analisa
                        komprehensif setiap harinya di email Anda
                      </p>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div>
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px"
                      }}
                    >
                      <p className="title text-white">
                        <img src={requote} style={{ marginRight: "5%" }} />
                        {`"Tanpa Requote"`}
                      </p>
                      <p className="text-white">
                        Dapatkan pengalaman bertransaksi tanpa requote dengan
                        platform unggulan Pro-I Trading
                      </p>
                      <div className="author"></div>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div>
                    <div
                      className="info text-left"
                      style={{
                        backgroundColor: "rgba(112, 112, 112, 0.19)",
                        minHeight: "270px",
                        minWidth: "200px"
                      }}
                    >
                      <p className="title text-white">
                        <img src={support} style={{ marginRight: "5%" }} />
                        {`"Support 24 Jam"`}
                      </p>
                      <p className="text-white">
                        Kami berkomitmen untuk memberikan pelayanan terbaik
                        kepada para nasabah mulai dari edukasi nasabah sampai
                        dengan mudahnya penarikan dana.
                      </p>
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
