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
import ScrollAnimation from "react-animate-on-scroll";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg1 from "../../assets/img/indexfutures1.png";
import bg from "../../assets/img/header-indexfutures.png";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1.7rem"
};

const textSubtitle = {
  fontWeight: "bold",
  color: "white",
  fontSize: "1rem"
};

const textDesc = {
  color: "white",
  fontSize: "1rem"
};

// core components
const items = [
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/coin.png") + ")",
          backgroundSize: "cover"
        }}
      >
        <Row>
          <Col md="11" className="offset-md-1">
            <div
              style={{
                backgroundColor: "rgba(179, 172, 172, 0.39)"
              }}
            >
              <div className="space-50" />
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
                      Indeks Nikkei 225, yang sering disebut sebagai Nikkei,
                      indeks Nikkei, atau Nikkei Stock Average, merupakan indeks
                      pasar saham untuk Bursa Saham Tokyo (TSE) yang dihitung
                      setiap hari menggunakan metode perhitungan rata-rata harga
                      tertimbang dalam yen dan ditinjau setahun sekali oleh
                      surat kabar Nihon Keizai Shimbun (Nikkei) sejak tahun
                      1950.
                      <br />
                      Saat ini, indeks Nikkei paling banyak digunakan untuk
                      menggambarkan kondisi dari saham Jepang; mirip dengan Dow
                      Jones Industrial Average hingga bahkan sempat dijuluki
                      sebagai “Indeks Nikkei Dow Jones” pada era 1975-1985.
                      Nikkei 225 Futures diperkenalkan di Singapore Exchange
                      (SGX) pada tahun 1986, di Osaka Securities Exchange (OSE)
                      pada tahun 1988, dan di Chicago Mercantile Exchange (CME)
                      pada tahun 1990. Hari ini, indeks Nikkei telah menjadi
                      indeks berjangka yang diakui secara internasional dan
                      diperbarui setiap 15 detik selama sesi perdagangan sejak
                      tahun 2010.
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
            </div>
          </Col>
        </Row>
      </div>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/business.png") + ")",
          backgroundSize: "cover"
        }}
      >
        <Row>
          <Col md="11" className="offset-md-1">
            <div
              style={{
                backgroundColor: "rgba(179, 172, 172, 0.39)"
              }}
            >
              <div className="space-50" />
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
                      Indeks Hang Seng (HSI) adalah indeks saham pada bursa Hong
                      Kong yang dihitung menggunakan metode freefloat-adjusted
                      market capitalization-weighted. Indeks ini digunakan untuk
                      mencatat dan memonitor perubahan harian dari
                      perusahaan-perusahaan terbesar di pasar saham Hong Kong
                      dan merupakan indikator utama dari kinerja pasar secara
                      keseluruhan di area tersebut. Sebanyak 45 perusahaan yang
                      ada pada indeks Hang Seng mewakili sekitar 60% dari
                      kapitalisasi Hong Kong Stock Exchange.
                      <br />
                      Sejak 7 Maret 2011, HKEx memperpanjang jam perdagangan
                      menjadi 09.30-12.00 dan 13.30-16.00. Selanjutnya, sejak 5
                      Maret 2012, jam perdagangan diubah kembali menjadi
                      09.15-12.00 dan 13.00-16.15, disesuaikan dengan waktu
                      perdagangan di daratan Cina.
                      <br />
                      Indeks Hang Seng memulai perdagangannya pada tanggal 24
                      November 1969. Saat ini penyusunan dan pengelolaannya
                      dilaksanakan oleh Hang Seng Indeks Limited yang merupakan
                      anak perusahaan dari Hang Seng Bank, salah satu bank
                      terbesar dalam kapitalisasi pasar.
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
            </div>
          </Col>
        </Row>
      </div>
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <div
        className="team-1"
        style={{
          backgroundImage: "url(" + require("assets/img/social.png") + ")",
          backgroundSize: "cover"
        }}
      >
        <Row>
          <Col md="11" className="offset-md-1">
            <div
              style={{
                backgroundColor: "rgba(179, 172, 172, 0.39)"
              }}
            >
              <div className="space-50" />
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
                      Indeks Harga Saham Gabungan Korea atau KOSPI adalah indeks
                      dari semua saham yang diperdagangkan di Stock Market
                      Division yang sebelumnya dikenal dengan nama Korea Stock
                      Exchange. KOSPI merupakan indeks pasar saham yang mewakili
                      Korea Selatan, seperti Dow Jones Industrial Average atau
                      S&P 500 di AS.
                      <br />
                      KOSPI diperkenalkan pada tahun 1983 dengan nilai dasar
                      100. Pada tahun 2007, volume harian KOSPI adalah ratusan
                      juta saham atau setara dengan triliunan won.
                      <br />
                      Indeks KOSPI 200 terdiri dari 200 perusahaan besar dari
                      Stock Market Division. KOSPI 200 memiliki nilai pasar
                      lebih dari 70% dari KOSPI, dan bergerak bersama dengan
                      indeks KOSPI. Indeks KOSPI 200 dinilai penting karena
                      diperdagangkan juga di bursa berjangka dan bursa option,
                      serta merupakan salah satu indeks yang paling aktif
                      diperdagangkan di dunia.
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
            </div>
          </Col>
        </Row>
      </div>
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

