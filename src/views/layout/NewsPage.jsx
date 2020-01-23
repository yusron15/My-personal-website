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
import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Router
} from "react-router-dom";
import bg from "../../assets/img/header-newspage.png";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Content from "../../components/NewsPage/Content.jsx";
import NewsStockIndex from "../../components/NewsContent/NewsStockIndex.jsx";
import NewsForexCommodity from "../../components/NewsContent/NewsForexCommodity";
import NewsMarketOutlook from "../../components/NewsContent/NewsMarketOutlook";
import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
import StockIndex from "../../components/NewsContent/StockIndex.jsx";
import MarketOutlook from "../../components/NewsContent/MarketOutlook.jsx";
import NewsTicker from "../../components/NewsPage/NewsTicker.jsx";
import BreakingNews from "../../components/Landing/BreakingNews";
import ForexCommodity from "../../components/NewsContent/ForexCommodity";
import Footer from "../../components/Footers/Footer.jsx";
import HeaderNewsPage from "../../components/NewsPage/HeaderNewspage";

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
      // <>
      //   <ColoredNavbar />
      //   <Content />
      //   <Footer />
      // </>
      <>
        <div style={{ backgroundColor: "#1D1E1F" }}>
          <HeaderNewsPage />

          {/* <ColoredNavbar location={{ ...this.props.location }} /> */}

          {/* <Nav
            className="nav-pills-info nav-pills-icons nav-pills-lg"
            pills
            role="tablist"
            style={{
              backgroundColor: "#1D1E1F",
              paddingTop: "10px",
              justifyContent: "center",
              paddingBottom: "20px"
            }}
          >
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#FFFFFF",
                  ...(this.state.activeTab === "1"
                    ? { color: "#FFFFFF" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "1" ? "active" : ""}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                News Highlight
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#FFFFFF",
                  ...(this.state.activeTab === "2"
                    ? { color: "#FFFFFF" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "2" ? "active" : ""}
                onClick={() => {
                  this.toggle("2");
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
                  color: "#FFFFFF",
                  ...(this.state.activeTab === "3"
                    ? { color: "#FFFFFF" }
                    : { color: "#585858" })
                }}
                className={this.state.activeTab === "3" ? "active" : ""}
                onClick={() => {
                  this.toggle("3");
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
                  color: "#FFFFFF",
                  ...(this.state.activeTab === "4"
                    ? { color: "#FFFFFF" }
                    : { color: "#585858" })
                }}
                color={this.state.activeTab === "4" ? "#FFFFFF" : "#585858"}
                className={this.state.activeTab === "4" ? "active" : ""}
                onClick={() => {
                  this.toggle("4");
                }}
              >
                Economic Calendar
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div
                style={{
                  backgroundColor: "#1D1E1F",
                  margin: "0 15px 0 15px",
                  cursor: "pointer",
                  color: "#FFFFFF",
                  ...(this.state.activeTab === "5"
                    ? { color: "#FFFFFF" }
                    : { color: "#585858" })
                }}
                color={this.state.activeTab === "5" ? "#FFFFFF" : "#585858"}
                className={this.state.activeTab === "5" ? "active" : ""}
                onClick={() => {
                  this.toggle("5");
                }}
              >
                Market Outlook
              </div>
            </NavItem>
            <NavItem clssName="black-newsletter">
              <div className={this.state.activeTab === "7" ? "active" : ""}>
                <Link
                  style={{
                    backgroundColor: "#1D1E1F",
                    margin: "0 15px 0 15px",
                    cursor: "pointer",
                    color: "#FFFFFF",
                    ...(this.state.activeTab === "7"
                      ? { color: "#FFFFFF" }
                      : { color: "#585858" })
                  }}
                  color={this.state.activeTab === "7" ? "#FFFFFF" : "#585858"}
                  to="/edukasi"
                >
                  Video
                </Link>
              </div>
            </NavItem>
          </Nav> */}

          {/* <NewsTicker /> */}
          {/* <BreakingNews /> */}
          <Content />

          {/* <TabContent activeTab={"project" + this.state.activeTab}>
            <TabPane tabId="project1">
              <Content />
            </TabPane>
            <TabPane tabId="project2">
              <Route exact path="/newspage" component={StockIndex}></Route>
              <Route path="/newspage/:title" component={NewsStockIndex}></Route>
            </TabPane>
            <TabPane tabId="project3">
              <Route exact path="/newspage" component={ForexCommodity}></Route>
              <Route
                path="/newspage/:title"
                component={NewsForexCommodity}
              ></Route>
            </TabPane>
            <TabPane tabId="project4">
              <Route
                exact
                path="/newspage"
                component={EconomicCalendar}
              ></Route>
              <Route
                path="/newspage/:time"
                component={EconomicCalendarInside}
              ></Route>
            </TabPane>
            <TabPane tabId="project5">
              <Route exact path="/newspage" component={MarketOutlook}></Route>
              <Route
                path="/newspage/:title"
                component={NewsMarketOutlook}
              ></Route>
            </TabPane>
          </TabContent> */}

          <Footer />
        </div>
      </>
    );
  }
}

export default NewsPage;
