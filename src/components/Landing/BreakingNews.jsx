import React, { Component } from "react";
import Marquee from "react-smooth-marquee";
import { Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Up from "../../assets/img/green-triangle.png";
import Down from "../../assets/img/red-triangle.png";
import "../../assets/css/main.css";

import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
class BreakingNews extends Component {
  state = {
    dataSelect: "",
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div
        style={{
          height: "6vh",
          overflow: "hidden",
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
              // style={{
              //   backgroundColor: "transparent",
              //   // padding: 0,
              //   paddingLeft: "20px",
              //   color: "black"
              // }}
            >
              {/* <Select
                value="index"
                options={[
                  {
                    label: "KOMODITI",
                    value: "komoditi"
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
                      value: "komoditi"
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
              /> */}
              <Select
                styles={{
                  control: styles => ({
                    ...styles,
                    backgroundColor: "transparent",
                    borderColor: "none"
                  }),
                  option: () => ({
                    zIndex: 999
                  })
                }}
                options={[
                  {
                    label: "KOMODITI",
                    value: "komoditi"
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
                      value: "komoditi"
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
                // options={options}
              />
            </Col>
            <Col style={{ padding: 0 }}>
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
                    <img src={Down} /> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit
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
