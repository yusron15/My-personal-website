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

import bappebti from "../../assets/img/legalitas1.png";
import jfx from "../../assets/img/legalitas2.png";
import icdx from "../../assets/img/legalitas3.png";
import kbi from "../../assets/img/legalitas4.png";
import ich from "../../assets/img/legalitas5.png";

const textColor = {
    color:"black"
  };

class Legalitas extends React.Component {
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
          <div className="projects-3" style={{backgroundColor: "white"}}>
            <Container>
              <div className="space-50"/>
                <Col>
                    <h1 className="title" style={textColor}>LEGALITAS</h1>
                    <h2 className="title" style={textColor}>Izin dan Pengawasan</h2>
                    <Row>
                        <Col md="9">
                            <h2 className="title" style={textColor}>BAPPEBTI</h2>
                            <p style={textColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                            </p>
                        </Col>
                        <Col md="3">
                            <img src={bappebti}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="9">
                            
                            <h2 className="title" style={textColor}>Keanggotaan Lembaga Bursa</h2>
                            <h4 className="title" style={textColor}>Bursa Berjangka Jakarta (BBJ)</h4>
                            <p style={textColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                            </p>

                            <h4 className="title" style={textColor}>Bursa Komoditi dan Derivatif Indonesia (BKDI)/ (ICDX)</h4>
                            <p style={textColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                            </p>
                        </Col>
                        <Col md="3">
                            <img src={jfx}/>
                            <img src={icdx}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="9">
                            
                            <h2 className="title" style={textColor}>Keanggotaan Lembaga Kliring</h2>
                            <h4 className="title" style={textColor}>Kliring Berjangka Indonesia ( KBI )</h4>
                            <p style={textColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                            </p>

                            <h4 className="title" style={textColor}>ICH (Indonesia Clearing House)</h4>
                            <p style={textColor}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  
                            </p>
                        </Col>
                        <Col md="3">
                            <img src={kbi}/>
                            <img src={ich}/>
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

export default Legalitas;
