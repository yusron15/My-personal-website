import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import Content from "../../components/TopgrowthTrader/Content.jsx";
import Download from "../../components/TopgrowthTrader/Download.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class TopgrowthTrader extends React.Component {
  state = {};
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Content />
        <Download />
        <Footer />
      </>
    );
  }
}

export default TopgrowthTrader;
