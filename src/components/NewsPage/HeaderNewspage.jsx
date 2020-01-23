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

class HeaderNewsPage extends Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className=" background-header-mobile"
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0,
              backgroundSize: "cover"
            }}
          >
            <SidebarMobile />

            <div className="title title-header-mobile">Newspage</div>
            {/* <div style={{ marginTop: "11vh" }}> */}
            {/* <BreakingNews /> */}
            {/* </div> */}
          </div>
        </>
      );
    }
    return (
      <>
        <div
          className=" background-header"
          style={{
            backgroundImage: `url(${bg})`,
            padding: 0,
            backgroundSize: "cover",
            minHeight: "60vh"
          }}
        >
          <BlurryNavbar />
          <ColoredNavbar location={{ ...this.props.location }} />
          <div className="title title-header">Newspage</div>
          {/* <div style={{ marginTop: "11vh" }}> */}
          <BreakingNews />
          {/* </div> */}
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default HeaderNewsPage;
