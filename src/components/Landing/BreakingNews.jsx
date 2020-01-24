import React, { Component } from "react";
import Marquee from "react-smooth-marquee";
import { Input } from "reactstrap";
import {
  Badge,
  Button,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";
import Up from "../../assets/img/green-triangle.png";
import Down from "../../assets/img/red-triangle.png";
import "../../assets/css/main.css";

import Select from "react-select";

const tabItem = {
  fontSize: "0.8rem",
  paddingLeft: "5px",
  height: "30px"
};

const tabContent = {
  backgroundColor: "#063980",
  opacity: "0.8",
  border: "1px",
  color: "white",
  minHeight: "10.7vh",
  fontWeight: "bold",
  textAlign: "center",
  paddingTop: "30px"
};

class BreakingNews extends Component {
  state = {
    dataSelect: "",
    selectedOption: null,
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
          height: "10.8vh",
          overflow: "hidden",
          backgroundColor: "transparent",
          bottom: 0
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
            <Col md="2 ">
              <Row>
                <Col md="6" style={{ padding: 0 }}>
                  <Nav tabs vertical pills style={{ padding: "0 0 0 15px" }}>
                    <NavItem>
                      <div
                        onClick={() => {
                          this.toggle("1");
                        }}
                      >
                        <div
                          style={{
                            ...tabItem,
                            color:
                              this.state.activeTab === "1" ? "white" : "white",
                            backgroundColor:
                              this.state.activeTab === "1" ? "grey" : "black",
                            paddingTop: "5px"
                          }}
                        >
                          Komoditi
                        </div>
                      </div>
                    </NavItem>
                    <NavItem>
                      <div
                        onClick={() => {
                          this.toggle("2");
                        }}
                      >
                        <div
                          style={{
                            ...tabItem,
                            color:
                              this.state.activeTab === "2" ? "white" : "white",
                            backgroundColor:
                              this.state.activeTab === "2" ? "grey" : "black",
                            paddingTop: "5px"
                          }}
                        >
                          Index
                        </div>
                      </div>
                    </NavItem>
                    <NavItem>
                      <div
                        onClick={() => {
                          this.toggle("3");
                        }}
                      >
                        <div
                          style={{
                            ...tabItem,
                            color:
                              this.state.activeTab === "3" ? "white" : "white",
                            backgroundColor:
                              this.state.activeTab === "3" ? "grey" : "black",
                            paddingTop: "5px"
                          }}
                        >
                          FX
                        </div>
                      </div>
                    </NavItem>
                  </Nav>
                </Col>
                <Col md="6" style={{ padding: 0 }}>
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <div style={tabContent}>Komoditi</div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div style={tabContent}>Index</div>
                    </TabPane>
                    <TabPane tabId="3">
                      <div style={tabContent}>FX</div>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Col>
            <Col style={{ padding: 0 }}>
              <marquee scrollamount="5">
                <Row
                  style={{
                    paddingTop: "2.5%"
                  }}
                  // classname="vertical-center"
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
