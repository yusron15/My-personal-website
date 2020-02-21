import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/Cpo/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import { connect } from "react-redux";

class Cpo extends React.Component {
  render() {
    return (
      <>
        <Content location={{ ...this.props.location }} />
        <Footer />
      </>
    );
  }
}

export default Cpo;
