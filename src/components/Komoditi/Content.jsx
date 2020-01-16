import React from "react";
import { LangContext } from "../MyContext";
import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

class Content extends React.Component {
  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

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
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="testimonials">
                <div
                  className="testimonials-4 broken-white"
                  style={{
                    // backgroundColor: "#D4D4D4",
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
                                {this.props.pageStore.Komoditi.content[0].title}
                              </div>
                              <div>
                                {/* </p> */}
                                {/* <p className="text-benefit"> */}
                                {
                                  this.props.pageStore.Komoditi.content[0]
                                    .content
                                }
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
                                {this.props.pageStore.Komoditi.content[1].title}
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                {/* </p> */}
                                {/* <p className="text-benefit"> */}
                                {
                                  this.props.pageStore.Komoditi.content[1]
                                    .content
                                }
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
                                {this.props.pageStore.Komoditi.content[2].title}
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                {
                                  this.props.pageStore.Komoditi.content[2]
                                    .content
                                }
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
                      <b>
                        {this.props.pageStore.Komoditi.footerKomoditi.title}
                      </b>
                    </h2>
                    <Row>
                      <Col md="4">
                        <p>
                          <b>
                            {
                              this.props.pageStore.Komoditi.footerKomoditi
                                .content[0].title
                            }
                          </b>
                        </p>
                        <p>
                          {/* {" "}
                          Semua kontrak berjangka di perdagangkan dengan margin
                          Margin ranges 2%-10%
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
                          Margin per lot 4% = 4% x Rp. 49.500.000 = Rp.
                          1.980.000,
                        </p>
                        <p>dibulatkan menjadi Rp 2.000.000,-
                           */}
                          {
                            this.props.pageStore.Komoditi.footerKomoditi
                              .content[0].subtitle
                          }
                        </p>
                      </Col>
                      <Col md="4">
                        <p>
                          <b>
                            {
                              this.props.pageStore.Komoditi.footerKomoditi
                                .content[1].title
                            }
                          </b>
                        </p>
                        <p>
                          {
                            this.props.pageStore.Komoditi.footerKomoditi
                              .content[1].subtitle
                          }
                        </p>
                      </Col>
                      <Col md="4">
                        <p>
                          <b>
                            {
                              this.props.pageStore.Komoditi.footerKomoditi
                                .content[2].title
                            }
                          </b>
                        </p>
                        <p>
                          {
                            this.props.pageStore.Komoditi.footerKomoditi
                              .content[2].subtitle
                          }
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
        }}
      </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
