import React from "react";

import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Card,
  Table
} from "reactstrap";
import { isMobile } from "react-device-detect";
import ScrollAnimation from "react-animate-on-scroll";
import fg1 from "../../assets/img/forex.png";
import fg2 from "../../assets/img/forex2.png";
import fg3 from "../../assets/img/forexgold3.png";
import bg from "../../assets/img/forex-header.png";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import { LangContext } from "../MyContext";
import { TableContent3, TableContent4 } from "../Table/Table";

import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { styles } from "react-animations/lib/swing";

const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "black"
};

const textTitles = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "black"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  fontSize: "1rem",
  color: "black"
};

const textContentMobile = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  fontSize: "1rem",
  color: "black"
};

const intermezzo = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  margin: 0,
  fontSize: "1rem",
  color: "black"
};

const descHeader = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  margin: 0,
  fontSize: "1rem",
  color: "white"
};

const titleTable = {
  fontWeight: "bold",
  color: "white",
  textAlign: "center",
  fontSize: "1rem"
};

const text = {
  // fontWeight: "bold",
  color: "black",
  textAlign: "center",
  fontSize: "1rem"
};

class Features extends React.Component {
  async componentDidMount() {}

  transform(node) {
    if (node.name === "p") {
      alert(node.name);
      return null;
    }
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="cd-section broken-white"
            id="features"
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            {/* ********* FEATURES 3 ********* */}
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage:
                  "url(" + this.props.pageStore.Forex.image_background + ")",
                padding: 0
              }}
            >
              <SidebarMobile />
              {/* <BlurryNavbar /> */}

              <div className="title-header-mobile">
                {ReactHtmlParser(this.props.pageStore.Forex.header)}
              </div>
              <Container>
                <div style={descHeader}>
                  {ReactHtmlParser(this.props.pageStore.Forex.sub_header)}
                </div>
              </Container>
            </div>
            <div className="features-3" style={{ paddingTop: 0 }}>
              <Container fluid>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <div className="space-50" />
                    <p className="font-black" style={intermezzo}>
                      {ReactHtmlParser(this.props.pageStore.Forex.top)}
                    </p>
                  </Col>
                </Row>
              </Container>
              {/* <Col> */}
              <Container style={{ marginTop: "5vh" }}>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  // style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={fg1} />
                        </a>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div style={textContentMobile}>
                        <div
                          className="title-content"
                          style={{ color: "black" }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Forex.content[0].title
                          )}
                        </div>
                        <p
                          className="font-black"
                          style={{ textAlign: "justify" }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Forex.content[0].content
                          )}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Container>
              <Container style={{ marginTop: "5vh" }}>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={fg2} />
                        </a>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div style={textContentMobile}>
                        <div
                          className="title-content"
                          style={{ color: "black" }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Forex.content[1].title
                          )}
                        </div>
                        <p
                          className="font-black"
                          style={{ textAlign: "justify" }}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.Forex.content[1].content
                          )}
                        </p>{" "}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Container>
              {/* </Col> */}
              {/* <Col> */}
              <Container style={{ marginTop: "5vh" }}>
                <Col sm={{ size: 10, order: 2, offset: 1 }}>
                  <Row>
                    <Col lg="12">
                      <div>
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.Forex.content[2].title
                          )}
                        </div>
                        <p className="font-black" style={intermezzo}>
                          {ReactHtmlParser(
                            this.props.pageStore.Forex.content[2].content
                          )}
                        </p>
                      </div>

                      <div style={{ marginTop: "20px" }}>
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.Forex.content[3].title
                          )}
                        </div>

                        <Table
                          className="table-shopping"
                          style={{
                            backgroundColor: "#1565ff",
                            borderRadius: "5px",
                            borderCollapse: "inherit"
                          }}
                        >
                          <thead>
                            <tr style={{ backgroundColor: "#1565ff" }}>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.Forex.content[3]
                                      .table[0].prefix1
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.Forex.content[3]
                                      .table[0].prefix2
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.Forex.content[3]
                                      .table[0].prefix3
                                  }
                                </b>
                              </td>
                            </tr>
                          </thead>
                          {this.props.pageStore.Forex.content[3].table[0].tableData.map(
                            (item, index) => {
                              return (
                                <TableContent3
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                />
                              );
                            }
                          )}
                        </Table>
                      </div>

                      <div style={{ marginTop: "20px" }}>
                        <div style={textTitle}>
                          {this.props.pageStore.Forex.content[4].title}
                        </div>

                        <Table
                          className="table-shopping"
                          style={{
                            backgroundColor: "#1565ff",
                            borderRadius: "5px",
                            borderCollapse: "inherit"
                          }}
                        >
                          <thead>
                            <tr style={{ backgroundColor: "#1565ff" }}>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.Forex.content[4]
                                      .table[0].prefix1
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.Forex.content[4]
                                      .table[0].prefix2
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.Forex.content[4]
                                      .table[0].prefix3
                                  }
                                </b>
                              </td>
                            </tr>
                          </thead>
                          {this.props.pageStore.Forex.content[4].table[0].tableData.map(
                            (item, index) => {
                              return (
                                <TableContent3
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                />
                              );
                            }
                          )}
                        </Table>
                      </div>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "50px" }}>
                          <Col md="12">
                            <div style={textTitles}>
                              {ReactHtmlParser(
                                this.props.pageStore.Forex.content[5].title
                              )}
                            </div>
                          </Col>
                          <Col md="12">
                            <div
                              style={{
                                textAlign: "left",
                                fontStyle: "Helvetica Bold",
                                margin: 0,
                                fontSize: "1rem"
                              }}
                            >
                              {ReactHtmlParser(
                                this.props.pageStore.Forex.content[5].content
                              )}
                            </div>
                          </Col>
                          <Col md="12">
                            <Table
                              className="table-shopping"
                              style={{
                                backgroundColor: "#1565ff",
                                borderRadius: "5px",
                                borderCollapse: "inherit"
                              }}
                            >
                              <thead>
                                <tr style={{ backgroundColor: "#1565ff" }}>
                                  <td className="text-white text-center">
                                    <b>
                                      {
                                        this.props.pageStore.Forex.content[5]
                                          .table[0].prefix1
                                      }
                                    </b>
                                  </td>
                                  <td className="text-white text-center">
                                    <b>
                                      {
                                        this.props.pageStore.Forex.content[5]
                                          .table[0].prefix2
                                      }
                                    </b>
                                  </td>
                                  <td className="text-white text-center">
                                    <b>
                                      {
                                        this.props.pageStore.Forex.content[5]
                                          .table[0].prefix3
                                      }
                                    </b>
                                  </td>
                                </tr>
                              </thead>
                              {this.props.pageStore.Forex.content[5].table[0].tableData.map(
                                (item, index) => {
                                  return (
                                    <TableContent3
                                      prefix1={item.prefix1}
                                      prefix2={item.prefix2}
                                      prefix3={item.prefix3}
                                    />
                                  );
                                }
                              )}
                            </Table>
                          </Col>
                        </Row>
                </Col>
              </Container>
              {/* </Col> */}
            </div>

            {/* ********* END FEATURES 3 ********* */}
          </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="cd-section broken-white"
                id="features"
                // style={{ backgroundColor: "#D4D4D4" }}
              >
                {/* ********* FEATURES 3 ********* */}
                <div
                  className="team-1 background-header"
                  style={{
                    backgroundImage:
                      "url(" +
                      this.props.pageStore.Forex.image_background +
                      ")",
                    padding: 0
                  }}
                >
                  <BlurryNavbar />
                  <ColoredNavbar location={{ ...this.props.location }} />
                  <div
                    className="title title-header"
                    style={{ marginBottom: 0 }}
                  >
                    {ReactHtmlParser(this.props.pageStore.Forex.header)}
                  </div>
                  <Container>
                    <div style={descHeader}>
                      {ReactHtmlParser(this.props.pageStore.Forex.sub_header)}
                    </div>
                  </Container>
                </div>
                <div className="features-3" style={{ paddingTop: 0 }}>
                  <Container fluid>
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="8">
                        <div className="space-50" />
                        <p className="font-black" style={intermezzo}>
                          {ReactHtmlParser(this.props.pageStore.Forex.top)}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        sm={{ size: 10, order: 2, offset: 1 }}
                        style={{ marginTop: "50px" }}
                      >
                        <Row>
                          <Col lg="6">
                            <div className="card-image">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  className="img rounded"
                                  src={fg1}
                                />
                              </a>
                            </div>
                          </Col>
                          <Col lg="6">
                            <div style={textContent}>
                              <div
                                className="title-content"
                                style={{ color: "black" }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Forex.content[0].title
                                )}
                              </div>
                              <p
                                style={{ color: "black", textAlign: "justify" }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Forex.content[0].content
                                )}
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row style={{ marginTop: "50px" }}>
                          <Col lg="6">
                            <div style={textContent}>
                              <div
                                className="title-content"
                                style={{ color: "black" }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Forex.content[1].title
                                )}
                              </div>
                              <p
                                style={{ color: "black", textAlign: "justify" }}
                              >
                                {ReactHtmlParser(
                                  this.props.pageStore.Forex.content[1].content
                                )}
                              </p>{" "}
                            </div>
                          </Col>
                          <Col lg="6">
                            <div className="card-image">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  className="img rounded"
                                  src={fg2}
                                />
                              </a>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col
                        sm={{ size: 10, order: 2, offset: 1 }}
                        //   style={{ marginTop: "50px" }}
                      >
                        <Row style={{ marginTop: "150px" }}>
                          <Col lg="12">
                            <div>
                              <div style={textTitle}>
                                {ReactHtmlParser(
                                  this.props.pageStore.Forex.content[2].title
                                )}
                              </div>
                              <p style={intermezzo}>
                                {ReactHtmlParser(
                                  this.props.pageStore.Forex.content[2].content
                                )}
                              </p>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div style={{ marginTop: "20px" }}>
                              <div style={textTitle}>
                                {ReactHtmlParser(
                                  this.props.pageStore.Forex.content[3].title
                                )}
                              </div>

                              <Table
                                className="table-shopping"
                                style={{
                                  backgroundColor: "#1565ff",
                                  borderRadius: "5px",
                                  borderCollapse: "inherit"
                                }}
                              >
                                <thead>
                                  <tr style={{ backgroundColor: "#1565ff" }}>
                                    <td className="text-white text-center">
                                      <b>
                                        {
                                          this.props.pageStore.Forex.content[3]
                                            .table[0].prefix1
                                        }
                                      </b>
                                    </td>
                                    <td className="text-white text-center">
                                      <b>
                                        {
                                          this.props.pageStore.Forex.content[3]
                                            .table[0].prefix2
                                        }
                                      </b>
                                    </td>
                                    <td className="text-white text-center">
                                      <b>
                                        {
                                          this.props.pageStore.Forex.content[3]
                                            .table[0].prefix3
                                        }
                                      </b>
                                    </td>
                                  </tr>
                                </thead>
                                {this.props.pageStore.Forex.content[3].table[0].tableData.map(
                                  (item, index) => {
                                    return (
                                      <TableContent3
                                        prefix1={item.prefix1}
                                        prefix2={item.prefix2}
                                        prefix3={item.prefix3}
                                      />
                                    );
                                  }
                                )}
                              </Table>
                            </div>
                          </Col>
                          <Col>
                            <div style={{ marginTop: "20px" }}>
                              <div style={textTitle}>
                                {this.props.pageStore.Forex.content[4].title}
                              </div>

                              <Table
                                className="table-shopping"
                                style={{
                                  backgroundColor: "#1565ff",
                                  borderRadius: "5px",
                                  borderCollapse: "inherit"
                                }}
                              >
                                <thead>
                                  <tr style={{ backgroundColor: "#1565ff" }}>
                                    <td className="text-white text-center">
                                      <b>
                                        {
                                          this.props.pageStore.Forex.content[4]
                                            .table[0].prefix1
                                        }
                                      </b>
                                    </td>
                                    <td className="text-white text-center">
                                      <b>
                                        {
                                          this.props.pageStore.Forex.content[4]
                                            .table[0].prefix2
                                        }
                                      </b>
                                    </td>
                                    <td className="text-white text-center">
                                      <b>
                                        {
                                          this.props.pageStore.Forex.content[4]
                                            .table[0].prefix3
                                        }
                                      </b>
                                    </td>
                                  </tr>
                                </thead>
                                {this.props.pageStore.Forex.content[4].table[0].tableData.map(
                                  (item, index) => {
                                    return (
                                      <TableContent3
                                        prefix1={item.prefix1}
                                        prefix2={item.prefix2}
                                        prefix3={item.prefix3}
                                      />
                                    );
                                  }
                                )}
                              </Table>
                            </div>
                          </Col>
                        </Row>
                        <Row style={{ marginTop: "50px" }}>
                          <Col md="12">
                            <div style={textTitles}>
                              {ReactHtmlParser(
                                this.props.pageStore.Forex.content[5].title
                              )}
                            </div>
                          </Col>
                          <Col md="12">
                            <div
                              style={{
                                textAlign: "left",
                                fontStyle: "Helvetica Bold",
                                margin: 0,
                                fontSize: "1rem"
                              }}
                            >
                              {ReactHtmlParser(
                                this.props.pageStore.Forex.content[5].content
                              )}
                            </div>
                          </Col>
                          <Col md="12">
                            <Table
                              className="table-shopping"
                              style={{
                                backgroundColor: "#1565ff",
                                borderRadius: "5px",
                                borderCollapse: "inherit"
                              }}
                            >
                              <thead>
                                <tr style={{ backgroundColor: "#1565ff" }}>
                                  <td className="text-white text-center">
                                    <b>
                                      {
                                        this.props.pageStore.Forex.content[5]
                                          .table[0].prefix1
                                      }
                                    </b>
                                  </td>
                                  <td className="text-white text-center">
                                    <b>
                                      {
                                        this.props.pageStore.Forex.content[5]
                                          .table[0].prefix2
                                      }
                                    </b>
                                  </td>
                                  <td className="text-white text-center">
                                    <b>
                                      {
                                        this.props.pageStore.Forex.content[5]
                                          .table[0].prefix3
                                      }
                                    </b>
                                  </td>
                                </tr>
                              </thead>
                              {this.props.pageStore.Forex.content[5].table[0].tableData.map(
                                (item, index) => {
                                  return (
                                    <TableContent3
                                      prefix1={item.prefix1}
                                      prefix2={item.prefix2}
                                      prefix3={item.prefix3}
                                    />
                                  );
                                }
                              )}
                            </Table>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>

                  {/* <hr
              style={{
                color: "grey",
                backgroundColor: "grey",
                height: 0.5,
                width: "100vw",
                borderColor: "grey"
              }}
            /> */}
                </div>

                {/* ********* END FEATURES 3 ********* */}
              </div>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(Features);
