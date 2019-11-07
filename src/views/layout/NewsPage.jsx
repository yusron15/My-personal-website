import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import Content from "../../components/NewsPage/Content.jsx";
import Footer from "../../components/Footers/Footer.jsx";

class NewsPage extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <ColoredNavbar />
        <Content />
        <Footer />
      </>
    );
  }
}

export default NewsPage;
