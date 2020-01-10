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
import bg from "../../assets/img/header-forexcommodity.png";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import NewsTicker from "./NewsTicker";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Comment from "../../components/Comments/Comment";
import Content from "../../components/NewsPage/Content.jsx";
import NewsStockIndex from "../../components/NewsContent/NewsStockIndex.jsx";
import NewsForexCommodity from "../../components/NewsContent/NewsForexCommodity";
import NewsMarketOutlook from "../../components/NewsContent/NewsMarketOutlook";
import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
import StockIndex from "../../components/NewsContent/StockIndex.jsx";
import MarketOutlook from "../../components/NewsContent/MarketOutlook.jsx";
// import NewsTicker from "../../components/NewsPage/NewsTicker.jsx";
import ForexCommodity from "../../components/NewsContent/ForexCommodity";
import Footer from "../../components/Footers/Footer.jsx";

class ForexCommodityInside extends React.Component {
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
          <div
            className="team-1 background-header"
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0
            }}
          >
            <BlurryNavbar />

            <div className="title title-header">Forex Commodity </div>
          </div>
          {/* <BlurryNavbar /> */}
          <ColoredNavbar location={{ ...this.props.location }} />
          <NewsTicker />
          <NewsForexCommodity />
          <Footer />
        </div>
      </>
    );
  }
}

export default ForexCommodityInside;
