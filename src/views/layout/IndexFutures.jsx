import React from "react";
import { connect } from "react-redux";

import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/IndexFutures/Content.jsx";

import { fetchPage, getContent, getNews } from "../../redux/ducks/actions.js";

class IndexFutures extends React.Component {
  state = {};
  componentDidMount = async () => {
    await this.props.getContent("indexfutures", this.props.currentLang, true);
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <Content location={{ ...this.props.location }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(IndexFutures);
