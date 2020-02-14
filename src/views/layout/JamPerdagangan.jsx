import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/JamPerdagangan/Content.jsx";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

class JamPerdagangan extends React.Component {
  async componentDidMount() {
    await this.props.getContent("jamperdagangan", this.props.currentLang, true);
    window.scroll(0, 0);
  }

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
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(JamPerdagangan);
