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
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../../assets/img/Bitmap.png";
import bg from "../../assets/img/bg-bottom-navbar.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import Radium, { StyleRoot } from "radium";

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
      position: "",
      display: "none"
    };
  }

  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarPosition);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarTop);
  }

  changeNavbarPosition = () => {
    if (
      document.documentElement.scrollTop > 4000 ||
      document.body.scrollTop > 4000
    ) {
      this.setState({
        position: "fixed"
        // display: "block"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        position: ""
      });
    }
  };

  render() {
    const styles = {
      containerStyle: {
        position: this.state.position,
        maxHeight: "350px",
        backgroundImage:
          "url(" + require("assets/img/ebook-background.png") + ")"
      }
    };
    const EbookShow = this.state.position;
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
                margin: "15px 10px 10px 10px"
              }}
            >
              <Col className="ml-auto mr-auto" md="11">
                <Row>
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
                        border: "none"
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
                        border: "none"
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
                        border: "none"
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
                        border: "none"
                      }}
                      placeholder="Telepon"
                      type="text"
                      onFocus={e => this.setState({ emailFocus: true })}
                      onBlur={e => this.setState({ emailFocus: false })}
                    />
                  </Col>
                  <Col md="2">
                    <div className="vertical-center">
                      <Button block color="info" type="button">
                        Download EBook
                      </Button>
                    </div>
                  </Col>
                </Row>

                <Row style={{ marginLeft: "12px" }}>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input type="checkbox" />
                    {this.props.pageStore.Landing.BottomNavbar.form.leftTick}
                  </Col>
                  <Col style={{ color: "#FFFFFF" }}>
                    <Input type="checkbox" />
                    {this.props.pageStore.Landing.BottomNavbar.form.rightTick}
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
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(BottomNavbar);
