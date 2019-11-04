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

import "../../assets/css/main.css";

class Blogs extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="blogs">
          {/* ********* END BLOGS 5 ********* */}
          <div className="blogs-5 black-news">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <h2 className="title text-center">Karir</h2>
                  <p className="description">
                    Kami sedang mencari posisi dibawah ini. Apabila lowongan
                    dibawah ini sesuai dengan keahlian anda, silakan kirim
                    resume anda ke hrd@topgrowthfutures.com{" "}
                  </p>
                  <Row>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/steven-roe.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <h6 className="category text-primary">Features</h6>
                          <CardTitle tag="h4">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              That’s One Way To Ditch Your Passenger
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            As near as we can tell, this guy must have thought
                            he was going over backwards and tapped the rear...
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/p10.jpg")}
                              />
                              <span className="ml-1">Mike John</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-watch-time" /> 5 min
                              read
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/noah-wetering.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <h6 className="category text-info">Animals</h6>
                          <CardTitle tag="h4">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              Shark Week: How to Watch It Like a Scientist
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            Just when you thought it was safe to turn on your
                            television, the Discovery Channel's "Shark Week"...
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/johana.jpg")}
                              />
                              <span className="ml-1">Jona Zmud</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-watch-time" /> 5 min
                              read
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" xs="12">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/mark-harrison.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <h6 className="category text-warning">Cars</h6>
                          <CardTitle tag="h4">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              Who's Afraid of the Self-Driving Car?
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            It's been 60 years since the cover of Popular
                            Mechanics magazine gave us the promise of flying
                            cars...
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/christian.jpg")}
                              />
                              <span className="ml-1">Marc Oliver</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-heart-2" /> 2.4K
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 5 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Blogs;
