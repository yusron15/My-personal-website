import React, { Component } from "react";
import Marquee from "react-smooth-marquee";
import { Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Up from "../../assets/img/green-triangle.png";
import Down from "../../assets/img/red-triangle.png";
import "../../assets/css/main.css";
class BreakingNews extends Component {
  render() {
    return (
      <div
        style={{
          height: "50px",
          backgroundColor: "rgba(29,30,31,1)"
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
                backgroundColor: "rgba(29,30,31,1)",
                zIndex: 9,
                paddingLeft: "6%",
                paddingTop: "5px"
              }}
            >
              {/* <div class="dropdown">
                <button class="dropbtn">KOMODITI</button>
                <div class="dropdown-content">
                  <Link to="#">INDEX</Link>
                  <Link to="#">FX</Link>
                </div>
              </div> */}
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                style={{ border: "none" }}
              >
                <option>KOMODITI</option>
                <option>INDEX</option>
                <option>FX</option>
              </Input>
              {/* KOMODITI */}
            </Col>
            <Col md="10">
              <marquee>
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
