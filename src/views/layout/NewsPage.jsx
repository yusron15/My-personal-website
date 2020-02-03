import React from "react";
import { connect } from "react-redux";

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

import {
  fetchPage,
  getContent,
  getAllNews,
  getNews
} from "../../redux/ducks/actions.js";

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

  componentDidMount = async () => {
    await this.props.getContent("Berita", this.props.currentLang, true);

    await this.props.getAllNews();
    await this.props.getNews("forex");
    await this.props.getNews("market");
    await this.props.getNews("stock");

    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <div style={{ backgroundColor: "#1D1E1F" }}>
          <HeaderNewsPage location={{ ...this.props.location }} />

          <Content />

          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle)),
  getAllNews: () => dispatch(getAllNews()),
  getNews: type => dispatch(getNews(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
