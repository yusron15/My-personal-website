import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  CarouselItem,
  UncontrolledCarousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";
// import Carousel from "nuka-carousel";
// import { Carousel } from "react-responsive-carousel";
import classnames from "classnames";
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
            <div className="space-50" />
            <Row>
              <Col md="6">
                <Carousel
                  controls={false}
                  slide={true}
                  touch={true}
                  interval="5000"
                  pauseOnHover={false}
                >
                  <Carousel.Item>
                    <div className="page-header">
                      {/* here */}
                      <Container style={{ paddingTop: 0 }}>
                        <Row>
                          {/* <Navbar /> */}
                          <Col className="mr-auto text-left" md="12">
                            <div
                              style={{
                                fontStyle: "Helvetica Bold",
                                fontSize: "2.7rem",
                                fontWeight: "bold"
                              }}

                              // className="title"
                            >
                              TRADING BERSAMA BROKER TERBAIK
                            </div>

                            <h4>
                              Didirikan sejak tahun 2003, saat ini telah
                              berkembang menjadi Perusahaan Pialang Berjangka
                              Terbaik dan Terbesar di Indonesia.
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
                          {/* <Col md="5">
                            <Row className="vertical-center">
                          <Col>
                            <img src={best17} />
                          </Col>
                          <Col>
                            <img src={best18} />
                          </Col>
                        </Row>
                          </Col> */}
                        </Row>
                      </Container>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="page-header">
                      <Container style={{ paddingTop: 0 }}>
                        <Row>
                          {/* <Navbar /> */}
                          {/* <Col className="mr-auto text-left" lg="5" md="7">
                            <img
                              src={phoneHeader}
                              style={{ paddingBottom: "0" }}
                            />
                          </Col> */}
                          <Col md="12">
                            <Row className="vertical-center">
                              <div
                                style={{
                                  fontStyle: "Helvetica Bold",
                                  fontSize: "2.7rem",
                                  fontWeight: "bold"
                                }}

                                // className="title"
                              >
                                Platform Unggulan Pro I Trader
                              </div>

                              <h4>
                                Proses Eksekusi Order yang SEDERHANA dan CEPAT
                                LIVE QUOTES dalam bentuk Summary maupun Advance
                                Mode CHARTING dilengkapi dengan TOOLS untuk
                                bertrading secara TEKNIKAL BERITA REAL-TIME
                                untuk bertrading secara fundamental
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
                          {/* <Col className="mr-auto text-left" lg="5" md="7">
                            <img
                              src={iphone3}
                              style={{
                                height: "50vh",
                                width: "100vw"
                              }}
                            />
                          </Col> */}
                          <Col md="12">
                            <Row className="vertical-center">
                              <div
                                style={{
                                  fontStyle: "Helvetica Bold",
                                  fontSize: "2.7rem",
                                  fontWeight: "bold"
                                }}

                                // className="title"
                              >
                                Topgrowth Futures Mobile
                              </div>

                              <h4>
                                Untuk Berita Pasar Keuangan Ter-UPDATE,
                                Rekomendasi TRADING, Ulasan Pasar & SIGNAL
                                TRADING REAL TIME
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
              </Col>
              <Col md="6">
                <Card
                  className="card-login"
                  style={{
                    backgroundColor: "rgba(14,14,14,0.7)",
                    height: "96%"
                  }}
                >
                  <Form action="" className="form" method="">
                    <CardHeader>
                      {/* <CardImg
                            alt="..."
                            src={require("assets/img/square1.png")}
                          /> */}
                      <CardTitle
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontSize: "3rem",
                          marginTop: "10%"
                        }}
                      >
                        register
                      </CardTitle>
                    </CardHeader>
                    <CardBody>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText style={{ borderColor: "#FFFFFF" }}>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          style={{ borderColor: "#FFFFFF" }}
                          placeholder="First Name..."
                          type="text"
                        />
                      </InputGroup>
                      <Row>
                        <Col md="6">
                          <label>First name</label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{ borderColor: "#FFFFFF" }}
                              >
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{ borderColor: "#FFFFFF" }}
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                            />
                          </InputGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText
                                  style={{ borderColor: "#FFFFFF" }}
                                >
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                style={{ borderColor: "#FFFFFF" }}
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <label>First name</label>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText
                                style={{ borderColor: "#FFFFFF" }}
                              >
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              style={{ borderColor: "#FFFFFF" }}
                              aria-label="First Name..."
                              placeholder="First Name..."
                              type="text"
                            />
                          </InputGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText
                                  style={{ borderColor: "#FFFFFF" }}
                                >
                                  <i className="tim-icons icon-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                style={{ borderColor: "#FFFFFF" }}
                                aria-label="Last Name..."
                                placeholder="Last Name..."
                                type="text"
                              />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        center
                        className="btn-round center"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                        style={{
                          width: "60%",
                          marginTop: "12%"
                        }}
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                    <div className="pull-left ml-3 mb-3">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          style={{ color: "white" }}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right mr-3 mb-3">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          style={{ color: "white" }}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderLanding;
