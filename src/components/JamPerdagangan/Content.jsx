/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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

import ScrollAnimation from "react-animate-on-scroll";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import bg from "../../assets/img/jamperdagangan-header.png";
import "../../assets/css/main.css";

class Tables extends React.Component {
  render() {
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
                      {lang.jamperdagangan.header}
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
                          {/* <Card>
                      <CardBody>
                        <div className="table-responsive mb-0"> */}
                          {/* <Table className="table-pricing"> */}
                          {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut"> */}
                          <Table
                            style={{
                              borderCollapse: "collapse",
                              borderRadius: "10px"
                            }}
                          >
                            <tbody>
                              <tr style={{ backgroundColor: "#224377" }}>
                                <td className="text-white text-center">
                                  <b>{lang.jamperdagangan.table[0][0][0]}</b>
                                </td>
                                <td className="text-white text-center">
                                  <b>{lang.jamperdagangan.table[0][0][1]}</b>
                                </td>
                                <td className="text-white text-center">
                                  <b>{lang.jamperdagangan.table[0][0][2]}</b>
                                </td>
                              </tr>
                              <tr className="black-newsletter">
                                <td className="text-center">
                                  {lang.jamperdagangan.table[0][1][0]}
                                </td>
                                <td>{lang.jamperdagangan.table[0][1][1]}</td>
                                <td>{lang.jamperdagangan.table[0][1][2]}</td>
                              </tr>

                              <tr className="black-newsletter">
                                <td className="text-center">
                                  {lang.jamperdagangan.table[0][2][0]}
                                </td>
                                <td>{lang.jamperdagangan.table[0][2][1]}</td>
                                <td>{lang.jamperdagangan.table[0][2][2]}</td>
                              </tr>

                              <tr className="black-newsletter">
                                <td className="text-center">
                                  {lang.jamperdagangan.table[0][3][0]}
                                </td>
                                <td>{lang.jamperdagangan.table[0][3][1]}</td>
                                <td>{lang.jamperdagangan.table[0][3][2]}</td>
                              </tr>

                              <tr className="black-newsletter">
                                <td className="text-center">
                                  {lang.jamperdagangan.table[0][4][0]}
                                </td>
                                <td>{lang.jamperdagangan.table[0][4][1]}</td>
                                <td>{lang.jamperdagangan.table[0][4][2]}</td>
                              </tr>

                              <tr className="black-newsletter">
                                <td className="text-center">
                                  {lang.jamperdagangan.table[0][5][0]}
                                </td>
                                <td>{lang.jamperdagangan.table[0][5][1]}</td>
                                <td>{lang.jamperdagangan.table[0][5][2]}</td>
                              </tr>

                              <tr className="black-newsletter">
                                <td className="text-center">
                                  {lang.jamperdagangan.table[0][6][0]}
                                </td>
                                <td>{lang.jamperdagangan.table[0][6][1]}</td>
                                <td>{lang.jamperdagangan.table[0][6][1]}</td>
                              </tr>

                              <tr className="black-newsletter">
                                <td className="text-center">
                                  {lang.jamperdagangan.table[0][7][0]}
                                </td>
                                <td>{lang.jamperdagangan.table[0][7][1]}</td>
                                <td>{lang.jamperdagangan.table[0][7][2]}</td>
                              </tr>
                            </tbody>
                          </Table>
                          {/* </ScrollAnimation> */}
                          {/* </div>
                      </CardBody>
                    </Card> */}

                          {/* <Card>
                      <CardBody>
                        <div className="table-responsive mb-0"> */}
                          {/* <Table className="table-pricing black-newsletter"> */}
                          {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut"> */}
                          <Table>
                            <tbody>
                              <tr style={{ backgroundColor: "#224377" }}>
                                <td className="text-white text-center">
                                  <b>{lang.jamperdagangan.table[1][0][0]}</b>
                                </td>
                                <td className="text-white text-center">
                                  <b>{lang.jamperdagangan.table[1][0][1]}</b>
                                </td>
                                <td className="text-white text-center">
                                  <b>{lang.jamperdagangan.table[1][0][2]}</b>
                                </td>
                                <td className="text-white text-center">
                                  <b>{lang.jamperdagangan.table[1][0][3]}</b>
                                </td>
                              </tr>
                              <tr className="black-newsletter text-center">
                                <td>{lang.jamperdagangan.table[1][1][0]}</td>
                                <td>{lang.jamperdagangan.table[1][1][1]}</td>
                                <td>{lang.jamperdagangan.table[1][1][2]}</td>
                                <td>{lang.jamperdagangan.table[1][1][3]}</td>
                              </tr>

                              <tr className="black-newsletter text-center">
                                <td>{lang.jamperdagangan.table[1][2][0]}</td>
                                <td>{lang.jamperdagangan.table[1][2][1]}</td>
                                <td>{lang.jamperdagangan.table[1][2][2]}</td>
                                <td>{lang.jamperdagangan.table[1][2][3]}</td>
                              </tr>

                              <tr className="black-newsletter text-center">
                                <td>{lang.jamperdagangan.table[1][3][0]}</td>
                                <td>{lang.jamperdagangan.table[1][3][1]}</td>
                                <td>{lang.jamperdagangan.table[1][3][2]}</td>
                                <td>{lang.jamperdagangan.table[1][3][3]}</td>
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
  }
}

export default Tables;
