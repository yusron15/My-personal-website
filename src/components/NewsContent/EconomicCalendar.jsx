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
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  ButtonGroup
} from "reactstrap";

import TableBody from "./TableBody";
import NewsLetter from "../NewsLetter/NewsLetter";

import canada from "../../assets/img/flag-canada.png";
import germany from "../../assets/img/flag-germany.png";
import span from "../../assets/img/flag-span.png";
import japan from "../../assets/img/flag-japan.png";
import singapore from "../../assets/img/flag-singapore.png";

import "../../assets/css/main.css";

class EconomicCalendar extends React.Component {
  render() {
    return (
      <>
        <div
          className="cd-section"
          id="features"
          style={{ backgroundColor: "#1D1E1F" }}
        >
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title mb-4" style={{ paddingTop: "50px" }}>
                Economic Calendar
              </h2>
              <div className="section-space" />
            </Col>
          </Row>

          <Container>
            <Table
              responsive
              className="table-shopping"
              style={{ backgroundColor: "transparent", borderRadius: "5px" }}
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
                <tr style={{ backgroundColor: "#484D4F", borderRadius: "5px" }}>
                  <td colspan="6" className="text-center title mb-4">
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
                currency="CAD"
                event="Coincident Index"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={japan}
                currency="CAD"
                event="Leading Index"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={japan}
                currency="CAD"
                event="Coincident Index m/m"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={japan}
                currency="CAD"
                event="Leading Index m/m"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={singapore}
                currency="CAD"
                event="CPI y/y"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="15:00"
                flag={span}
                currency="CAD"
                event="PPI y/y"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="16:30"
                flag={germany}
                currency="CAD"
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
                <tr>
                  <td
                    colspan="6"
                    className="text-center"
                    style={{ backgroundColor: "#484D4F", borderRadius: "5px" }}
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
                currency="CAD"
                event="Coincident Index"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={japan}
                currency="CAD"
                event="Leading Index"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={singapore}
                currency="CAD"
                event="Coincident Index m/m"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={span}
                currency="CAD"
                event="Leading Index m/m"
                actual="101.1"
                forecast="101"
                previous="101"
              />

              <TableBody
                time="12:00"
                flag={germany}
                currency="CAD"
                event="Leading Index m/m"
                actual="101.1"
                forecast="101"
                previous="101"
              />
            </Table>
          </Container>
          <NewsLetter />
        </div>{" "}
      </>
    );
  }
}

export default EconomicCalendar;
