import React from "react";
import Navbar from "../../components/Navbars/Navbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import HeaderLanding from "../../components/Landing/HeaderLanding.jsx";
import News from "../../components/Landing/News.jsx";
import NewsInverted from "../../components/Landing/NewsInverted.jsx";
import Feature from "../../components/Landing/Feature.jsx";
import Benefit from "../../components/Landing/Benefit.jsx";
import Pricing from "../../components/Landing/Pricing.jsx";
import Legality from "../../components/Landing/Legality.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import NewsLetter from "../../components/NewsLetter/NewsLetter.jsx";

class Landing extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <BlurryNavbar /> */}
        <ColoredNavbar />
        <HeaderLanding />
        <News />
        <NewsInverted />
        <Feature />
        <Benefit />
        <Pricing />
        <Legality />
        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default Landing;
