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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Carousel,
  CarouselItem
} from "reactstrap";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg1 from "../../assets/img/indexfutures1.png";
import rating from "../../assets/img/rating.png";
import report from "../../assets/img/report.png";
import list from "../../assets/img/list.png";
import submit from "../../assets/img/submit.png";
import demand from "../../assets/img/demand.png";
import sorting from "../../assets/img/sorting.png";

import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "2.5rem"
};

const textSubtitle = {
  fontWeight: "bold",
  //   color: "white",
  fontSize: "1.5rem"
};

const textDesc = {
  //   color: "black",
  fontSize: "1rem"
};

// core components
const items = [
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA HONGKONG (HANGSENG))</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>BEBERAPA RAGAM INDEKS FUTURES</b>
            </div>
            <div style={textSubtitle}>
              <b>INDEKS BERJANGKA JEPANG (NIKKEI 225)</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.{" "}
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

class Content extends React.Component {
  state = {
    activeIndex: 0
  };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };
  render() {
    return (
      <>
        <div
          className="cd-section"
          id="teams"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          {/* ********* TEAM 1 ********* */}
          <BlurryNavbar />
          <ColoredNavbar />
          <div className="team-1">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="9">
                <h1 className="title">Topgrowth Trader</h1>
              </Col>
            </Row>
          </div>
          <div className="team-1" style={{ backgroundColor: "white" }}>
            <Container>
              <Row>
                <Col md="12">
                  <div className="description" style={textDesc}>
                    Metatrader dikenal sebagai platform yang paling efisien dan
                    paling banyak digunakan oleh para trader. Topgrowth Futures
                    memberikan Anda akses untuk tetap terhubung dengan market
                    setiap saat melalui berbagai pilihan Metatrader yang sesuai
                    dengan kebutuhan Anda.
                  </div>
                </Col>
                <Col md="12">
                  <div className="description" style={textDesc}>
                    Topgrowth adalah salah satu yang terdepan dalam
                    mengembangkan teknologi online trading yang canggih.
                    Platform Online Trading Topgrowth disebut Pro-iTrading.
                    Platform Pro-iTrading memungkinkan Anda untuk bertransaksi
                    real time produk-produk Forex dan Komoditi sepanjang waktu.
                    Dengan menggunakan platform trading unggul yang menyediakan
                    berbagai alat bantu yang Anda tidak pernah bayangkan
                    sebelumnya serta menyajikan berita real-time, Anda dapat
                    berkonsentrasi pada transaksi Anda.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="team-1" style={{ backgroundColor: "#1D1E1F" }}>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="9">
                <h1 className="title">Kelebihan Topgrowth Trader</h1>
              </Col>
            </Row>
            <div style={{ marginTop: "50px" }}>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <img src={rating} />
                  <h4>
                    Charting dilengkapi dengan tools untuk bertrading secara
                    teknikal.
                  </h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <img src={report} />
                  <h4>Catatan Trading Anda dapat diakses dengan cepat.</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <img src={demand} />
                  <h4>Bisa disesuaikan dengan kebutuhan anda.</h4>
                </Col>
              </Row>
              <Row
                className="ml-auto mr-auto text-center"
                md="9"
                style={{ marginTop: "30px" }}
              >
                <Col className="ml-auto mr-auto text-center" md="3">
                  <img src={list} />
                  <h4>Life Quotes dalam bentuk Summary maupun Advance mode.</h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <img src={sorting} />
                  <h4 style={{ marginTop: "35px" }}>
                    Proses eksekusi Order yang Sederhana dan Cepat.
                  </h4>
                </Col>
                <Col className="ml-auto mr-auto text-center" md="3">
                  <img src={submit} />
                  <h4>Berita real-time untuk bertrading secara fundamental.</h4>
                </Col>
              </Row>
            </div>
          </div>
          {/* ********* END TEAM 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
