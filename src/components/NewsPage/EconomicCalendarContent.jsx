import React from "react";
import moment from "moment";
import Iframe from "react-iframe";
import { connect } from "react-redux";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  FormText,
  Container,
  Row,
  Table,
  Label,
  Input,
  Col
} from "reactstrap";
import TableBody from "../NewsContent/TableBody";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import NewsLetter from "../NewsLetter/NewsLetter";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/header-economiccalendar.png";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/Layout";
import NewsTicker from "./NewsTicker";
import BreakingNews from "../../components/Landing/BreakingNews";
import { isMobile } from "react-device-detect";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import canada from "../../assets/img/flag-canada.png";
import germany from "../../assets/img/flag-germany.png";
import span from "../../assets/img/flag-span.png";
import japan from "../../assets/img/flag-japan.png";
import singapore from "../../assets/img/flag-singapore.png";
import { getNews, getContent } from "../../redux/ducks/actions";

import DatePicker from "react-datepicker";

class EconomicCalendar extends React.Component {
  state = {
    dataSelect: "",
    dataTabel: [],
    selectedDate: moment().format()
  };

  fetchDataEconomicCalendar = async date => {
    try {
      let countriesUrl =
        "http://restcountries.eu/rest/v2/all?fields=currencies;name;alpha2Code";
      // let url = `https://api.tradingeconomics.com/calendar/country/All/${date}/${date}?c=guest:guest&format=json`;
      let url = `https://api.tradingeconomics.com/calendar/country/All/${date}/${date}?c=guest:guest&format=json`;

      let result = await fetch(url);
      let countries = await fetch(countriesUrl);

      countries = await countries.json();
      result = await result.json();

      // console.log(result, countries);

      await this.setState({
        dataTabel: result.map(item => {
          let matchCountry = countries.filter(itemCt => {
            if (item.Country == "South Korea") {
              item.Country = "Korea (Republic of)";
            }
            return item.Country == itemCt.name;
          })[0];

          return {
            time: moment(item.Date).format("HH:mm"),
            flag:
              item.Country == "East Timor"
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/250px-Flag_of_East_Timor.svg.png"
                : `https://www.countryflags.io/${
                    matchCountry ? matchCountry.alpha2Code : "0"
                  }/flat/64.png`,
            currency:
              item.Country == "East Timor"
                ? "USD"
                : countries.filter(itemCt => {
                    if (item.Country == "South Korea") {
                      item.Country = "Korea (Republic of)";
                    }
                    return item.Country == itemCt.name;
                  })[0].currencies[0].code,
            event: item.Event,
            actual: item.Actual,
            forecast: item.Forecast,
            previous: item.Previous
          };
        })
      });
      // console.log(this.state.dataTabel, "result.json()");
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    try {
      let date = moment(this.state.selectedDate).format("YYYY-MM-DD");
      await this.fetchDataEconomicCalendar(date);
      await this.props.getContent("Berita", this.props.currentLang, true);
    } catch (error) {
      console.log(error);
    }
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="cd-section broken-white"
            //   style={{ backgroundColor: "#1D1E1F" }}
            id="blogs"
          >
            {/* ********* END BLOGS 5 ********* */}

            <div>
              <div
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.economicCalender
                      .image_background_mobile +
                    ")",
                  padding: 0
                }}
              >
                <div
                  className=" background-header-mobile"
                  style={{
                    padding: 0
                  }}
                >
                  <SidebarMobile />
                  <div className="title title-header-mobile">
                    {this.props.pageStore.economicCalender.Header}
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="subheader font-white"
                  >
                    {ReactHtmlParser(
                      this.props.pageStore.economicCalender.subheader
                    )}
                  </div>
                </div>
                <BreakingNews />
              </div>

              <div
                className="cd-section broken-white"
                id="features"
                //   style={{ backgroundColor: "#1D1E1F" }}

                // style={{ backgroundColor: "#D4D4D4" }}
              >
                <div className="features-3" style={{ paddingTop: 0 }}>
                  <div>
                    <Container>
                      <Iframe
                        url="https://www.mql5.com/en/economic-calendar/widget?mode=2&amp;utm_source=news.topgrowthfutures.co.id"
                        width="100%"
                        height="900px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                      />
                    </Container>
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
    return (
      <>
        <div
          className="cd-section broken-white"
          //   style={{ backgroundColor: "#1D1E1F" }}
          id="blogs"
        >
          {/* ********* END BLOGS 5 ********* */}

          <div>
            <div
              className="team-1"
              style={{
                backgroundImage:
                  "url(" +
                  this.props.pageStore.economicCalender.background_image +
                  ")",
                padding: 0
              }}
            >
              <div
                className="team-1"
                style={{
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div className="title title-header">
                  {this.props.pageStore.economicCalender.Header}
                </div>
                <div
                  style={{ textAlign: "center", marginBottom: "5%" }}
                  className="subheader font-white"
                >
                  {ReactHtmlParser(
                    this.props.pageStore.economicCalender.subheader
                  )}
                </div>
              </div>
              <BreakingNews />
            </div>

            {/* <Container> */}
            <div
              className="cd-section broken-white"
              id="features"
              //   style={{ backgroundColor: "#1D1E1F" }}

              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <div className="features-3" style={{ paddingTop: 0 }}>
                <div>
                  <Container style={{ paddingTop: 20 }}>
                    <Iframe
                      url="https://www.mql5.com/en/economic-calendar/widget?mode=2&amp;utm_source=news.topgrowthfutures.co.id"
                      width="100%"
                      height="900px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                    />
                  </Container>
                </div>
              </div>
            </div>
            {/* </Container> */}
          </div>
          <NewsLetter />
          <Footer />
          {/* ********* END BLOGS 5 ********* */}
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  news: state.newsStore.news,
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getNews: type => dispatch(getNews(type)),
  getContent: (section, lang, toggle) =>
    dispatch(getContent(section, lang, toggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(EconomicCalendar);
