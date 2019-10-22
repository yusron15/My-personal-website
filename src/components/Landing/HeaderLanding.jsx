import React from "react";
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
// import Navbar from "../../components/Landing/Navbar.jsx";


class HeaderLanding extends React.Component {
  state = {};
  render() {
    return (
      <>
      
        <div className="cd-section" id="headers">
          {/* ********* HEADER 1 ********* */}
          <div className="header header-1">
          
            <div className="page-header header-filter">
              <div
                className="page-header-image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/bglanding.png") + ")"
                }}
              />
              
              <Container>
                <Row>
                  <Col className="mr-auto text-left mt-5" lg="5" md="7">
                    <h1 className="title" style={{fontFamily:"Helvetica Bold"}}>
                      <b>TRADING BERSAMA BROKER TERBAIK</b>
                    </h1>
                    <h6 className="category">
                    Didirikan sejak tahun 2003, saat ini telah berkembang menjadi Perusahaan Pialang Berjangka Terbaik dan Terbesar di Indonesia.</h6>
                    <br />
                    <Button className="btn-round" style={{margin:"0.3rem", backgroundColor:"#5420D8"}}>
                    Buat demo Akun
                    </Button>
                    <Button className="btn-round" style={{margin:"0.3rem", backgroundColor:"#5420D8"}}>
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
