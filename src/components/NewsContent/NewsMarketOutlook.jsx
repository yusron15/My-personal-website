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
import Radium, { StyleRoot } from "radium";
import { fadeIn } from "react-animations";

import "../../../src/App.css";
import ScrollAnimation from "react-animate-on-scroll";
import marketoutlook from "../../assets/img/marketoutlook1.png";
import ColoredNavbar from "../Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "components/Navbars/BlurryNavbar";

import "../../assets/css/main.css";

const styles = {
  fadeIn: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn")
  }
};

const style = {
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: "1rem",
    textAlign: "center",
    margin: "50px"
  },
  desc: {
    color: "black",
    textAlign: "center",
    fontSize: "1rem",
    margin: "50px"
  }
};

class NewsMarketOutlook extends React.Component {
  state = {};
  render() {
    const { title, image, posted, desc } = this.props;
    return (
      <>
        <div className="cd-section" id="headers">
          {/* ********* HEADER 6 ********* */}
          <div
            className="header header-6 broken-white "
            // style={{ backgroundColor: "#1D1E1F" }}
            // style={{ backgroundColor: "#D4D4D4" }}
          >
            <div className="space-50" />
            {/* <div className="page-header"> */}
            <div className="content-center">
              <Container>
                {/* <Row className="align-items-center text-left"> */}
                <h1 className="title font-black" style={{ color: "black" }}>
                  {title}
                  <div
                    className="text-posted font-black"
                    style={{ color: "black", marginTop: "10px" }}
                  >
                    {posted}
                  </div>
                </h1>
                <Col>
                  <StyleRoot>
                    <div style={styles.fadeIn}>
                      <img
                        src={image}
                        style={{
                          minHeight: "60vh",
                          width: "auto",
                          justifyContent: "flex-start"
                        }}
                      />
                    </div>
                  </StyleRoot>
                </Col>
                <Col>
                  {/* <ScrollAnimation
                      animateIn="fadeInDown"
                      animateOut="fadeOut"
                    > */}
                  <p
                    className="description font-black"
                    style={{ color: "black", textAlign: "left" }}
                  >
                    {desc}
                  </p>
                  {/* </ScrollAnimation> */}
                </Col>
                {/* </Row> */}
                <div style={{ margin: "auto", width: "100%" }}>
                  <Row>
                    <Col md="2" />
                    <Col md="8">
                      <table
                        border="1"
                        style={{
                          width: "100%",
                          minHeight: "50%"
                        }}
                      >
                        <tr>
                          <th></th>
                          <th style={style.title}>Stop</th>
                          <th style={style.title}>Limit</th>
                          <th style={style.title}>Target</th>
                        </tr>
                        <tr>
                          <td style={style.title}>Buy</td>
                          <td style={style.desc}>58.70</td>
                          <td style={style.desc}>58.00</td>
                          <td style={style.desc}>0.50</td>
                        </tr>
                        <tr>
                          <td style={style.title}>Sell</td>
                          <td style={style.desc}>58.70</td>
                          <td style={style.desc}>58.00</td>
                          <td style={style.desc}>0.50</td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="2" />
                  </Row>
                </div>
                <div
                  className="title font-black"
                  style={{ fontSize: "1.5rem", textAlign: "center" }}
                >
                  {" "}
                  Previous Range
                </div>
                <div
                  style={{
                    top: "10vh"
                  }}
                >
                  <Row>
                    <Col md="2" />
                    <Col md="8">
                      <table
                        border="1"
                        style={{
                          width: "100%",
                          minHeight: "50%"
                        }}
                      >
                        <tr>
                          <th style={style.title}> Open</th>
                          <th style={style.title}> High</th>
                          <th style={style.title}> Low</th>
                          <th style={style.title}> Close</th>
                          <th style={style.title}> Prev.Close</th>
                          <th style={style.title}> Change</th>
                          <th style={style.title}> % Change</th>
                        </tr>
                        <tr>
                          <td style={style.desc}>58.70</td>
                          <td style={style.desc}>58.00</td>
                          <td style={style.desc}>58.00</td>
                          <td style={style.desc}>58.00</td>
                          <td style={style.desc}>58.00</td>
                          <td style={style.desc}>58.00</td>
                          <td style={style.desc}>58.00</td>
                        </tr>
                      </table>
                    </Col>
                    <Col md="2" />
                  </Row>
                </div>
              </Container>
              <div className="space-50" />
              <div className="space-50" />
            </div>
            {/* </div> */}
          </div>
          {/* ********* END HEADER 6 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default NewsMarketOutlook;
