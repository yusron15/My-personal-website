import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";

import { getNews } from "../../redux/ducks/actions";

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
import NewsTicker from "./NewsTicker";
import BreakingNews from "../../components/Landing/BreakingNews";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/header-marketoutlook.png";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/LayoutMarketOutlook";
import news1 from "../../assets/img/marketoutlook1.png";
import news2 from "../../assets/img/marketoutlook2.png";
import news3 from "../../assets/img/marketoutlook3.png";
import news4 from "../../assets/img/marketoutlook4.png";
import news5 from "../../assets/img/makretoutlook5.png";

class Blogs extends React.Component {
  state = {
    dataSelect: ""
  };

  componentDidMount = async () => {
    try {
      window.scroll(0, 0);
      await this.props.getNews("market");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props.news.market, "this.props.news.market");
    return (
      <>
        <div className="cd-section broken-white" id="blogs">
          {/* ********* END BLOGS 5 ********* */}

          <div>
            <div
              className="team-1 background-header"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />
              <div className="title title-header">Market Outlook</div>
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
                  {this.props.news.market.map((item, index) => {
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

                  <Link to="/market-outlook-inside">
                    <Content
                      image={news1}
                      title="Minyak Menanjak Ditengah Harapan Kemajuan Perjanjian Perdagangan AS-China"
                      posted="Posted by Ronald Pardede | Jum’at 22 November 2019 | 0 comments | 3 views"
                      description="Harga minyak naik pada hari Selasa di tengah harapan kemajuan menuju perjanjian perdagangan antara Amerika Serikat dan China, pengguna minyak terbesar dunia, dan prediksi"
                      data={{}}
                    />
                  </Link>
                  <Link to="/market-outlook-inside">
                    <Content
                      image={news2}
                      title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
                      posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                      description="SoftBank Group Corp minggu ini akan meluncurkan penawaran tender yang telah disepakati sebelumnya sebanyak $ 3 miliar saham WeWork, termasuk hingga $ 970 juta yang dimili"
                    />
                  </Link>
                  <Link to="/market-outlook-inside">
                    <Content
                      image={news3}
                      title="Pasar Saham Asia Pulih Dari Level Rendah"
                      posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                      description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan"
                    />
                  </Link>
                  <Link to="/market-outlook-inside">
                    <Content
                      image={news4}
                      title="China Undang AS Untuk Bicara di Beijing"
                      posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                      description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan"
                    />
                  </Link>
                  <Link to="/market-outlook-inside">
                    <Content
                      image={news5}
                      title="UBS : Pasar Saham Cina Masih Solid Di Tengah Perlambatan Pertumbuhan"
                      posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                      description="Meskipun laju pertumbuhan di Cina mengalami perlambatan di tengah perang dagang yang masih berlangsung dengan AS, namun raksasa di sektor wealth management asal Swiss"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* </Container> */}
          </div>
          <NewsLetter />
          <Footer />
          {/* ********* END BLOGS 5 ********* */}
        </div>{" "}
      </>
    );
  }
}

const mapStateToProps = state => ({
  news: state.newsStore.news
});

const mapDispatchToProps = dispatch => ({
  getNews: type => dispatch(getNews(type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
