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

import ostrich from "../../assets/img/ostrich.png";

class Projects extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          {/* ********* PROJECTS 2 ********* */}
          <div className="projects-2 project-raised" style={{backgroundColor:"white"}}>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center mb-5" lg="8">
                  <h2 className="title" style={{color:"black"}}>Legalitas</h2>
                  <h4 className="description">
                    Trello’s boards, lists, and cards enable you to organize and
                    prioritize your projects in a fun, flexible and rewarding
                    way.
                  </h4>
                  <div className="section-space" />
                </Col>
              </Row>
              <Nav
                className="nav-pills-info nav-pills-icons nav-pills-lg"
                pills
                role="tablist"
              >
                <NavItem className="m-auto">
                  {/* <NavLink
                    className={this.state.activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    <i className="tim-icons icon-spaceship" />
                    Project 1
                  </NavLink> */}
                  <img src={ostrich} height="100" width="auto"/>
                </NavItem>
                <NavItem className="m-auto">
                <img src={ostrich} height="100" width="auto"/>
                </NavItem>
                <NavItem className="m-auto">
                <img src={ostrich} height="100" width="auto"/>
                </NavItem>
                <NavItem className="m-auto">
                <img src={ostrich} height="100" width="auto"/>
                </NavItem>
                <NavItem className="mx-auto">
                <img src={ostrich} height="100" width="auto"/>
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
