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

import NewsLetter from "../NewsLetter/NewsLetter";
import RelatedPost from "../RelatedPost/Content";
import Content from "../RelatedPost/Layout";
import Comment from "../Comments/Comment";

import fc1 from "../../assets/img/fc1.png";
import fc2 from "../../assets/img/fc2.png";
import fc5 from "../../assets/img/fc5.png";
import fc3 from "../../assets/img/fc3.png";
import fc4 from "../../assets/img/fc4.png";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import "../../assets/css/main.css";

class ForexCommodity extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section"
          id="features"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          <div className="features-3">
            <div>
              <Content
                image={fc1}
                title="Minyak Jatuh Disebabkan Data Industri China Yang Lemah"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Presiden Bank Sentral Eropa Christine Lagarde menyerukan bauran kebijakan baru. Ia mengatakan investasi publik harus ditingkatkan untuk meringankan beban pada stimulus moneter dan memastikan kawasan itu dapat berkembang di dunia yang tidak pasti.

                Dalam pidatonya yang pertama, tiga minggu setelah menjabat, kepala ECB yang baru mengatakan lembaganya akan terus mendukung ekonomi zona euro. Tetapi dia juga mengatakan kebijakan fiskal adalah elemen kunci untuk mengatasi dua tantangan utama yang dihadapi blok euro: perubahan sifat perdagangan global, dan penurunan pertumbuhan domestik. Beberapa menit setelah dia selesai, data baru menunjukkan pelambatan saat ini memburuk."
              />

              <Content
                image={fc4}
                title="Dolar Masih Bergerak Sempit Pertahankan Penguatan"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Dolar mempertahankan kenaikan semalam pada hari Jumat ini, karena investor berpegang teguh pada safe-haven menunggu perkembangan dalam negosiasi perdagangan China –..."
              />

              <Content
                image={fc5}
                title="PMI: Aktivitas Manufaktur Jepang Menyusut Untuk Bulan Ketujuh, Meningkatkan Kekhawatiran Ekonomi"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Aktivitas pabrik Jepang menyusut untuk bulan ketujuh berturut-turut pada bulan November, karena permintaan domestik dan ekspor tetap dalam lesu sehingga memperkuat tantan..."
              />

              <Content
                image={fc3}
                title="Inflasi Konsumen Jepang Tumbuh Moderat Meskipun Ada Kenaikan Pajak"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Inflasi konsumen inti tahunan Jepang naik tipis hanya pada bulan Oktober meskipun ada dorongan dari kenaikan pajak penjualan selama bulan tersebut, menunjukkan sentimen r..."
              />

              <Content
                image={fc2}
                title="Yen Menguat Seiring Permintaan Safe Haven Atas Kekhawatiran Hubungan AS dan China"
                posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
                description="Mata uang yen Jepang menguat terhadap dolar pada hari Kamis setelah sumber yang dekat dengan Gedung Putih mengatakan kepada Reuters bahwa kesepakatan perdagangan AS-China..."
              />
            </div>
          </div>
          <NewsLetter />
        </div>{" "}
      </>
    );
  }
}

export default ForexCommodity;
