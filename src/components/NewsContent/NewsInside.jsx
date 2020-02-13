import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";

// reactstrap components
import {
  Badge,
  Button,
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  Card,
  Table,
  Input,
  Media,
  UncontrolledTooltip
} from "reactstrap";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import NewsLetter from "../NewsLetter/NewsLetter";
import RelatedPost from "../RelatedPost/Content";
import Content from "../RelatedPost/Layout";
import Comment from "../Comments/Comment";
import ReadMoreReact from "read-more-react";
// import Comment from "../../components/Comments/Comment";
import { getNews } from "../../redux/ducks/actions";
import news1 from "../../assets/img/newscontent1.png";
import news2 from "../../assets/img/newscontent2.png";
import news3 from "../../assets/img/newscontent3.png";
import news4 from "../../assets/img/newscontent4.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

const textTitle = {
  textAlign: "center",
  fontStyle: "Helvetica Bold",
  fontSize: "1.8rem",
  fontWeight: "bold",
  color: "white"
};

const textContent = {
  textAlign: "left",
  fontStyle: "Helvetica Bold",
  margin: 0,
  position: "absolute",
  top: "50%",
  fontSize: "1rem",
  msTransform: "translateY(-50%)",
  transform: "translateY(-50%)"
};

const textContentMobile = {
  textAlign: "justify",
  fontStyle: "Helvetica Bold",
  margin: 0,
  top: "50%",
  fontSize: "1rem",
  margin: "0 20px 0 20px"
};

class NewsInside extends React.Component {
  async componentDidMount() {
    try {
      window.scroll(0, 0);
      await this.props.getNews("stock");
    } catch (error) {
      console.log(error);
    }
  }

