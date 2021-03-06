import React from "react";
import { connect } from "react-redux";

// import Navbar from "../../components/Navbars/Navbar.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/ProTrader/Content.jsx";
import Download from "../../components/Download/DownloadProTrader.jsx";

import { fetchPage, getContent, getNews } from "../../redux/ducks/actions.js";

class ProTrader extends React.Component {
  state = {};
  componentDidMount = async () => {
    window.scroll(0, 0);
    await this.props.getContent("protrader", this.props.currentLang, true);
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Content location={{ ...this.props.location }} />
        {/* <Download /> */}
        <Footer />
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
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProTrader);
