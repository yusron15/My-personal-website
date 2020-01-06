/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route } from "react-router-dom";
import ReadMoreReact from "read-more-react";

import NewsMarketOutlook from "./NewsMarketOutlook";
import NewsLetter from "../NewsLetter/NewsLetter";
import RelatedPost from "../RelatedPost/Content";
import Content from "../RelatedPost/Layout";
import Comment from "../Comments/Comment";

import news1 from "../../assets/img/marketoutlook1.png";
import news2 from "../../assets/img/marketoutlook2.png";
import news3 from "../../assets/img/marketoutlook3.png";
import news4 from "../../assets/img/marketoutlook4.png";
import news5 from "../../assets/img/makretoutlook5.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

class MarketOutlook extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section broken-white"
          id="features"
          // style={{ backgroundColor: "#D4D4D4" }}
        >
          <div className="features-3">
            <div>
              <Content
                image={news1}
                title="Minyak Menanjak Ditengah Harapan Kemajuan Perjanjian Perdagangan AS-China"
                posted="Posted by Ronald Pardede | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Harga minyak naik pada hari Selasa di tengah harapan kemajuan menuju perjanjian perdagangan antara Amerika Serikat dan China, pengguna minyak terbesar dunia, dan prediksi"
                data={{}}
              />

              <Content
                image={news2}
                title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="SoftBank Group Corp minggu ini akan meluncurkan penawaran tender yang telah disepakati sebelumnya sebanyak $ 3 miliar saham WeWork, termasuk hingga $ 970 juta yang dimili"
              />

              <Content
                image={news3}
                title="Pasar Saham Asia Pulih Dari Level Rendah"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan"
              />

              <Content
                image={news4}
                title="China Undang AS Untuk Bicara di Beijing"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan"
              />

              <Content
                image={news5}
                title="UBS : Pasar Saham Cina Masih Solid Di Tengah Perlambatan Pertumbuhan"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Meskipun laju pertumbuhan di Cina mengalami perlambatan di tengah perang dagang yang masih berlangsung dengan AS, namun raksasa di sektor wealth management asal Swiss"
              />
            </div>
          </div>
          <NewsLetter />
        </div>{" "}
      </>
    );
  }
}

export default MarketOutlook;
