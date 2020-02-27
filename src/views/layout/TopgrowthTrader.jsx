import React from "react";
import { connect } from "react-redux";

// import Navbar from "../../components/Navbars/Navbar.jsx";
import Content from "../../components/TopgrowthTrader/Content.jsx";
import Download from "../../components/Download/Download.jsx";
import Footer from "../../components/Footers/Footer.jsx";

import { fetchPage, getContent, getNews } from "../../redux/ducks/actions.js";

class TopgrowthTrader extends React.Component {
  state = {};
  componentDidMount = async () => {
    await this.props.getContent(
      "topgrowthtrader",
      this.props.currentLang,
      true
    );

    window.scroll(0, 0);
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

export default connect(mapStateToProps, mapDispatchToProps)(TopgrowthTrader);
