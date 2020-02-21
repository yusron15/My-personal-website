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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { isMobile } from "react-device-detect";
import { LangContext } from "../MyContext";
import ScrollAnimation from "react-animate-on-scroll";
import prevButton from "../../assets/img/prevbutton.png";
import nextButton from "../../assets/img/nextbutton.png";
import rightButton from "../../assets/img/right-blue-arrow.png";
import leftButton from "../../assets/img/left-blue-arrow.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg from "../../assets/img/bg-cfd.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import { TableContent3, TableContent4, TableContent5 } from "../Table/Table";

import "../../assets/css/main.css";
import SidebarMobile from "components/Navbars/SidebarMobile";

const textTitle = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.4rem"
};

const textDesc = {
  color: "black",
  fontSize: "1rem",
  textAlign: "justify"
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

class Content extends React.Component {
  state = {
    activeIndex: 0
  };

  async componentDidMount() {
    await this.props.getContent("CFD", this.props.currentLang, true);
  }
  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="cd-section broken-white"
            id="teams"
            // style={{ backgroundColor: "#1D1E1F" }}
          >
            {/* ********* TEAM 1 ********* */}
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage:
                  "url(" + this.props.pageStore.CFD.image_background + ")",
                padding: 0
              }}
            >
              {/* <BlurryNavbar /> */}
              <SidebarMobile />
              <div className="title title-header-mobile">
                {this.props.pageStore.CFD.header}
              </div>
              <Container>
                <div
                  style={{ textAlign: "center" }}
                  className="subheader font-white"
                >
                  {ReactHtmlParser(this.props.pageStore.CFD.sub_header)}
                </div>
              </Container>
            </div>
            <div className="team-1 broken-white">
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[0].title
                      )}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description font-black" style={textDesc}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[0].content
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[1].title
                      )}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description font-black" style={textDesc}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[1].content
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[2].title
                      )}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description font-black" style={textDesc}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[2].content
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[3].title
                      )}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description font-black" style={textDesc}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[3].content
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {ReactHtmlParser(
                        this.props.pageStore.CFD.content[4].title
                      )}
                    </div>
                  </Col>
                  <Col
                    md="12"
                    style={{
                      overflow: "scroll"
                    }}
                  >
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
                                this.props.pageStore.CFD.content[4].table[0]
                                  .prefix1
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[4].table[0]
                                  .prefix2
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[4].table[0]
                                  .prefix3
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[4].table[0]
                                  .prefix4
                              }
                            </b>
                          </td>
                        </tr>
                      </thead>
                      {this.props.pageStore.CFD.content[4].table[0].tableData.map(
                        (item, index) => {
                          return (
                            <TableContent4
                              prefix1={item.prefix1}
                              prefix2={item.prefix2}
                              prefix3={item.prefix3}
                              prefix4={item.prefix4}
                            />
                          );
                        }
                      )}
                    </Table>
                  </Col>
                  <Col
                    md="12"
                    style={{
                      overflow: "scroll"
                    }}
                  >
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
                                this.props.pageStore.CFD.content[4].table[1]
                                  .prefix1
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[4].table[1]
                                  .prefix2
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[4].table[1]
                                  .prefix3
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[4].table[1]
                                  .prefix4
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[4].table[1]
                                  .prefix5
                              }
                            </b>
                          </td>
                        </tr>
                      </thead>
                      {this.props.pageStore.CFD.content[4].table[1].tableData.map(
                        (item, index) => {
                          return (
                            <TableContent5
                              prefix1={item.prefix1}
                              prefix2={item.prefix2}
                              prefix3={item.prefix3}
                              prefix4={item.prefix4}
                              prefix5={item.prefix5}
                            />
                          );
                        }
                      )}
                    </Table>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[5].title}
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
                                this.props.pageStore.CFD.content[5].table[0]
                                  .prefix1
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[5].table[0]
                                  .prefix2
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[5].table[0]
                                  .prefix3
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[5].table[0]
                                  .prefix4
                              }
                            </b>
                          </td>
                        </tr>
                      </thead>
                      {this.props.pageStore.CFD.content[5].table[0].tableData.map(
                        (item, index) => {
                          return (
                            <TableContent4
                              prefix1={item.prefix1}
                              prefix2={item.prefix2}
                              prefix3={item.prefix3}
                              prefix4={item.prefix4}
                            />
                          );
                        }
                      )}
                    </Table>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[6].title}
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
                                this.props.pageStore.CFD.content[6].table[0]
                                  .prefix1
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[6].table[0]
                                  .prefix2
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[6].table[0]
                                  .prefix3
                              }
                            </b>
                          </td>
                          <td className="text-white text-center">
                            <b>
                              {
                                this.props.pageStore.CFD.content[6].table[0]
                                  .prefix4
                              }
                            </b>
                          </td>
                        </tr>
                      </thead>
                      {this.props.pageStore.CFD.content[6].table[0].tableData.map(
                        (item, index) => {
                          return (
                            <TableContent4
                              prefix1={item.prefix1}
                              prefix2={item.prefix2}
                              prefix3={item.prefix3}
                              prefix4={item.prefix4}
                            />
                          );
                        }
                      )}
                    </Table>
                  </Col>
                </Row>
              </Container>{" "}
            </div>

            {/* ********* END TEAM 1 ********* */}
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
                id="teams"
                // style={{ backgroundColor: "#1D1E1F" }}
              >
                {/* ********* TEAM 1 ********* */}
                <div
                  className="team-1 background-header"
                  style={{
                    backgroundImage:
                      "url(" + this.props.pageStore.CFD.image_background + ")",
                    padding: 0
                  }}
                >
                  <BlurryNavbar />
                  <ColoredNavbar location={{ ...this.props.location }} />
                  <div className="title title-header">
                    {/* {this.props.pageStore.CFD.header} */}
                    {this.props.pageStore.CFD.header}
                  </div>
                  <Container>
                    <div
                      style={{ textAlign: "center" }}
                      className="subheader font-white"
                    >
                      {ReactHtmlParser(this.props.pageStore.CFD.sub_header)}
                    </div>
                  </Container>
                </div>
                <div className="team-1 broken-white">
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[0].title
                          )}
                        </div>
                      </Col>
                      <Col md="12">
                        <div
                          className="description font-black"
                          style={textDesc}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[0].content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[1].title
                          )}
                        </div>
                      </Col>
                      <Col md="12">
                        <div
                          className="description font-black"
                          style={textDesc}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[1].content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[2].title
                          )}
                        </div>
                      </Col>
                      <Col md="12">
                        <div
                          className="description font-black"
                          style={textDesc}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[2].content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[3].title
                          )}
                        </div>
                      </Col>
                      <Col md="12">
                        <div
                          className="description font-black"
                          style={textDesc}
                        >
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[3].content
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[4].title
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
                                    this.props.pageStore.CFD.content[4].table[0]
                                      .prefix1
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[4].table[0]
                                      .prefix2
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[4].table[0]
                                      .prefix3
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[4].table[0]
                                      .prefix4
                                  }
                                </b>
                              </td>
                            </tr>
                          </thead>
                          {this.props.pageStore.CFD.content[4].table[0].tableData.map(
                            (item, index) => {
                              return (
                                <TableContent4
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                />
                              );
                            }
                          )}
                        </Table>
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
                                    this.props.pageStore.CFD.content[4].table[1]
                                      .prefix1
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[4].table[1]
                                      .prefix2
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[4].table[1]
                                      .prefix3
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[4].table[1]
                                      .prefix4
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[4].table[1]
                                      .prefix5
                                  }
                                </b>
                              </td>
                            </tr>
                          </thead>
                          {this.props.pageStore.CFD.content[4].table[1].tableData.map(
                            (item, index) => {
                              return (
                                <TableContent5
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                  prefix5={item.prefix5}
                                />
                              );
                            }
                          )}
                        </Table>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[5].title
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
                                    this.props.pageStore.CFD.content[5].table[0]
                                      .prefix1
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[5].table[0]
                                      .prefix2
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[5].table[0]
                                      .prefix3
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[5].table[0]
                                      .prefix4
                                  }
                                </b>
                              </td>
                            </tr>
                          </thead>
                          {this.props.pageStore.CFD.content[5].table[0].tableData.map(
                            (item, index) => {
                              return (
                                <TableContent4
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                />
                              );
                            }
                          )}
                        </Table>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {ReactHtmlParser(
                            this.props.pageStore.CFD.content[6].title
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
                                    this.props.pageStore.CFD.content[6].table[0]
                                      .prefix1
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[6].table[0]
                                      .prefix2
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[6].table[0]
                                      .prefix3
                                  }
                                </b>
                              </td>
                              <td className="text-white text-center">
                                <b>
                                  {
                                    this.props.pageStore.CFD.content[6].table[0]
                                      .prefix4
                                  }
                                </b>
                              </td>
                            </tr>
                          </thead>
                          {this.props.pageStore.CFD.content[6].table[0].tableData.map(
                            (item, index) => {
                              return (
                                <TableContent4
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                />
                              );
                            }
                          )}
                        </Table>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END TEAM 1 ********* */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);
