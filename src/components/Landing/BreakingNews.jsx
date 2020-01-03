import React, { Component } from "react";
import Marquee from "react-smooth-marquee";
import { Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Up from "../../assets/img/green-triangle.png";
import Down from "../../assets/img/red-triangle.png";
import "../../assets/css/main.css";

import Select from "react-select";

class BreakingNews extends Component {
  state = {
    dataSelect: ""
  };
  render() {
    return (
      <div
        style={{
          height: "6vh",
          backgroundColor: "transparent"
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
                backgroundColor: "transparent",
                padding: 0,
                paddingLeft: 10,
                paddingRight: 10,
                color: "black"
              }}
            >
              <Select
                value="index"
                options={[
                  {
                    label: "KOMODITI",
                    value: "komuditi"
                  },
                  {
                    label: "INDEX",
                    value: "index"
                  },
                  {
                    label: "FX",
                    value: "fx"
                  }
                ]}
                value={this.state.dataSelect}
                onChange={async data => {
                  await this.setState({
                    dataSelect: data
                  });
                  let dataSelect = [
                    {
                      label: "KOMODITI",
                      value: "komuditi"
                    },
                    {
                      label: "INDEX",
                      value: "index"
                    },
                    {
                      label: "FX",
                      value: "fx"
                    }
                  ];
                  return dataSelect.filter(
                    item => this.state.dataSelect.value === item.value
                  )[0];
                }}
              />
            </Col>
            <Col md="10">
              <marquee scrollamount="5">
                <Row
                  style={{
                    paddingTop: "1%"
                  }}
                >
                  <div>
                    <img src={Up} /> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit
                  </div>

                  <div>
                    <img src={Down} style={{ marginLeft: "50px" }} /> Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit
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

export default BreakingNews;
