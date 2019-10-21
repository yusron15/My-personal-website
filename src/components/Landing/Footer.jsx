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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footers extends React.Component {
  render() {
    return (
      <>
        <div className="section section-footers"  style={{backgroundColor:"black"}}>
          
            {/* ********* BIG WHITE FOOTER V2 ********* */}
            {/* <footer className="footer footer-white footer-big"> */}
              <Container>
                <div className="content">
                  <Row>
                    <Col md="3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <h5>BLK• Design System PRO React</h5>
                      </a>
                      <p>
                        Probably the best Design System in the world! We know
                        you've been waiting for it, so don't be shy!
                      </p>
                    </Col>
                    <Col md="2">
                      <h5>About</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Presentation
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="2">
                      <h5>Market</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Sales FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            How to Register
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Sell Goods
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Receive Payment
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Transactions Issues
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="2">
                      <h5>Legal</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Transactions FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Licenses
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="3">
                      <h5>Subscribe to Newsletter</h5>
                      <p>
                        Join our newsletter and get news in your inbox every
                        week! We hate spam too, so no worries about this.
                      </p>
                      <Form
                        action=""
                        className="form form-newsletter"
                        method=""
                      >
                        <FormGroup>
                          <Input placeholder="Your Email..." type="email" />
                        </FormGroup>
                        <Button
                          className="btn-icon btn-round"
                          color="primary"
                          name="button"
                          type="button"
                        >
                          <i className="tim-icons icon-email-85" />
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </div>
                <hr />
                <div className="copyright pull-center">
                  Copyright © {new Date().getFullYear()} Creative Tim All Rights
                  Reserved.
                </div>
              </Container>
            {/* </footer> */}
            {/* ********* END BIG WHITE FOOTER v2 ********* */}
        
        </div>
      </>
    );
  }
}

export default Footers;
