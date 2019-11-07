import React from "react";
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
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default Komoditi;
