import React from "react";
import { LangContext } from "../MyContext";

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
import { isMobile } from "react-device-detect";
import ScrollAnimation from "react-animate-on-scroll";
import bappebti from "../../assets/img/legalitas1.png";
import jfx from "../../assets/img/legalitas2.png";
import icdx from "../../assets/img/legalitas3.png";
import kbi from "../../assets/img/legalitas4.png";
import ich from "../../assets/img/legalitas5.png";
import bg from "../../assets/img/header-legalitas.png";
import bglegalitas from "../../assets/img/bg-legalitas.png";

import DarkNavbar from "../../components/Navbars/DarkNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

class Projects extends React.Component {
  state = {
    activeTab: "1"
  };

  async componentDidMount() {
    await this.props.getContent("legalitas", this.props.currentLang, true);
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div className="cd-section" id="projects">
            {/* <ColoredNavbar /> */}
            {/* ********* PROJECTS 2 ********* */}
            <div
              className="project-raised broken-white"
              // style={{ backgroundColor: "#D4D4D4" }}
            >
              <div
                className="team-1 background-header-mobile"
                style={{
                  backgroundImage: `url(${bg})`,
                  padding: 0
                }}
              >
                {/* <BlurryNavbar /> */}
                <SidebarMobile />

                <div className="title-header-mobile">
                  {this.props.pageStore.legalitas.header}
                </div>
              </div>
              {/* <DarkNavbar /> */}
              <Container
                className="center"
                style={{
                  // height: "1vh",
                  minWidth: "100vw",
                  backgroundSize: "cover",
                  backgroundImage: `url(${bglegalitas})`
                }}
              >
                <div>
                  <Col style={{ marginTop: "1vh" }}>
                    <Nav
                      className="nav-pills-info nav-pills-icons nav-pills-lg"
                      pills
                      role="tablist"
                      // style={{marginTop:"50px"}}
                    >
                      <Row>
                        <NavItem className="m-auto">
                          <img
                            src={
                              this.state.activeTab === "1"
                                ? require('"../../assets/img/colored-bappebti.png')
                                : require('"../../assets/img/grey-bappebti.png')
                            }
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "1" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "1" ? "active" : ""
                            }
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
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "2" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "2" ? "active" : ""
                            }
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
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "3" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "3" ? "active" : ""
                            }
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
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "4" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "4" ? "active" : ""
                            }
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
                            style={{ margin: "10px" }}
                            width={this.state.activeTab === "5" ? "100" : "100"}
                            auto="auto"
                            className={
                              this.state.activeTab === "5" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("5");
                            }}
                          />
                        </NavItem>
                      </Row>
                    </Nav>
                  </Col>
                  <Col style={{ paddingBottom: "50px" }}>
                    <TabContent
                      activeTab={"project" + this.state.activeTab}
                      style={{ height: "50vh" }}
                    >
                      <TabPane tabId="project1">
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            <div style={{ color: "black" }}>
                              {ReactHtmlParser(
                                this.props.pageStore.legalitas.content[0].title
                              )}
                            </div>
                          </h2>
                          <p className="description mb-5 font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[0].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project2" style={{ height: "60vh" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {ReactHtmlParser(
                                this.props.pageStore.legalitas.content[1].title
                              )}
                            </h2>

                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[1].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project3" style={{ height: "60vh" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {ReactHtmlParser(
                                this.props.pageStore.legalitas.content[2].title
                              )}
                            </h2>

                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[2].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project4" style={{ height: "60vh" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[3].title
                            )}
                          </h2>
                          <p className="description mb-5 font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[3].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project5" style={{ height: "60vh" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[4].title
                            )}
                          </h2>
                          <p className="description mb-5 font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[4].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                    </TabContent>{" "}
                  </Col>
                </div>
              </Container>
            </div>
            {/* ********* END PROJECTS 2 ********* */}
          </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div className="cd-section" id="projects">
                {/* <ColoredNavbar /> */}
                {/* ********* PROJECTS 2 ********* */}
                <div
                  className="project-raised broken-white"
                  // style={{ backgroundColor: "#D4D4D4" }}
                >
                  <div
                    className="team-1 background-header"
                    style={{
                      backgroundImage: `url(${bg})`,
                      padding: 0
                    }}
                  >
                    <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} />

                    <div className="title title-header">
                      {this.props.pageStore.legalitas.header}
                    </div>
                  </div>

                  <Container
                    className="center"
                    style={{
                      minWidth: "100vw",
                      backgroundSize: "cover",
                      backgroundImage: `url(${bglegalitas})`
                    }}
                  >
                    <TabContent
                      className="tab-space"
                      activeTab={"project" + this.state.activeTab}
                    >
                      <TabPane tabId="project1" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            <div style={{ color: "black" }}>
                              {ReactHtmlParser(
                                this.props.pageStore.legalitas.content[0].title
                              )}
                            </div>
                          </h2>
                          <p className="description mb-5 font-black">
                            {/* {this.state.content[0].bappebti} */}
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[0].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project2" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {ReactHtmlParser(
                                this.props.pageStore.legalitas.content[1].title
                              )}
                            </h2>

                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[1].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project3" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <p className="description mb-5 font-black">
                            <h2 className="title font-black">
                              {ReactHtmlParser(
                                this.props.pageStore.legalitas.content[2].title
                              )}
                            </h2>

                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[2].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project4" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[3].title
                            )}
                          </h2>
                          <p className="description mb-5 font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[3].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                      <TabPane tabId="project5" style={{ height: "200px" }}>
                        <Col
                          className="ml-auto mr-auto text-center mt-4"
                          md="8"
                        >
                          <h2 className="title font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[4].title
                            )}
                          </h2>
                          <p className="description mb-5 font-black">
                            {ReactHtmlParser(
                              this.props.pageStore.legalitas.content[4].content
                            )}
                          </p>
                        </Col>
                      </TabPane>
                    </TabContent>
                    <Container style={{ paddingBottom: "50px" }}>
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
                            width={this.state.activeTab === "1" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "1" ? "active" : ""
                            }
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
                            width={this.state.activeTab === "2" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "2" ? "active" : ""
                            }
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
                            width={this.state.activeTab === "3" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "3" ? "active" : ""
                            }
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
                            width={this.state.activeTab === "4" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "4" ? "active" : ""
                            }
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
                            width={this.state.activeTab === "5" ? "150" : "150"}
                            auto="auto"
                            className={
                              this.state.activeTab === "5" ? "active" : ""
                            }
                            onClick={() => {
                              this.toggle("5");
                            }}
                          />
                        </NavItem>
                      </Nav>
                    </Container>
                  </Container>
                </div>
                {/* ********* END PROJECTS 2 ********* */}
              </div>{" "}
            </>
          );
        }}
      </LangContext.Consumer>
    );
  };

  render() {
    console.log(
      this.props.pageStore.legalitas.content[4].content,
      "headerlegalitas"
    );
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
