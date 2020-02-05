import React from "react";
import moment from "moment";

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

import canada from "../../assets/img/flag-canada.png";
import germany from "../../assets/img/flag-germany.png";
import span from "../../assets/img/flag-span.png";
import japan from "../../assets/img/flag-japan.png";
import singapore from "../../assets/img/flag-singapore.png";

import DatePicker from "react-datepicker";

class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTabel: [],
      date: "",
      time: ""
    };
  }

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
        <div className="title title-header">Economic Calendar</div>
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
          <div className="title title-header-mobile">Economic Calendar</div>
        </div>
      </>
    );
  }
}

class EconomicCalendar extends React.Component {
  state = {
    dataSelect: "",
    dataTabel: []
  };

  async componentDidMount() {
    try {
      let countriesUrl =
        "http://restcountries.eu/rest/v2/all?fields=currencies;name;alpha2Code";
      let url = `https://api.tradingeconomics.com/calendar/country/All/2016-12-02/2016-12-03?c=guest:guest&format=json`;

      let result = await fetch(url);
      let countries = await fetch(countriesUrl);

      countries = await countries.json();
      result = await result.json();

      // console.log(result, countries);

      await this.setState({
        dataTabel: result.map(item => {
          let matchCountry = countries.filter(itemCt => {
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
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                <HeaderContentMobile />
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
                    <Container>
                      <Col style={{ marginTop: "30px", marginBottom: "30px" }}>
                        <Row>
                          <Col md={6}>
                            {/* <FormGroup>
                              <Label>My Date Picker</Label>
                            </FormGroup> */}
                            <DatePicker
                              id="example-datepicker"
                              value={this.state.value}
                              onChange={(v, f) => {
                                console.log(v, f);
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Table
                        responsive
                        className="table-shopping"
                        style={{
                          backgroundColor: "#2C2F31",
                          borderRadius: "5px",
                          borderCollapse: "inherit"
                          // borderWidth: "0.2px"
                        }}
                      >
                        <thead>
                          <tr>
                            <th className="text-center">Time</th>
                            <th className="text-center">Currency</th>
                            <th>Event</th>
                            <th className="text-center">Actual</th>
                            <th className="text-center">Forecast</th>
                            <th className="text-center">Previous</th>
                          </tr>
                          <tr
                            style={{
                              // backgroundColor: "#484D4F",
                              backgroundColor: "#19447E",
                              borderRadius: "5px"
                            }}
                          >
                            <td
                              colspan="6"
                              className="text-center title"
                              style={{
                                fontSize: "20px",
                                backgroundColor: "#19447E"
                              }}
                            >
                              25 November 2019, Monday
                            </td>
                          </tr>
                        </thead>

                        {this.state.dataTabel.map(item => (
                          <TableBody {...item} />
                        ))}
                      </Table>
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
                backgroundImage: `url(${bg})`,
                padding: 0
              }}
            >
              <HeaderContent location={{ ...this.props.location }} />
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
                  <Container>
                    {/* <Row style={{ marginTop: "30px", marginBottom: "30px" }}> */}
                    <FormGroup
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 20
                      }}
                    >
                      <Label
                        style={{
                          color: "black",
                          fontSize: "18px",
                          margin: 0,
                          marginRight: 10
                        }}
                        for="Date"
                      >
                        Date
                      </Label>
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        defaultValue={new Date()}
                        placeholder="10/06/2019"
                        onChange={date => {
                          console.log(date.target.value);
                        }}
                        style={{ width: "200px", color: "black" }}
                      />
                    </FormGroup>
                    {/* </Row> */}

                    <Table
                      responsive
                      className="table-shopping"
                      style={{
                        backgroundColor: "#2C2F31",
                        borderRadius: "5px",
                        borderCollapse: "inherit"
                        // borderWidth: "0.2px"
                      }}
                    >
                      <thead>
                        <tr>
                          <th className="text-center">Time</th>
                          <th className="text-center">Currency</th>
                          <th>Event</th>
                          <th className="text-center">Actual</th>
                          <th className="text-center">Forecast</th>
                          <th className="text-center">Previous</th>
                        </tr>
                        <tr
                          style={{
                            // backgroundColor: "#484D4F",
                            backgroundColor: "#19447E",
                            borderRadius: "5px"
                          }}
                        >
                          <td
                            colspan="6"
                            className="text-center title"
                            style={{
                              fontSize: "20px",
                              backgroundColor: "#19447E"
                            }}
                          >
                            25 November 2019, Monday
                          </td>
                        </tr>
                      </thead>

                      {this.state.dataTabel.map(item => (
                        <TableBody {...item} />
                      ))}
                    </Table>
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
  };

  render() {
    return this.renderContent();
  }
}

export default EconomicCalendar;
