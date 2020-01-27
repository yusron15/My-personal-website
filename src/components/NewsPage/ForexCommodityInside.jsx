import React from "react";
import bg from "../../assets/img/header-forexcommodity.png";

import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import NewsTicker from "./NewsTicker";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import Comment from "../../components/Comments/Comment";
import Content from "../../components/NewsPage/Content.jsx";
import NewsStockIndex from "../../components/NewsContent/NewsStockIndex.jsx";
// import NewsForexCommodity from "../../components/NewsContent/NewsForexCommodity";
import NewsForexCommodity from "../../components/NewsContent/NewsInside";
import { isMobile } from "react-device-detect";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import NewsMarketOutlook from "../../components/NewsContent/NewsMarketOutlook";
import EconomicCalendar from "../../components/NewsContent/EconomicCalendar";
import EconomicCalendarInside from "../../components/NewsContent/EconomicCalendarInside";
import StockIndex from "../../components/NewsContent/StockIndex.jsx";
import MarketOutlook from "../../components/NewsContent/MarketOutlook.jsx";
// import NewsTicker from "../../components/NewsPage/NewsTicker.jsx";
import ForexCommodity from "../../components/NewsContent/ForexCommodity";
import Footer from "../../components/Footers/Footer.jsx";
import news1 from "../../assets/img/newscontent1.png";

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

  componentDidMount = () => {
    window.scroll(0, 0);
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div style={{ backgroundColor: "#1D1E1F" }}>
            <div
              className="team-1 background-header-mobile"
              style={{
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <SidebarMobile />

              <div className="title title-header-mobile">Forex Commodity </div>
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
            className="team-1 background-header"
            style={{
              backgroundImage: `url(${bg})`,
              padding: 0
            }}
          >
            <BlurryNavbar />

            <div className="title title-header">Forex Commodity </div>
          </div>
          {/* <BlurryNavbar /> */}
          <ColoredNavbar location={{ ...this.props.location }} />
          <NewsTicker />
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
  };

  render() {
    return this.renderContent();
  }
}

export default ForexCommodityInside;
