import React from "react";
import { bounce, bounceInUp } from "react-animations";
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
  Input,
  Alert
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
import { subscribeEbook } from "../../redux/ducks/actions.js";

const stylesAnimation = {
  bounce: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounce, "bounce")
  },
  bounceInUp: {
    animation: "x 3s",
    animationName: Radium.keyframes(bounceInUp, "bounceInUp")
  }
};

class BottomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        fullName: "",
        phoneNumber: ""
      },
      checked: false,
      checked2: false
    };
  }

  removeButton = () => {
    this.props.sendFunction();
  };

  checkbox = async e => {
    await this.setState({
      checked: e.target.value
    });
  };

  checkbox2 = async e => {
    await this.setState({
      checked2: e.target.value
    });
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
                                backgroundColor: "rgba(255, 255, 255, 0.89)",
                                color: "black",
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
                                backgroundColor: "rgba(255, 255, 255, 0.89)",
                                color: "black",
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
                                backgroundColor: "rgba(255, 255, 255, 0.89)",
                                color: "black",
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
                                backgroundColor: "rgba(255, 255, 255, 0.89)",
                                color: "black",
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
                    <Row style={{ marginLeft: "12px", marginRight: "12px" }}>
                      <Col style={{ color: "#FFFFFF" }}>
                        <Input
                          type="checkbox"
                          checked={this.state.checked}
                          onChange={e =>
                            this.setState({ checked: e.target.checked })
                          }
                        />

                        {
                          this.props.pageStore.Landing.BottomNavbar.form[0]
                            .leftTick
                        }
                      </Col>
                      <Col style={{ color: "#FFFFFF" }}>
                        <Input
                          type="checkbox"
                          checked={this.state.checked2}
                          onChange={e =>
                            this.setState({ checked2: e.target.checked })
                          }
                        />
                        {
                          this.props.pageStore.Landing.BottomNavbar.form[0]
                            .rightTick
                        }
                      </Col>
                      <Col>
                        {/* <Button
                          color="info"
                          type="button"
                          style={{ minWidth: "260px" }}
                        >
                          {
                            this.props.pageStore.Landing.BottomNavbar.form[0]
                              .button
                          }
                        </Button> */}
                        <a
                          target="_blank"
                          style={{ backgroundColor: "transparent", padding: 0 }}
                          href={
                            this.state.checked && this.state.checked2 === true
                              ? this.props.pageStore.Landing.BottomNavbar
                                  .form[0].button_link
                              : null
                          }
                        >
                          {this.state.checked &&
                          this.state.checked2 === true ? (
                            <Button
                              color="info"
                              style={{ minWidth: "270px" }}
                              type="button"
                            >
                              {
                                this.props.pageStore.Landing.BottomNavbar
                                  .form[0].button
                              }
                            </Button>
                          ) : (
                            <Button
                              color="info"
                              style={{ minWidth: "270px" }}
                              type="button"
                              disabled
                            >
                              {
                                this.props.pageStore.Landing.BottomNavbar
                                  .form[0].button
                              }
                            </Button>
                          )}
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <StyleRoot>
        <div
          className="navbar-bottom"
          style={{ ...styles.containerStyle, ...stylesAnimation.bounceInUp }}
        >
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
                <Row>
                  <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "1.2rem",
                        color: "white"
                      }}
                    >
                      {this.props.pageStore.Landing.BottomNavbar.title}
                    </div>
                  </Col>
                  <Col md="3" style={{ display: "flex", alignItems: "center" }}>
                    <Input
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.89)",
                        color: "black",
                        border: "none"
                      }}
                      placeholder="Full Name"
                      type="text"
                      onChange={async e => {
                        await this.setState({
                          form: {
                            ...this.state.form,
                            fullName: e.target.value
                          }
                        });
                      }}
                    />
                  </Col>
                  <Col md="3" style={{ display: "flex", alignItems: "center" }}>
                    <Input
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.89)",
                        color: "black",
                        border: "none"
                      }}
                      placeholder="Email"
                      type="text"
                      onChange={async e => {
                        await this.setState({
                          form: {
                            ...this.state.form,
                            email: e.target.value
                          }
                        });
                      }}
                    />
                  </Col>
                  <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                    <Input
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.89)",
                        color: "black",
                        border: "none"
                      }}
                      placeholder="Telepon"
                      type="text"
                      onChange={async e => {
                        await this.setState({
                          form: {
                            ...this.state.form,
                            phoneNumber: e.target.value
                          }
                        });
                      }}
                    />
                  </Col>
                  <Col md="2" style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      block
                      color="info"
                      type="button"
                      disabled={
                        !(
                          this.state.form.email !== "" &&
                          this.state.form.fullName !== "" &&
                          this.state.form.phoneNumber !== "" &&
                          this.state.checked &&
                          this.state.checked2
                        )
                      }
                      onClick={async () => {
                        let data = {
                          ...this.state.form,
                          type: "ebook"
                        };
                        try {
                          let result = await this.props.subscribeEbook(data);

                          window.open(result.fileUrl, "_blank");
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      {this.props.pageStore.Landing.BottomNavbar.form[0].button}
                    </Button>
                    )}
                  </Col>
                </Row>

                <Row style={{ marginLeft: "12px" }}>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input
                      type="checkbox"
                      checked={this.state.checked}
                      onChange={e =>
                        this.setState({ checked: !this.state.checked })
                      }
                    />
                    <span
                      onClick={() =>
                        this.setState({ checked: !this.state.checked })
                      }
                    >
                      {
                        this.props.pageStore.Landing.BottomNavbar.form[0]
                          .leftTick
                      }
                    </span>
                  </Col>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input
                      type="checkbox"
                      checked={this.state.checked2}
                      onChange={e =>
                        this.setState({ checked2: !this.state.checked2 })
                      }
                    />
                    <span
                      onClick={() =>
                        this.setState({ checked2: !this.state.checked2 })
                      }
                    >
                      {
                        this.props.pageStore.Landing.BottomNavbar.form[0]
                          .rightTick
                      }
                    </span>
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
        </div>
      </StyleRoot>
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
  subscribeEbook: data => dispatch(subscribeEbook(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavbar);
