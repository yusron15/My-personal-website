import React from "react";
import bg from "../../assets/img/header-stockindex.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../../redux/ducks/actions";
import moment from "moment";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BreakingNews from "../../components/Landing/BreakingNews";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Comment from "../../components/Comments/Comment";
import Content from "../../components/NewsPage/Content.jsx";
import NewsStockIndex from "../../components/NewsContent/NewsInside.jsx";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
// import NewsTicker from "../../components/NewsPage/NewsTicker.jsx";
import Footer from "../../components/Footers/Footer.jsx";
import news1 from "../../assets/img/newscontent1.png";

class HeaderContent extends React.Component {
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

class HeaderContentMobile extends React.Component {
  render() {
    return (
      <>
        <div
          className=" background-header-mobile"
          style={{
            padding: 0
          }}
        >
          <SidebarMobile />
          <div className="title title-header-mobile">Stock Index</div>
        </div>
      </>
    );
  }
}

class StockIndexInside extends React.Component {
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
          <div style={{ backgroundColor: "#1D1E1F" }}>
            <div
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <HeaderContentMobile />
              <BreakingNews />
            </div>
            <div>
              {this.props.news.stock.map((item, index) => {
                return (
                  <Link to="/stock-index-inside">
                    <NewsStockIndex
                      img={item.featured_image_src}
                      title={item.title.rendered}
                      posted={`Posted ${moment(item.date).format(
                        "DD MMMM YYYY HH:ss"
                      )} WIB`}
                      desc={`${item.excerpt.rendered
                        .replace(/(<([^>]+)>)/gi, "")
                        .replace(/(&#8230;)/gi, "")}`}
                    />
                  </Link>
                );
              })}
            </div>
            <Footer />
          </div>
        </>
      );
    }
    return (
      <>
        <div style={{ backgroundColor: "#1D1E1F" }}>
          <div
            className="team-1"
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0
            }}
          >
            <HeaderContent location={{ ...this.props.location }} />
            <BreakingNews />
          </div>
          {/* <BlurryNavbar /> */}
          <ColoredNavbar location={{ ...this.props.location }} />
          <div>
            {this.props.news.stock.map((item, index) => {
              return (
                <Link to="/stock-index-inside">
                  <NewsStockIndex
                    img={item.featured_image_src}
                    title={item.title.rendered}
                    posted={`Posted ${moment(item.date).format(
                      "DD MMMM YYYY HH:ss"
                    )} WIB`}
                    desc={`${item.excerpt.rendered
                      .replace(/(<([^>]+)>)/gi, "")
                      .replace(/(&#8230;)/gi, "")}`}
                  />
                </Link>
              );
            })}
          </div>
          {/* <div>
            <Link to="/stock-index-inside">
              <NewsStockIndex
                img={this.props.news.stock.featured_image_src}
                title={this.props.news.stock.title.rendered}
                posted={`Posted ${moment(this.props.news.stock.date).format(
                  "DD MMMM YYYY HH:ss"
                )} WIB`}
                desc={`${this.props.news.stock.excerpt.rendered
                  .replace(/(<([^>]+)>)/gi, "")
                  .replace(/(&#8230;)/gi, "")}`}
              />
            </Link>
          </div> */}
          <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(StockIndexInside);
