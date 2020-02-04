import React from "react";
import bg from "../../assets/img/header-marketoutlook.png";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import NewsTicker from "./NewsTicker";
import BreakingNews from "../../components/Landing/BreakingNews";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Comment from "../../components/Comments/Comment";
import Content from "../../components/NewsPage/Content.jsx";
import NewsMarketOutlook from "../../components/NewsContent/NewsMarketOutlook";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
// import NewsTicker from "../../components/NewsPage/NewsTicker.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class HeaderContent extends React.Component {
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
        <div className="title title-header">Market Outlook</div>
      </div>
    );
  }
}

class HeaderContentMobile extends React.Component {
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
          <div className="title title-header-mobile">Market Outlook</div>
        </div>
      </>
    );
  }
}

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
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <HeaderContentMobile />
              <BreakingNews />
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
            className="team-1 "
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0
            }}
          >
            <HeaderContent location={{ ...this.props.location }} />
            <BreakingNews />
          </div>
          {/* <BlurryNavbar /> */}
          <ColoredNavbar location={{ ...this.props.location }} />
          {/* <NewsTicker /> */}
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
