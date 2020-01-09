import React, { Component } from "react";
import Marquee from "react-smooth-marquee";
import { Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Up from "../../assets/img/green-triangle.png";
import Down from "../../assets/img/red-triangle.png";
import "../../assets/css/main.css";

import Select from "react-select";

class NewsTicker extends Component {
  state = {
    dataSelect: ""
  };
  render() {
    return (
      <div
        style={{
          height: "6vh",
          overflow: "auto",
          backgroundColor: "#1E1E1E"
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: "1rem",
            verticalAlign: "middle"
          }}
        >
          <Row>
            <Col
              md="2"
              style={{
                backgroundColor: "#1E1E1E",
                padding: "12px 0 15px 55px",
                // paddingLeft: "20px",
                color: "#494949",
                fontWeight: "bold"
              }}
            >
              BREAKING NEWS
            </Col>
            <Col style={{ padding: 0 }}>
              <marquee scrollamount="5">
                <Row
                  style={{
                    paddingTop: "1%"
                  }}
                >
                  <div>
                    > Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>

                  <div>
                    > Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </div>
                </Row>
              </marquee>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default NewsTicker;
