import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import Navbar from "../../components/Navbars/Navbar.jsx";

class HeaderLanding extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="headers">
          {/* ********* HEADER 1 ********* */}
          <div
            // className="header-filter"
            style={{
              backgroundImage:
                "url(" + require("assets/img/bglanding.png") + ")",
              backgroundSize: "cover"
            }}
          >
            <Navbar />
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
                      Buat reak Akun
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* ********* END HEADER 1 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default HeaderLanding;
