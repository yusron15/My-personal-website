import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

// reactstrap components
import { Button } from "reactstrap";
import NewsLetter from "../NewsLetter/NewsLetter";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/Layout";
import BreakingNews from "../../components/Landing/BreakingNews";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import { isMobile } from "react-device-detect";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

import { getNews, getContent } from "../../redux/ducks/actions";

class Blogs extends Component {
  state = {
    dataSelect: "",
    page: 1,
    showLoadMore: false,
    loading: false
  };

  handleLoadMore = async () => {
    const { page } = this.state;
    try {
      await this.setState({
        loading: true
      });
      await this.props.getNews("stock", page + 1);
      await this.setState({
        page: this.state.page + 1,
        loading: false
      });
    } catch (error) {
      await this.setState({
        showLoadMore: false
      });
      console.log(error);
    }
  };

  componentDidMount = async () => {
    try {
      window.scroll(0, 0);
      await this.props.getContent("Berita", this.props.currentLang, true);
      await this.props.getNews("stock", 1);
      await this.setState({
        showLoadMore: true
      });
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
                    {this.state.showLoadMore && (
                      <Button
                        onClick={this.handleLoadMore}
                        disabled={this.state.loading}
                      >
                        Load More
                      </Button>
                    )}
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
                backgroundSize: "cover",
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
                  {this.state.showLoadMore && (
                    <Button
                      onClick={this.handleLoadMore}
                      disabled={this.state.loading}
                    >
                      Load More
                    </Button>
                  )}
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
  getNews: (type, page) => dispatch(getNews(type, page)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
