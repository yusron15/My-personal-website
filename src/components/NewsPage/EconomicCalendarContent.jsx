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
  Table,
  Label,
  Input,
  Col
} from "reactstrap";
import TableBody from "../NewsContent/TableBody";

import NewsLetter from "../NewsLetter/NewsLetter";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/header-stockindex.png";
import Footer from "../Footers/Footer";
import "../../assets/css/main.css";
import Content from "../RelatedPost/Layout";
import BreakingNews from "../Landing/BreakingNews";
import canada from "../../assets/img/flag-canada.png";
import germany from "../../assets/img/flag-germany.png";
import span from "../../assets/img/flag-span.png";
import japan from "../../assets/img/flag-japan.png";
import singapore from "../../assets/img/flag-singapore.png";

class Blogs extends React.Component {
  state = {
    dataSelect: ""
  };
  render() {
    return (
      <>
        <div
          className="cd-section"
          style={{ backgroundColor: "#1D1E1F" }}
          id="blogs"
        >
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
              <div className="title title-header">Economic Calendar</div>
              {/* <BreakingNews /> */}
            </div>

            {/* <Container> */}
            <div
              className="cd-section "
              id="features"
              style={{ backgroundColor: "#1D1E1F" }}

              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <div className="features-3" style={{ paddingTop: 0 }}>
                <div>
                  <Container>
                    <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
                      <Label
                        style={{
                          color: "#FFFFFF",
                          fontSize: "18px",
                          marginRight: "10px",
                          marginLeft: "10px"
                        }}
                        for="Date"
                      >
                        Date
                      </Label>
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="10/06/2019"
                        style={{ width: "200px" }}
                      />
                      <Label
                        style={{
                          color: "#FFFFFF",
                          fontSize: "18px",
                          marginRight: "10px",
                          marginLeft: "10px"
                        }}
                        for="Time"
                      >
                        Time
                      </Label>
                      <Input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="10:05 AM"
                        style={{ width: "200px" }}
                      />
                    </Row>
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
                            backgroundColor: "#484D4F",
                            borderRadius: "5px"
                          }}
                        >
                          <td
                            colspan="6"
                            className="text-center title"
                            style={{ fontSize: "20px" }}
                          >
                            25 November 2019, Monday
                          </td>
                        </tr>
                      </thead>

                      <TableBody
                        time="7:00"
                        flag={canada}
                        currency="CAD"
                        event="BoC Governor Poloz Speech"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="7:00"
                        flag={japan}
                        currency="JPY"
                        event="Coincident Index"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={japan}
                        currency="JPY"
                        event="Leading Index"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={japan}
                        currency="JPY"
                        event="Coincident Index m/m"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={japan}
                        currency="JPY"
                        event="Leading Index m/m"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={singapore}
                        currency="SGD"
                        event="CPI y/y"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="15:00"
                        flag={span}
                        currency="EUR"
                        event="PPI y/y"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="16:30"
                        flag={germany}
                        currency="EUR"
                        event="Ifo Business Expectations"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />
                      {/* </Table>

            <Table
              responsive
              className="table-shopping"
              style={{ backgroundColor: "#484D4F", borderRadius: "5px" }}
            > */}
                      <thead>
                        <tr
                          style={{
                            backgroundColor: "#484D4F",
                            borderRadius: "5px"
                          }}
                        >
                          <td
                            colspan="6"
                            className="text-center title"
                            style={{ fontSize: "20px" }}
                          >
                            26 November 2019, Tuesday
                          </td>
                        </tr>
                      </thead>

                      <TableBody
                        time="7:00"
                        flag={canada}
                        currency="CAD"
                        event="BoC Governor Poloz Speech"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="7:00"
                        flag={japan}
                        currency="JPY"
                        event="Coincident Index"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={japan}
                        currency="JPY"
                        event="Leading Index"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={singapore}
                        currency="SGD"
                        event="Coincident Index m/m"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={span}
                        currency="EUR"
                        event="Leading Index m/m"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />

                      <TableBody
                        time="12:00"
                        flag={germany}
                        currency="EUR"
                        event="Leading Index m/m"
                        actual="101.1"
                        forecast="101"
                        previous="101"
                      />
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
}

export default Blogs;
