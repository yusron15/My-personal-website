import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import Content from "../../components/ForexGold/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class ForexGold extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Navbar />
        <Content />
        <Footer />
      </>
    );
  }
}

export default ForexGold;
