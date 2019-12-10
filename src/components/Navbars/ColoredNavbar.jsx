/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import logo from "../../assets/img/Bitmap.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";
import Radium, { StyleRoot } from "radium";

const stylesAnimation = {
  slideInDown: {
    animation: "x 1s",
    animationName: Radium.keyframes(slideInDown, "bounce")
  }
};

class ColorNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarColor: "broken-white",
      marginTop: "50px",
      color: "black"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarTop);
  }

  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 700 ||
      document.body.scrollTop > 700
    ) {
      this.setState({
        navbarColor: "black-newsletter",
        color: "white"
      });
    } else if (
      document.documentElement.scrollTop > 10 ||
      document.body.scrollTop > 10
    ) {
      this.setState({
        marginTop: "0px"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "broken-white",
        marginTop: "50px",
        color: "black"
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

  render() {
    const styles = {
      containerStyle: {
        marginTop: this.state.marginTop
      },
      colorStyle: {
        color: this.state.color
      }
    };
    const { containerStyle, colorStyle } = styles;
    return (
      <>
        {/* <BlurryNavbar /> */}
        <Navbar
          className={"fixed-top " + this.state.navbarColor}
          expand="lg"
          style={containerStyle}
        >
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <img src={logo} />
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
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <button class="dropbtn">
                    <Link to="/landing" style={colorStyle}>
                      Home
                    </Link>
                  </button>
                  {/* <Link to="/landing">
                      <DropdownToggle>Home</DropdownToggle>
                    </Link> */}
                </NavItem>

                <div class="dropdown" style={stylesAnimation.slideInDown}>
                  <button class="dropbtn" style={colorStyle}>
                    Tentang Kami
                  </button>
                  <div class="dropdown-content">
                    <Link to="/tentangkami">Tentang Kami</Link>
                    <Link to="/cabang">Cabang Kami</Link>
                    <Link to="/rekeningterpisah">Rekening Terpisah</Link>
                    <Link to="/legalitas">Legalitas</Link>
                  </div>
                </div>

                <div class="dropdown">
                  <button class="dropbtn" style={colorStyle}>
                    Trading Online
                  </button>
                  <div
                    class="dropdown-content-trading"
                    // style={{ width: "100vw" }}
                  >
                    <Row>
                      <Col md="3">
                        {/* <div className="title">Produk</div> */}
                        {/* <Link to="/forexgold">Forex & Gold</Link> */}
                        <div
                          style={{
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "black",
                            marginTop: "20px",
                            marginBottom: "10px"
                          }}
                        >
                          Produk
                        </div>

                        <Link to="/forex">Forex</Link>
                        <Link to="/gold">Gold</Link>
                        <Link to="/cfd">CFD</Link>
                        <Link to="/indexfutures">Index Futures</Link>
                        <Link to="/komoditi">Komoditi</Link>
                      </Col>
                      <Col md="3">
                        <div
                          style={{
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "black",
                            marginTop: "20px",
                            marginBottom: "10px"
                          }}
                        >
                          Informasi
                        </div>
                        <Link to="/jamperdagangan">Jam Perdagangan</Link>
                      </Col>
                      <Col md="3">
                        <div
                          style={{
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "black",
                            marginTop: "20px",
                            marginBottom: "10px"
                          }}
                        >
                          Trading Platform
                        </div>
                        <Link to="/protrader">Pro I Trader</Link>
                        <Link to="/topgrowthtrader">Topgrowth Trader</Link>
                      </Col>
                      <Col md="3">
                        <div
                          style={{
                            marginLeft: "10px",
                            fontSize: "15px",
                            fontWeight: "bold",
                            color: "black",
                            marginTop: "20px",
                            marginBottom: "10px"
                          }}
                        >
                          Buka Akun
                        </div>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div class="dropdown">
                  <button class="dropbtn" style={colorStyle}>
                    Layanan
                  </button>
                  <div class="dropdown-content">
                    <Link to="/newspage">Berita dan analisa Market</Link>
                  </div>
                </div>

                <NavItem>
                  <button class="dropbtn">
                    <Link to="/karir" style={colorStyle}>
                      Karir
                    </Link>
                  </button>
                </NavItem>
                <NavItem>
                  <button class="dropbtn">
                    <Link to="/Contact" style={colorStyle}>
                      Hubungi Kami
                    </Link>
                  </button>
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
