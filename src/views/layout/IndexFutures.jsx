import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/IndexFutures/Content.jsx";
class IndexFutures extends React.Component {
  state = {};
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
    return (
      <>
        <Content location={{ ...this.props.location }} />
        <Footer />
      </>
    );
  }
}

export default IndexFutures;
