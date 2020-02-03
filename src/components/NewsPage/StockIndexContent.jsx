import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import NewsLetter from "../NewsLetter/NewsLetter";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/header-stockindex.png";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/Layout";
import NewsTicker from "./NewsTicker";
import BreakingNews from "../../components/Landing/BreakingNews";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import { isMobile } from "react-device-detect";

import news1 from "../../assets/img/newscontent1.png";
import news2 from "../../assets/img/newscontent2.png";
import news3 from "../../assets/img/newscontent3.png";
import news4 from "../../assets/img/newscontent4.png";
import news5 from "../../assets/img/newscontent5.png";

import { getNews } from "../../redux/ducks/actions";

class HeaderStockIndex extends Component {
  render() {
    return (
      <div
        className="team-1"
        style={{
          padding: 0
        }}
      >
        <BlurryNavbar />
        <ColoredNavbar location={{ ...this.props.location }} />
        <div className="title title-header">Stock Index</div>
      </div>
    );
  }
}

class Blogs extends Component {
  state = {
    dataSelect: ""
  };

  componentDidMount = async () => {
    try {
      window.scroll(0, 0);
      await this.props.getNews("stock");
    } catch (error) {
      console.log(error);
    }
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section broken-white" id="blogs">
            {/* ********* END BLOGS 5 ********* */}

            <div>
              <div
                className="team-1 background-header-mobile"
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <SidebarMobile />
                <div className="title title-header-mobile">Stock Index</div>
              </div>

              {/* <Container> */}
              <div
                className="cd-section broken-white"
                id="features"
                // style={{ backgroundColor: "#D4D4D4" }}
              >
                <div className="features-3" style={{ paddingTop: 0 }}>
                  <div>
                    {this.props.news.stock.map((item, index) => {
                      return (
                        <Link to="/stock-index-inside">
                          <Content
                            image={item.featured_image_src}
                            title={item.title.rendered}
                            posted={`Posted ${moment(item.date).format(
                              "DD MMMM YYYY HH:ss"
                            )} WIB`}
                            description={`${item.excerpt.rendered
                              .replace(/(<([^>]+)>)/gi, "")
                              .substring(0, 100)}...`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* </Container> */}
            </div>
            <NewsLetter />
            <Footer />
            {/* ********* END BLOGS 5 ********* */}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="cd-section broken-white" id="blogs">
          {/* ********* END BLOGS 5 ********* */}

          <div>
            <div
              className="team-1"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              {/* <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />
              <div className="title title-header">Stock Index</div> */}
              <HeaderStockIndex />
              <BreakingNews />
            </div>

            {/* <Container> */}
            <div
              className="cd-section broken-white"
              id="features"
              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <div className="features-3" style={{ paddingTop: 0 }}>
                <div>
                  {this.props.news.stock.map((item, index) => {
                    return (
                      <Link to="/stock-index-inside">
                        <Content
                          image={item.featured_image_src}
                          title={item.title.rendered}
                          posted={`Posted ${moment(item.date).format(
                            "DD MMMM YYYY HH:ss"
                          )} WIB`}
                          description={`${item.excerpt.rendered
                            .replace(/(<([^>]+)>)/gi, "")
                            .substring(0, 100)}...`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* </Container> */}
          </div>
          <NewsLetter />
          <Footer />
          {/* ********* END BLOGS 5 ********* */}
        </div>
      </>
    );
  };
  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  news: state.newsStore.news
});

const mapDispatchToProps = dispatch => ({
  getNews: type => dispatch(getNews(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
