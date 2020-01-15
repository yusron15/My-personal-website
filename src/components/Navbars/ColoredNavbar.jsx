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
import { LangContext } from "../MyContext";

import logo from "../../assets/img/logo-topgrowth.png";
import vl from "../../assets/img/vertical-line.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import Radium, { StyleRoot } from "radium";

import DropdownTentangKami from "../DropdownContent/DropdownTentangKami";
import DropdownTrading from "../DropdownContent/DropdownTrading";
import DropdownBerita from "../DropdownContent/DropdownBerita";

const stylesAnimation = {
  slideInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInDown, "bounce")
  }
};

const title = {
  fontSize: "1rem",
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

const trading = {
  fontSize: "1rem",
  // fontWeight: "bold",
  color: "black",
  // marginTop: "20px",
  marginBottom: "10px",
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
      navbarColor: "bg-transparent",
      marginTop: "50px",
      bgButton: "transparent",
      color: "white",
      activeTab: "1",
      logo: require("../../assets/img/white-logo-hd.png")
    };
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

  // allNavbarVisible = (childVisible) => {
  //   if(childVisible == true){
  //     this.setState({ childVisible : true })
  //   }else if(childVisibleBerita == true){
  //     this.setState
  //   }
  // }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        navbarColor: "bg-transparent",
        color: "white"
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
        navbarColor: "broken-white",
        logo: require("../../assets/img/logo-topgrowth.png")
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        marginTop: "50px",
        color: "white",
        navbarColor: "bg-transparent",
        logo: require("../../assets/img/white-logo-hd.png")
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
      ? "#2AB6E7"
      : this.state.navbarColor == "broken-white"
      ? "black"
      : "white";

    // console.log(currentPath, pathLink, "adasdadas");
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
    return active ? "rgba(255, 255, 255, 0.80)" : "transparent";
  };

  render() {
    const styles = {
      containerStyle: {
        marginTop: this.state.marginTop,
        navbarColor: this.state.navbarColor,
        bgButton: this.state.bgButton,
        fontBold: this.state.fontBold,
        zIndex: 999
      },
      colorStyle: {
        // color: this.props.navbarColor == "white" ? "white" : "black"
        color: this.state.color
      }
    };
    const { containerStyle, colorStyle } = styles;
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              {/* <BlurryNavbar /> */}
              <Container
                className={`fixed-top  + ${this.state.navbarColor}`}
                expand="lg"
                style={containerStyle}
              >
                <Navbar
                  // className={`fixed-top  + ${this.state.navbarColor}`}
                  className={`fixed-top  + ${this.state.navbarColor}`}
                  expand="lg"
                  style={containerStyle}
                >
                  <Container>
                    <div className="navbar-translate">
                      <NavbarBrand
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <Link to="/landing">
                          <img
                            src={this.state.logo}
                            style={{ height: "7vh", width: "auto" }}
                          />
                          {/* TGF */}
                        </Link>
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
                                  color: this.coloringNav("/landing")
                                }}
                              >
                                {lang.Header.m1.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>

                        {/* TENTANG KAMI */}
                        <div
                          // class="dropdown"
                          onMouseEnter={() => this.onClick()}
                          // onMouseLeave={() => this.onLeave()}
                        >
                          <button
                            class="dropbtn"
                            style={{
                              color: this.coloringNav([
                                "/tentang-kami",
                                "/cabang",
                                "/rekening-terpisah",
                                "/legalitas"
                              ]),
                              // backgroundColor: this.coloringButton([
                              //   "/tentang-kami",
                              //   "/cabang",
                              //   "/rekening-terpisah",
                              //   "/legalitas"
                              // ]),
                              fontWeight: this.fontBold([
                                "/tentang-kami",
                                "/cabang",
                                "/rekening-terpisah",
                                "/legalitas"
                              ])
                            }}
                          >
                            {lang.Header.m2.title}
                          </button>
                        </div>

                        {/* TRADING ONLINE */}
                        <div
                          class="dropdown "
                          onMouseEnter={() => this.onClickTrading()}
                        >
                          <button
                            class="dropbtn"
                            style={{
                              color: this.coloringNav([
                                "/forex",
                                "/gold",
                                "/index-futures",
                                "/cfd",
                                "/komoditi",
                                "/jam-perdagangan",
                                "/pro-trader",
                                "/topgrowth-trader",
                                "/login",
                                "/register"
                              ]),
                              // backgroundColor: this.coloringButton([
                              //   "/forex",
                              //   "/gold",
                              //   "/index-futures",
                              //   "/cfd",
                              //   "/komoditi",
                              //   "/jam-perdagangan",
                              //   "/pro-trader",
                              //   "/topgrowth-trader",
                              //   "/login",
                              //   "/register"
                              // ]),
                              fontWeight: this.fontBold([
                                "/forex",
                                "/gold",
                                "/index-futures",
                                "/cfd",
                                "/komoditi",
                                "/jam-perdagangan",
                                "/pro-trader",
                                "/topgrowth-trader",
                                "/login",
                                "/register"
                              ])
                            }}
                          >
                            {lang.Header.m3.title}
                          </button>
                        </div>

                        {/* BERITA */}
                        <div
                          class="dropdown"
                          onMouseEnter={() => this.onClickBerita()}
                        >
                          <button
                            class="dropbtn"
                            style={{
                              color: this.coloringNav([
                                "/newspage",
                                "/stock-index",
                                "/forex-commodity",
                                "/economic-calendar",
                                "/market-outlook",
                                "/video-content"
                              ]),
                              // backgroundColor: this.coloringButton([
                              //   "/newspage",
                              //   "/stock-index",
                              //   "/forex-commodity",
                              //   "/economic-calendar",
                              //   "/market-outlook",
                              //   "/video-content"
                              // ]),
                              fontWeight: this.fontBold([
                                "/newspage",
                                "/stock-index",
                                "/forex-commodity",
                                "/economic-calendar",
                                "/market-outlook",
                                "/video-content"
                              ])
                            }}
                          >
                            {lang.Header.m4.title}
                          </button>
                        </div>

                        <Link to="/edukasi">
                          <NavItem>
                            <div onMouseEnter={() => this.onLeaveAll()}>
                              <button
                                class="dropbtn"
                                style={{
                                  ...colorStyle,
                                  color: this.coloringNav("/edukasi"),
                                  // backgroundColor: this.coloringButton(
                                  //   "/edukasi"
                                  // ),
                                  fontWeight: this.fontBold("/edukasi")
                                }}
                              >
                                {lang.Header.m5.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>

                        <Link to="/karir" style={colorStyle}>
                          <NavItem>
                            <div onMouseEnter={() => this.onLeaveAll()}>
                              <button
                                class="dropbtn"
                                style={{
                                  color: this.coloringNav("/karir"),
                                  // backgroundColor: this.coloringButton("/karir"),
                                  fontWeight: this.fontBold("/karir")
                                }}
                              >
                                {lang.Header.m6.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>

                        <Link to="/contact">
                          <NavItem>
                            <div onMouseEnter={() => this.onLeaveAll()}>
                              <button
                                class="dropbtn"
                                style={{
                                  color: this.coloringNav("/contact"),
                                  // backgroundColor: this.coloringButton(
                                  //   "/contact"
                                  // ),
                                  fontWeight: this.fontBold("/contact")

                                  // color: this.state.color,
                                  // ...(this.state.activeTab === "5"
                                  //   ? { color: "#2AB4E7" }
                                  //   : { color: this.state.color })
                                }}
                              >
                                {lang.Header.m7.title}
                              </button>
                            </div>
                          </NavItem>
                        </Link>
                      </Nav>
                    </UncontrolledCollapse>
                  </Container>

                  <div onMouseLeave={() => this.onLeave()}>
                    {this.state.childVisible ? <DropdownTentangKami /> : null}
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
              </Container>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default ColorNavbar;
