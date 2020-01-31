import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Karir/Content.jsx";
import { fetchPage, getContent } from "../../redux/ducks/actions.js";
import { connect } from "react-redux";
class Karir extends React.Component {
  state = {};
  async componentDidMount() {
    await this.props.getContent("edukasi", "id");
    window.scroll(0, 0);
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
  getContent: (page, lang, toggle) =>
    dispatch(getContent(page, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Karir);
