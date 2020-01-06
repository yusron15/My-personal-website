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
import logo from "../../assets/img/logo-topgrowth.png";
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
  fontSize: "15px",
  fontWeight: "bold",
  color: "black",
  marginTop: "40px",
  marginBottom: "10px"
};
const tentangkami = {
  fontSize: "15px",
  fontWeight: "bold",
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
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  src={this.state.logo}
                  style={{ height: "7vh", width: "auto" }}
                />
                {/* TGF */}
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
            <UncontrolledCollapse navbar toggler="#example-navbar-transparent">
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
                      Home
                    </button>
                  </NavItem>
                </Link>

                <div class="dropdown dropbtn">
                  <div style={stylesAnimation.slideInDown}>
                    <div
                      style={{
                        color: this.coloringNav([
                          "/tentangkami",
                          "/cabang",
                          "/rekeningterpisah",
                          "/legalitas"
                        ])
                      }}
                    >
                      Tentang Kami
                    </div>
                    <div class="dropdown-content">
                      <Link
                        as={NavLink}
                        to="/tentangkami"
                        className="underlined"
                      >
                        <div style={tentangkami}>Topgrowth Futures</div>
                        <div>Topgrowth Futures Lorem Ipsum</div>
                      </Link>
                      <div class="vl-navbar"></div>
                      <Link to="/cabang">
                        <div style={tentangkami}>Cabang Kami</div>
                        <div>Topgrowth Futures Lorem Ipsum</div>
                      </Link>
                      <div class="vl-navbar"></div>
                      <Link to="/rekeningterpisah">
                        <div style={tentangkami}> Rekening Terpisah </div>
                        <div>Topgrowth Futures Lorem Ipsum</div>
                      </Link>
                      <div class="vl-navbar"></div>
                      <Link to="/legalitas">
                        <div style={tentangkami}> Legalitas </div>
                        <div>Topgrowth Futures Lorem Ipsum</div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="dropdown dropbtn">
                  <div
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
                    Trading Online
                  </div>
                  <div class="dropdown-content-trading trading-online">
                    <Container>
                      <Row>
                        <Col md="3">
                          <div style={title}>Produk</div>
                          <Row>
                            <Col>
                              <Link to="/forex">Forex</Link>
                              <Link to="/gold">Gold</Link>
                              <Link to="/indexfutures">Index Futures</Link>
                            </Col>
                            <Col>
                              <Link to="/cfd">CFD</Link>
                              <Link to="/komoditi">Komoditi</Link>
                            </Col>
                          </Row>
                        </Col>
                        <Col md="1">
                          <div class="vl-navbar-trading"></div>
                        </Col>
                        <Col md="2">
                          <div style={title}>Informasi</div>
                          <Link to="/jamperdagangan">Jam Perdagangan</Link>
                        </Col>
                        <Col md="1">
                          <div class="vl-navbar-trading"></div>
                        </Col>
                        <Col md="2">
                          <div style={title}>Trading Platform</div>
                          <Link to="/protrader">Pro I Trader</Link>
                          <Link to="/topgrowthtrader">Topgrowth Trader</Link>
                        </Col>
                        <Col md="1">
                          <div class="vl-navbar-trading"></div>
                        </Col>
                        <Col md="2">
                          <div style={title}>Buka Akun</div>
                          <Link to="/login">Login</Link>
                          <Link to="/register">Register</Link>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>

                <Link
                  to="/newspage"
                  // onClick={() => {
                  //   this.toggle("2");
                  // }}
                >
                  <div class="dropdown">
                    <button
                      class="dropbtn"
                      style={{
                        ...colorStyle,
                        color: this.coloringNav("/newspage")
                      }}
                    >
                      Berita
                    </button>
                  </div>
                </Link>

                <Link to="/edukasi">
                  <NavItem>
                    <button
                      class="dropbtn"
                      style={{
                        ...colorStyle,
                        color: this.coloringNav("/edukasi")
                      }}
                    >
                      Edukasi
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
                      Karir
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
                      Hubungi Kami
                    </button>
                  </NavItem>
                </Link>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
