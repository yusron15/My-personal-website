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
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  // Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

import "../../../src/App.css";

import tentangkami from "../../assets/img/tentangkamiheader.png";
import ColoredNavbar from "../Navbars/ColoredNavbar.jsx";

class HeaderAboutUs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="headers">
          {/* ********* HEADER 6 ********* */}
          <div
            className="header header-6 image-overlay"
            style={{ backgroundColor: "#1D1E1F" }}
          >
            <ColoredNavbar />
            <div className="page-header">
              <div className="content-center">
                <Container>
                  <Row className="align-items-center text-left">
                    <Col lg="6" xs="12">
                      <h1 className="title">
                        Tentang <br /> Topgrowth Future
                      </h1>
                      <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                    </Col>
                    <Col lg="6" xs="12">
                      <img src={tentangkami} />
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          {/* ********* END HEADER 6 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default HeaderAboutUs;
