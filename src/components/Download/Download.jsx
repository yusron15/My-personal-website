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
import { Badge, Button, Container, Row, Col } from "reactstrap";

import laptop from "../../assets/img/download.png";
import android from "../../assets/img/downloadandroid.png";

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
          {/* ********* FEATURES 3 ********* */}
          <div className="features-3" style={{ backgroundColor: "white" }}>
            <Container fluid>
              <Row>
                <Col className="mr-auto ml-auto" md="10">
                  <h1
                    className="title"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    Download
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <Col>
                    <img src={laptop} height="250" width="auto" />
                  </Col>
                </Col>
                <Col md="6">
                  <Row>
                    <Col md="6">
                      <div className="info info-horizontal">
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/success.png")}
                          />
                          <i className="tim-icons icon-html5" />
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-horizontal">
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/success.png")}
                          />
                          <i className="tim-icons icon-html5" />
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-horizontal">
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/success.png")}
                          />
                          <i className="tim-icons icon-html5" />
                        </div>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-horizontal">
                        <div className="icon icon-success">
                          <img
                            alt="..."
                            className="bg-blob"
                            src={require("assets/img/feature-blob/success.png")}
                          />
                          <i className="tim-icons icon-html5" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
