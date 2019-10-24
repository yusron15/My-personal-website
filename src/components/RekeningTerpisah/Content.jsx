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
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";

import check from "../../assets/img/Check.png";
import Navbar from "../../components/Navbars/Navbar.jsx";

class Content extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          <div
            // className="projects-3"
            style={{
              backgroundImage: "url(" + require("assets/img/dollar.png") + ")",
              backgroundSize: "cover",
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              minHeight: "80vh"
            }}
          >
            <Navbar />
            <Container>
              <div className="space-50" />
              <Col>
                <Row>
                  <Col md="8">
                    <h2 className="title">REKENING TERPISAH</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                      <br />
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <Row>
                      <Col md="2">
                        <img src={check} />
                      </Col>
                      <Col>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="4">
                    <Row>
                      <Col md="2">
                        <img src={check} />
                      </Col>
                      <Col>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <div className="space-50" />
            </Container>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Content;
