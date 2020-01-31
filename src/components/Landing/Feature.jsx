import React from "react";

// reactstrap components
import { LangContext } from "../MyContext";

import { Badge, Button, Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { isMobile } from "react-device-detect";
import laptop from "../../assets/img/macbook.png";
import feature from "../../assets/img/all-device.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import "../../assets/css/main.css";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

class Features extends React.Component {
  async componentDidMount() {
    await this.props.getContent("landing", "id");
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="features">
            <div
              className="features-3 broken-white"
              style={{ paddingTop: "20px" }}
            >
              <Container fluid>
                <Row>
                  <Col className="mr-auto ml-auto" md="9">
                    <h1
                      className="title"
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontSize: "1.5rem"
                      }}
                    >
                      {ReactHtmlParser(
                        this.props.pageStore.Landing.Feature.title
                      )}
                    </h1>
                    <h4
                      className="description"
                      style={{ textAlign: "center", fontSize: "0.8rem" }}
                    >
                      {ReactHtmlParser(
                        this.props.pageStore.Landing.Feature.subtitle
                      )}
                    </h4>
                  </Col>
                </Row>

                <div className="info" style={{ padding: "20px 10px 10px" }}>
                  {/* foreign Exchange */}
                  <div>
                    <Col md="3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="icon icon-success">
                        <img
                          alt="..."
                          // src={require("assets/img/blue-foreign.png")}
                          src={
                            this.props.pageStore.Landing.Feature.content[0]
                              .image
                          }
                          height="60"
                          width="60"
                        />
                      </div>
                    </Col>
                    <Col md="9" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="description">
                        <h3
                          style={{
                            color: "black",
                            fontSize: "1.2rem",
                            marginBottom: 0,
                            textAlign: "center",
                            marginTop: "10px"
                          }}
                        >
                          {/* Foreign Exchange */}
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[0]
                              .title
                          )}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            padding: 0,
                            textAlign: "center"
                          }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[0]
                              .subtitle
                          )}
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className="info" style={{ padding: "20px 10px 10px" }}>
                  <div>
                    <Col md="3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="icon icon-success">
                        <img
                          alt="..."
                          // src={require("assets/img/blue-cfd.png")}
                          src={
                            this.props.pageStore.Landing.Feature.content[2]
                              .image
                          }
                          height="60"
                          width="60"
                        />
                      </div>
                    </Col>
                    <Col md="9" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="description">
                        <h3
                          style={{
                            color: "black",
                            fontSize: "1.2rem",
                            marginBottom: 0,
                            textAlign: "center",
                            marginTop: "10px"
                          }}
                        >
                          {/* CFD */}
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[2]
                              .title
                          )}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            padding: 0,
                            textAlign: "center"
                          }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[2]
                              .subtitle
                          )}
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className="info" style={{ padding: "20px 10px 10px" }}>
                  <div>
                    <Col md="3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="icon icon-success">
                        <img
                          alt="..."
                          // src={require("assets/img/blue-komoditi.png")}
                          src={
                            this.props.pageStore.Landing.Feature.content[1]
                              .image
                          }
                          height="60"
                          width="60"
                        />
                      </div>
                    </Col>
                    <Col md="9" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="description">
                        <h3
                          style={{
                            color: "black",
                            fontSize: "1.2rem",
                            marginBottom: 0,
                            textAlign: "center",
                            marginTop: "10px"
                          }}
                        >
                          {/* komoditi */}
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[1]
                              .title
                          )}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            padding: 0,
                            textAlign: "center"
                          }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[1]
                              .subtitle
                          )}
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
                <div className="info" style={{ padding: "20px 10px 10px" }}>
                  <div>
                    <Col md="3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="icon icon-success">
                        <img
                          alt="..."
                          // src={require("assets/img/blue-future.png")}
                          src={
                            this.props.pageStore.Landing.Feature.content[3]
                              .image
                          }
                          height="60"
                          width="60"
                        />
                      </div>
                    </Col>
                    <Col md="9" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <div className="description">
                        <h3
                          style={{
                            color: "black",
                            fontSize: "1.2rem",
                            marginBottom: 0,
                            textAlign: "center",
                            marginTop: "10px"
                          }}
                        >
                          {/* Future Index */}
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[3]
                              .title
                          )}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.8rem",
                            padding: 0,
                            textAlign: "center"
                          }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Landing.Feature.content[3]
                              .subtitle
                          )}
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              </Container>
            </div>
          </div>{" "}
        </>
      );
    }
    return (
      <>
        {/* <div className="cd-section" id="features"> */}
        {/* ********* FEATURES 3 ********* */}
        {/* <div className="features-3 broken-white"> */}
        <div className="cd-section" id="projects">
          {/* ********* PROJECTS 2 ********* */}
          <div
            className="project-raised broken-white"
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            <Container fluid>
              <Row>
                <Col className="mr-auto ml-auto" md="9">
                  <h1
                    className="title"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    {ReactHtmlParser(
                      this.props.pageStore.Landing.Feature.title
                    )}
                  </h1>
                  <h4 className="description" style={{ textAlign: "left" }}>
                    {ReactHtmlParser(
                      this.props.pageStore.Landing.Feature.subtitle
                    )}
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md={{ size: 7, offset: 1 }} style={{ left: "3%" }}>
                  <Col>
                    <div>
                      <Row>
                        <div className="info" md="6">
                          {/* foreign Exchange */}
                          <Row>
                            <Col
                              md="3"
                              style={{
                                paddingLeft: 0,
                                paddingRight: 0
                              }}
                            >
                              <div className="icon icon-success">
                                <img
                                  alt="..."
                                  src={
                                    this.props.pageStore.Landing.Feature
                                      .content[0].image
                                  }
                                  height="60"
                                  width="60"
                                />
                              </div>
                            </Col>
                            <Col
                              md="9"
                              style={{
                                paddingLeft: 0,
                                paddingRight: 0
                              }}
                            >
                              <div className="description">
                                <h3
                                  style={{
                                    color: "black",
                                    fontSize: "1.2rem",
                                    marginBottom: 0,
                                    marginLeft: "15px",
                                    textAlign: "left"
                                  }}
                                >
                                  {/* Foreign Exchange */}
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[0].title
                                  )}
                                </h3>
                                <p
                                  style={{
                                    textAlign: "left",
                                    fontSize: "0.8rem",
                                    padding: 0
                                    // paddingRight: "10px"
                                  }}
                                >
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[0].subtitle
                                  )}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="info" md="6">
                          {/* cfd */}
                          <Row>
                            <Col
                              md="3"
                              style={{
                                paddingLeft: 0,
                                paddingRight: 0
                              }}
                            >
                              <div className="icon icon-success">
                                <img
                                  alt="..."
                                  src={
                                    this.props.pageStore.Landing.Feature
                                      .content[2].image
                                  }
                                  height="60"
                                  width="60"
                                />
                              </div>
                            </Col>
                            <Col
                              md="9"
                              style={{
                                paddingLeft: 0,
                                paddingRight: 0
                              }}
                            >
                              <div className="description">
                                <h3
                                  style={{
                                    color: "black",
                                    fontSize: "1.2rem",
                                    marginBottom: 0,
                                    marginLeft: "15px",
                                    textAlign: "left"
                                  }}
                                >
                                  {/* CFD */}
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[2].title
                                  )}
                                </h3>
                                <p
                                  style={{
                                    textAlign: "left",
                                    fontSize: "0.8rem",
                                    padding: 0,
                                    paddingRight: "10px"
                                  }}
                                >
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[2].subtitle
                                  )}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </div>
                    <div>
                      <Row>
                        <div className="info" md="6">
                          {/* future Index */}
                          <Row>
                            <Col
                              md="3"
                              style={{ paddingLeft: 0, paddingRight: 0 }}
                            >
                              <div className="icon icon-success">
                                <img
                                  alt="..."
                                  src={
                                    this.props.pageStore.Landing.Feature
                                      .content[1].image
                                  }
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
                                  style={{
                                    color: "black",
                                    fontSize: "1.2rem",
                                    marginBottom: 0,
                                    marginLeft: "15px",
                                    textAlign: "left"
                                  }}
                                >
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[1].title
                                  )}
                                </h3>
                                <p
                                  style={{
                                    textAlign: "left",
                                    fontSize: "0.8rem",
                                    padding: 0,
                                    paddingRight: "10px"
                                  }}
                                >
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[1].subtitle
                                  )}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="info" md="6">
                          {/* komoditi */}
                          <Row>
                            <Col
                              md="3"
                              style={{ paddingLeft: 0, paddingRight: 0 }}
                            >
                              <div className="icon icon-success">
                                <img
                                  alt="..."
                                  src={
                                    this.props.pageStore.Landing.Feature
                                      .content[3].image
                                  }
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
                                  style={{
                                    color: "black",
                                    fontSize: "1.2rem",
                                    marginBottom: 0,
                                    marginLeft: "15px",
                                    textAlign: "left"
                                  }}
                                >
                                  {/* Future Index */}
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[3].title
                                  )}
                                </h3>
                                <p
                                  style={{
                                    textAlign: "left",
                                    fontSize: "0.8rem",
                                    padding: 0,
                                    paddingRight: "10px"
                                  }}
                                >
                                  {ReactHtmlParser(
                                    this.props.pageStore.Landing.Feature
                                      .content[3].subtitle
                                  )}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Row>
                    </div>
                  </Col>
                </Col>
                <Col md="4" style={{ paddingRight: 0, paddingTop: "50px" }}>
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
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Features);
