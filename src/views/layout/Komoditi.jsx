import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Komoditi/Content.jsx";
import Header from "../../components/Komoditi/Header.jsx";
class Komoditi extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <ColoredNavbar location={{ ...this.props.location }} />
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default Komoditi;
