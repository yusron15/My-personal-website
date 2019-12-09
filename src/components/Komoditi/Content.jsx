import React from "react";
import { Container, Row, Col } from "reactstrap";

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
              backgroundColor: "#FFFFFF",
              backgroundSize: "cover",
              paddingTop: 0
            }}
          >
            <Container fluid>
              <Row md="12" className="justify-content-center">
                <Col md="3">
                  <div
                    className="card-benefit "
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
                      <div style={{ marginLeft: "50px" }}>
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
                    className="card-benefit"
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
                </Col>
                <Col md="3">
                  <div
                    className="card-benefit text-benefit"
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
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
