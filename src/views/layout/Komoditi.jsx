import React from "react";
import { connect } from "react-redux";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Komoditi/Content.jsx";
import Header from "../../components/Komoditi/Header.jsx";
import { fetchPage, getContent, getNews } from "../../redux/ducks/actions.js";

class Komoditi extends React.Component {
  state = {};
  componentDidMount = async () => {
    await this.props.getContent("Komoditi", this.props.currentLang, true);
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        {/* <ColoredNavbar location={{ ...this.props.location }} /> */}
        <Header location={{ ...this.props.location }} />
        <Content />
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
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Komoditi);
