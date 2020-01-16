import React from "react";
import { slideInDown } from "react-animations";
import { Link } from "react-router-dom";
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
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import DropdownTentangKami from "../DropdownContent/DropdownTentangKami";
import DropdownTrading from "../DropdownContent/DropdownTrading";
import DropdownBerita from "../DropdownContent/DropdownBerita";
import { LangContext } from "../MyContext";
import logo from "../../assets/img/logo-topgrowth.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import Radium, { StyleRoot } from "radium";
import vl from "../../assets/img/vertical-line.png";

import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

const stylesAnimation = {
  slideInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInDown, "bounce")
  }
};

const title = {
  fontSize: "15px",
  fontWeight: "bold",
  color: "black",
  marginTop: "20px",
  marginBottom: "10px"
};
const tentangkami = {
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  marginTop: "30px",
  // marginBottom: "10px",
  textAlign: "left"
};

const DropdownTentangKamiText = {
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  marginTop: "40px",
  marginLeft: "20px",
  // marginBottom: "10px",
  textAlign: "left"
};

const trading = {
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  marginTop: "10px",
  // marginBottom: "10px",
  textAlign: "left"
};

const newstext = {
  // fontSize: "1rem",
  // color: "black",
  // marginBottom: "10px",
  // textAlign: "left"
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  marginTop: "20px",
  // marginBottom: "10px",
  textAlign: "left"
};

class ColorNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childVisible: false,
      childVisibleTrading: false,
      childVisibleBerita: false,
      fontBold: "",
      backgroundColor: "broken-white",
      bgButton: "transparent",
      marginTop: "50px",
      color: "black",
      activeTab: "1"
    };
  }

  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }

  onClick() {
    this.setState({ childVisible: !this.state.childVisible });
    this.setState({ childVisibleBerita: false });
    this.setState({ childVisibleTrading: false });
  }

  onLeave() {
    this.setState({ childVisible: false });
  }

  onLeaveAll() {
    this.setState({ childVisible: false });
    this.setState({ childVisibleBerita: false });
    this.setState({ childVisibleTrading: false });
  }

  onClickTrading() {
    this.setState({ childVisibleTrading: !this.state.childVisibleTrading });
    this.setState({ childVisibleBerita: false });
    this.setState({ childVisible: false });
  }

  onLeaveTrading() {
    this.setState({ childVisibleTrading: false });
  }

  onClickBerita() {
    this.setState({ childVisibleBerita: !this.state.childVisibleBerita });
    this.setState({ childVisible: false });
    this.setState({ childVisibleTrading: false });
  }

  onLeaveBerita() {
    this.setState({ childVisibleBerita: false });
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        backgroundColor: "transparent",
        color: "black"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarTop);
  }

  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 30 ||
      document.body.scrollTop > 30
    ) {
      this.setState({
        marginTop: "0px",
        color: "black",
        backgroundColor: "broken-white"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        marginTop: "50px",
        color: "black",
        backgroundColor: "broken-white"
      });
    }
  };

  changeNavbarMargin = () => {
    if (
      document.documentElement.scrollTop > 30 ||
      document.body.scrollTop > 30
    ) {
      this.setState({
        marginTop: "0px"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        marginTop: "50px"
      });
    }
  };

  coloringNav = pathLink => {
    const currentPath = this.props.location.pathname;
    let active = false;
    if (pathLink instanceof Array) {
      if (pathLink.includes(currentPath)) {
        active = true;
      }
    } else {
      active = pathLink === currentPath;
    }
    return active
      ? "#2AB4E7"
      : this.state.backgroundColor == "broken-white"
      ? "black"
      : "white";

    // console.log(currentPath, pathLink, "adasdadas");
  };

  coloringButton = pathLink => {
    const currentPath = this.props.location.pathname;
    let active = false;
    if (pathLink instanceof Array) {
      if (pathLink.includes(currentPath)) {
        active = true;
      }
    } else {
      active = pathLink === currentPath;
    }
    return active ? "rgba(255, 255, 255, 0.17)" : "transparent";
  };

  fontBold = pathLink => {
    const currentPath = this.props.location.pathname;
    let active = false;
    if (pathLink instanceof Array) {
      if (pathLink.includes(currentPath)) {
        active = true;
      }
    } else {
      active = pathLink === currentPath;
    }
    return active ? "bold" : "";
  };

  render() {
    const styles = {
      containerStyle: {
        marginTop: this.state.marginTop,
        bgButton: this.state.bgButton,
        fontBold: this.state.fontBold,
        zIndex: 999
      },
      colorStyle: {
        color: this.props.navbarColor == "white" ? "black" : "white"
        // color: this.state.color
      }
    };
    const { containerStyle, colorStyle } = styles;
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <Container
                className={`fixed-top  + ${
                  this.props.navbarColor === "black"
                    ? "black-newsletter"
                    : "broken-white"
                }`}
                expand="lg"
                style={containerStyle}
              >
                {/* <BlurryNavbar /> */}
                <Navbar
                  className={`fixed-top  + ${
                    this.props.navbarColor === "black"
                      ? "black-newsletter"
                      : "broken-white"
                  }`}
                  expand="lg"
                  style={containerStyle}
                >
                  <Container>
                    <div className="navbar-translate">
                      <NavbarBrand
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        {/* <Link to="/landing"> */}
                        <img
                          src={logo}
                          style={{ height: "7vh", width: "auto" }}
                        />
                        {/* TGF */}
                        {/* </Link> */}
                      </NavbarBrand>
                      <button
                        className="navbar-toggler"
                        id="example-navbar-transparent"
                      >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                      </button>
                    </div>
                    <UncontrolledCollapse
                      navbar
                      toggler="#example-navbar-transparent"
                    >
                      <Nav
                        className="nav-pills-info nav-pills-icons nav-pills-lg ml-auto"
                        pills
                        role="tablist"
                        navbar
                      >
                        <Link to="/landing">
                          <NavItem>
                            <div onMouseEnter={() => this.onLeaveAll()}>
                              <button
                                className="dropdown dropbtn"
                                style={{
                                  color: this.coloringNav("/landing"),
                                  fontWeight: "bold"
                                }}
                              >
                                {this.props.pageStore.Header.m1.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>

                        {/* TENTANG KAMI */}
                        <div
                          class="dropdown "
                          style={colorStyle}
                          onMouseEnter={() => this.onClick()}
                          // onMouseLeave={() => this.onLeave()}
                        >
                          <button class="dropbtn" style={colorStyle}>
                            {this.props.pageStore.Header.m2.title}
                          </button>
                        </div>

                        {/* TRADING ONLINE */}
                        <div
                          class="dropdown "
                          onMouseEnter={() => this.onClickTrading()}
                        >
                          <button class="dropbtn" style={colorStyle}>
                            {this.props.pageStore.Header.m3.title}
                          </button>
                        </div>

                        {/* BERITA */}
                        <div
                          class="dropdown"
                          onMouseEnter={() => this.onClickBerita()}
                        >
                          <button class="dropbtn" style={colorStyle}>
                            {this.props.pageStore.Header.m4.title}
                          </button>
                        </div>

                        <Link to="/edukasi">
                          <NavItem>
                            <div onMouseEnter={() => this.onLeaveAll()}>
                              <button class="dropbtn" style={colorStyle}>
                                {this.props.pageStore.Header.m5.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>

                        <Link to="/karir" style={colorStyle}>
                          <NavItem>
                            <div onMouseEnter={() => this.onLeaveAll()}>
                              <button class="dropbtn" style={colorStyle}>
                                {this.props.pageStore.Header.m6.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>

                        <Link to="/contact">
                          <NavItem>
                            <div onMouseEnter={() => this.onLeaveAll()}>
                              <button class="dropbtn" style={colorStyle}>
                                {this.props.pageStore.Header.m7.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>
                  <div onMouseLeave={() => this.onLeave()}>
                    {/* <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut"> */}
                    {this.state.childVisible ? <DropdownTentangKami /> : null}
                    {/* </ScrollAnimation> */}
                  </div>
                  <div onMouseLeave={() => this.onLeaveTrading()}>
                    {this.state.childVisibleTrading ? (
                      <DropdownTrading />
                    ) : null}
                  </div>
                  <div onMouseLeave={() => this.onLeaveBerita()}>
                    {this.state.childVisibleBerita ? <DropdownBerita /> : null}
                  </div>
                </Navbar>
                {/* {this.state.childVisible ? <DropdownTentangKami /> : null} */}
              </Container>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorNavbar);
