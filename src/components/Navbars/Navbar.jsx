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
  Col
} from "reactstrap";

import { Link } from 'react-router-dom';

class Navbars extends React.Component {
  render() {
    return (
      <>
        {/* <div className="section section-navbars"> */}
          <div id="navbar">
            {/* <div className="navigation-example"> */}
              {/* Navbar Transparent */}
              <Navbar className="navbar-transparent" expand="lg">
                <Container>
                  <div className="navbar-translate">
                    <NavbarBrand
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Transparent
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
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <Link to="/landing">
                            Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/tentangkami">
                            Tentang Kami
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/trading">
                            Trading Online
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/layanan">
                            Layanan
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/karir">
                            Karir
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link to="/hubungikami">
                            Hubungi Kami
                        </Link>
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