const font = {
  //   color: "black",
  textAlign: "left"
};

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
        {" "}
        <BlurryNavbar />
        <ColoredNavbar />
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
            INDEX FUTURES
          </div>
        </div>
        <div
          className="cd-section broken-white"
          id="teams"
          // style={{ backgroundColor: "#D4D4D4" }}
        >
          <div className="team-1">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  {/* <h1 className="title" style={font}>
                    INDEX FUTURES
                  </h1> */}
                  <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
                    <p className="description font-black">
                      KONTRAK BERJANGKA atau INDEX FUTURES adalah alternatif
                      investasi dalam perdagangan saham yang dapat meminimalkan
                      risiko dan akan melindungi investor dari fluktuasi harga
                      yang merugikan. Kontrak berjangka adalah suatu kewajiban
                      untuk menerima atau untuk menyerahkan suatu instrumen
                      keuangan atau kontrak di masa depan dengan menggunakan
                      harga yang telah disepakati pada hari ini.
                      <br />
                      <br />
                      Di dalam perdagangan kontrak berjangka, investor diberikan
                      peluang untuk mengambil posisi open sell kontrak dengan
                      harapan harga akan turun dan posisi open buy kontrak
                      dengan harapan harga akan naik.
                      <br />
                      <br />
                      Topgrowth Futures menawarkan investasi pada kontrak
                      berjangka untuk mencari keuntungan dari fluktuasi harga
                      indeks dengan merekomendasikan Kontrak Berjangka Jepang
                      (Nikkei 225), Kontrak Berjangka Hong Kong (Hang Seng) dan
                      Kontrak Berjangka Korea (Kospi 200).
                    </p>
                  </ScrollAnimation>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOut">
              <Carousel
                activeIndex={this.state.activeIndex}
                next={this.next}
                previous={this.previous}
                //   className="carousel-team"
              >
                {items.map((item, key) => {
                  return (
                    <CarouselItem
                      onExiting={this.onExiting}
                      onExited={this.onExited}
                      key={key}
                    >
                      {item.content}
                    </CarouselItem>
                  );
                })}

                {/* <Col
                sm="12"
                //  md={{ size: 6, offset: 10 }}
              > */}
                <div
                  style={{ position: "absolute", left: "80%", top: "450px" }}
                >
                  <Button
                    className="btn-round btn-icon btn-simple slick-prev slick-arrow"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      this.previous();
                    }}
                  >
                    {/* <i className="tim-icons icon-minimal-left" /> */}
                    <img src={prevButton} />
                  </Button>

                  {/* <img
                  className="slick-prev slick-arrow"
                  data-slide="prev"
                  src={prevButton}
                  onClick={e => {
                    e.preventDefault();
                    this.previous();
                  }}
                  style={{ height: "30px", width: "auto" }}
                /> */}
                  {/* <img
                  className="slick-arrow"
                  src={nextButton}
                  onClick={e => {
                    e.preventDefault();
                    this.next();
                  }}
                  style={{ height: "30px", width: "auto" }}
                /> */}

                  <Button
                    className="btn-round btn-icon btn-simple slick-arrow"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      this.next();
                    }}
                    role="button"
                  >
                    {/* <i className="tim-icons icon-minimal-right" /> */}
                    <img src={nextButton} />
                  </Button>
                </div>
                {/* </Col> */}
              </Carousel>
            </ScrollAnimation>
          </div>
          {/* ********* END TEAM 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
