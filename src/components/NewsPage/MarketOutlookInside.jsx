import React from "react";
import bg from "../../assets/img/header-marketoutlook.png";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import NewsTicker from "./NewsTicker";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Comment from "../../components/Comments/Comment";
import Content from "../../components/NewsPage/Content.jsx";
import NewsStockIndex from "../../components/NewsContent/NewsStockIndex.jsx";
import NewsForexCommodity from "../../components/NewsContent/NewsForexCommodity";
import NewsMarketOutlook from "../../components/NewsContent/NewsMarketOutlook";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
import StockIndex from "../../components/NewsContent/StockIndex.jsx";
import MarketOutlook from "../../components/NewsContent/MarketOutlook.jsx";
// import NewsTicker from "../../components/NewsPage/NewsTicker.jsx";
import ForexCommodity from "../../components/NewsContent/ForexCommodity";
import Footer from "../../components/Footers/Footer.jsx";

class MarketOutlookInside extends React.Component {
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

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div style={{ backgroundColor: "#1D1E1F" }}>
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <SidebarMobile />

              <div className="title title-header-mobile">Market Outlok </div>
            </div>
            <NewsMarketOutlook />
            <Footer />
          </div>
        </>
      );
    }
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

            <div className="title title-header">Market Outlok </div>
          </div>
          {/* <BlurryNavbar /> */}
          <ColoredNavbar location={{ ...this.props.location }} />
          <NewsTicker />
          <NewsMarketOutlook />
          <Footer />
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

export default MarketOutlookInside;
