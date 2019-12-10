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

class BottomNavbar extends React.Component {
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
        <div class="navbar-bottom">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
        {/* </Navbar> */}
      </>
    );
  }
}

export default BottomNavbar;
