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
import ScrollAnimation from "react-animate-on-scroll";
import fg1 from "../../assets/img/forex.png";
import fg2 from "../../assets/img/forex2.png";
import fg3 from "../../assets/img/forexgold3.png";
import bg from "../../assets/img/forex-header.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import { LangContext } from "../MyContext";

import { styles } from "react-animations/lib/swing";

const textTitle = {
  textAlign: "center",
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

const intermezzo = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  margin: 0,
  fontSize: "1rem",
  color: "black"
};

class Features extends React.Component {
  render() {
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
                    backgroundImage: `url(${bg})`,
                    padding: 0
                  }}
                >
                  <BlurryNavbar />

                  <div className="title title-header">{lang.Forex.header}</div>
                </div>
                <div className="features-3" style={{ paddingTop: 0 }}>
                  <Container fluid>
                    <Row>
                      <Col className="ml-auto mr-auto text-center" md="8">
                        {/* <div
                    // className="title"
                    style={textTitle}
                  >
                    FOREX
                  </div> */}
                        <div className="space-50" />
                        <p style={intermezzo}>{lang.Forex.top}</p>
                        {/* <Col className="mr-auto ml-auto" md="5"> */}
                        {/* </Col> */}
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        sm={{ size: 10, order: 2, offset: 1 }}
                        style={{ marginTop: "50px" }}
                      >
                        <Row>
                          <Col lg="4">
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
                          <Col lg="8">
                            <div style={textContent}>
                              <div
                                className="title-content"
                                style={{ color: "black" }}
                              >
                                {lang.Forex.content[0].title}
                              </div>
                              <p
                                style={{ color: "black", textAlign: "justify" }}
                              >
                                {lang.Forex.content[0].content}
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <Row style={{ marginTop: "50px" }}>
                          <Col lg="8">
                            <div style={textContent}>
                              <div
                                className="title-content"
                                style={{ color: "black" }}
                              >
                                {lang.Forex.content[1].title}
                              </div>
                              <p
                                style={{ color: "black", textAlign: "justify" }}
                              >
                                {lang.Forex.content[1].content}
                              </p>{" "}
                            </div>
                          </Col>
                          <Col lg="4">
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
                        <Row style={{ marginTop: "50px" }}>
                          <Col lg="12">
                            <div>
                              <div style={textTitle}>
                                {lang.Forex.content[2].title}
                              </div>
                              <p style={intermezzo}>
                                {lang.Forex.content[2].content}
                              </p>
                            </div>

                            <div style={{ marginTop: "20px" }}>
                              <div style={textTitle}>
                                {lang.Forex.content[3].title}
                              </div>

                              <Table style={{ marginTop: "20px" }}>
                                <tbody>
                                  <tr style={{ backgroundColor: "#224377" }}>
                                    <td className="text-white">
                                      <b>Cross Currency Pairs </b>
                                    </td>
                                    <td className="text-white">
                                      <b>Nickname</b>
                                    </td>
                                    <td className="text-white">
                                      <b>Contract Size </b>
                                    </td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>EUR / USD</td>
                                    <td>Euro</td>
                                    <td>EUR 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>USD / JPY </td>
                                    <td> Japanese Yen</td>
                                    <td>USD 100,000 </td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td> GBP / USD</td>
                                    <td> Poundsterling</td>
                                    <td> GBP 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td> USD / CHF</td>
                                    <td> Swiss Franc</td>
                                    <td> USD 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td> AUD / USD</td>
                                    <td> Australian Dollar</td>
                                    <td> AUD 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td> NZD / USD</td>
                                    <td> New Zealand Dollar</td>
                                    <td> NZD 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>USD / CAD </td>
                                    <td> Canadian Dollar</td>
                                    <td>USD 100,000 </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>

                            <div style={{ marginTop: "20px" }}>
                              <div style={textTitle}>
                                {lang.Forex.content[4].title}
                              </div>

                              <Table style={{ marginTop: "20px" }}>
                                <tbody>
                                  <tr style={{ backgroundColor: "#224377" }}>
                                    <td className="text-white">
                                      <b>Cross Currency Pairs </b>
                                    </td>
                                    <td className="text-white">
                                      <b>Nickname</b>
                                    </td>
                                    <td className="text-white">
                                      <b>Contract Size </b>
                                    </td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>EURGBP</td>
                                    <td>Euro / British Pound </td>
                                    <td>EUR 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>EURJPY</td>
                                    <td>Euro / Japanese Yen </td>
                                    <td>EUR 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>GBPJPY</td>
                                    <td>British Pound / Japanese Yen</td>
                                    <td>GBP 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>CHFJPY</td>
                                    <td>Swiss Franc / Japanese Yen</td>
                                    <td>CHF 100,000</td>
                                  </tr>
                                  <tr className="black-newsletter">
                                    <td>AUDJPY</td>
                                    <td>Australian Dollar / Japanese Yen</td>
                                    <td>AUD 100,000</td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
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
  }
}

export default Features;
