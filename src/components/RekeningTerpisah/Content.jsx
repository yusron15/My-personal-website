import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";
import { LangContext } from "../MyContext";
import { isMobile } from "react-device-detect";

import ScrollAnimation from "react-animate-on-scroll";
import check from "../../assets/img/Check.png";
import dollar from "../../assets/img/header-rekening.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";
class Content extends React.Component {
  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="projects">
            <div
              // className="projects-3"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/dollar.png") + ")",
                backgroundSize: "cover",
                backgroundColor: "rgba(52, 52, 52, 0.8)",
                minHeight: "80vh"
              }}
            >
              <div
                className="team-1 background-header"
                style={{
                  backgroundImage: `url(${dollar})`,
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div
                  className="title title-header"
                  style={{ fontSize: "2rem", marginTop: "11vh" }}
                >
                  {this.props.pageStore.rekeningterpisah.header}
                </div>
              </div>
              <div
                className="team-1 broken-white"
                style={{ height: "70vh", padding: 0 }}
              >
                <Col>
                  <Row>
                    <Col md="8">
                      <h1
                        className="title"
                        style={{
                          fontStyle: "Helvetica Bold",
                          // fontSize: "2.5rem",
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        {this.props.pageStore.rekeningterpisah.content.title}
                      </h1>
                      <p
                        className="font-black"
                        style={{ lineHeight: "25px", textAlign: "justify" }}
                      >
                        {this.props.pageStore.rekeningterpisah.content.content}
                        <br />

                        {
                          this.props.pageStore.rekeningterpisah.content
                            .subContent[0]
                        }
                      </p>
                    </Col>
                  </Row>
                  <Row style={{ marginLeft: "5%" }}>
                    <Col md="4">
                      <Row>
                        <Col md="2">
                          <img src={check} />
                        </Col>
                        <Col>
                          <p
                            className="font-black"
                            style={{ lineHeight: "25px", textAlign: "justify" }}
                          >
                            {
                              this.props.pageStore.rekeningterpisah.content
                                .subContent[1]
                            }
                          </p>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="4">
                      <Row>
                        <Col md="2">
                          <img src={check} />
                        </Col>
                        <Col>
                          <p
                            className="font-black"
                            style={{ lineHeight: "25px", textAlign: "justify" }}
                          >
                            {
                              this.props.pageStore.rekeningterpisah.content
                                .subContent[2]
                            }
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="projects">
                <div
                  // className="projects-3"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/dollar.png") + ")",
                    backgroundSize: "cover",
                    backgroundColor: "rgba(52, 52, 52, 0.8)",
                    minHeight: "80vh"
                  }}
                >
                  <div
                    className="team-1 background-header"
                    style={{
                      backgroundImage: `url(${dollar})`,
                      padding: 0
                    }}
                  >
                    <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} />
                    <div className="title title-header">
                      {this.props.pageStore.rekeningterpisah.header}
                    </div>
                  </div>
                  <div
                    className="team-1 broken-white"
                    style={{ height: "50vh", padding: 0 }}
                  >
                    <Col>
                      <Row style={{ marginLeft: "10%" }}>
                        <Col md="8">
                          <h1
                            className="title"
                            style={{
                              fontStyle: "Helvetica Bold",
                              // fontSize: "2.5rem",
                              fontWeight: "bold",
                              color: "black"
                            }}
                          >
                            {
                              this.props.pageStore.rekeningterpisah.content
                                .title
                            }
                          </h1>
                          <p
                            className="font-black"
                            style={{ lineHeight: "25px" }}
                          >
                            {
                              this.props.pageStore.rekeningterpisah.content
                                .content
                            }
                            <br />

                            {
                              this.props.pageStore.rekeningterpisah.content
                                .subContent[0]
                            }
                          </p>
                        </Col>
                      </Row>
                      <Row style={{ marginLeft: "10%" }}>
                        <Col md="4">
                          <Row>
                            <Col md="2">
                              <img src={check} />
                            </Col>
                            <Col>
                              <p
                                className="font-black"
                                style={{ lineHeight: "25px" }}
                              >
                                {
                                  this.props.pageStore.rekeningterpisah.content
                                    .subContent[1]
                                }
                              </p>
                            </Col>
                          </Row>
                        </Col>
                        <Col md="4">
                          <Row>
                            <Col md="2">
                              <img src={check} />
                            </Col>
                            <Col>
                              <p
                                className="font-black"
                                style={{ lineHeight: "25px" }}
                              >
                                {
                                  this.props.pageStore.rekeningterpisah.content
                                    .subContent[2]
                                }
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </LangContext.Consumer>
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
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
