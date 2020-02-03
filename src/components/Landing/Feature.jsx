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

                <Row>
                  <Col sm={{ size: 5, offset: 1 }} style={{ marginTop: 20 }}>
                    <Row>
                      <Col sm={3}>
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
                      <Col>
                        <div className="description">
                          <p
                            style={{
                              color: "black",
                              fontSize: "1.2rem",
                              marginBottom: 0,
                              textAlign: "center",
                              fontWeight: "400"
                            }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.Landing.Feature.content[0]
                                .title
                            )}
                          </p>
                          <p
                            style={{
                              color: "black",
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
                    </Row>
                  </Col>
                  <Col sm={{ size: 5, offset: 0 }} style={{ marginTop: 20 }}>
                    <Row>
                      <Col sm={3}>
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
                      <Col>
                        <div className="description">
                          <p
                            style={{
                              color: "black",
                              fontSize: "1.2rem",
                              marginBottom: 0,
                              textAlign: "center",

                              fontWeight: "400"
                            }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.Landing.Feature.content[2]
                                .title
                            )}
                          </p>
                          <p
                            style={{
                              color: "black",
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
                    </Row>
                  </Col>
                  <Col sm={{ size: 5, offset: 0 }} style={{ marginTop: 20 }}>
                    <Row>
                      <Col sm={3}>
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            // src={require("assets/img/blue-foreign.png")}
                            src={
                              this.props.pageStore.Landing.Feature.content[1]
                                .image
                            }
                            height="60"
                            width="60"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="description">
                          <p
                            style={{
                              color: "black",
                              fontSize: "1.2rem",
                              marginBottom: 0,
                              textAlign: "center",

                              fontWeight: "400"
                            }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.Landing.Feature.content[1]
                                .title
                            )}
                          </p>
                          <p
                            style={{
                              color: "black",
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
                    </Row>
                  </Col>

                  <Col sm={{ size: 5, offset: 0 }} style={{ marginTop: 20 }}>
                    <Row>
                      <Col sm={3}>
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            src={
                              this.props.pageStore.Landing.Feature.content[3]
                                .image
                            }
                            height="60"
                            width="60"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="description">
                          <p
                            style={{
                              color: "black",
                              fontSize: "1.2rem",
                              marginBottom: 0,
                              textAlign: "center",

                              fontWeight: "400"
                            }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.Landing.Feature.content[3]
                                .title
                            )}
                          </p>
                          <p
                            style={{
                              color: "black",
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
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
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
                <Col
                  lg={{
                    size: 6,
                    offset: 2
                  }}
                  md={{
                    size: 6,
                    offset: 2
                  }}
                >
                  <Row>
                    <Col md={6} lg={6}>
                      <div className="info">
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
                    </Col>
                    <Col md={6} lg={6}>
                      <div className="info">
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
                                {/* Foreign Exchange */}
                                {ReactHtmlParser(
                                  this.props.pageStore.Landing.Feature
                                    .content[2].title
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
                                    .content[2].subtitle
                                )}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6} lg={6}>
                      <div className="info">
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
                                    .content[1].image
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
                                    .content[1].title
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
                                    .content[1].subtitle
                                )}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col md={6} lg={6}>
                      <div className="info">
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
                                    .content[3].image
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
                                    .content[3].title
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
                                    .content[3].subtitle
                                )}
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col
                  md={4}
                  lg={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
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
                      }}
                    />
                  </ScrollAnimation>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 3 ********* */}
        </div>
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
