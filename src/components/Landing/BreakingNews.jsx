import React, { Component } from "react";
import Iframe from "react-iframe";
import Marquee from "react-smooth-marquee";
import { Input } from "reactstrap";
import { NavItem, Nav, TabContent, TabPane } from "reactstrap";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import Up from "../../assets/img/green-triangle.png";
import Down from "../../assets/img/red-triangle.png";
import "../../assets/css/main.css";

import Select from "react-select";

const tabItem = {
  display: "flex",
  fontSize: "0.8rem",
  paddingLeft: "5px",
  flex: 1,
  justifyContent: "center"

  // height: "20px"
};

const tabContent = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  flex: 1,
  backgroundColor: "#063980",
  opacity: "0.8",
  border: "1px",
  color: "white",
  // minHeight: "7.7vh",
  fontWeight: "bold"
  // textAlign: "center"
  // paddingTop: "18px"
};

const tabContentMobile = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  flex: 1,
  backgroundColor: "#063980",
  opacity: "0.8",
  border: "1px",
  color: "white",
  // minHeight: "7.7vh",
  fontWeight: "bold"
  // textAlign: "center"
  // paddingTop: "18px"
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
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div style={{ display: "flex" }}>
            {/* <div
              style={{
                display: "flex",
                width: "40%"
              }}
            >
              <div style={{ flex: 1 }}>
                <Nav tabs vertical pills style={{ padding: 0 }}>
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
                          cursor: "pointer"
                        }}
                      >
                        FX
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
                          cursor: "pointer"
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
                          cursor: "pointer"
                        }}
                      >
                        Komoditi
                      </div>
                    </div>
                  </NavItem>
                </Nav>
              </div>
              <div style={{ flex: 1 }}>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <div style={tabContentMobile}>FX</div>
                  </TabPane>
                  <TabPane tabId="2">
                    <div style={tabContentMobile}>Index</div>
                  </TabPane>
                  <TabPane tabId="3">
                    <div style={tabContentMobile}>Komoditi</div>
                  </TabPane>
                </TabContent>
              </div>
            </div> */}
            <div
              style={{
                flex: 1
              }}
            >
              <Iframe
                url="https://prolindo.pro-itrading.com:10443/Livefeed/quote_running.asp"
                style={{ height: 40, width: "100%" }}
                height="37"
                width="100%"
              />
              {/* <marquee scrollamount="5">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ marginLeft: 20 }}>
                    <img src={Up} />
                    {` Lorem ipsum dolor sit amet, consectetur
                adipiscing elit`}
                  </div>
                  <div style={{ marginLeft: 8 }}>
                    <img src={Down} />
                    {` Lorem ipsum dolor sit amet, consectetur
                adipiscing elit`}
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <img src={Up} />
                    {` Lorem ipsum dolor sit amet, consectetur
                adipiscing elit`}
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <img src={Down} />
                    {` Lorem ipsum dolor sit amet, consectetur
                adipiscing elit`}
                  </div>
                </div>
              </marquee>
           */}
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <Iframe
              url="https://prolindo.pro-itrading.com:10443/Livefeed/quote_running.asp"
              style={{ height: 50, width: "100%" }}
              frameBorder="0"
              height="37"
              width="100%"
            />
          </div>
        </div>
      </>
    );
  };
  render() {
    return this.renderContent();
    // <div
    //   style={{
    //     height: "7.8vh",
    //     overflow: "hidden",
    //     backgroundColor: "transparent",
    //     bottom: 0
    //   }}
    // >
    //   <div
    //     style={{
    //       color: "white",
    //       fontSize: "1rem",
    //       verticalAlign: "middle"
    //     }}
    //   >
    //     <Row>
    //       <Col md="2 ">
    //         <Row>
    //           <Col md="6" style={{ padding: 0 }}>
    // <Nav tabs vertical pills style={{ padding: "0 0 0 15px" }}>
    //   <NavItem>
    //     <div
    //       onClick={() => {
    //         this.toggle("1");
    //       }}
    //     >
    //       <div
    //         style={{
    //           ...tabItem,
    //           color:
    //             this.state.activeTab === "1" ? "white" : "white",
    //           backgroundColor:
    //             this.state.activeTab === "1" ? "grey" : "black",
    //           cursor: "pointer"
    //         }}
    //       >
    //         Komoditi
    //       </div>
    //     </div>
    //   </NavItem>
    //   <NavItem>
    //     <div
    //       onClick={() => {
    //         this.toggle("2");
    //       }}
    //     >
    //       <div
    //         style={{
    //           ...tabItem,
    //           color:
    //             this.state.activeTab === "2" ? "white" : "white",
    //           backgroundColor:
    //             this.state.activeTab === "2" ? "grey" : "black",
    //           cursor: "pointer"
    //         }}
    //       >
    //         Index
    //       </div>
    //     </div>
    //   </NavItem>
    //   <NavItem>
    //     <div
    //       onClick={() => {
    //         this.toggle("3");
    //       }}
    //     >
    //       <div
    //         style={{
    //           ...tabItem,
    //           color:
    //             this.state.activeTab === "3" ? "white" : "white",
    //           backgroundColor:
    //             this.state.activeTab === "3" ? "grey" : "black",
    //           cursor: "pointer"
    //         }}
    //       >
    //         FX
    //       </div>
    //     </div>
    //   </NavItem>
    // </Nav>
    //           </Col>
    //           <Col md="6" style={{ padding: 0 }}>
    // <TabContent activeTab={this.state.activeTab}>
    //   <TabPane tabId="1">
    //     <div style={tabContent}>Komoditi</div>
    //   </TabPane>
    //   <TabPane tabId="2">
    //     <div style={tabContent}>Index</div>
    //   </TabPane>
    //   <TabPane tabId="3">
    //     <div style={tabContent}>FX</div>
    //   </TabPane>
    // </TabContent>
    //           </Col>
    //         </Row>
    //       </Col>
    //       <Col style={{ padding: 0 }}>
    // <marquee scrollamount="5">
    //   <Row
    //     style={{
    //       paddingTop: "1.35%"
    //     }}
    //     // classname="vertical-center"
    //   >
    //     <div>
    //       <img src={Up} /> Lorem ipsum dolor sit amet, consectetur
    //       adipiscing elit
    //     </div>

    //     <div>
    //       <img src={Down} /> Lorem ipsum dolor sit amet, consectetur
    //       adipiscing elit
    //     </div>
    //   </Row>
    // </marquee>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
  }
}

export default BreakingNews;
