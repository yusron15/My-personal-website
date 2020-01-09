import React from "react";

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
import bg from "../../assets/img/header-forexcommodity.png";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/Layout";
import NewsTicker from "./NewsTicker";

import fc1 from "../../assets/img/fc1.png";
import fc2 from "../../assets/img/fc2.png";
import fc5 from "../../assets/img/fc5.png";
import fc3 from "../../assets/img/fc3.png";
import fc4 from "../../assets/img/fc4.png";

class Blogs extends React.Component {
  state = {
    dataSelect: ""
  };
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  render() {
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
              <div className="title title-header">Forex Commodity</div>
            </div>
            <NewsTicker />

            {/* <Container> */}
            <div
              className="cd-section broken-white"
              id="features"
              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <div className="features-3" style={{ paddingTop: 0 }}>
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

export default Blogs;
