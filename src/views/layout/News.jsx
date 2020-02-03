import React from "react";
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
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";

import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
import Footer from "../../components/Footers/Footer.jsx";
import "../../assets/css/main.css";

class NewsPage extends React.Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  componentDidMount = () => {
    window.scroll(0, 0);
  };

  render() {
    return (
      <>
        <div style={{ backgroundColor: "#1D1E1F" }}>
          <BlurryNavbar />
          <ColoredNavbar />
          <div className="space-50" />

          <Nav
            className="nav-pills-info nav-pills-icons nav-pills-lg"
            pills
            role="tablist"
            style={{
              backgroundColor: "#1D1E1F",
              // paddingTop: "150px",
              marginTop: "450px",
              justifyContent: "center"
            }}
          >
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "1"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "1" ? "active" : ""}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Stock Index
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "2"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "2" ? "active" : ""}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Forex & Commodity
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "3"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "3" ? "active" : ""}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Economic Calendar Inside
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "4"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "4" ? "active" : ""}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Economic Calendar
              </div>
            </NavItem>
            {/* <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "5"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "5" ? "active" : ""}
                onClick={() => {
                  this.toggle("5");
                }}
              >
                Economic Calendar Inside
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#B3B3B3",
                  ...(this.state.activeTab === "6"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                color={this.state.activeTab === "6" ? "#B3B3B3" : "#585858"}
                className={this.state.activeTab === "6" ? "active" : ""}
                onClick={() => {
                  this.toggle("6");
                }}
              >
                Economic Calendar
              </div>
            </NavItem> */}
          </Nav>
          <TabContent activeTab={"project" + this.state.activeTab}>
            {/* <TabPane tabId="project1">
              <NewsStockIndex />
            </TabPane>
            <TabPane tabId="project2">
              <NewsForexCommodity />
            </TabPane> */}
            <TabPane tabId="project1"></TabPane>
            <TabPane tabId="project2"></TabPane>
            <TabPane tabId="project3">
              <EconomicCalendarInside />
            </TabPane>
            <TabPane tabId="project4">
              <EconomicCalendar />
            </TabPane>
          </TabContent>
          <Footer />
        </div>
      </>
    );
  }
}

export default NewsPage;
