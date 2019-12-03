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
import twitter from "../../assets/img/twitter.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import vimeo from "../../assets/img/vimeo.png";
import subscribe from "../../assets/img/subscribe.png";
import flag from "../../assets/img/flag-uk.png";

import "../../assets/css/main.css";

const font = {
  color: "#7F7C7C"
};

class BlurryNavbar extends React.Component {
  // state = {
  //   navbarPosition: "bg-darker"
  // };
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
          // className={this.state.navbarPosition}
          expand="lg"
          style={{
            // backgroundColor: "rgba(112, 112, 112, 0.19)",
            // backgroundColor: "#343435",
            backgroundColor: "#FFFFFF",
            height: "50px"
          }}
        >
          <Container>
            <div className="navbar-translate">
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                <p style={font}>Call Us : 021 2278-9393</p>
              </NavbarBrand>
              {/* <button
                className="navbar-toggler"
                id="example-navbar-transparent"
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button> */}
            </div>
            <UncontrolledCollapse navbar toggler="#example-navbar-transparent">
              <Nav className="ml-auto" style={{ marginRight: "25px" }} navbar>
                <NavItem>
                  <Link to="/#" className="vertical-center-nav">
                    <img
                      src={flag}
                      style={{
                        paddingRight: "10px",
                        height: "10px",
                        width: "auto"
                      }}
                    />
                    <text style={font}>ENG</text>
                  </Link>
                </NavItem>
                <div class="vl"></div>
                <NavItem>
                  <Link to="/#" className="vertical-center-nav">
                    <img
                      src={subscribe}
                      style={{
                        paddingRight: "10px",
                        height: "10px",
                        width: "auto"
                      }}
                    />
                    <text style={font}>Subscribe</text>
                  </Link>
                </NavItem>
                <div class="vl"></div>
                <NavItem>
                  <Link to="/#">
                    <img src={facebook} />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/#">
                    <img src={twitter} />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/#">
                    <img src={instagram} />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/#">
                    <img src={vimeo} />
                  </Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
        {/* <hr
          style={{
            color: "grey",
            backgroundColor: "grey",
            height: 0.5,
            width: "100vw",
            borderColor: "grey"
          }}
        /> */}
      </>
    );
  }
}

export default BlurryNavbar;
