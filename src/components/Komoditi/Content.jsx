import React from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "../../assets/css/main.css";

class Content extends React.Component {
  state = {
    carousel1Index: 0,
    carousel2Index: 0,
    color: "#FFFFFF",
    komoditi: require('"../../assets/img/komoditi-black.png'),
    money: require('"../../assets/img/money-black.png'),
    shield: require('"../../assets/img/shield-black.png')
  };

  handleIncreaseEnter = () => {
    this.setState({
      komoditi: require('"../../assets/img/komoditi-white.png')
    });
  };

  handleIncreaseLeave = () => {
    this.setState({
      komoditi: require('"../../assets/img/komoditi-black.png')
    });
  };

  handleMoneyEnter = () => {
    this.setState({
      money: require('"../../assets/img/money-white.png')
    });
  };

  handleMoneyLeave = () => {
    this.setState({ money: require('"../../assets/img/money-black.png') });
  };

  handleShieldEnter = () => {
    this.setState({
      shield: require('"../../assets/img/shield-white.png')
    });
  };

  handleShieldLeave = () => {
    this.setState({ shield: require('"../../assets/img/shield-black.png') });
  };

  render() {
    return (
      <>
        <div className="cd-section" id="testimonials">
          <div
            className="testimonials-4"
            style={{
              backgroundColor: "#D4D4D4",
              backgroundSize: "cover",
              paddingTop: 0
            }}
          >
            <Container fluid>
              <Row md="12" className="justify-content-center">
                <Col md="3">
                <ScrollAnimation
                    delay={100}
                    offset={200}
                    animateIn="fadeInUp"
                    animateOut="fadeOut"
                  >
                  <div
                    // className="card-benefit "
                    onMouseEnter={this.handleIncreaseEnter}
                    onMouseLeave={this.handleIncreaseLeave}
                  >
                    <div
                      className="info card-komoditi"
                      style={{
                        minHeight: "400px",
                        maxWidth: "300px",
                        borderRadius: "10px",
                        justifyContent: "center"
                      }}
                    >
                      <div style={{ alignSelf: "center" }}>
                        <img
                          src={this.state.komoditi}
                          style={{ marginTop: "50px" }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        Biaya Rendah
                      </div>
                      <div>
                        {/* </p> */}
                        {/* <p className="text-benefit"> */}
                        Memungkinkan nasabah untuk memaksimalkan keuntungan
                        serta menerapkan money management
                        {/* </p> */}
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                  </ScrollAnimation>
                </Col>
                <Col md="3">
                <ScrollAnimation
                    delay={200}
                    offset={200}
                    animateIn="fadeInUp"
                    animateOut="fadeOut"
                  >
                  <div
                    onMouseEnter={this.handleMoneyEnter}
                    onMouseLeave={this.handleMoneyLeave}
                  >
                    <div
                      className="info card-komoditi"
                      style={{
                        minHeight: "400px",
                        maxWidth: "300px",
                        borderRadius: "10px",
                        justifyContent: "center"
                      }}
                    >
                      {/* <p className="title text-benefit" style={{ fontSize: "1.4rem" }}> */}
                      {/* <img onMouseEnter style={{ marginRight: "5%" }} />
                       */}
                      <div style={{ alignSelf: "center" }}>
                        <img
                          src={this.state.money}
                          style={{ marginTop: "50px" }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
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
                  </ScrollAnimation>
                </Col>
                <Col md="3">
                <ScrollAnimation
                    delay={300}
                    offset={200}
                    animateIn="fadeInUp"
                    animateOut="fadeOut"
                  >
                  <div
                    onMouseEnter={this.handleShieldEnter}
                    onMouseLeave={this.handleShieldLeave}
                  >
                    <div
                      className="info card-komoditi"
                      style={{
                        minHeight: "400px",
                        maxWidth: "300px",
                        borderRadius: "10px",
                        justifyContent: "center"
                      }}
                    >
                      <div style={{ alignSelf: "center" }}>
                        <img
                          src={this.state.shield}
                          style={{ marginTop: "50px" }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          margin: "30px 0 30px 10px"
                        }}
                      >
                        Biaya Rendah
                      </div>
                      <div style={{ marginLeft: "10px" }}>
                        Memungkinkan nasabah untuk memaksimalkan keuntungan
                        serta menerapkan money management
                      </div>
                      <div className="author"></div>
                    </div>
                  </div>
                  </ScrollAnimation>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div
          className="section section-footers"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          {/* ********* BIG WHITE FOOTER V2 ********* */}
          {/* <footer className="footer footer-white footer-big"> */}
          <Container>
            <div className="content">
              <h2>
                <b>Keuntungan Bertransaksi Kontrak Berjangka</b>
              </h2>
              <Row>
                <Col md="4">
                  <p>
                    <b>MARGIN/ LEVERAGE</b>
                  </p>
                  <p>
                    {" "}
                    Semua kontrak berjangka di perdagangkan dengan margin Margin
                    ranges 2%-10%
                  </p>
                  <p>Contoh :</p>
                  <p>Kontrak : GOLDGR</p>
                  <p>Ukuran Kontrak : 1 Lot = 100 gram</p>
                  <p>Misalnya harga emas adalahRp. 495.000.</p>
                  <p>
                    Nilai dari 1 Lot GOLDGR = 100 gram x Rp. 495.000 = Rp.
                    49.500.000
                  </p>
                  <p>
                    Margin per lot 4% = 4% x Rp. 49.500.000 = Rp. 1.980.000,
                  </p>
                  <p>dibulatkan menjadi Rp 2.000.000,-</p>
                </Col>
                <Col md="4">
                  <p>
                    <b>2WAYS OPPORTUNITY</b>
                  </p>
                  <p>
                    BUY position – buying a contract (Investor menginginkan
                    harga terus meningkat
                  </p>
                  <p>
                    SHORT position — selling a contract (Investor menginginkan
                    harga terus menurun)
                  </p>
                </Col>
                <Col md="4">
                  <p>
                    <b> LINDUNG NILAI (HEDGING)</b>
                  </p>
                  <p>
                    Memberi kesempatan pada produsen untuk melakukan lindung
                    nilai, sehingga tidak perlu menjual saat harga rendah.
                    Komoditas bisa menjadi pilihan lindung nilai asset lainnya
                    pada saat inflasi.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          {/* </footer> */}
          {/* ********* END BIG WHITE FOOTER v2 ********* */}
        </div>
      </>
    );
  }
}

export default Content;
