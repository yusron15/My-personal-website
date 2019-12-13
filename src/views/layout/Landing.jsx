import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "../../components/Navbars/Navbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import HeaderLanding from "../../components/Landing/HeaderLanding.jsx";
import BreakingNews from "../../components/Landing/BreakingNews.jsx";
import News from "../../components/Landing/News.jsx";
import NewsInverted from "../../components/Landing/NewsInverted.jsx";
import Feature from "../../components/Landing/Feature.jsx";
import Benefit from "../../components/Landing/Benefit.jsx";
import Pricing from "../../components/Landing/Pricing.jsx";
import Legality from "../../components/Landing/Legality.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import NewsLetter from "../../components/NewsLetter/NewsLetter.jsx";
import BottomNavbar from "../../components/Navbars/BottomNavbar.jsx";

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
        <BreakingNews />
        <News />
        {/* <NewsInverted /> */}
        <Feature />
        <Benefit />
        <Pricing />
        <Legality />
        <NewsLetter />
        <Footer />
        <BottomNavbar />
        <div className="space-50" />
        <div className="space-50" />
        <div className="space-50" />
      </>
    );
  }
}

export default Landing;
