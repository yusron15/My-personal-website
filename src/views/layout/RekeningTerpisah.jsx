import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import Content from "../../components/RekeningTerpisah/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class RekeningTerpisah extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <Content location={{ ...this.props.location }} />
        <Footer />
      </>
    );
  }
}

export default RekeningTerpisah;
