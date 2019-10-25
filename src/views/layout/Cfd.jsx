import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import Content from "../../components/Cfd/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class Cfd extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <Content />
        <Footer />
      </>
    );
  }
}

export default Cfd;
