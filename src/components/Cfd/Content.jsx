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
                  "url(" +
                  this.props.pageStore.CFD.image_background_mobile +
                  ")",
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
              {this.props.pageStore.CFD.content.map((item, index) => {
                return (
                  <>
                    <Container>
                      <Row>
                        <Col md="12">
                          <div style={textTitle}>
                            {ReactHtmlParser(item.title)}
                          </div>
                        </Col>
                        {!item.table && (
                          <Col md="12">
                            <div
                              className="description font-black"
                              style={textDesc}
                            >
                              {ReactHtmlParser(item.content)}
                            </div>
                          </Col>
                        )}
                      </Row>
                      {item.table && (
                        <>
                          <Col md="12">
                            {item.table.map((itemTable, indexTable) => (
                              <div style={{ overflow: "scroll" }}>
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
                                        <b>{itemTable.prefix1}</b>
                                      </td>
                                      <td className="text-white text-center">
                                        <b>{itemTable.prefix2}</b>
                                      </td>
                                      <td className="text-white text-center">
                                        <b>{itemTable.prefix3}</b>
                                      </td>
                                      <td className="text-white text-center">
                                        <b>{itemTable.prefix4}</b>
                                      </td>
                                    </tr>
                                  </thead>
                                  {itemTable.tableData.map(
                                    (itemTableData, itemTableDataIndex) => {
                                      return (
                                        <TableContent4
                                          prefix1={itemTableData.prefix1}
                                          prefix2={itemTableData.prefix2}
                                          prefix3={itemTableData.prefix3}
                                          prefix4={itemTableData.prefix4}
                                        />
                                      );
                                    }
                                  )}
                                </Table>
                              </div>
                            ))}
                          </Col>
                        </>
                      )}
                    </Container>
                    <div className="space-50" />
                  </>
                );
              })}
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
                  {this.props.pageStore.CFD.content.map((item, index) => {
                    return (
                      <>
                        <Container>
                          <Row>
                            <Col md="12">
                              <div style={textTitle}>
                                {ReactHtmlParser(item.title)}
                              </div>
                            </Col>
                            {!item.table && (
                              <Col md="12">
                                <div
                                  className="description font-black"
                                  style={textDesc}
                                >
                                  {ReactHtmlParser(item.content)}
                                </div>
                              </Col>
                            )}
                          </Row>
                          {item.table && (
                            <>
                              <Col md="12">
                                {item.table.map((itemTable, indexTable) => (
                                  <Table
                                    className="table-shopping"
                                    style={{
                                      backgroundColor: "#1565ff",
                                      borderRadius: "5px",
                                      borderCollapse: "inherit"
                                    }}
                                  >
                                    <thead>
                                      <tr
                                        style={{ backgroundColor: "#1565ff" }}
                                      >
                                        <td className="text-white text-center">
                                          <b>{itemTable.prefix1}</b>
                                        </td>
                                        <td className="text-white text-center">
                                          <b>{itemTable.prefix2}</b>
                                        </td>
                                        <td className="text-white text-center">
                                          <b>{itemTable.prefix3}</b>
                                        </td>
                                        <td className="text-white text-center">
                                          <b>{itemTable.prefix4}</b>
                                        </td>
                                      </tr>
                                    </thead>
                                    {itemTable.tableData.map(
                                      (itemTableData, itemTableDataIndex) => {
                                        return (
                                          <TableContent4
                                            prefix1={itemTableData.prefix1}
                                            prefix2={itemTableData.prefix2}
                                            prefix3={itemTableData.prefix3}
                                            prefix4={itemTableData.prefix4}
                                          />
                                        );
                                      }
                                    )}
                                  </Table>
                                ))}
                              </Col>
                            </>
                          )}
                        </Container>
                        <div className="space-50" />
                      </>
                    );
                  })}
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
