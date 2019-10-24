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
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class Blogs extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="blogs">
          {/* ********* BLOGS 1 ********* */}
          <div className="section blogs-1" id="blogs-1">
            <Container>
              <br />
              <Row className="align-items-center">
                <Col lg="4">
                  <Card
                    className="card-blog card-background"
                    data-animation={true}
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/joshua-adam-nolette.jpg") +
                          ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">
                          Capabilities and Limits
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Quantum Computing</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg="4">
                  <Card
                    className="card-blog card-background"
                    data-animation={true}
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/joshua-adam-nolette.jpg") +
                          ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">
                          Capabilities and Limits
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Quantum Computing</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Blogs;
