import React from "react";
import Footer from "../../components/Footers/Footer.jsx";
import Content from "../../components/Karir/Content.jsx";

import { getNews } from "../../redux/ducks/actions";
class StockIndex extends React.Component {
  state = {};

  componentDidMount = async () => {
    window.scroll(0, 0);
    alert("ada");
    try {
      await this.props.getNews("stock");
    } catch (error) {
      console.log(error);
    }
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

const mapDispatchToProps = dispatch => ({
  getNews: type => dispatch(getNews(type))
});

export default connect(null, mapDispatchToProps)(StockIndex);
