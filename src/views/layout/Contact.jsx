import React from "react";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Header from "../../components/Contact/Header.jsx";
import Content from "../../components/Contact/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import { connect } from "react-redux";

import { getContent } from "../../redux/ducks/actions.js";
class Contact extends React.Component {
  state = {};
  async componentDidMount() {
    window.scroll(0, 0);
    await this.props.getContent("hubungikami", this.props.currentLang, true);
  }

  render() {
    return (
      <>
        {/* <BlurryNavbar /> */}
        <Header style={{ zIndex: 999 }} location={{ ...this.props.location }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
