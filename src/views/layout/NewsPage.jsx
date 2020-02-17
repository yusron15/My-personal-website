import React from "react";
import { connect } from "react-redux";

import Content from "../../components/NewsPage/Content.jsx";
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
    await this.props.getContent("Berita", "en");
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
