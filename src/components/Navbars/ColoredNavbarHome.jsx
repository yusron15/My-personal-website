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
      backgroundColor: "broken-white",
      marginTop: "50px",
      color: "black",
      activeTab: "1"
    };
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
      <>
        {/* <BlurryNavbar /> */}
        <Navbar
          // className={`fixed-top  + ${this.state.navbarColor}`}
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
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <img src={logo} style={{ height: "7vh", width: "auto" }} />
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
                <NavItem>
                  <button class="dropbtn">
                    <Link
                      to="/landing"
                      style={{
                        color: this.coloringNav("/landing")
                        // color: "black",
                        // ...(this.state.activeTab === "1"
                        //   ? { color: "#2AB4E7" }
                        //   : { color: this.state.color })
                      }}
                      // onClick={() => {
                      //   this.toggle("1");
                      // }}
                    >
                      Home
                    </Link>
                  </button>
                </NavItem>

                <div class="dropdown">
                  <button
                    class="dropbtn"
                    // style={{
                    //   color: this.coloringNav([
                    //     "/tentangkami",
                    //     "/cabang",
                    //     "/rekeningterpisah",
                    //     "/legalitas"
                    //   ])
                    // }}
                    style={colorStyle}
                  >
                    Tentang Kami
                  </button>
                  <div class="dropdown-content">
                    <Link as={NavLink} to="/tentangkami">
                      <div style={tentangkami}>Topgrowth Futures</div>
                      {/* <div>Topgrowth Futures Lorem Ipsum</div> */}
                    </Link>
                    <div class="vl-navbar"></div>
                    <Link to="/cabang">
                      <div style={tentangkami}>Cabang Kami</div>
                      {/* <div>Topgrowth Futures Lorem Ipsum</div> */}
                    </Link>
                    <div class="vl-navbar"></div>
                    <Link to="/rekeningterpisah">
                      <div style={tentangkami}> Rekening Terpisah </div>
                      {/* <div>Topgrowth Futures Lorem Ipsum</div> */}
                    </Link>
                    <div class="vl-navbar"></div>
                    <Link to="/legalitas">
                      <div style={tentangkami}> Legalitas </div>
                      {/* <div>Topgrowth Futures Lorem Ipsum</div> */}
                    </Link>
                  </div>
                </div>

                <div class="dropdown ">
                  <button
                    class="dropbtn"
                    // style={{
                    //   color: this.coloringNav([
                    //     "/forex",
                    //     "/gold",
                    //     "/indexfutures",
                    //     "/cfd",
                    //     "/komoditi",
                    //     "/jamperdagangan",
                    //     "/protrader",
                    //     "/topgrowthtrader",
                    //     "/login",
                    //     "/register"
                    //   ])
                    // }}
                    style={colorStyle}
                  >
                    Trading Online
                  </button>
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
                  style={{
                    color: this.coloringNav("/newspage")
                    // color: "black",
                    // ...(this.state.activeTab === "2"
                    //   ? { color: "#2AB4E7" }
                    //   : { color: this.state.color })
                  }}
                  // onClick={() => {
                  //   this.toggle("2");
                  // }}
                >
                  <div class="dropdown ">
                    <button class="dropbtn" style={colorStyle}>
                      Berita
                    </button>
                  </div>
                </Link>

                <NavItem>
                  {/* <div class="dropbtn"> */}
                  <Link
                    to="/edukasi"
                    style={{
                      color: this.coloringNav("/edukasi")
                      // color: "black",
                      // ...(this.state.activeTab === "3"
                      //   ? { color: "#2AB4E7" }
                      //   : { color: this.state.color })
                    }}
                    // onClick={() => {
                    //   this.toggle("3");
                    // }}
                  >
                    <button class="dropbtn" style={colorStyle}>
                      Edukasi
                    </button>
                  </Link>
                  {/* </div> */}
                </NavItem>

                <NavItem>
                  {/* <button class="dropbtn"> */}
                  <Link
                    to="/karir"
                    style={colorStyle}
                    style={{
                      color: this.coloringNav("/karir")
                      // color: this.state.color,
                      // ...(this.state.activeTab === "4"
                      //   ? { color: "#2AB4E7" }
                      //   : { color: this.state.color })
                    }}
                    // onClick={() => {
                    //   this.toggle("4");
                    // }}
                  >
                    <button class="dropbtn" style={colorStyle}>
                      Karir
                    </button>
                  </Link>
                  {/* </button> */}
                </NavItem>

                <NavItem>
                  {/* <button class="dropbtn"> */}
                  <Link
                    to="/Contact"
                    style={{
                      color: this.coloringNav("/Contact")
                      // color: this.state.color,
                      // ...(this.state.activeTab === "5"
                      //   ? { color: "#2AB4E7" }
                      //   : { color: this.state.color })
                    }}
                    // onClick={() => {
                    //   this.toggle("5");
                    // }}
                  >
                    <button class="dropbtn" style={colorStyle}>
                      Hubungi Kami
                    </button>
                  </Link>
                  {/* </button> */}
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
