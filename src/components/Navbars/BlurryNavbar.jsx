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
class BlurryNavbar extends React.Component {
  state = {
    navbarPosition: "bg-darker"
  };
  // componentDidMount() {
  //   window.addEventListener("scroll", this.changenavbarPosition);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.changenavbarPosition);
  // }
  // changenavbarPosition = () => {
  //   if (
  //     document.documentElement.scrollTop > 299 ||
  //     document.body.scrollTop > 299
  //   ) {
  //     this.setState({
  //       navbarPosition: "bg-darker"
  //     });
  //   } else if (
  //     document.documentElement.scrollTop < 300 ||
  //     document.body.scrollTop < 300
  //   ) {
  //     this.setState({
  //       navbarPosition: "navbar-transparent fixed-top "
  //     });
  //   }
  // };
  render() {
    return (
      <>
        <Navbar
          className={this.state.navbarPosition}
          expand="lg"
          // style={{ marginBottom: "30px" }}
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
                    <Link to="/landing">Home</Link>
                  </button>
                  {/* <Link to="/landing">
                      <DropdownToggle>Home</DropdownToggle>
                    </Link> */}
                </NavItem>

                <div class="dropdown">
                  <button class="dropbtn">Tentang Kami</button>
                  <div class="dropdown-content">
                    <Link to="/tentangkami">Tentang Kami</Link>
                    <Link to="/cabang">Cabang Kami</Link>
                    <Link to="/rekeningterpisah">Rekening Terpisah</Link>
                    <Link to="/legalitas">Legalitas</Link>
                  </div>
                </div>
                {/* <NavItem>
                    <Dropdown
                      onMouseOver={this.onMouseEnter}
                      onMouseLeave={this.onMouseLeave}
                      isOpen={this.state.dropdownOpen}
                      toggle={this.toggle}
                    >
                      <DropdownToggle caret>Tentang Kami</DropdownToggle>
                      <DropdownMenu>
                        <Link to="/tentangkami">
                          <DropdownItem>Tentang Kami</DropdownItem>
                        </Link>
                        <Link to="/cabang">
                          <DropdownItem>Cabang Kami</DropdownItem>
                        </Link>
                        <Link to="/rekeningterpisah">
                          <DropdownItem>Rekening Terpisah</DropdownItem>
                        </Link>
                        <Link to="/legalitas">
                          <DropdownItem>Legalitas</DropdownItem>
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem> */}

                <div class="dropdown">
                  <button class="dropbtn">Trading Online</button>
                  <div class="dropdown-content-trading">
                    <Row>
                      <Col md="6">
                        <Link to="/forexgold">Forex & Gold</Link>
                        <Link to="/cfd">CFD</Link>
                        <Link to="/indexfutures">Index Futures</Link>
                        <Link to="/komoditi">Komoditi</Link>
                      </Col>
                      <Col md="6">
                        <Link to="/protrader">Pro | Trader</Link>
                        <Link to="/topgrowthtrader">Topgrowth Trader</Link>
                      </Col>
                    </Row>
                  </div>
                </div>

                <div class="dropdown">
                  <button class="dropbtn">Layanan</button>
                  <div class="dropdown-content">
                    <Link to="/newspage">Berita dan analisa Market</Link>
                  </div>
                </div>

                <NavItem>
                  <button class="dropbtn">
                    <Link to="/karir">Karir</Link>
                  </button>
                </NavItem>
                <NavItem>
                  <button class="dropbtn">
                    <Link to="/Contact">Hubungi Kami</Link>
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

export default BlurryNavbar;
