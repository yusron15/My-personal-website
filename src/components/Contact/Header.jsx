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
import { isMobile } from "react-device-detect";
// core components
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";

import "../../assets/css/main.css";

class ContactUs extends React.Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <BlurryNavbar />
          <ColoredNavbar location={{ ...this.props.location }} />
          <div className="wrapper" ref="wrapper">
            <div className="page-header header-filter">
              <div
                className="page-header-image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/header-contact.png") + ")"
                }}
              />
              <Container>
                <Row>
                  <Col className="text-center vertical-center" md="12">
                    <h1 className="title">Ada pertanyaan?</h1>
                    <h4 className="desc">
                      Kami mengharapkan anda untuk ikut membicarakan apa yang
                      anda inginkan.
                    </h4>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <BlurryNavbar />
        <ColoredNavbar location={{ ...this.props.location }} />
        <div className="wrapper" ref="wrapper">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/header-contact.png") + ")"
              }}
            />
            <Container>
              <Row>
                <Col className="text-center vertical-center" md="12">
                  <h1 className="title">Ada pertanyaan?</h1>
                  <h4 className="desc">
                    Kami mengharapkan anda untuk ikut membicarakan apa yang anda
                    inginkan.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  };
  render() {
    return this.renderContent();
  }
}

export default ContactUs;
