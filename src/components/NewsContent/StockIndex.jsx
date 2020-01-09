import React from "react";

import ReadMoreReact from "read-more-react";

import NewsLetter from "../NewsLetter/NewsLetter";
import RelatedPost from "../RelatedPost/Content";
import Content from "../RelatedPost/Layout";
import Comment from "../Comments/Comment";

import news1 from "../../assets/img/newscontent1.png";
import news2 from "../../assets/img/newscontent2.png";
import news3 from "../../assets/img/newscontent3.png";
import news4 from "../../assets/img/newscontent4.png";
import news5 from "../../assets/img/newscontent5.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

class StockIndex extends React.Component {
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
                title="Pasar Saham Asia Tunggu Komentar Terkait Trade War"
                posted="Posted by Ronald Pardede | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Pasar Saham Asia membuat kenaikan pada hari Senin karena investor bersiap di minggu ini untuk kemungkinan komentar yang saling bertentangan mengenai perang perdagangan China-AS, sementara kinerja yang unggul dari data ekonomi AS baru-baru ini membuat dolar menguat terhadap rekan-rekannya.

                Indeks MSCI dari saham Asia Pasifik di luar Jepang melambung 0,26%, setelah kehilangan 0,4% minggu lalu.
                
                Nikkei Jepang menguat 0,8% di awal perdagangan, sementara saham Australia naik 0,5%. Kontrak berjangka E-Mini untuk S&P 500 bertambah 0,2%.
                
                Pada hari Sabtu, penasihat keamanan nasional AS Robert O’Brien mengatakan perjanjian perdagangan awal dengan China masih mungkin dilakukan pada akhir tahun ini, tetapi memperingatkan Washington tidak akan menutup mata terhadap apa yang terjadi di Hong Kong.
                
                Komentar itu menambah kekhawatiran bahwa tindakan keras China terhadap protes anti-pemerintah di Hong Kong dapat semakin memperumit pembicaraan."
              />

              <Content
                image={news2}
                title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="SoftBank Group Corp minggu ini akan meluncurkan penawaran tender yang telah disepakati sebelumnya sebanyak $ 3 miliar saham WeWork, termasuk hingga $ 970 juta yang dimili..."
              />

              <Content
                image={news3}
                title="Pasar Saham Asia Pulih Dari Level Rendah"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan tat.."
              />

              <Content
                image={news4}
                title="China Undang AS Untuk Bicara di Beijing"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan tat.."
              />

              <Content
                image={news5}
                title="UBS : Pasar Saham Cina Masih Solid Di Tengah Perlambatan Pertumbuhan"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Meskipun laju pertumbuhan di Cina mengalami perlambatan di tengah perang dagang yang masih berlangsung dengan AS, namun raksasa di sektor wealth management asal Swiss, UB..."
              />
            </div>
          </div>
          <NewsLetter />
        </div>{" "}
      </>
    );
  }
}

export default StockIndex;
