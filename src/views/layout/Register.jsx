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
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
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
import Radium, { StyleRoot } from "radium";
import { fadeInUp } from "react-animations";
// core components.
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColorNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import CardRegister from "../../components/Register/CardRegister.jsx";
import DemoFooter from "../../components/Footers/Footer.jsx";
import bg from "../../assets/img/bg-register.png";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.remove("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  render() {
    return (
      <>
        <div className="wrapper" ref="wrapper">
          <div
            className="team-1"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              padding: 0
            }}
          >
            <BlurryNavbar />
            <ColorNavbar location={{ ...this.props.location }} />
            <div className="page-header">
              <Container style={{ paddingTop: 0 }}>
                <Row>
                  <Col className="mx-auto" lg="5" md="12">
                    <StyleRoot>
                      <div className="test" style={styles.fadeInUp}>
                        <CardRegister />
                      </div>
                    </StyleRoot>
                  </Col>
                </Row>
              </Container>
            </div>
            <DemoFooter />
          </div>
        </div>
      </>
    );
  }
}

export default RegisterPage;