  renderContent = () => {
    const { img, title, posted, desc, imgprofile, comment } = this.props;
    if (isMobile) {
      return (
        <>
          <div className="cd-section broken-white" id="features">
            {/* ********* FEATURES 3 ********* */}
            <div className="features-3">
              <Container fluid>
                <Row>
                  <Col sm={{ size: 10, order: 2, offset: 1 }}>
                    <Row>
                      <Col lg="4">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img alt="..." className="img rounded" src={img} />
                          </a>
                        </div>
                      </Col>
                      <Col lg="8">
                        <div style={textContentMobile}>
                          <div
                            style={{ color: "black" }}
                            className="title-content"
                          >
                            {title}
                          </div>
                          <div
                            className="text-posted font-black tag-space"
                            style={{ color: "black" }}
                          >
                            {posted}
                          </div>

                          <p style={{ color: "black" }}>{desc}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
              {/* <Comment /> */}
              <h3 className="title text-center font-black">Related Post</h3>

              <div style={{ marginTop: "20px" }}>
                <Content
                  image={news2}
                  title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
                  posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                  description="  Pasar Saham Asia membuat kenaikan pada hari Senin  karena investor bersiap di minggu ini untukkemungkinan komentar yang saling bertentangan mengenai perang perdagangan China-AS, sementara kinerja yang unggul dari data ekonomi AS baru-baru ini membuat dolar menguat terhadap rekan-rekannya.  Indeks MSCI dari saham Asia Pasifik di luar Jepang  melambung 0,26%, setelah kehilangan 0,4% minggu lalu. Nikkei Jepang menguat 0,8% di awal perdagangan,  sementara saham Australia naik 0,5%. Kontrak berjangka E-Mini untuk S&P 500 bertambah 0,2%. Pada hari Sabtu, penasihat keamanan nasional AS Robert O’Brien mengatakan perjanjian perdagangan awal dengan China masih mungkin dilakukan pada akhir tahun ini, tetapi memperingatkan Washington tidak akan menutup mata terhadap apa yang terjadi di Hong Kong. Komentar itu menambah kekhawatiran bahwa tindakan keras China terhadap protes anti-pemerintah di Hong Kong dapat semakin memperumit pembicaraan."
                />

                <Content
                  image={news3}
                  title="Pasar Saham Asia Pulih Dari Level Rendah"
                  posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                  description="  Pasar Saham Asia membuat kenaikan pada hari Senin  karena investor bersiap di minggu ini untukkemungkinan komentar yang saling bertentangan mengenai perang perdagangan China-AS, sementara kinerja yang unggul dari data ekonomi AS baru-baru ini membuat dolar menguat terhadap rekan-rekannya.  Indeks MSCI dari saham Asia Pasifik di luar Jepang  melambung 0,26%, setelah kehilangan 0,4% minggu lalu. Nikkei Jepang menguat 0,8% di awal perdagangan,  sementara saham Australia naik 0,5%. Kontrak berjangka E-Mini untuk S&P 500 bertambah 0,2%. Pada hari Sabtu, penasihat keamanan nasional AS Robert O’Brien mengatakan perjanjian perdagangan awal dengan China masih mungkin dilakukan pada akhir tahun ini, tetapi memperingatkan Washington tidak akan menutup mata terhadap apa yang terjadi di Hong Kong. Komentar itu menambah kekhawatiran bahwa tindakan keras China terhadap protes anti-pemerintah di Hong Kong dapat semakin memperumit pembicaraan."
                />

                <Content
                  image={news4}
                  title="China Undang AS Untuk Bicara di Beijing"
                  posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                  description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan tat.."
                />
              </div>
            </div>
            <NewsLetter />

            {/* ********* END FEATURES 3 ********* */}
          </div>{" "}
        </>
      );
    }
    return (
      <>
        <div
          className="cd-section broken-white"
          id="features"
          // style={{ backgroundColor: "#1D1E1F" }}
        >
          {/* ********* FEATURES 3 ********* */}
          <div className="features-3">
            <Container fluid>
              <Row>
                <Col
                  sm={{ size: 10, order: 2, offset: 1 }}
                  // style={{ marginTop: "50px" }}
                >
                  <Row>
                    <Col lg="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img alt="..." className="img rounded" src={img} />
                        </a>
                      </div>
                    </Col>
                    <Col lg="8">
                      <div style={textContent}>
                        <div
                          style={{ color: "black" }}
                          className="title-content"
                        >
                          {title}
                          {/* Pasar Saham Asia Tunggu Komentar Terkait Trade War */}
                        </div>
                        <div
                          className="text-posted font-black tag-space"
                          style={{ color: "black" }}
                        >
                          {posted}
                        </div>
                        <p style={{ color: "black" }}>{desc}</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            {/* <Comment /> */}
            {/* <h3 className="title text-center font-black">Related Post</h3> */}

            {/* <div style={{ marginTop: "20px" }}>
              <Content
                image={news2}
                title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="  Pasar Saham Asia membuat kenaikan pada hari Senin  karena investor bersiap di minggu ini untukkemungkinan komentar yang saling bertentangan mengenai perang perdagangan China-AS, sementara kinerja yang unggul dari data ekonomi AS baru-baru ini membuat dolar menguat terhadap rekan-rekannya.  Indeks MSCI dari saham Asia Pasifik di luar Jepang  melambung 0,26%, setelah kehilangan 0,4% minggu lalu. Nikkei Jepang menguat 0,8% di awal perdagangan,  sementara saham Australia naik 0,5%. Kontrak berjangka E-Mini untuk S&P 500 bertambah 0,2%. Pada hari Sabtu, penasihat keamanan nasional AS Robert O’Brien mengatakan perjanjian perdagangan awal dengan China masih mungkin dilakukan pada akhir tahun ini, tetapi memperingatkan Washington tidak akan menutup mata terhadap apa yang terjadi di Hong Kong. Komentar itu menambah kekhawatiran bahwa tindakan keras China terhadap protes anti-pemerintah di Hong Kong dapat semakin memperumit pembicaraan."
              />

              <Content
                image={news3}
                title="Pasar Saham Asia Pulih Dari Level Rendah"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="  Pasar Saham Asia membuat kenaikan pada hari Senin  karena investor bersiap di minggu ini untukkemungkinan komentar yang saling bertentangan mengenai perang perdagangan China-AS, sementara kinerja yang unggul dari data ekonomi AS baru-baru ini membuat dolar menguat terhadap rekan-rekannya.  Indeks MSCI dari saham Asia Pasifik di luar Jepang  melambung 0,26%, setelah kehilangan 0,4% minggu lalu. Nikkei Jepang menguat 0,8% di awal perdagangan,  sementara saham Australia naik 0,5%. Kontrak berjangka E-Mini untuk S&P 500 bertambah 0,2%. Pada hari Sabtu, penasihat keamanan nasional AS Robert O’Brien mengatakan perjanjian perdagangan awal dengan China masih mungkin dilakukan pada akhir tahun ini, tetapi memperingatkan Washington tidak akan menutup mata terhadap apa yang terjadi di Hong Kong. Komentar itu menambah kekhawatiran bahwa tindakan keras China terhadap protes anti-pemerintah di Hong Kong dapat semakin memperumit pembicaraan."
              />

              <Content
                image={news4}
                title="China Undang AS Untuk Bicara di Beijing"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan tat.."
              />
            </div> */}
          </div>
          {/* <NewsLetter /> */}

          {/* ********* END FEATURES 3 ********* */}
        </div>{" "}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsInside);
