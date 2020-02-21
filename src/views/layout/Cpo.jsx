import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Cpo/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

class Cpo extends React.Component {
  async componentDidMount() {
    await this.props.getContent("cpo", this.props.currentLang, true);
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
  currentLang: state.pageStore.currentLang
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cpo);
