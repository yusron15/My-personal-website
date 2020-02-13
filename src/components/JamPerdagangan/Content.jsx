import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import { LangContext } from "../MyContext";
import { isMobile } from "react-device-detect";
import ScrollAnimation from "react-animate-on-scroll";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import SidebarMobile from "components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import bg from "../../assets/img/jamperdagangan-header.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

const text = {
  // fontWeight: "bold",
  color: "black",
  textAlign: "center",
  fontSize: "1rem"
};

class Tables extends React.Component {
  async componentDidMount() {
    // await this.props.getContent("landing", "id");
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
           <div
                className="cd-section broken-white"
                id="tables"
              >
                <div className="tables-2">
                  <div
                    className="team-1 background-header-mobile"
                    style={{
                      backgroundImage: `url(${bg})`,
                      padding: 0
                    }}
                  >
                    <SidebarMobile />
                    {/* <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} /> */}
                    <div className="title title-header-mobile">
                      {this.props.pageStore.jamperdagangan.header}
                    </div>
                  </div>
                  <Container style={{ marginTop: "50px" }}>
                    <Row>
                      <Col
                        className="mx-auto"
                        md="12"
                        style={{ borderRadius: "20px", marginBottom: "50px" }}
                      >
                        <div>
                          <Table
                            // bordered
                            className="table-shopping"
                            style={{
                              backgroundColor: "#224377",
                              borderRadius: "5px",
                              borderCollapse: "inherit"
                              // borderWidth: "0.2px"
                            }}
                          >
                            <thead>
                              <tr style={{ backgroundColor: "#224377" }}>
                                <td className="text-white text-center">
                                  <b>
                                    {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].prefix1
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].prefix2
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].prefix3
                                    }
                                  </b>
                                </td>
                              </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "#D1D1D1" }}>
                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[0].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[0].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[0].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[1].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[1].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[1].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[2].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[2].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[2].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[3].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[3].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[3].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[4].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[4].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[4].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[5].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[5].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[5].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[6].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[6].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[6].prefix3
                                    }
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          <Table
                            // bordered
                            className="table-shopping"
                            style={{
                              backgroundColor: "#224377",
                              borderRadius: "5px",
                              borderCollapse: "inherit"
                              // borderWidth: "0.2px"
                            }}
                          >
                            <thead>
                              <tr style={{ backgroundColor: "#224377" }}>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix1
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix2
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix3
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix4
                                    }
                                  </b>
                                </td>
                              </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "#D1D1D1" }}>
                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix3
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix4
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix3
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix4
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix3
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix4
                                    }
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          {/* </ScrollAnimation> */}
                          {/* </div>
                      </CardBody>
                    </Card> */}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END Table 2 ********* */}
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
                // style={{ backgroundColor: "#D4D4D4" }}
                id="tables"
              >
                {/* ********* Table 2 ********* */}
                <div className="tables-2">
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
                      {this.props.pageStore.jamperdagangan.header}
                    </div>
                  </div>
                  <Container style={{ marginTop: "50px" }}>
                    {/* <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h2
                    className="title mb-4"
                    style={{ paddingTop: "50px", color: "black" }}
                  >
                    Jam Perdagangan
                  </h2>
                  <div className="section-space" />
                </Col>
              </Row> */}
                    <Row>
                      <Col
                        className="mx-auto"
                        md="12"
                        style={{ borderRadius: "20px", marginBottom: "50px" }}
                      >
                        <div>
                          <Table
                            // bordered
                            className="table-shopping"
                            style={{
                              backgroundColor: "#224377",
                              borderRadius: "5px",
                              borderCollapse: "inherit"
                              // borderWidth: "0.2px"
                            }}
                          >
                           <thead>
                              <tr style={{ backgroundColor: "#224377" }}>
                                <td className="text-white text-center">
                                  <b>
                                    {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].prefix1
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].prefix2
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].prefix3
                                    }
                                  </b>
                                </td>
                              </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "#D1D1D1" }}>
                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[0].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[0].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[0].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[1].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[1].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[1].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[2].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[2].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[2].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[3].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[3].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[3].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[4].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[4].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[4].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[5].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[5].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[5].prefix3
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[6].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[6].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[0].tableData[6].prefix3
                                    }
                                </td>
                              </tr>
                            </tbody>
                          </Table>

                          <Table
                            // bordered
                            className="table-shopping"
                            style={{
                              backgroundColor: "#224377",
                              borderRadius: "5px",
                              borderCollapse: "inherit"
                              // borderWidth: "0.2px"
                            }}
                          >
                            <thead>
                              <tr style={{ backgroundColor: "#224377" }}>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix1
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix2
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix3
                                    }
                                  </b>
                                </td>
                                <td className="text-white text-center">
                                  <b>
                                  {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].prefix4
                                    }
                                  </b>
                                </td>
                              </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "#D1D1D1" }}>
                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix3
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[0].prefix4
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix3
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[1].prefix4
                                    }
                                </td>
                              </tr>

                              <tr>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix1
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix2
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix3
                                    }
                                </td>
                                <td style={text}>
                                {
                                      this.props.pageStore.jamperdagangan
                                        .table[1].tableData[2].prefix4
                                    }
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          {/* </ScrollAnimation> */}
                          {/* </div>
                      </CardBody>
                    </Card> */}
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END Table 2 ********* */}
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
  // getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
