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

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
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

import bappebti from "../../assets/img/legalitas1.png";
import jfx from "../../assets/img/legalitas2.png";
import icdx from "../../assets/img/legalitas3.png";
import kbi from "../../assets/img/legalitas4.png";
import ich from "../../assets/img/legalitas5.png";

import DarkNavbar from "../../components/Navbars/DarkNavbar.jsx";

import "../../assets/css/main.css";

class Projects extends React.Component {
  state = {
    activeTab: "1",
    content: [
      {
        bappebti:
          "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus montes, nascetur ridiculus mus.Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus montes, nascetur ridiculus mus.Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus montes, nascetur ridiculus mus."
      },
      {
        jfx: "jfx"
      },
      {
        kbi: "kbi"
      },
      {
        ich: "ich"
      },
      {
        icdx: "icdx"
      }
    ]
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    // console.log(this.state.content[2].kbi);
    return (
      <>
        <div className="cd-section" id="projects">
          {/* ********* PROJECTS 2 ********* */}
          <div className="project-raised bg-white">
            <DarkNavbar />
            <Container style={{ height: "70vh" }}>
              <Row>
                <Col className="ml-auto mr-auto text-center" lg="8">
                  <h2 className="title font-black">Legalitas</h2>
                  <div className="section-space" />
                </Col>
              </Row>

              <TabContent
                className="tab-space"
                activeTab={"project" + this.state.activeTab}
              >
                <TabPane tabId="project1" style={{ height: "200px" }}>
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[0].bappebti}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project2" style={{ height: "200px" }}>
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[1].jfx}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project3" style={{ height: "200px" }}>
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[2].kbi}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project4" style={{ height: "200px" }}>
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[3].ich}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project5" style={{ height: "200px" }}>
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[4].icdx}
                    </p>
                  </Col>
                </TabPane>
              </TabContent>

              <Nav
                className="nav-pills-info nav-pills-icons nav-pills-lg"
                pills
                role="tablist"
              >
                <NavItem className="m-auto">
                  <img
                    src={
                      this.state.activeTab === "1"
                        ? require('"../../assets/img/colored-bappebti.png')
                        : require('"../../assets/img/grey-bappebti.png')
                    }
                    width={this.state.activeTab === "1" ? "200" : "150"}
                    auto="auto"
                    className={this.state.activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  />
                </NavItem>
                <NavItem className="m-auto">
                  <img
                    src={
                      this.state.activeTab === "2"
                        ? require('"../../assets/img/colored-jfx.png')
                        : require('"../../assets/img/grey-jfx.png')
                    }
                    width={this.state.activeTab === "2" ? "200" : "150"}
                    auto="auto"
                    className={this.state.activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  />
                </NavItem>
                <NavItem className="m-auto">
                  <img
                    src={
                      this.state.activeTab === "3"
                        ? require('"../../assets/img/colored-kbi.png')
                        : require('"../../assets/img/grey-kbi.png')
                    }
                    width={this.state.activeTab === "3" ? "200" : "150"}
                    auto="auto"
                    className={this.state.activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  />
                </NavItem>
                <NavItem className="m-auto">
                  <img
                    src={
                      this.state.activeTab === "4"
                        ? require('"../../assets/img/colored-ich.png')
                        : require('"../../assets/img/grey-ich.png')
                    }
                    width={this.state.activeTab === "4" ? "200" : "150"}
                    auto="auto"
                    className={this.state.activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  />
                </NavItem>
                <NavItem className="m-auto">
                  <img
                    src={
                      this.state.activeTab === "5"
                        ? require('"../../assets/img/colored-icdx.png')
                        : require('"../../assets/img/grey-icdx.png')
                    }
                    width={this.state.activeTab === "5" ? "200" : "150"}
                    auto="auto"
                    className={this.state.activeTab === "5" ? "active" : ""}
                    onClick={() => {
                      this.toggle("5");
                    }}
                  />
                </NavItem>
              </Nav>
            </Container>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Projects;
