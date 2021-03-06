import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table,
  Label,
  Container,
  Row,
  Col,
  Input,
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
          <Col className="ml-auto mr-auto text-center">
            <h2 className="title " style={{ paddingTop: "50px" }}>
              Economic Calendar
            </h2>
            <div className="section-space" />
          </Col>

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
                <tr style={{ backgroundColor: "#484D4F", borderRadius: "5px" }}>
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
                <tr style={{ backgroundColor: "#484D4F", borderRadius: "5px" }}>
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
          <NewsLetter />
        </div>{" "}
      </>
    );
  }
}

export default EconomicCalendar;
