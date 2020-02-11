import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Karir/Content.jsx";

import {
  fetchPage,
  getContent,
  getAllKarir
} from "../../redux/ducks/actions.js";
import { connect } from "react-redux";
class Karir extends React.Component {
  state = {};
  async componentDidMount() {
    try {
      await this.props.getContent("karir", this.props.currentLang, true);
      await this.props.getAllKarir(this.props.currentLang);
      window.scroll(0, 0);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
        <Content location={{ ...this.props.location }} />
        {/* <Content location={{ ...this.props.location }} /> */}
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  getContent: (page, lang, toggle) => dispatch(getContent(page, lang, toggle)),
  getAllKarir: lang => dispatch(getAllKarir(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Karir);
