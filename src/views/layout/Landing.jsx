import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "../../components/Navbars/Navbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbarHome.jsx";
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
import "../../assets/css/main.css";
import VizSensor from "react-visibility-sensor";

class Landing extends React.Component {
  state = {
    navbarColor: "white",
    color: "black"
  };
  componentDidMount = () => {
    window.scroll(0, 0);
  };

  onChange = id => async isVisible => {
    if (isVisible && this.state.navbarColor !== id) {
      await this.setState({
        navbarColor: id
      });
    }
  };

  onChangeText = id => async isVisible => {
    if (isVisible && this.state.color !== id) {
      await this.setState({
        color: id
      });
    }
  };
  render() {
    return (
      <>
        <ColoredNavbar
          navbarColor={this.state.navbarColor}
          color={this.state.color}
          location={{ ...this.props.location }}
        />
        <VizSensor scrollCheck onChange={this.onChange("white")}>
          <HeaderLanding />
        </VizSensor>
        {/* <BreakingNews /> */}

        <VizSensor
          partialVisibility
          scrollCheck
          onChange={this.onChange("white")}
        >
          <Pricing />
        </VizSensor>

        <VizSensor
          scrollCheck
          minTopValue={200}
          onChange={this.onChange("black")}
        >
          <Feature />
        </VizSensor>

        <News />
        <VizSensor scrollCheck onChange={this.onChange("white")}>
          <NewsInverted />
        </VizSensor>

        <Benefit />
        <VizSensor scrollCheck onChange={this.onChange("black")}>
          <Legality />
        </VizSensor>

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

// import React from "react";
// import ScrollAnimation from "react-animate-on-scroll";
// import Navbar from "../../components/Navbars/Navbar.jsx";
// import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
// import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
// import HeaderLanding from "../../components/Landing/HeaderLanding.jsx";
// import BreakingNews from "../../components/Landing/BreakingNews.jsx";
// import News from "../../components/Landing/News.jsx";
// import NewsInverted from "../../components/Landing/NewsInverted.jsx";
// import Feature from "../../components/Landing/Feature.jsx";
// import Benefit from "../../components/Landing/Benefit.jsx";
// import Pricing from "../../components/Landing/Pricing.jsx";
// import Legality from "../../components/Landing/Legality.jsx";
// import Footer from "../../components/Footers/Footer.jsx";
// import NewsLetter from "../../components/NewsLetter/NewsLetter.jsx";
// import BottomNavbar from "../../components/Navbars/BottomNavbar.jsx";

// import VizSensor from "react-visibility-sensor";

// class Landing extends React.Component {
//   state = {
//     navbarColor: "white"
//   };
//   componentDidMount = () => {
//     window.scroll(0, 0);
//   };

//   onChange = id => async isVisible => {
//     // if (id === "transparent") {
//     //   alert("asd");
//     // }
//     if (isVisible) {
//       await this.setState({
//         navbarColor: id
//       });
//     }
//   };
//   render() {
//     return (
//       <>
//         <ColoredNavbar
//           navbarColor={this.state.navbarColor}
//           location={{ ...this.props.location }}
//           // transparent={this.state.navbarColor == "white"}
//         />
//         <VizSensor
//           minTopValue={0}
//           partialVisibility
//           onChange={this.onChange("white")}
//         >
//           <HeaderLanding />
//         </VizSensor>
//         {/* <BreakingNews /> */}

//         <VizSensor
//           minTopValue={500}
//           partialVisibility
//           onChange={this.onChange("white")}
//         >
//           <Pricing />
//         </VizSensor>

//         <VizSensor
//           minTopValue={600}
//           partialVisibility
//           onChange={this.onChange("black")}
//         >
//           <>
//             <Feature />
//             <News />
//           </>
//         </VizSensor>

//         <VizSensor onChange={this.onChange("white")}>
//           <>
//             <NewsInverted />
//             <Benefit />
//           </>
//         </VizSensor>

//         <VizSensor onChange={this.onChange("black")}>
//           <Legality />
//         </VizSensor>

//         <NewsLetter />
//         <Footer />
//         <BottomNavbar />
//         <div className="space-50" />
//         <div className="space-50" />
//         <div className="space-50" />
//       </>
//     );
//   }
// }

// export default Landing;
