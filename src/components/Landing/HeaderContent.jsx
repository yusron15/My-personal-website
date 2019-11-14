import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../../components/Navbars/Navbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";

import image from "../../assets/img/bglanding.png";
class HeaderContent extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="headers">
          {/* ********* HEADER 1 ********* */}
          {/* <Carousel> */}
          <div
            // className="header-filter"
            style={{
              backgroundImage:
                "url(" + require("assets/img/bglanding.png") + ")",
              backgroundSize: "cover"
            }}
          >
            <BlurryNavbar />
            <div className="page-header">
              {/* <div className="page-header-image" /> */}

              <Container style={{ paddingTop: 0 }}>
                <Row>
                  {/* <Navbar /> */}
                  <Col className="mr-auto text-left" lg="5" md="7">
                    <div
                      style={{
                        fontStyle: "Helvetica Bold",
                        fontSize: "2rem",
                        fontWeight: "bold"
                      }}

                      // className="title"
                    >
                      TRADING BERSAMA BROKER TERBAIK
                    </div>

                    <h6 className="category">
                      Didirikan sejak tahun 2003, saat ini telah berkembang
                      menjadi Perusahaan Pialang Berjangka Terbaik dan Terbesar
                      di Indonesia.
                    </h6>
                    <br />
                    <Button
                      className="btn-round"
                      style={{ margin: "0.3rem", backgroundColor: "#5420D8" }}
                    >
                      Buat demo Akun
                    </Button>
                    <Button
                      className="btn-round"
                      style={{ margin: "0.3rem", backgroundColor: "#5420D8" }}
                    >
                      Buat real Akun
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* ********* END HEADER 1 ********* */}
          {/* </Carousel> */}
        </div>{" "}
      </>
    );
  }
}

export default HeaderContent;
