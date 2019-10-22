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
          <div className="pricing-3" id="pricing-3" style={{backgroundColor:"black"}}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="12">
                  <h2 className="title" style={{textAlign:"left"}}>Tipe Akun</h2>
                  <h4 className="description" style={{textAlign:"left"}}>
                  Kini Anda dapat memilih tipe akun sesuai dengan karakter trading anda.
                  </h4>
                </Col>
              </Row>
              <div className="space-50" />
              <Row>
                <Container>
                  <Card style={{backgroundColor:"black"}}>
                    <Row>
                      <Col className="pr-0" md="4">
                        <Card className="card-pricing card-plain" >
                          <CardHeader>
                            <h4 className="title">Team</h4>
                            <p className="description">
                              All core features you need to track your expenses
                            </p>
                            <CardTitle tag="h1">$299</CardTitle>
                            <h5 className="mt-2">billed annually</h5>
                          </CardHeader>
                          <CardBody>
                            <ul>
                              <li>
                                <i className="tim-icons icon-check-2" /> 1000 MB
                              </li>
                              <li>
                                <i className="tim-icons icon-email-85" /> 5
                                emails
                              </li>
                              <li>
                                <i className="tim-icons icon-chart-bar-32" /> 5
                                Databases
                              </li>
                              <li>
                                <i className="tim-icons icon-alert-circle-exc" />{" "}
                                No Support
                              </li>
                            </ul>
                            <Button
                              className="btn-round ml-1"
                              color="info"
                              type="button"
                            >
                              Round
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="p-0" md="4">
                        <Card className="card-pricing card-plain">
                          <CardHeader>
                            <h4 className="title">Growth</h4>
                            <p className="description">
                              Create your perfect plan for your business or
                              project
                            </p>
                            <CardTitle tag="h1">$499</CardTitle>
                            <h5 className="mt-2">billed annually</h5>
                          </CardHeader>
                          <CardBody>
                            <ul>
                              <li>
                                <i className="tim-icons icon-check-2" /> 5000 MB
                              </li>
                              <li>
                                <i className="tim-icons icon-email-85" /> 50
                                emails
                              </li>
                              <li>
                                <i className="tim-icons icon-chart-bar-32" /> 10
                                Databases
                              </li>
                              <li>
                                <i className="tim-icons icon-alert-circle-exc" />{" "}
                                Premium Support
                              </li>
                            </ul>
                            <Button
                              className="btn-round ml-1"
                              color="info"
                              type="button"
                            >
                              Round
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="pl-0" md="4">
                        <Card className="card-pricing card-plain">
                          <CardHeader>
                            <h4 className="title">Enterprises</h4>
                            <p className="description">
                              Go to the next level and add value to your
                              customers
                            </p>
                            <CardTitle tag="h1">$599</CardTitle>
                            <h5 className="mt-2">billed annually</h5>
                          </CardHeader>
                          <CardBody>
                            <ul>
                              <li>
                                <i className="tim-icons icon-check-2" /> 10.000
                                MB
                              </li>
                              <li>
                                <i className="tim-icons icon-email-85" />{" "}
                                Unlimited emails
                              </li>
                              <li>
                                <i className="tim-icons icon-chart-bar-32" /> 50
                                Databases
                              </li>
                              <li>
                                <i className="tim-icons icon-alert-circle-exc" />{" "}
                                Premium Support
                              </li>
                            </ul>
                            <Button
                              className="btn-round ml-1"
                              color="info"
                              type="button"
                            >
                              Round
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Card>
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
