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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import ScrollAnimation from "react-animate-on-scroll";
import check from "../../assets/img/Check.png";
import dollar from "../../assets/img/header-rekening.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";
class Content extends React.Component {
  async componentDidMount() {
    await this.props.getContent("rekeningterpisah", "id");
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
                className="team-1 background-header-mobile"
                style={{
                  backgroundImage: `url(${dollar})`,
                  padding: 0
                }}
              >
                <SidebarMobile />
                {/* <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} /> */}
                <div className="title-header-mobile">
                  {ReactHtmlParser(
                    this.props.pageStore.rekeningterpisah.header
                  )}
                </div>
              </div>
              <div className="team-1 broken-white" style={{ padding: 0 }}>
                <Col>
                  <Row>
                    <Col md="8">
                      <h1
                        className="title"
                        style={{
                          fontStyle: "Helvetica Bold",
                          fontSize: "1.5rem",
                          fontWeight: "bold",
                          color: "black"
                        }}
                      >
                        {ReactHtmlParser(
                          this.props.pageStore.rekeningterpisah.content.title
                        )}
                      </h1>
                      <p
                        className="font-black"
                        style={{ lineHeight: "25px", textAlign: "justify" }}
                      >
                        {ReactHtmlParser(
                          this.props.pageStore.rekeningterpisah.content.content
                        )}
                        <br />

                        {ReactHtmlParser(
                          this.props.pageStore.rekeningterpisah.subContent
                        )}
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
                            {ReactHtmlParser(
                              this.props.pageStore.rekeningterpisah.subContent
                            )}
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
                            style={{
                              lineHeight: "25px",
                              textAlign: "justify",
                              marginBottom: "25px"
                            }}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.rekeningterpisah.subContent
                            )}
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
                      padding: 0,
                      paddingBottom: 20
                    }}
                  >
                    <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} />
                    <div className="title title-header">
                      {ReactHtmlParser(
                        this.props.pageStore.rekeningterpisah.header
                      )}
                    </div>
                  </div>
                  <div
                    className="team-1 broken-white"
                    style={{ minHeight: "50vh", padding: 0 }}
                  >
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
                          {ReactHtmlParser(
                            this.props.pageStore.rekeningterpisah.content.title
                          )}
                        </h1>
                        <p
                          className="font-black"
                          style={{ lineHeight: "25px" }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.rekeningterpisah.content
                              .content
                          )}
                          <br />

                          {ReactHtmlParser(
                            this.props.pageStore.rekeningterpisah.subContent
                          )}
                        </p>
                        <br /> <br />
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
                              {ReactHtmlParser(
                                this.props.pageStore.rekeningterpisah.subContent
                              )}
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
                              style={{
                                lineHeight: "25px"
                              }}
                            >
                              {ReactHtmlParser(
                                this.props.pageStore.rekeningterpisah.subContent
                              )}
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
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
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
