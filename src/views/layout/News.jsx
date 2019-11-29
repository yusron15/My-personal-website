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
import NewsStockIndex from "../../components/NewsContent/NewsStockIndex.jsx";
import NewsForexCommodity from "../../components/NewsContent/NewsForexCommodity";
import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
import StockIndex from "../../components/NewsContent/StockIndex.jsx";
import ForexCommodity from "../../components/NewsContent/ForexCommodity";
import Footer from "../../components/Footers/Footer.jsx";
import "../../assets/css/main.css";

class NewsPage extends React.Component {
  state = {
    activeTab: "6"
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

          <Nav
            className="nav-pills-info nav-pills-icons nav-pills-lg"
            pills
            role="tablist"
            style={{
              backgroundColor: "#1D1E1F",
              paddingTop: "70px",
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
                News Stock Index
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
                News Forex & Commodity
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
                  ...(this.state.activeTab === "4"
                    ? { color: "#B3B3B3" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "4" ? "active" : ""}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Forex Commodity
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
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
            </NavItem>
          </Nav>
          <TabContent activeTab={"project" + this.state.activeTab}>
            <TabPane tabId="project1">
              <NewsStockIndex />
            </TabPane>
            <TabPane tabId="project2">
              <NewsForexCommodity />
            </TabPane>
            <TabPane tabId="project3">
              <StockIndex />
            </TabPane>
            <TabPane tabId="project4">
              <ForexCommodity />
            </TabPane>
            <TabPane tabId="project5">
              <EconomicCalendarInside />
            </TabPane>
            <TabPane tabId="project6">
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
