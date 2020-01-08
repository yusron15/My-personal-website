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
import { LangContext } from "../MyContext";

import ScrollAnimation from "react-animate-on-scroll";
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
      <LangContext.Consumer>
      {({ lang }) => {
        return (
      <>
        <div className="cd-section" id="pricing">
          {/* *** PRICING 3 *** */}
          <div
            className="pricing-3"
            id="pricing-3"
            style={{ backgroundColor: "#1D1E1F" }}
          >
            <Container>
              <Row>
                <Col className="" md="6">
                  <h2
                    className="title"
                    style={{ textAlign: "left", fontSize: 42, color: "white" }}
                  >
                    {/* Tipe Akun */}
                    {lang.Landing.Pricing.title}
                  </h2>
                  <h4
                    className="description"
                    style={{
                      textAlign: "left",
                      fontSize: 24,
                      color: "#81878D"
                    }}
                    style={{ padding: "0 20px 0 0", color: "white" }}
                  >
                    {lang.Landing.Pricing.subtitle}

                  </h4>
                </Col>
              </Row>
              <div className="space-30" />
              <Row>
                <Container>
                  {/* <Card style={{ backgroundColor: "#1D1E1F" }}> */}
                  <Row>
                    <Col className="pl-0" md="4">
                      <ScrollAnimation
                        delay={100}
                        offset={100}
                        animateIn="fadeIn"
                        animateOut="fadeOut"
                      >
                        <Card
                          className="card-pricing card-plain zoom free"
                          style={{
                            textAlign: "left",
                            backgroundColor: "#1D1E1F",
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
                                color: "white",
                                textAlign: "center"
                              }}
                            >
                    {lang.Landing.Pricing.card[0][0]}
                             
                            </CardTitle>
                            <CardTitle
                              tag="h1"
                              style={{
                                textAlign: "left",
                                fontWeight: "bold",
                                fontSize: 50,
                                textAlign: "center"
                              }}
                            >
                    {lang.Landing.Pricing.card[0][1]}

                            </CardTitle>
                            <div style={{ marginTop: 10, textAlign: "center" }}>
                              <span
                                style={{
                                  color: "#81878D",
                                  textAlign: "center"
                                }}
                              >
                    {lang.Landing.Pricing.card[0][2]}

                              </span>
                            </div>
                          </CardHeader>
                          <CardBody>
                            {/* <div
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
                            </div> */}
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
                    {lang.Landing.Pricing.card[0][3]}
                                
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
                    {lang.Landing.Pricing.card[0][4]}
                                
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
                    {lang.Landing.Pricing.card[0][5]}
                            </div>

                            <Button
                              className="btn-round"
                              color="info"
                              type="button"
                              block
                              style={{ height: 50, fontSize: 18 }}
                            >
                    {lang.Landing.Pricing.card[0][6]}
                            
                            </Button>
                          </CardBody>
                        </Card>
                      </ScrollAnimation>
                    </Col>

                    <Col className="pl-0" md="4">
                      <ScrollAnimation
                        delay={200}
                        offset={100}
                        animateIn="fadeIn"
                        animateOut="fadeOut"
                      >
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
                                textAlign: "center",
                                fontSize: 24,
                                fontWeight: "bold",
                                color: "white"
                              }}
                            >
                    {lang.Landing.Pricing.card[1][0]}
                            </CardTitle>
                            <CardTitle
                              tag="h1"
                              style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                fontSize: 50
                              }}
                            >
                    {lang.Landing.Pricing.card[1][1]}
                            </CardTitle>
                            <div style={{ marginTop: 10, textAlign: "center" }}>
                              <span
                                style={{
                                  color: "#81878D",
                                  textAlign: "center"
                                }}
                              >
                    {lang.Landing.Pricing.card[1][2]}
                              </span>
                            </div>
                          </CardHeader>
                          <CardBody>
                            {/* <div
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
                            </div> */}
                            <div
                              className="item-stripped"
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex"
                              }}
                            >
                              <div>
                                <span
                                  style={{
                                    color: "white",
                                    fontSize: 14
                                  }}
                                >
                    {lang.Landing.Pricing.card[1][3]}
                                  {/* Minimum &nbsp; */}
                                </span>
                              </div>
                              
                            </div>
                            <div
                              className="item-stripped opacity"
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex"
                              }}
                            >
                              <div>
                                <span
                                  style={{
                                    color: "white",
                                    fontSize: 14
                                  }}
                                >
                    {lang.Landing.Pricing.card[1][4]}
                         
                                </span>
                              </div>
                            
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                fontSize: 16,

                                color: "white",
                                margin: "20px 0 27px 0"
                              }}
                            >
                    {lang.Landing.Pricing.card[1][5]}
                         
                            </div>

                            <Button
                              className="btn-round"
                              color="info"
                              type="button"
                              block
                              style={{ height: 50, fontSize: 18 }}
                            >
                    {lang.Landing.Pricing.card[1][6]}
                            </Button>
                          </CardBody>
                        </Card>
                      </ScrollAnimation>
                    </Col>
                    <Col className="pl-0" md="4">
                      <ScrollAnimation
                        delay={300}
                        offset={100}
                        animateIn="fadeIn"
                        animateOut="fadeOut"
                      >
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
                                color: "white",
                                textAlign: "center"
                              }}
                            >
                    {lang.Landing.Pricing.card[2][0]}
                  
                            </CardTitle>
                            <CardTitle
                              tag="h1"
                              style={{
                                textAlign: "left",
                                fontWeight: "bold",
                                fontSize: 50,
                                textAlign: "center"
                              }}
                            >
                    {lang.Landing.Pricing.card[2][1]}
                       
                            </CardTitle>
                            <div style={{ marginTop: 10, textAlign: "center" }}>
                              <span
                                style={{
                                  color: "#81878D",
                                  textAlign: "center"
                                }}
                              >
                    {lang.Landing.Pricing.card[2][2]}
                               
                              </span>
                            </div>
                          </CardHeader>
                          <CardBody>
                            {/* <div
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
                            </div> */}
                            <div
                              className="item-stripped"
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex"
                              }}
                            >
                              <div>
                                <span
                                  style={{
                                    color: "white",
                                    fontSize: 14
                                  }}
                                >
                    {lang.Landing.Pricing.card[2][3]}
                              
                                </span>
                              </div>
                           
                            </div>
                            <div
                              className="item-stripped opacity"
                              style={{
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex"
                              }}
                            >
                              <div>
                                <span
                                  style={{
                                    color: "white",
                                    fontSize: 14
                                  }}
                                >
                    {lang.Landing.Pricing.card[2][4]}
                                  
                                </span>
                              </div>
                            
                            </div>
                            <div
                              style={{
                                textAlign: "center",
                                fontSize: 16,
                                color: "white",
                                margin: "20px 0 27px 0"
                              }}
                            >
                    {lang.Landing.Pricing.card[2][5]}
                         
                            </div>

                            <Button
                              className="btn-round"
                              color="info"
                              type="button"
                              block
                              style={{ height: 50, fontSize: 18 }}
                            >
                    {lang.Landing.Pricing.card[2][6]}
                              
                            </Button>
                          </CardBody>
                        </Card>
                      </ScrollAnimation>
                    </Col>
                  </Row>
                  {/* </Card> */}
                </Container>
              </Row>
            </Container>
          </div>
          {/* *** END PRICING 3 *** */}
        </div>
      </>
   
   );
  }}
</LangContext.Consumer>
   );
  }
}

export default Pricing;
