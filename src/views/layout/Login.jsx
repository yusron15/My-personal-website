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

// core components.
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColorNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import DemoFooter from "../../components/Footers/Footer.jsx";

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
        <BlurryNavbar />
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <Container>
              <Row>
                <Col className="mx-auto" lg="5" md="12">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: this.state.squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: this.state.squares7and8 }}
                  />
                  <Card className="card-login">
                    <Form action="" className="form" method="">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square1.png")}
                        />
                        <CardTitle tag="h4" style={{ paddingLeft: "25px" }}>
                          Login
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <InputGroup
                          className={classnames("input-lg", {
                            "input-group-focus": this.state.firstNameFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="First Name..."
                            type="text"
                            onFocus={e =>
                              this.setState({ firstNameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ firstNameFocus: false })
                            }
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames("input-lg", {
                            "input-group-focus": this.state.lastNameFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-caps-small" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Last Name..."
                            type="text"
                            onFocus={e =>
                              this.setState({ lastNameFocus: true })
                            }
                            onBlur={e =>
                              this.setState({ lastNameFocus: false })
                            }
                          />
                        </InputGroup>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          block
                          className="btn-round"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="lg"
                        >
                          Get Started
                        </Button>
                      </CardFooter>
                      <div className="pull-left ml-3 mb-3">
                        <h6>
                          <a
                            className="link footer-link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            style={{ color: "white" }}
                          >
                            Create Account
                          </a>
                        </h6>
                      </div>
                      <div className="pull-right mr-3 mb-3">
                        <h6>
                          <a
                            className="link footer-link"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            style={{ color: "white" }}
                          >
                            Need Help?
                          </a>
                        </h6>
                      </div>
                    </Form>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="register-bg" />
            <div
              className="square square-1"
              id="square1"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-2"
              id="square2"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-3"
              id="square3"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-4"
              id="square4"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-5"
              id="square5"
              style={{ transform: this.state.squares1to6 }}
            />
            <div
              className="square square-6"
              id="square6"
              style={{ transform: this.state.squares1to6 }}
            />
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default RegisterPage;
