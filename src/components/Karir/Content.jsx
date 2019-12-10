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

import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";

import "../../assets/css/main.css";

class Blogs extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section bg-white" id="blogs">
          {/* ********* END BLOGS 5 ********* */}
          <BlurryNavbar />
          <ColoredNavbar />
          <div className="blogs-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <h2
                    className="title text-center font-black"
                    style={{ paddingTop: "2rem" }}
                  >
                    Karir
                  </h2>
                  <p className="description font-black">
                    Kami sedang mencari posisi dibawah ini. Apabila lowongan
                    dibawah ini sesuai dengan <br /> keahlian anda, silakan
                    kirim resume anda ke{" "}
                    <b>
                      <i>hrd@topgrowthfutures.com</i>
                    </b>{" "}
                  </p>
                  <Row>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir1.jpg")}
                            />
                          </a>
                        </div>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir2.jpg")}
                            />
                          </a>
                        </div>
                      </Card>
                    </Col>
                    <Col lg="4" xs="12">
                      {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/newscard.png")}
                            />
                          </a>
                        </div>
                      </Card> */}
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
