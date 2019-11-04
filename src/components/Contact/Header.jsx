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
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import {
  Badge,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "../../components/Navbars/Navbar.jsx";

import "../../assets/css/main.css";

class ContactUs extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header header-filter contactus-3">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/andre-benz.jpg") + ")"
              }}
            />
            <Container>
              <Row>
                <Col className="text-center" md="12">
                  <h1>Ada pertanyaan?</h1>
                  <h5>
                    Kami mengharapkan anda untuk ikut membicarakan apa yang anda
                    inginkan.
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
