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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import news1 from "../../assets/img/newscontent1.png";
import news2 from "../../assets/img/newscontent2.png";
import news3 from "../../assets/img/newscontent3.png";
import news4 from "../../assets/img/newscontent4.png";
import news5 from "../../assets/img/newscontent5.png";

import { getNews, getContent } from "../../redux/ducks/actions";

class Blogs extends Component {
  state = {
    dataSelect: ""
  };

  componentDidMount = async () => {
    try {
      window.scroll(0, 0);
      await this.props.getContent("Berita", this.props.currentLang, true);
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
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.stockIndex.image_background_mobile +
                    ")",
                  padding: 0
                }}
              >
                <div
                  className=" background-header-mobile"
                  style={{
                    padding: 0
                  }}
                >
                  <SidebarMobile />
                  <div className="title title-header-mobile">
                    {this.props.pageStore.stockIndex.Header}
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="subheader font-white"
                  >
                    {ReactHtmlParser(this.props.pageStore.stockIndex.subheader)}
                  </div>
                </div>
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
                        <a href={item.link} target="_blank">
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
                        </a>
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
                backgroundImage:
                  "url(" +
                  this.props.pageStore.stockIndex.background_image +
                  ")",
                padding: 0
              }}
            >
              <div
                className="team-1"
                style={{
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div className="title title-header">
                  {this.props.pageStore.stockIndex.Header}
                </div>
                <div
                  style={{ textAlign: "center", marginBottom: "5%" }}
                  className="subheader font-white"
                >
                  {ReactHtmlParser(this.props.pageStore.stockIndex.subheader)}
                </div>
              </div>
              {/* <HeaderStockIndex location={{ ...this.props.location }} /> */}
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
                      <a href={item.link} target="_blank">
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
                      </a>
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
  news: state.newsStore.news,
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getNews: type => dispatch(getNews(type)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
