import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import Content from "../../components/RekeningTerpisah/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class RekeningTerpisah extends React.Component {
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

export default RekeningTerpisah;
