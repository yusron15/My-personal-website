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
  Table
} from "reactstrap";

import NewsLetter from "../NewsLetter/NewsLetter";

import Layout from "./Layout";

import news2 from "../../assets/img/newscontent2.png";
import news3 from "../../assets/img/newscontent3.png";
import news4 from "../../assets/img/newscontent4.png";
import "../../assets/css/main.css";

class Content extends React.Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Layout
              image={news2}
              title="SoftBank Lanjutkan Penawaran Tender Saham WeWork"
              posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
              description="SoftBank Group Corp minggu ini akan meluncurkan penawaran tender yang telah disepakati sebelumnya sebanyak $ 3 miliar saham WeWork, termasuk hingga $ 970 juta yang dimili..."
            />

            <Layout
              image={news3}
              title="Pasar Saham Asia Pulih Dari Level Rendah"
              posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
              description="Aktivitas pabrik Jepang menyusut untuk bulan ketujuh berturut-turut pada bulan November, karena permintaan domestik dan ekspor tetap dalam lesu sehingga memperkuat tantan..."
            />

            <Layout
              image={news4}
              title="China Undang AS Untuk Bicara di Beijing"
              posted="Posted by Aris Nugroho | Jum’at 22 November 2019 | 0 comments | 3 views"
              description="Kontrak Futures AS turun sedikit karena ketegangan perdagangan tetap menjadi fokus setelah laporan bahwa China telah mengundang Washington untuk melakukan pembicaraan tat.."
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default Content;
