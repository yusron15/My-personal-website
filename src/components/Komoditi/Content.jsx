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

import "../../assets/css/main.css";

import increase from "../../assets/img/increase.png";
import money from "../../assets/img/money.png";
import shield from "../../assets/img/shield.png";

const font = {
  color: "black",
  textAlign: "left"
};

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
          {/* ********* FEATURES 1 ********* */}
          <div className="features-1 bg-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="11">
                  <h1 className="title" style={font}>
                    Mengapa Memperdagangkan Komoditi ?
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="info info-hover">
                    {/* <div className="icon icon-primary"> */}
                    <img alt="..." className="bg-blob" src={increase} />
                    {/* </div> */}
                    <h4 className="info-title" style={font}>
                      Permintaan Akan Komoditas Terus Meningkat
                    </h4>
                    <p className="description" style={font}>
                      Semakin berkembangnya dunia, maka permintaan atas
                      komoditas akan terus meningkat yang mengakibatkan kenaikan
                      harga komoditas tersebut.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info info-hover">
                    <img alt="..." className="bg-blob" src={money} />

                    <h4 className="info-title" style={font}>
                      Analyze Performance
                    </h4>
                    <p className="description" style={font}>
                      Sejalan dengan laju inflasi, harga komoditas akan terus
                      meningkat; para pelaku pasar dapat melindungi harga
                      tersebut terhadap inflasi melalui Bursa Berjangka.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info info-hover">
                    <img alt="..." className="bg-blob" src={shield} />
                    <h4 className="info-title" style={font}>
                      Measure Conversions
                    </h4>
                    <p className="description" style={font}>
                      Di antaranya adalah perkiraan cuaca, faktor ekonomi,
                      faktor politik, tekanan internasional, dan spekulasi
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
