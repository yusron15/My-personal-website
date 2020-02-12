import React from "react";
import bg from "../../assets/img/header-marketoutlook.png";
import { Link } from "react-router-dom";
import moment from "moment";
import { getNews } from "../../redux/ducks/actions";
import { connect } from "react-redux";

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

  componentDidMount = async () => {
    try {
      window.scroll(0, 0);
      await this.props.getNews("market");
    } catch (error) {
      console.log(error);
    }
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
          {/* <NewsMarketOutlook 
            image={item.featured_image_src}
            title={item.title.rendered}
            posted={`Posted ${moment(item.date).format(
              "DD MMMM YYYY HH:ss"
            )} WIB`}
            description={`${item.excerpt.rendered
              .replace(/(<([^>]+)>)/gi, "")
              }...`}
          /> */}
          <div>
            {this.props.news.market.map((item, index) => {
              return (
                <Link to="/market-outlook-inside">
                  <NewsMarketOutlook
                    image={item.featured_image_src}
                    title={item.title.rendered}
                    posted={`Posted ${moment(item.date).format(
                      "DD MMMM YYYY HH:ss"
                    )} WIB`}
                    desc={`${item.excerpt.rendered.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}...`}
                  />
                </Link>
              );
            })}
          </div>
          <Footer />
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  news: state.newsStore.news
});

const mapDispatchToProps = dispatch => ({
  getNews: type => dispatch(getNews(type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketOutlookInside);
