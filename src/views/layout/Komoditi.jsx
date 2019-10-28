import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Komoditi/Content.jsx";
import Header from "../../components/Komoditi/Header.jsx";
class Komoditi extends React.Component {
  state = {};
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
