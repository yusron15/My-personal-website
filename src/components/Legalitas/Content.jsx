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
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";

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
    console.log(this.state.content[2].kbi);
    return (
      <>
        <div className="cd-section" id="projects">
          {/* ********* PROJECTS 2 ********* */}
          <div className="project-raised bg-white">
            {/* <BlurryNavbar /> */}
            <DarkNavbar />
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" lg="8">
                  <h2
                    className="title font-black"
                    style={{ paddingTop: "7rem" }}
                  >
                    Legalitas
                  </h2>
                  <div className="section-space" />
                </Col>
              </Row>

              <TabContent
                className="tab-space"
                activeTab={"project" + this.state.activeTab}
              >
                <TabPane tabId="project1">
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[0].bappebti}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project2">
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[1].jfx}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project3">
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[2].kbi}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project4">
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      {this.state.content[3].ich}
                    </p>
                  </Col>
                </TabPane>
                <TabPane tabId="project5">
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
                    src={bappebti}
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
                    src={jfx}
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
                    src={kbi}
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
                    src={ich}
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
                    src={icdx}
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
