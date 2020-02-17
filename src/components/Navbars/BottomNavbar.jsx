import React from "react";
import { slideInDown } from "react-animations";
import { Link } from "react-router-dom";
import Fade from "react-fade-opacity";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input
} from "reactstrap";
import Landing from "../../../src/views/layout/Landing";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/img/Bitmap.png";
import bg from "../../assets/img/bg-bottom-navbar.png";
import close from "../../assets/img/redclose.png";

import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import Radium, { StyleRoot } from "radium";
import { isMobile } from "react-device-detect";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

const stylesAnimation = {
  slideInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInDown, "bounce")
  }
};

class BottomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // position: ""
      // display: "none"
    };
  }

  // async componentDidMount() {
  //   await this.props.fetchPage("landing", "id");
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.changeNavbarPosition);
  //   window.addEventListener("scroll", this.changeNavbarPositionMobile);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.changeNavbarTop);
  // }

  // changeNavbarPosition = () => {
  //   if (
  //     document.documentElement.scrollTop > 4000 ||
  //     document.body.scrollTop > 4000
  //   ) {
  //     this.setState({
  //       position: "fixed"
  //       // display: "block"
  //     });
  //   } else if (
  //     document.documentElement.scrollTop < 300 ||
  //     document.body.scrollTop < 300
  //   ) {
  //     this.setState({
  //       position: ""
  //     });
  //   }
  // };

  // changeNavbarPositionMobile = () => {
  //   if (
  //     document.documentElement.scrollTop > 6000 ||
  //     document.body.scrollTop > 6000
  //   ) {
  //     this.setState({
  //       position: "fixed"
  //     });
  //   } else if (
  //     document.documentElement.scrollTop < 300 ||
  //     document.body.scrollTop < 300
  //   ) {
  //     this.setState({
  //       position: ""
  //     });
  //   } else if (
  //     document.documentElement.scrollTop > 6000 ||
  //     (document.body.scrollTop > 6000 && this.removeButton() === true)
  //   ) {
  //     this.setState({
  //       position: ""
  //     });
  //   }
  // };

  removeButton = () => {
    this.props.sendFunction();
  };

  renderContent = () => {
    const styles = {
      containerStyle: {
        maxHeight: "350px",
        backgroundSize: "cover",
        position: "absolute",
        backgroundImage:
          "url(" + require("assets/img/ebook-background.png") + ")"
      },
      containerStyleMobile: {
        maxHeight: "350px",
        backgroundSize: "cover",
        backgroundImage:
          "url(" + require("assets/img/ebook-background.png") + ")"
      }
    };
    if (isMobile) {
      return (
        <>
          <div class="navbar-bottom" style={styles.containerStyleMobile}>
            <div style={{ minHeight: "90px" }}>
              <div
                style={{
                  margin: "15px 10px 0 10px"
                }}
              >
                <Col md="12" style={{ padding: "5px 2px 0 2px" }}>
                  <Col>
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "1.2rem",
                        color: "white",
                        marginTop: "5px",
                        marginBottom: "5px"
                      }}
                    >
                      {this.props.pageStore.Landing.BottomNavbar.title}
                      <img
                        onClick={() => {
                          this.removeButton();
                        }}
                        style={{
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: 0,
                          marginTop: "5px",
                          height: "25px",
                          width: "25px"
                        }}
                        src={close}
                      />
                    </div>

                    <div>
                      <Row>
                        <Col>
                          <div>
                            <Input
                              style={{
                                backgroundColor: "rgba(10, 10, 10, 0.49)",
                                color: "white",
                                border: "none",
                                marginBottom: "10px"
                              }}
                              placeholder="Full Name"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </div>
                          <div>
                            <Input
                              style={{
                                backgroundColor: "rgba(10, 10, 10, 0.49)",
                                color: "white",
                                border: "none"
                              }}
                              placeholder="Email"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <Input
                              style={{
                                backgroundColor: "rgba(10, 10, 10, 0.49)",
                                color: "white",
                                border: "none",
                                marginBottom: "10px"
                              }}
                              color="white"
                              placeholder="+62"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </div>
                          <div>
                            <Input
                              style={{
                                backgroundColor: "rgba(10, 10, 10, 0.49)",
                                color: "white",
                                border: "none"
                              }}
                              placeholder="Telepon"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <div>
                        <Button
                          block
                          color="info"
                          type="button"
                          onClick={() => {
                            this.removeButton();
                          }}
                        >
                          {
                            this.props.pageStore.Landing.BottomNavbar.form[0]
                              .button
                          }
                        </Button>
                      </div>
                    </div>
                  </Col>

                  <Row style={{ marginLeft: "12px" }}>
                    <Col style={{ color: "#FFFFFF" }}>
                      <Input type="checkbox" />
                      {
                        this.props.pageStore.Landing.BottomNavbar.form[0]
                          .leftTick
                      }
                    </Col>
                    <Col style={{ color: "#FFFFFF" }}>
                      <Input type="checkbox" />
                      {
                        this.props.pageStore.Landing.BottomNavbar.form[0]
                          .rightTick
                      }
                    </Col>
                  </Row>
                </Col>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div class="navbar-bottom" style={styles.containerStyle}>
          {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut"> */}
          {/* <Fade> */}
          <div
            // style={{
            //   backgroundImage:
            //     "url(" + require("assets/img/bg-bottom-navbar.png") + ")"
            // }}
            style={{ minHeight: "90px" }}
          >
            <div
              style={{
                margin: "15px 10px 0 10px"
              }}
            >
              <Col className="ml-auto mr-auto" md="12">
                <Row>
                  <img
                    onClick={() => {
                      this.removeButton();
                    }}
                    style={{
                      justifyContent: "flex-end",
                      margin: "5px 5px 5px 0",
                      height: "25px",
                      width: "25px"
                    }}
                    src={close}
                  />
                  <Col md="2">
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "1.2rem",
                        color: "white",
                        marginTop: "5px"
                      }}
                    >
                      {this.props.pageStore.Landing.BottomNavbar.title}
                    </div>
                  </Col>
                  <Col md="3">
                    <Input
                      style={{
                        backgroundColor: "rgba(10, 10, 10, 0.49)",
                        color: "white",
                        border: "none",
                        marginTop: "10px"
                      }}
                      placeholder="Full Name"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="2">
                    <Input
                      style={{
                        backgroundColor: "rgba(10, 10, 10, 0.49)",
                        color: "white",
                        border: "none",
                        marginTop: "10px"
                      }}
                      placeholder="Email"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="1">
                    <Input
                      style={{
                        backgroundColor: "rgba(10, 10, 10, 0.49)",
                        color: "white",
                        border: "none",
                        marginTop: "10px"
                      }}
                      color="white"
                      placeholder="+62"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="2">
                    <Input
                      style={{
                        backgroundColor: "rgba(10, 10, 10, 0.49)",
                        color: "white",
                        border: "none",
                        marginTop: "10px"
                      }}
                      placeholder="Telepon"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="1">
                    <div className="vertical-center">
                      <a
                        target="_blank"
                        style={{ backgroundColor: "transparent" }}
                        href={
                          this.props.pageStore.Landing.BottomNavbar.form[0]
                            .button_link
                        }
                      >
                        <Button block color="info" type="button">
                          {
                            this.props.pageStore.Landing.BottomNavbar.form[0]
                              .button
                          }
                        </Button>
                      </a>
                    </div>
                  </Col>
                </Row>

                <Row style={{ marginLeft: "12px" }}>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input type="checkbox" />

                    {this.props.pageStore.Landing.BottomNavbar.form[0].leftTick}
                  </Col>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input type="checkbox" />
                    {
                      this.props.pageStore.Landing.BottomNavbar.form[0]
                        .rightTick
                    }
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
          {/* </Fade> */}

          {/* </ScrollAnimation> */}
        </div>
      </>
    );
  };

  render() {
    console.log(
      this.props.pageStore.Landing.BottomNavbar.form.leftTick,
      "adsfasdf"
    );
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavbar);
