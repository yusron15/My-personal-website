import React from "react";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Header from "../../components/Contact/Header.jsx";
import Content from "../../components/Contact/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class Contact extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        {/* <BlurryNavbar /> */}
        <Header location={{...this.props.location}} />
        <Content />
        <Footer />
      </>
    );
  }
}

export default Contact;
