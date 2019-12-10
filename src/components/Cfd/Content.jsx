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
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import rightButton from "../../assets/img/right-blue-arrow.png";
import leftButton from "../../assets/img/left-blue-arrow.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg from "../../assets/img/bg-cfd.png";

const textTitle = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.7rem"
};

const textDesc = {
  color: "black",
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
              <b>APA ITU CFD?</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Perdagangan CFD secara online adalah salah satu alat paling
              fleksibel untuk memanfaatkan pergerakan pasar tanpa mengikat dana
              dengan memperdagangkan instrumen yang mendasarinya. <br />
              Tidak seperti perdagangan saham, CFD dapat dibeli dan dijual dan
              memungkinkan Anda untuk mencari keuntungan dari kenaikan maupun
              penurunan harga pasar. <br />
              CFD menawarkan kesempatan untuk membangun beragam portofolio
              multi-produk dari satu akun.
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
              <b>MENGAPA BERTRANSAKSI CFD?</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              CFD (Contract for Difference) adalah perjanjian untuk menukarkan
              selisih nilai dari instrumen yang mendasari, misalnya saham,
              antara waktu saat order dibuka dan ditutup. Perdagangan CFD secara
              online merupakan cara praktis untuk memperdagangkan pasar bull dan
              bear yang memungkinkan untuk sell short. Saham dapat dijual dengan
              harga untung sebelum harga saham tersebut jatuh.
              <br />
              Produk-produk CFD dapat membantu untuk memanfaatkan modal
              investasi secara efektif. Akan tetapi, jumlah risiko yang dihadapi
              juga lebih besar dibandingkan produk konvensional.
              <br />
              CFD adalah produk yang diperdagangkan dengan menggunakan margin.
              Dengan demikian, potensi investasi menjadi jauh lebih besar hanya
              dengan menyetor sebagian kecil dari keseluruhan untuk
              memperdagangkan nilai kontrak penuh dari produk. Sama seperti
              perdagangan saham, laba atau rugi ditentukan oleh perbedaan antara
              harga yang dibeli dan dijual. Tingkat margin yang diperlukan akan
              bervariasi antara produk CFD.
              <br />
              Topgrowth menawarkan CFD pada berbagai produk mendasar yang
              komprehensif, termasuk indeks global, futures, komoditas, dan mata
              uang.
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
              <b>CFD TRADING STRATEGIS</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              CFD adalah alat perdagangan yang menggunakan leverage untuk hampir
              semua produk keuangan. Produk CFD yang ditawarkan meliputi
              komoditas berjangka (logam dan produk energi) serta indeks yang
              terdaftar di berbagai pasar keuangan internasional.
              <br />
              Satu keuntungan besar yang ditawarkan adalah pengguna tidak perlu
              menyediakan dana 100% dari nilai nominal produk. Dengan membeli
              CFD, pengguna sebenarnya tidak memiliki produk yang mendasarinya,
              tetapi pengguna memiliki hak 100% atas keuntungan atau kerugian
              dari nilai penuh kontrak.
              <br />
              Terlepas dari gaya investasi, produk CFD adalah alat yang berharga
              untuk mengembangkan dan melindungi keseluruhan portofolio. Dengan
              CFD, pengguna dapat berspekulasi pada pergerakan jangka pendek
              harga produk keuangan, atau pengguna dapat melindungi posisi
              portofolio secara keseluruhan untuk meminimalkan pergerakan pasar
              negatif. Selain itu, pengguna dapat memanfaatkan penggunaan
              leverage yang ada, yang bergantung pada arah pasar, dan secara
              signifikan dapat meningkatkan laba pada ekuitas pengguna.
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "2"
  },
  {
    content: (
      <Container>
        <Row>
          <Col md="12">
            <div style={textTitle}>
              <b>DAFTAR PRODUK CFD</b>
            </div>
          </Col>
          <Col md="12">
            <div className="description" style={textDesc}>
              Trading CFD dengan Topgrowth berarti pengguna dapat membeli dan
              menjual saham Amerika, Inggris, Eropa, Cina, dan Jepang dari
              platform yang sama. Seluruh produk CFD yang dapat diperdagangkan
              melalui Topgrowth tercantum pada tabel di bawah ini. Selain itu,
              Topgrowth juga menyertakan informasi untuk setiap produk, mata
              uang yang relevan, dan persyaratan margin untuk memperdagangkan
              setiap kontrak.
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
              CONTRACT FOR DIFFERENCE
            </div>
          </div>
          <div
            className="team-1"
            style={{ backgroundColor: "#D4D4D4", height: "70vh" }}
          >
            <Container style={{ minHeight: "45vh" }}>
              <Row>
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
                </Carousel>
              </Row>
            </Container>
            <Row>
              <Col
                sm="12"
                // md={{ size: 6, offset: 10 }}
                style={{
                  position: "absolute",
                  paddingLeft: "80%",
                  marginTop: "20px"
                  // paddingBottom: "50px"
                }}
              >
                <img
                  src={leftButton}
                  className="slick-prev slick-arrow"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    this.previous();
                  }}
                  style={{ height: "50px", width: "auto" }}

                  // <i className="tim-icons icon-minimal-left" />
                />
                <img
                  src={rightButton}
                  className="slick-arrow"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    this.next();
                  }}
                  role="button"
                  style={{ height: "50px", width: "auto" }}

                  // <i className="tim-icons icon-minimal-right" />
                />
              </Col>
            </Row>
          </div>

          {/* ********* END TEAM 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Content;
