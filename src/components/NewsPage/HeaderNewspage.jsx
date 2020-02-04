import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import bg from "../../assets/img/header-newspage.png";
import { isMobile } from "react-device-detect";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import BreakingNews from "../../components/Landing/BreakingNews";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";

class HeaderContent extends Component {
  render() {
    return (
      <div
        className="team-1"
        style={{
          padding: 0
        }}
      >
        <BlurryNavbar />
        <ColoredNavbar location={{ ...this.props.location }} />
        <div className="title title-header">Newspage</div>
      </div>
    );
  }
}

class HeaderContentMobile extends Component {
  render() {
    return (
      <>
        <div
          className=" background-header-mobile"
          style={{
            padding: 0
          }}
        >
          <SidebarMobile />
          <div className="title title-header-mobile">Newspage</div>
        </div>
      </>
    );
  }
}

class HeaderNewsPage extends Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0,
              backgroundSize: "cover"
            }}
          >
            <HeaderContentMobile />
            <BreakingNews />
          </div>
        </>
      );
    }
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            padding: 0
          }}
        >
          <HeaderContent location={{ ...this.props.location }} />
          <BreakingNews />
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default HeaderNewsPage;
