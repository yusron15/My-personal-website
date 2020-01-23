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
  await this.props.getContent("CFD", "id")
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
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              {/* <BlurryNavbar /> */}
              <SidebarMobile />
              <div className="title title-header-mobile">
                {this.props.pageStore.CFD.header}
              </div>
            </div>
            <div className="team-1 broken-white">
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[0].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description" style={textDesc}>
                      {this.props.pageStore.CFD.content[0].content}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[1].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description" style={textDesc}>
                      {this.props.pageStore.CFD.content[1].content}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[2].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description" style={textDesc}>
                      {this.props.pageStore.CFD.content[2].content}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[3].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description" style={textDesc}>
                      {this.props.pageStore.CFD.content[3].content}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[4].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <Table
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .prefix1
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .prefix2
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .prefix3
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .prefix4
                            }
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[0].prefix1
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[0].prefix2
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[0].prefix3
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[0].prefix4
                            }
                          </td>
                        </tr>
                        <tr>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[1].prefix1
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[1].prefix2
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[1].prefix3
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[1].prefix4
                            }
                          </td>
                        </tr>
                        <tr>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[2].prefix1
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[2].prefix2
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[2].prefix3
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[0]
                                .tableData[2].prefix4
                            }
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md="12">
                    <Table
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .prefix1
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .prefix2
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .prefix3
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .prefix4
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .prefix5
                            }
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[0].prefix1
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[0].prefix2
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[0].prefix3
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[0].prefix4
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[0].prefix5
                            }
                          </td>
                        </tr>
                        <tr>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[1].prefix1
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[1].prefix2
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[1].prefix3
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[1].prefix4
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[1]
                                .tableData[1].prefix5
                            }
                          </td>
                        </tr>
                      </tbody>
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
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].prefix1
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].prefix2
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].prefix3
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].prefix4
                            }
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].tableData[0].prefix1
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].tableData[0].prefix2
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].tableData[0].prefix3
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[2]
                                .table[0].tableData[0].prefix4
                            }
                          </td>
                        </tr>
                      </tbody>
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
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].prefix1
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].prefix2
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].prefix3
                            }
                          </th>
                          <th style={titleTable}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].prefix4
                            }
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].tableData[0].prefix1
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].tableData[0].prefix2
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].tableData[0].prefix3
                            }
                          </td>
                          <td style={text}>
                            {
                              this.props.pageStore.CFD.content[4].table[3]
                                .table[0].tableData[0].prefix4
                            }
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
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
                    backgroundImage: `url(${bg})`,
                    padding: 0
                  }}
                >
                  <BlurryNavbar />
                  <ColoredNavbar location={{ ...this.props.location }} />
                  <div className="title title-header">
                    {/* {this.props.pageStore.CFD.header} */}
                          {this.props.pageStore.CFD.content[0].title}
                  </div>
                </div>
                <div className="team-1 broken-white">
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {this.props.pageStore.CFD.content[0].title}
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {this.props.pageStore.CFD.content[0].content}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {this.props.pageStore.CFD.content[1].title}
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {this.props.pageStore.CFD.content[1].content}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {this.props.pageStore.CFD.content[2].title}
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {this.props.pageStore.CFD.content[2].content}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                    <Row>
                      <Col md="12">
                        <div style={textTitle}>
                          {this.props.pageStore.CFD.content[3].title}
                        </div>
                      </Col>
                      <Col md="12">
                        <div className="description" style={textDesc}>
                          {this.props.pageStore.CFD.content[3].content}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="space-50" />
                  <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[1].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description" style={textDesc}>
                      {this.props.pageStore.CFD.content[1].content}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[2].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description" style={textDesc}>
                      {this.props.pageStore.CFD.content[2].content}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[3].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="description" style={textDesc}>
                      {this.props.pageStore.CFD.content[3].content}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="space-50" />
              <Container>
                <Row>
                  <Col md="12">
                    <div style={textTitle}>
                      {this.props.pageStore.CFD.content[4].title}
                    </div>
                  </Col>
                  <Col md="12">
                    <Table
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>Product</th>
                          <th style={titleTable}>Tick Size</th>
                          <th style={titleTable}>Tick Value</th>
                          <th style={titleTable}>
                            Margin yang diperlukan Per Lot (Day & Trade
                            Overnight)
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>Dow Jones Index</td>
                          <td style={text}>1 Indeks poin</td>
                          <td style={text}>Rp 50.000</td>
                          <td style={text}>Rp 10.000.000</td>
                        </tr>
                        <tr>
                          <td style={text}>Indeks S & P 500 </td>
                          <td style={text}>0,25 Indeks poin</td>
                          <td style={text}>Rp 500.000 </td>
                          <td style={text}>Rp 10.000.000</td>
                        </tr>
                        <tr>
                          <td style={text}>NASDAQ Index</td>
                          <td style={text}>0,25 Indeks poin</td>
                          <td style={text}>Rp 200.000 </td>
                          <td style={text}>Rp 10.000.000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md="12">
                    <Table
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>Product</th>
                          <th style={titleTable}>Tick Size</th>
                          <th style={titleTable}>Tick Value</th>
                          <th style={titleTable}>
                            Margin yang diperlukan Per Lot (Day Trade)
                          </th>
                          <th style={titleTable}>
                            Margin yang diperlukan Per Lot (Overnight)
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>FTSE Index </td>
                          <td style={text}>0,50 Indeks poin</td>
                          <td style={text}>Rp 150.000 </td>
                          <td style={text}>Rp 10.000.000</td>
                          <td style={text}>Rp 20.000.000</td>
                        </tr>
                        <tr>
                          <td style={text}>DAX Index</td>
                          <td style={text}>0,50 Indeks poin</td>
                          <td style={text}>Rp 300.000 </td>
                          <td style={text}>Rp 20.000.000</td>
                          <td style={text}>Rp 40.000.000</td>
                        </tr>
                      </tbody>
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
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>Product</th>
                          <th style={titleTable}>Tick Size</th>
                          <th style={titleTable}>Tick Value</th>
                          <th style={titleTable}>
                            Margin yang diperlukan Per Lot (Day & Trade
                            Overnight)
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>Minyak mentah</td>
                          <td style={text}>US$ 0.01 </td>
                          <td style={text}>Rp 120.000 </td>
                          <td style={text}>Rp 24.000.000 (USD 2,000)</td>
                        </tr>
                      </tbody>
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
                      bordered
                      className="table-shopping"
                      style={{
                        backgroundColor: "#224377",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th style={titleTable}>Product</th>
                          <th style={titleTable}>Tick Size</th>
                          <th style={titleTable}>Tick Value</th>
                          <th style={titleTable}>
                            Margin yang diperlukan Per Lot (Day & Trade
                            Overnight)
                          </th>
                        </tr>
                      </thead>
                      <tbody style={{ backgroundColor: "#D1D1D1" }}>
                        <tr>
                          <td style={text}>Spot Perak </td>
                          <td style={text}>US$ 0.001 </td>
                          <td style={text}>Rp 600.000 </td>
                          <td style={text}>Rp 36.000.000 (USD 3,000)</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container> </div>
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

// export default Content