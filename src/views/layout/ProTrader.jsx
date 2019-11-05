import React from "react";
// import Navbar from "../../components/Navbars/Navbar.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/ProTrader/Content.jsx";
import Download from "../../components/Download/Download.jsx";
class ProTrader extends React.Component {
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

export default ProTrader;
