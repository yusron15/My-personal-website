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

// reactstrap components
import {
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
  Dropdown
} from "reactstrap";

import { Link } from "react-router-dom";

import logo from "../../assets/img/logotgf.png";

import "../../assets/css/main.css";

class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  };

  onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  };

  render() {
    return (
      <>
        {/* <div className="section section-navbars"> */}
        <div id="navbar">
          {/* <div className="navigation-example"> */}
          {/* Navbar Transparent */}
          <Navbar
            className="navbar-transparent"
            expand={true}
            style={{ position: "fixed" }}
          >
            <Container>
              <div className="navbar-translate">
                <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                  {/* <img src={logo} /> */}
                  TGF
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
                // toggler="#example-navbar-transparent"
                style={{ width: "100%" }}
              >
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <button class="dropbtn">
                      <Link to="/">Home</Link>
                    </button>
                    {/* <Link to="/">
                      <DropdownToggle>Home</DropdownToggle>
                    </Link> */}
                  </NavItem>

                  <div class="dropdown" style={{ width: "100%" }}>
                    <button class="dropbtn">Tentang Kami</button>
                    <div class="dropdown-content w-100">
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
          {/* End Navbar Transparent*/}
        </div>
        {/* </div> */}
        {/* </div> */}
      </>
    );
  }
}

export default Navbars;
