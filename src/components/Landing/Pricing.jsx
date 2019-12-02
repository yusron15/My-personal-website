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
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

import "../../assets/css/main.css";

class Pricing extends React.Component {
  state = {
    firstTabs: "1",
    secondTabs: "2",
    thirdTabs: "1"
  };
  toggle = (tabName, tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        [tabName]: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="pricing">
          {/* ********* PRICING 3 ********* */}
          <div
            className="pricing-3"
            id="pricing-3"
            style={{ backgroundColor: "#151618" }}
          >
            <Container>
              <Row>
                <Col className="" md="6">
                  <h2
                    className="title"
                    style={{ textAlign: "left", fontSize: 42 }}
                  >
                    Tipe Akun
                  </h2>
                  <h4
                    className="description"
                    style={{
                      textAlign: "left",
                      fontSize: 24,
                      color: "#81878D"
                    }}
                    style={{ padding: "0 20px 0 0" }}
                  >
                    Kini Anda dapat memilih tipe akun sesuai dengan karakter
                    trading anda.
                  </h4>
                </Col>
              </Row>
              <div className="space-30" />
              <Row>
                <Container>
                  {/* <Card style={{ backgroundColor: "#1D1E1F" }}> */}
                  <Row>
                    <Col className="pl-0" md="4">
                      <Card
                        className="card-pricing card-plain zoom free"
                        style={{
                          textAlign: "left",
                          // backgroundColor: "#323436",
                          borderRadius: "10px"
                        }}
                      >
                        <CardHeader>
                          <CardTitle
                            tag="h1"
                            style={{
                              textAlign: "left",
                              fontSize: 24,
                              fontWeight: "bold",
                              color: "white"
                            }}
                          >
                            Akun Demo
                          </CardTitle>
                          <CardTitle
                            tag="h1"
                            style={{
                              textAlign: "left",
                              fontWeight: "bold",
                              fontSize: 50
                            }}
                          >
                            FREE
                          </CardTitle>
                          <div style={{ marginTop: 10 }}>
                            <span style={{ color: "#81878D" }}>
                              Tidak Ada Deposit
                            </span>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <div
                            className="item-stripped opacity"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20,
                                opacity: "none"
                              }}
                            >
                              -
                            </span>
                          </div>
                          <div
                            className="item-stripped"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20
                              }}
                            >
                              -
                            </span>
                          </div>
                          <div
                            className="item-stripped opacity"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20
                              }}
                            >
                              -
                            </span>
                          </div>
                          <div
                            style={{
                              textAlign: "center",
                              fontSize: 16,

                              color: "white",
                              margin: "20px 0 27px 0"
                            }}
                          >
                            Pro I Trader & Topgrowth Trader (MT4)
                          </div>

                          <Button
                            className="btn-round"
                            color="info"
                            type="button"
                            block
                            style={{ height: 50, fontSize: 18 }}
                          >
                            Daftar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col className="pl-0" md="4">
                      <Card
                        className="card-pricing card-plain zoom"
                        style={{
                          textAlign: "left",
                          backgroundColor: "#323436",
                          borderRadius: "10px"
                        }}
                      >
                        <CardHeader>
                          <CardTitle
                            tag="h1"
                            style={{
                              textAlign: "left",
                              fontSize: 24,
                              fontWeight: "bold",
                              color: "white"
                            }}
                          >
                            Akun Mini
                          </CardTitle>
                          <CardTitle
                            tag="h1"
                            style={{
                              textAlign: "left",
                              fontWeight: "bold",
                              fontSize: 50
                            }}
                          >
                            $500
                          </CardTitle>
                          <div style={{ marginTop: 10 }}>
                            <span style={{ color: "#81878D" }}>
                              / initial deposit
                            </span>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <div
                            className="item-stripped opacity"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20,
                                opacity: "none"
                              }}
                            >
                              $ 5
                            </span>
                          </div>
                          <div
                            className="item-stripped"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20
                              }}
                            >
                              0.1 Lot
                            </span>
                          </div>
                          <div
                            className="item-stripped opacity"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20
                              }}
                            >
                              1.0 Lot
                            </span>
                          </div>
                          <div
                            style={{
                              textAlign: "center",
                              fontSize: 16,

                              color: "white",
                              margin: "20px 0 27px 0"
                            }}
                          >
                            Topgrowth Trader (MT4)
                          </div>

                          <Button
                            className="btn-round"
                            color="info"
                            type="button"
                            block
                            style={{ height: 50, fontSize: 18 }}
                          >
                            Daftar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col className="pl-0" md="4">
                      <Card
                        className="card-pricing card-plain zoom"
                        style={{
                          textAlign: "left",
                          backgroundColor: "#063980",
                          borderRadius: "10px"
                        }}
                      >
                        <CardHeader>
                          <CardTitle
                            tag="h1"
                            style={{
                              textAlign: "left",
                              fontSize: 24,
                              fontWeight: "bold",
                              color: "white"
                            }}
                          >
                            Akun Reguler
                          </CardTitle>
                          <CardTitle
                            tag="h1"
                            style={{
                              textAlign: "left",
                              fontWeight: "bold",
                              fontSize: 50
                            }}
                          >
                            $10000
                          </CardTitle>
                          <div style={{ marginTop: 10 }}>
                            <span style={{ color: "#81878D" }}>
                              / initial deposit
                            </span>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <div
                            className="item-stripped opacity"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20,
                                opacity: "none"
                              }}
                            >
                              $ 50
                            </span>
                          </div>
                          <div
                            className="item-stripped"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20
                              }}
                            >
                              1.0 Lot
                            </span>
                          </div>
                          <div
                            className="item-stripped opacity"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                              display: "flex"
                            }}
                          >
                            <span
                              style={{
                                color: "white",
                                fontSize: 20
                              }}
                            >
                              20.0 Lot
                            </span>
                          </div>
                          <div
                            style={{
                              textAlign: "center",
                              fontSize: 16,
                              color: "white",
                              margin: "20px 0 27px 0"
                            }}
                          >
                            Pro I Trader & Topgrowth Trader (MT4)
                          </div>

                          <Button
                            className="btn-round"
                            color="info"
                            type="button"
                            block
                            style={{ height: 50, fontSize: 18 }}
                          >
                            Daftar
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  {/* </Card> */}
                </Container>
              </Row>
            </Container>
          </div>
          {/* ********* END PRICING 3 ********* */}
        </div>
      </>
    );
  }
}

export default Pricing;
