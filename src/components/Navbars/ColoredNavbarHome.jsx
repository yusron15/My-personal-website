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
      backgroundColor: "broken-white",
      marginTop: "50px",
      color: "black",
      activeTab: "1"
    };
  }

  onClick() {
    this.setState({ childVisible: !this.state.childVisible });
  }

  onLeave() {
    this.setState({ childVisible: false });
  }

  onClickTrading() {
    this.setState({ childVisibleTrading: !this.state.childVisibleTrading });
  }

  onLeaveTrading() {
    this.setState({ childVisibleTrading: false });
  }

  onClickBerita() {
    this.setState({ childVisibleBerita: !this.state.childVisibleBerita });
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

  render() {
    const styles = {
      containerStyle: {
        marginTop: this.state.marginTop,
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
                            <button
                              className="dropdown dropbtn"
                              style={{
                                color: this.coloringNav("/landing")
                              }}
                            >
                              {lang.Header.m1.title}
                            </button>
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
                            {lang.Header.m2.title}
                          </button>
                        </div>

                        {/* TRADING ONLINE */}
                        <div
                          class="dropdown "
                          onMouseEnter={() => this.onClickTrading()}
                        >
                          <button class="dropbtn" style={colorStyle}>
                            {lang.Header.m3.title}
                          </button>
                          {/* <div class="dropdown-content-trading trading-online">
                            <div
                              class="row"
                              style={{ justifyContent: "space-araound" }}
                            >
                              <Col>
                                <div style={{ marginLeft: "20px" }}>
                                  <div style={title}>
                                    {lang.Header.m3.dropdown[0].title}
                                  </div>
                                  <Row>
                                    <Col>
                                      <Link
                                        style={trading}
                                        className="vertical-space"
                                        to="/forex"
                                      >
                                        {lang.Header.m3.dropdown[0].sub[0]}
                                      </Link>
                                      <Link
                                        style={trading}
                                        className="vertical-space"
                                        to="/cfd"
                                      >
                                        {lang.Header.m3.dropdown[0].sub[1]}
                                      </Link>
                                    </Col>
                                    <Col>
                                      <Link
                                        style={trading}
                                        className="vertical-space"
                                        to="/komoditi"
                                      >
                                        {lang.Header.m3.dropdown[0].sub[3]}
                                      </Link>
                                      <Link
                                        style={trading}
                                        className="vertical-space"
                                        to="/gold"
                                      >
                                        {lang.Header.m3.dropdown[0].sub[2]}
                                      </Link>
                                    </Col>
                                    <Col style={{ minWidth: "10vw" }}>
                                      <Link
                                        style={trading}
                                        className="vertical-space"
                                        to="/index-futures"
                                      >
                                        {lang.Header.m3.dropdown[0].sub[4]}
                                      </Link>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>

                              <Col>
                                <div class="row">
                                  <div>
                                    <img className="vl-img" src={vl} />
                                  </div>
                                  <div style={{ marginLeft: "20px" }}>
                                    <div style={title}>
                                      {lang.Header.m3.dropdown[1].title}
                                    </div>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/jam-perdagangan"
                                    >
                                      {lang.Header.m3.dropdown[1].sub[0]}
                                    </Link>
                                  </div>
                                </div>
                              </Col>

                              <Col>
                                <div class="row">
                                  <div>
                                    <img className="vl-img" src={vl} />
                                  </div>
                                  <div style={{ marginLeft: "20px" }}>
                                    <div style={title}>
                                      {lang.Header.m3.dropdown[2].title}
                                    </div>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/pro-trader"
                                    >
                                      {lang.Header.m3.dropdown[2].sub[0]}
                                    </Link>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/topgrowth-trader"
                                    >
                                      {lang.Header.m3.dropdown[2].sub[1]}
                                    </Link>
                                  </div>
                                </div>
                              </Col>

                              <Col>
                                <div class="row">
                                  <div>
                                    <img className="vl-img" src={vl} />
                                  </div>
                                  <div style={{ marginLeft: "20px" }}>
                                    <div style={title}>
                                      {lang.Header.m3.dropdown[3].title}
                                    </div>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/login"
                                    >
                                      {lang.Header.m3.dropdown[3].sub[0]}
                                    </Link>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/register"
                                    >
                                      {lang.Header.m3.dropdown[3].sub[1]}
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </div> */}
                        </div>

                        {/* BERITA */}
                        <div
                          class="dropdown"
                          onMouseEnter={() => this.onClickBerita()}
                        >
                          <button class="dropbtn" style={colorStyle}>
                            {lang.Header.m4.title}
                          </button>

                          {/* <div class="dropdown-content-news tentang-kami-left"> */}
                          {/* <div
                                class="row"
                                style={{ justifyContent: "space-araound" }}
                              >
                                <Col>
                                  <div class="row">
                                    <div style={{ marginLeft: "50px" }}>
                                      <Link to="/newspage">
                                        <div style={newstext}>
                                          {lang.Header.m4.dropdown[0].title}
                                        </div>
                                      </Link>

                                      <Link to="/stock-index">
                                        <div style={newstext}>
                                          {lang.Header.m4.dropdown[1].title}
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </Col>

                                <Col>
                                  <div class="row">
                                    <div>
                                      <img
                                        className="vl-img-tentangkami"
                                        src={vl}
                                      />
                                    </div>
                                    <div style={{ marginLeft: "20px" }}>
                                      <Link to="/forex-commodity">
                                        <div style={newstext}>
                                          {lang.Header.m4.dropdown[2].title}
                                        </div>
                                      </Link>
                                      <Link to="/economic-calendar">
                                        <div style={newstext}>
                                          {lang.Header.m4.dropdown[3].title}
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </Col>

                                <Col>
                                  <div class="row">
                                    <div>
                                      <img
                                        className="vl-img-tentangkami"
                                        src={vl}
                                      />
                                    </div>
                                    <div style={{ marginLeft: "20px" }}>
                                      <Link to="/market-outlook">
                                        <div style={newstext}>
                                          {lang.Header.m4.dropdown[4].title}
                                        </div>
                                      </Link>

                                      <Link to="/video-content">
                                        <div style={newstext}>
                                          {lang.Header.m4.dropdown[5].title}
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                </Col>
                              </div>
                            </div> */}
                          {/* </div> */}
                        </div>

                        <Link to="/edukasi">
                          <NavItem>
                            <button class="dropbtn" style={colorStyle}>
                              {lang.Header.m5.title}
                            </button>
                          </NavItem>
                        </Link>

                        <Link
                          to="/karir"
                          style={colorStyle}

                          // onClick={() => {
                          //   this.toggle("4");
                          // }}
                        >
                          <NavItem>
                            <button class="dropbtn" style={colorStyle}>
                              {lang.Header.m6.title}
                            </button>
                          </NavItem>
                        </Link>

                        <Link
                          to="/contact"

                          // onClick={() => {
                          //   this.toggle("5");
                          // }}
                        >
                          <NavItem>
                            <button class="dropbtn" style={colorStyle}>
                              {lang.Header.m7.title}
                            </button>
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

export default ColorNavbar;
