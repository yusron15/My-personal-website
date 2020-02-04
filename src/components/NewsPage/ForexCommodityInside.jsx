import React from "react";
import bg from "../../assets/img/header-forexcommodity.png";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "../../redux/ducks/actions";
import moment from "moment";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import NewsTicker from "./NewsTicker";
import BreakingNews from "../../components/Landing/BreakingNews";

import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Comment from "../../components/Comments/Comment";
// import Content from "../../components/NewsPage/Content.jsx";
import Content from "../RelatedPost/Layout";
// import NewsForexCommodity from "../../components/NewsContent/NewsForexCommodity";
import NewsForexCommodity from "../../components/NewsContent/NewsInside";
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
        <div className="title title-header">Forex Commodity</div>
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
          <div className="title title-header-mobile">Forex Commodity</div>
        </div>
      </>
    );
  }
}

class ForexCommodityInside extends React.Component {
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

  // componentDidMount = () => {
  //   window.scroll(0, 0);
  // };
  componentDidMount = async () => {
    try {
      window.scroll(0, 0);
      await this.props.getNews("forex");
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
            <NewsForexCommodity
              img={news1}
              title="Pasar Saham Asia Tunggu Komentar Terkait Trade War "
              desc=" Pasar Saham Asia membuat kenaikan pada hari Senin
                        karena investor bersiap di minggu ini untukkemungkinan
                        komentar yang saling bertentangan mengenai perang
                        perdagangan China-AS, sementara kinerja yang unggul
                        dari data ekonomi AS baru-baru ini membuat dolar
                        menguat terhadap rekan-rekannya. Indeks MSCI dari
                        saham Asia Pasifik di luar Jepang melambung 0,26%,
                        setelah kehilangan 0,4% minggu lalu. Nikkei Jepang
                        menguat 0,8% di awal perdagangan, sementara saham
                        Australia naik 0,5%. Kontrak berjangka E-Mini untuk
                        S&P 500 bertambah 0,2%. Pada hari Sabtu, penasihat
                        keamanan nasional AS Robert O’Brien mengatakan
                        perjanjian perdagangan awal dengan China masih mungkin
                        dilakukan pada akhir tahun ini, tetapi memperingatkan
                        Washington tidak akan menutup mata terhadap apa yang
                        terjadi di Hong Kong. Komentar itu menambah
                        kekhawatiran bahwa tindakan keras China terhadap
                        protes anti-pemerintah di Hong Kong dapat semakin
                        memperumit pembicaraan. "
            />

            <Footer />
          </div>
        </>
      );
    }
    return (
      <>
        <div style={{ backgroundColor: "#1D1E1F" }}>
          <div
            className="team-1 "
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
          {/* <NewsTicker /> */}
          <div>
            {this.props.news.forex.map((item, index) => {
              return (
                <Link to="/forex-commodity-inside">
                  <NewsForexCommodity
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForexCommodityInside);

// export default ForexCommodityInside;
