import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import { Link } from "react-router-dom";
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
import { LangContext } from "../../components/MyContext";

import Radium, { StyleRoot } from "radium";
import { fadeInUp } from "react-animations";
// core components.
import { isMobile } from "react-device-detect";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColorNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import DemoFooter from "../../components/Footers/Footer.jsx";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import bg from "../../assets/img/bg-login.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

class Login extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  async componentDidMount() {
    await this.props.getContent("login", "id");
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

  renderContent = () => {
    if (isMobile) {
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
              <SidebarMobile />
              <div className="page-header">
                <Container style={{ paddingTop: 0 }}>
                  <Row>
                    <Col className="mx-auto" lg="5" md="12">
                      <StyleRoot>
                        <div className="test" style={styles.fadeInUp}>
                          <Card
                            className="card-login"
                            style={{
                              backgroundColor: "rgba(14,14,14,0.7)"
                            }}
                          >
                            <Form action="" className="form" method="">
                              <CardHeader style={{ padding: 0 }}>
                                <CardTitle
                                  style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: "3rem",
                                    marginTop: "10px"
                                  }}
                                >
                                  {/* {lang.login.form.title} */}
                                  {this.props.pageStore.login.form.title}
                                </CardTitle>
                              </CardHeader>
                              <CardBody>
                                <InputGroup
                                  className={classnames("input-lg", {
                                    "input-group-focus": this.state
                                      .firstNameFocus
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText
                                      style={{ borderColor: "#FFFFFF" }}
                                    >
                                      <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    style={{ borderColor: "#FFFFFF" }}
                                    placeholder="First Name..."
                                    type="text"
                                    onFocus={e =>
                                      this.setState({
                                        firstNameFocus: true
                                      })
                                    }
                                    onBlur={e =>
                                      this.setState({
                                        firstNameFocus: false
                                      })
                                    }
                                  />
                                </InputGroup>
                                <InputGroup
                                  className={classnames("input-lg", {
                                    "input-group-focus": this.state
                                      .lastNameFocus
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText
                                      style={{ borderColor: "#FFFFFF" }}
                                    >
                                      <i className="tim-icons icon-caps-small" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    style={{ borderColor: "#FFFFFF" }}
                                    placeholder="Last Name..."
                                    type="text"
                                    onFocus={e =>
                                      this.setState({ lastNameFocus: true })
                                    }
                                    onBlur={e =>
                                      this.setState({
                                        lastNameFocus: false
                                      })
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
                                  {this.props.pageStore.login.form.signIn}
                                </Button>
                              </CardFooter>
                              <div className="pull-left ml-3 mb-3">
                                <h6>
                                  <Link
                                    to="/register"
                                    style={{ color: "white" }}
                                  >
                                    Create Account
                                  </Link>
                                </h6>
                              </div>
                              <div className="pull-right mr-3 mb-3">
                                <h6>
                                  <Link
                                    to="/contact"
                                    style={{ color: "white" }}
                                  >
                                    Need Help?
                                  </Link>
                                </h6>
                              </div>
                            </Form>
                          </Card>
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
                        <Card
                          className="card-login"
                          style={{
                            backgroundColor: "rgba(14,14,14,0.7)"
                          }}
                        >
                          <Form action="" className="form" method="">
                            <CardHeader style={{ padding: 0 }}>
                              <CardTitle
                                style={{
                                  textAlign: "center",
                                  color: "white",
                                  fontSize: "3rem",
                                  marginTop: "10px"
                                }}
                              >
                                {/* {lang.login.form.title} */}
                                {this.props.pageStore.login.form.title}
                              </CardTitle>
                            </CardHeader>
                            <CardBody>
                              <InputGroup
                                className={classnames("input-lg", {
                                  "input-group-focus": this.state.firstNameFocus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText
                                    style={{ borderColor: "#FFFFFF" }}
                                  >
                                    <i className="tim-icons icon-single-02" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  style={{ borderColor: "#FFFFFF" }}
                                  placeholder="First Name..."
                                  type="text"
                                  onFocus={e =>
                                    this.setState({
                                      firstNameFocus: true
                                    })
                                  }
                                  onBlur={e =>
                                    this.setState({
                                      firstNameFocus: false
                                    })
                                  }
                                />
                              </InputGroup>
                              <InputGroup
                                className={classnames("input-lg", {
                                  "input-group-focus": this.state.lastNameFocus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText
                                    style={{ borderColor: "#FFFFFF" }}
                                  >
                                    <i className="tim-icons icon-caps-small" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  style={{ borderColor: "#FFFFFF" }}
                                  placeholder="Last Name..."
                                  type="text"
                                  onFocus={e =>
                                    this.setState({ lastNameFocus: true })
                                  }
                                  onBlur={e =>
                                    this.setState({
                                      lastNameFocus: false
                                    })
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
                                {this.props.pageStore.login.form.signIn}
                              </Button>
                            </CardFooter>
                            <div className="pull-left ml-3 mb-3">
                              <h6>
                                <Link to="/register" style={{ color: "white" }}>
                                  Create Account
                                </Link>
                              </h6>
                            </div>
                            <div className="pull-right mr-3 mb-3">
                              <h6>
                                <Link to="/contact" style={{ color: "white" }}>
                                  Need Help?
                                </Link>
                              </h6>
                            </div>
                          </Form>
                        </Card>
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
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
