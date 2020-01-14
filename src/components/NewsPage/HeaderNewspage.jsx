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
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import BreakingNews from "../../components/Landing/BreakingNews";

class HeaderNewsPage extends Component {
  render() {
    return (
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

        <div className="title title-header">Newspage</div>
        {/* <div style={{ marginTop: "11vh" }}> */}
        <BreakingNews />
        {/* </div> */}
      </div>
    );
  }
}

export default HeaderNewsPage;
