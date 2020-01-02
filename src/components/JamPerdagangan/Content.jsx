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
import ScrollAnimation from "react-animate-on-scroll";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import bg from "../../assets/img/jamperdagangan.png";
import "../../assets/css/main.css";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section broken-white"
          // style={{ backgroundColor: "#D4D4D4" }}
          id="tables"
        >
          {/* ********* Table 2 ********* */}
          <div className="tables-2">
            <BlurryNavbar />
            <ColoredNavbar location={{ ...this.props.location }} />

            <div
              className="team-1 background-header"
              style={{
                backgroundImage: `url(${bg})`
              }}
            >
              <div className="title title-header">Jam Perdagangan</div>
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
                            <b>Product</b>
                          </td>
                          <td className="text-white text-center">
                            <b>Summer</b>
                          </td>
                          <td className="text-white text-center">
                            <b>Winter</b>
                          </td>
                        </tr>
                        <tr className="black-newsletter">
                          <td className="text-center">FOREX</td>
                          <td>
                            Monday 05.00am – Saturday 04:00am Market Close at
                            04.00am (Tuesday – Saturday) (all time is Jakarta
                            time)
                          </td>
                          <td>
                            Monday 05.30am – Saturday 05:00am Market Close at
                            05.00am (Tuesday – Saturday) (all time is Jakarta
                            time)
                          </td>
                        </tr>

                        <tr className="black-newsletter">
                          <td className="text-center">LLG & SILVER</td>
                          <td>
                            Monday Open at 06.00am Tuesday – Friday Open at
                            05.00am Market Close at 04.00am (Tuesday – Saturday)
                            (all time is Jakarta time)
                          </td>
                          <td>
                            Monday – Friday Open at 06.00am Market Close at
                            05.00am (Tuesday – Saturday) (all time is Jakarta
                            time)
                          </td>
                        </tr>

                        <tr className="black-newsletter">
                          <td className="text-center">
                            DOW JONES, S&P500, NASDAQ
                          </td>
                          <td>
                            05.00am – 03.15am next day (all time is Jakarta
                            time)
                          </td>
                          <td>
                            06.00am – 04.15am next day (all time is Jakarta
                            time)
                          </td>
                        </tr>

                        <tr className="black-newsletter">
                          <td className="text-center">FOREX</td>
                          <td>
                            Monday 05.00am – Saturday 04:00am Market Close at
                            04.00am (Tuesday – Saturday) (all time is Jakarta
                            time)
                          </td>
                          <td>
                            Monday 05.30am – Saturday 05:00am Market Close at
                            05.00am (Tuesday – Saturday) (all time is Jakarta
                            time)
                          </td>
                        </tr>

                        <tr className="black-newsletter">
                          <td className="text-center">FTSE</td>
                          <td>
                            07:00am – 03:00am next day (all time is Jakarta
                            time)
                          </td>
                          <td>
                            08:00am – 04:00am next day (all time is Jakarta
                            time)
                          </td>
                        </tr>

                        <tr className="black-newsletter">
                          <td className="text-center">DAX</td>
                          <td>
                            07:15am – 03:00am next day (all time is Jakarta
                            time)
                          </td>
                          <td>
                            07:15am – 04:00am next day (all time is Jakarta
                            time)
                          </td>
                        </tr>

                        <tr className="black-newsletter">
                          <td className="text-center">CRUDE OIL</td>
                          <td>
                            05.00am – 04.00am next day (all time is Jakarta
                            time)
                          </td>
                          <td>
                            06.00pm – 05.00am next day (all time is Jakarta
                            time)
                          </td>
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
                            <b>Product</b>
                          </td>
                          <td className="text-white text-center">
                            <b>Session 1</b>
                          </td>
                          <td className="text-white text-center">
                            <b>Session 2</b>
                          </td>
                          <td className="text-white text-center">
                            <b>Last Trading Day Closing</b>
                          </td>
                        </tr>
                        <tr className="black-newsletter text-center">
                          <td>KOSPI200</td>
                          <td>07.00am – 01.35pm</td>
                          <td />
                          <td>01.20pm</td>
                        </tr>

                        <tr className="black-newsletter text-center">
                          <td>NIKKEI225</td>
                          <td>06.30am – 01.25pm</td>
                          <td>001.55pm – 03.45am next day</td>
                          <td>01.25pm</td>
                        </tr>

                        <tr className="black-newsletter text-center">
                          <td>HANGSENG</td>
                          <td>08.15am – 11.00am</td>
                          <td>12.00pm – 03.30pm</td>
                          <td>03.00pm</td>
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
}

export default Tables;
