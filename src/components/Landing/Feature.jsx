import React from "react";

// reactstrap components
import { LangContext } from "../MyContext";

import { Badge, Button, Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import laptop from "../../assets/img/macbook.png";
import feature from "../../assets/img/all-device.png";
import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";
import "../../assets/css/main.css";

class Features extends React.Component {
  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="features">
                {/* ********* FEATURES 3 ********* */}
                <div className="features-3 broken-white">
                  <Container fluid>
                    <Row>
                      <Col className="mr-auto ml-auto" md="9">
                        <h1
                          className="title"
                          style={{ color: "black", textAlign: "left" }}
                        >
                          {this.props.pageStore.Landing.Feature.title}
                        </h1>
                        <h4
                          className="description"
                          style={{ textAlign: "left" }}
                        >
                          {this.props.pageStore.Landing.Feature.subtitle}
                        </h4>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        // className="ml-auto mr-auto"
                        md={{ size: 7, offset: 1 }}
                        // md={{ size: 12, order: 2, offset: 2 }}
                        style={{ left: "3%" }}
                      >
                        <Row>
                          {/* <Col> */}
                          <Col>
                            <div className="info">
                              {/* foreign Exchange */}
                              <Row>
                                <Col
                                  md="3"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="icon icon-success">
                                    <img
                                      alt="..."
                                      src={require("assets/img/blue-foreign.png")}
                                      height="60"
                                      width="60"
                                    />
                                  </div>
                                </Col>
                                <Col
                                  md="9"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="description">
                                    <h3
                                      // className="info-title"
                                      style={{
                                        color: "black",
                                        fontSize: "1.2rem",
                                        marginBottom: 0,
                                        textAlign: "left"
                                      }}
                                    >
                                      {/* Foreign Exchange */}
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[0].title
                                      }
                                    </h3>
                                    <p
                                      style={{
                                        textAlign: "left",
                                        fontSize: "0.8rem",
                                        padding: 0,
                                        paddingRight: "10px"
                                      }}
                                    >
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[0].subtitle
                                      }
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className="info">
                              {/* cfd */}
                              <Row>
                                <Col
                                  md="3"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="icon icon-success">
                                    <img
                                      alt="..."
                                      src={require("assets/img/blue-cfd.png")}
                                      height="60"
                                      width="60"
                                    />
                                  </div>
                                </Col>
                                <Col
                                  md="9"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="description">
                                    <h3
                                      // className="info-title"
                                      style={{
                                        color: "black",
                                        fontSize: "1.2rem",
                                        marginBottom: 0,
                                        textAlign: "left"
                                      }}
                                    >
                                      {/* CFD */}
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[2].title
                                      }
                                    </h3>
                                    <p
                                      style={{
                                        textAlign: "left",
                                        fontSize: "0.8rem",
                                        padding: 0,
                                        paddingRight: "10px"
                                      }}
                                    >
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[2].subtitle
                                      }
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          {/* </Col> */}

                          {/* <Col> */}
                          <Col>
                            <div className="info">
                              {/* future Index */}
                              <Row>
                                <Col
                                  md="3"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="icon icon-success">
                                    <img
                                      alt="..."
                                      src={require("assets/img/blue-komoditi.png")}
                                      height="60"
                                      width="60"
                                    />
                                  </div>
                                </Col>
                                <Col
                                  md="9"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="description">
                                    <h3
                                      // className="info-title"
                                      style={{
                                        color: "black",
                                        fontSize: "1.2rem",
                                        marginBottom: 0,
                                        textAlign: "left"
                                      }}
                                    >
                                      {/* komoditi */}
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[1].title
                                      }
                                    </h3>
                                    <p
                                      style={{
                                        textAlign: "left",
                                        fontSize: "0.8rem",
                                        padding: 0,
                                        paddingRight: "10px"
                                      }}
                                    >
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[1].subtitle
                                      }
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                            <div className="info">
                              {/* komoditi */}
                              <Row>
                                <Col
                                  md="3"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="icon icon-success">
                                    <img
                                      alt="..."
                                      src={require("assets/img/blue-future.png")}
                                      height="60"
                                      width="60"
                                    />
                                  </div>
                                </Col>
                                <Col
                                  md="9"
                                  style={{ paddingLeft: 0, paddingRight: 0 }}
                                >
                                  <div className="description">
                                    <h3
                                      // className="info-title"
                                      style={{
                                        color: "black",
                                        fontSize: "1.2rem",
                                        marginBottom: 0,
                                        textAlign: "left"
                                      }}
                                    >
                                      {/* Future Index */}
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[3].title
                                      }
                                    </h3>
                                    <p
                                      style={{
                                        textAlign: "left",
                                        fontSize: "0.8rem",
                                        padding: 0,
                                        paddingRight: "10px"
                                      }}
                                    >
                                      {
                                        this.props.pageStore.Landing.Feature
                                          .content[3].subtitle
                                      }
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col
                        md="4"
                        style={{ paddingRight: 0, paddingTop: "50px" }}
                      >
                        <ScrollAnimation
                          offset={100}
                          animateIn="fadeInRight"
                          animateOut="fadeOut"
                        >
                          <img
                            src={feature}
                            style={{
                              width: "100%",
                              height: "auto"
                              // marginLeft: "10%"
                            }}
                          />
                        </ScrollAnimation>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END FEATURES 3 ********* */}
              </div>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(Features);
