import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  CarouselItem,
  UncontrolledCarousel
} from "reactstrap";
// import Carousel from "nuka-carousel";
// import { Carousel } from "react-responsive-carousel";
import "../../assets/css/main.css";
import { Carousel } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/Navbars/Navbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import HeaaderContent from "./HeaderContent.jsx";
import image from "../../assets/img/bglanding.png";
import best17 from "../../assets/img/best2017.png";
import best18 from "../../assets/img/best2018.png";
import phoneHeader from "../../assets/img/phone-header.png";
import phoneHeader2 from "../../assets/img/phoneHeader2.png";
import appstore from "../../assets/img/appstore.png";
import playstore from "../../assets/img/playstore.png";
import iphone3 from "../../assets/img/iphone3.png";

const carouselItems = [
  {
    content: (
      <CarouselItem>
        <Container style={{ paddingTop: 0 }}>
          <Row>
            {/* <Navbar /> */}
            <Col className="mr-auto text-left" lg="5" md="7">
              <div
                style={{
                  fontStyle: "Helvetica Bold",
                  fontSize: "2rem",
                  fontWeight: "bold"
                }}

                // className="title"
              >
                TRADING BERSAMA BROKER TERBAIK
              </div>

              <h6 className="category">
                Didirikan sejak tahun 2003, saat ini telah berkembang menjadi
                Perusahaan Pialang Berjangka Terbaik dan Terbesar di Indonesia.
              </h6>
              <br />
              <Button
                className="btn-round"
                style={{
                  margin: "0.3rem",
                  backgroundColor: "#5420D8"
                }}
              >
                Buat demo Akun
              </Button>
              <Button
                className="btn-round"
                style={{
                  margin: "0.3rem",
                  backgroundColor: "#5420D8"
                }}
              >
                Buat real Akun
              </Button>
            </Col>
            <Col md="5">
              <Row>
                <Col>
                  <img src={best17} />
                </Col>
                <Col>
                  <img src={best18} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <CarouselItem>
        <Container style={{ paddingTop: 0 }}>
          <Row>
            {/* <Navbar /> */}
            <Col className="mr-auto text-left" lg="5" md="7">
              <div
                style={{
                  fontStyle: "Helvetica Bold",
                  fontSize: "2rem",
                  fontWeight: "bold"
                }}

                // className="title"
              >
                TRADING BERSAMA BROKER TERBAIK
              </div>

              <h6 className="category">
                Didirikan sejak tahun 2003, saat ini telah berkembang menjadi
                Perusahaan Pialang Berjangka Terbaik dan Terbesar di Indonesia.
              </h6>
              <br />
              <Button
                className="btn-round"
                style={{
                  margin: "0.3rem",
                  backgroundColor: "#5420D8"
                }}
              >
                Buat demo Akun
              </Button>
              <Button
                className="btn-round"
                style={{
                  margin: "0.3rem",
                  backgroundColor: "#5420D8"
                }}
              >
                Buat real Akun
              </Button>
            </Col>
            <Col md="5">
              <Row>
                <Col>
                  <img src={best17} />
                </Col>
                <Col>
                  <img src={best18} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </CarouselItem>
    ),
    altText: "",
    caption: "",
    src: "0"
  }
];

class HeaderLanding extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeIndex: 0
  //   };
  // }
  render() {
    return (
      <>
        {/* {carouselItems.map(item => item.content)} */}
        <div className="cd-section" id="headers">
          {/* ********* HEADER 1 ********* */}
          {/* <Carousel> */}
          <div
            className="header-filter"
            style={{
              backgroundImage:
                "url(" + require("assets/img/header-image.png") + ")",
              backgroundSize: "cover"
            }}
          >
            <BlurryNavbar />

            <Carousel
              controls={false}
              slide={true}
              touch={true}
              interval="2000"
              pauseOnHover={false}
            >
              <Carousel.Item>
                <div className="page-header">
                  {/* here */}
                  <Container style={{ paddingTop: 0 }}>
                    <Row>
                      {/* <Navbar /> */}
                      <Col className="mr-auto text-left" lg="5" md="7">
                        <div
                          style={{
                            fontStyle: "Helvetica Bold",
                            fontSize: "3rem",
                            fontWeight: "bold"
                          }}

                          // className="title"
                        >
                          TRADING BERSAMA BROKER TERBAIK
                        </div>

                        <h4>
                          Didirikan sejak tahun 2003, saat ini telah berkembang
                          menjadi Perusahaan Pialang Berjangka Terbaik dan
                          Terbesar di Indonesia.
                        </h4>
                        <br />
                        {/* <Button
                          className="btn-round"
                          style={{
                            margin: "0.3rem",
                            backgroundColor: "#5420D8"
                          }}
                        >
                          Buat demo Akun
                        </Button>
                        <Button
                          className="btn-round"
                          style={{
                            margin: "0.3rem",
                            backgroundColor: "#5420D8"
                          }}
                        >
                          Buat real Akun
                        </Button> */}
                        <Row>
                          <Col>
                            <Button
                              className="btn-round"
                              color="info"
                              type="button"
                              block
                              style={{ height: 50, fontSize: 18 }}
                            >
                              Buat demo Akun
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              className="btn-round"
                              color="info"
                              type="button"
                              block
                              style={{ height: 50, fontSize: 18 }}
                            >
                              Buat real Akun
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                      <Col md="5">
                        <Row className="vertical-center">
                          <Col>
                            <img src={best17} />
                          </Col>
                          <Col>
                            <img src={best18} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="page-header">
                  <Container style={{ paddingTop: 0 }}>
                    <Row>
                      {/* <Navbar /> */}
                      <Col className="mr-auto text-left" lg="5" md="7">
                        <img src={phoneHeader} style={{ paddingBottom: "0" }} />
                      </Col>
                      <Col md="5">
                        <Row className="vertical-center">
                          <div
                            style={{
                              fontStyle: "Helvetica Bold",
                              fontSize: "3rem",
                              fontWeight: "bold"
                            }}

                            // className="title"
                          >
                            Platform Unggulan Pro I Trader
                          </div>

                          <h4>
                            Proses Eksekusi Order yang SEDERHANA dan CEPAT LIVE
                            QUOTES dalam bentuk Summary maupun Advance Mode
                            CHARTING dilengkapi dengan TOOLS untuk bertrading
                            secara TEKNIKAL BERITA REAL-TIME untuk bertrading
                            secara fundamental
                          </h4>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="page-header">
                  <Container style={{ paddingTop: 0 }}>
                    <Row>
                      {/* <Navbar /> */}
                      <Col className="mr-auto text-left" lg="5" md="7">
                        <img
                          src={iphone3}
                          style={{
                            height: "50vh",
                            width: "100vw"
                          }}
                        />
                      </Col>
                      <Col md="5">
                        <Row className="vertical-center">
                          <div
                            style={{
                              fontStyle: "Helvetica Bold",
                              fontSize: "3rem",
                              fontWeight: "bold"
                            }}

                            // className="title"
                          >
                            Topgrowth Futures Mobile
                          </div>

                          <h4>
                            Untuk Berita Pasar Keuangan Ter-UPDATE, Rekomendasi
                            TRADING, Ulasan Pasar & SIGNAL TRADING REAL TIME
                          </h4>
                          <br />
                          <Row>
                            <Col>
                              <img src={appstore} />
                            </Col>
                            <Col>
                              <img
                                src={playstore}
                                style={{ marginLeft: "20px" }}
                              />
                            </Col>
                          </Row>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderLanding;
