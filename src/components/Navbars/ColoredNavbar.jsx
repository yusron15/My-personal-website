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
  fontSize: "1rem",
  color: "black",
  // marginTop: "20px",
  marginBottom: "10px",
  textAlign: "left"
};

class ColorNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarColor: "bg-transparent",
      marginTop: "50px",
      color: "white",
      activeTab: "1",
      logo: require("../../assets/img/white-topgrowth.png")
    };
  }

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
        logo: require("../../assets/img/white-topgrowth.png")
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
      : this.state.navbarColor == "broken-white"
      ? "black"
      : "white";

    // console.log(currentPath, pathLink, "adasdadas");
  };

  render() {
    const styles = {
      containerStyle: {
        marginTop: this.state.marginTop,
        navbarColor: this.state.navbarColor,
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
                      <div class="dropdown ">
                        <button
                          class="dropbtn"
                          style={{
                            color: this.coloringNav([
                              "/tentangkami",
                              "/cabang",
                              "/rekeningterpisah",
                              "/legalitas"
                            ])
                          }}
                        >
                          {lang.Header.m2.title}
                        </button>
                        <div class="dropdown-content tentang-kami-left">
                          <div
                            class="row"
                            style={{ justifyContent: "space-araound" }}
                          >
                            <Col>
                              <div class="row">
                                <div style={{ marginLeft: "20px" }}>
                                  <Link
                                    style={tentangkami}
                                    className="vertical-space"
                                    to="/tentangkami"
                                  >
                                    {lang.Header.m2.dropdown[0].title}
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
                                  <Link
                                    style={tentangkami}
                                    className="vertical-space"
                                    to="/jamperdagangan"
                                  >
                                    {lang.Header.m2.dropdown[1].title}
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
                                  <Link
                                    style={tentangkami}
                                    className="vertical-space"
                                    to="/rekeningterpisah"
                                  >
                                    {lang.Header.m2.dropdown[2].title}
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
                                  <Link
                                    style={tentangkami}
                                    className="vertical-space"
                                    to="/login"
                                  >
                                    {lang.Header.m2.dropdown[3].title}
                                  </Link>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </div>
                      </div>

                      {/* TRADING ONLINE */}
                      <div class="dropdown ">
                        <button
                          class="dropbtn"
                          style={{
                            color: this.coloringNav([
                              "/forex",
                              "/gold",
                              "/indexfutures",
                              "/cfd",
                              "/komoditi",
                              "/jamperdagangan",
                              "/protrader",
                              "/topgrowthtrader",
                              "/login",
                              "/register"
                            ])
                          }}
                        >
                          {lang.Header.m3.title}
                        </button>

                        <div class="dropdown-content-trading trading-online">
                          {/* <div class="vl-navbar-trading" /> */}
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
                                      to="/gold"
                                    >
                                      {lang.Header.m3.dropdown[0].sub[1]}
                                    </Link>
                                  </Col>
                                  <Col>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/cfd"
                                    >
                                      {lang.Header.m3.dropdown[0].sub[3]}
                                    </Link>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/komoditi"
                                    >
                                      {lang.Header.m3.dropdown[0].sub[2]}
                                    </Link>
                                  </Col>
                                  <Col style={{ minWidth: "10vw" }}>
                                    <Link
                                      style={trading}
                                      className="vertical-space"
                                      to="/indexfutures"
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
                                    to="/jamperdagangan"
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
                                    to="/protrader"
                                  >
                                    {lang.Header.m3.dropdown[2].sub[0]}
                                  </Link>
                                  <Link
                                    style={trading}
                                    className="vertical-space"
                                    to="/topgrowthtrader"
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
                        </div>
                      </div>

                      <div class="dropdown ">
                        {/* <Link
                          to="/newspage"
                          // onClick={() => {
                          //   this.toggle("2");
                          // }}
                        > */}
                        <div class="dropdown">
                          <button
                            class="dropbtn"
                            style={{
                              color: this.coloringNav([
                                "/newspage",
                                "/stockindex",
                                "/forexcommodity",
                                "/economiccalendar",
                                "/marketoutlook",
                                "/videocontent"
                              ])
                            }}
                          >
                            {lang.Header.m4.title}
                          </button>
                          <div class="dropdown-content-news">
                            <Container>
                              <div
                                class="row"
                                style={{
                                  justifyContent: "space-around"
                                }}
                              >
                                <div>
                                  <Col style={{ paddingTop: "20px" }}>
                                    <Link
                                      as={NavLink}
                                      to="/newspage"
                                      className="underlined"
                                    >
                                      <div style={newstext}>
                                        {lang.Header.m4.dropdown[0].title}
                                      </div>
                                    </Link>

                                    <Link to="/stockindex">
                                      <div style={newstext}>
                                        {lang.Header.m4.dropdown[1].title}
                                      </div>
                                    </Link>
                                  </Col>
                                </div>
                                <div>
                                  <img className="vl-img-news" src={vl} />
                                </div>

                                <div>
                                  <Col style={{ paddingTop: "20px" }}>
                                    <Link to="/forexcommodity">
                                      <div style={newstext}>
                                        {lang.Header.m4.dropdown[2].title}
                                      </div>
                                    </Link>
                                    <Link to="/economiccalendar">
                                      <div style={newstext}>
                                        {lang.Header.m4.dropdown[3].title}
                                      </div>
                                    </Link>
                                  </Col>
                                </div>
                                <div>
                                  <img className="vl-img-news" src={vl} />
                                </div>

                                <div style={{ paddingTop: "20px" }}>
                                  <Col>
                                    <Link to="/marketoutlook">
                                      <div style={newstext}>
                                        {lang.Header.m4.dropdown[4].title}
                                      </div>
                                    </Link>

                                    <Link to="/videocontent">
                                      <div style={newstext}>
                                        {lang.Header.m4.dropdown[5].title}
                                      </div>
                                    </Link>
                                  </Col>
                                </div>
                              </div>
                            </Container>
                          </div>
                        </div>
                        {/* </Link> */}
                      </div>

                      <Link to="/edukasi">
                        <NavItem>
                          <button
                            class="dropbtn"
                            style={{
                              ...colorStyle,
                              color: this.coloringNav("/edukasi")
                            }}
                          >
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
                          <button
                            class="dropbtn"
                            style={{
                              color: this.coloringNav("/karir")
                            }}
                          >
                            {lang.Header.m6.title}
                          </button>
                        </NavItem>
                      </Link>

                      <Link
                        to="/Contact"

                        // onClick={() => {
                        //   this.toggle("5");
                        // }}
                      >
                        <NavItem>
                          <button
                            class="dropbtn"
                            style={{
                              color: this.coloringNav("/Contact")
                              // color: this.state.color,
                              // ...(this.state.activeTab === "5"
                              //   ? { color: "#2AB4E7" }
                              //   : { color: this.state.color })
                            }}
                          >
                            {lang.Header.m7.title}
                          </button>
                        </NavItem>
                      </Link>
                    </Nav>
                  </UncontrolledCollapse>
                </Container>
              </Navbar>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

export default ColorNavbar;
