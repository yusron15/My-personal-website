import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Table,
  //   Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import { LangContext } from "../MyContext";

import { isMobile } from "react-device-detect";
import SidebarMobile from "components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import bg from "../../assets/img/header-komoditi.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import { TableContent6, TableContent8 } from '../Table/Table';
import Content from './Content'
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import "../../assets/css/main.css";

const textTitle = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.4rem"
};

const textTitleSub = {
  fontWeight: "bold",
  color: "black",
  fontSize: "1.2rem",
  marginTop: "20px"
};

const textDesc = {
  color: "black",
  fontSize: "1rem",
  textAlign: "justify"
};

class Headers extends React.Component {
  async componentDidMount() {
    await this.props.getContent("Komoditi", "id");
  }
  state = {};

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="team-1 background-header-mobile"
            style={{
              backgroundImage:
                "url(" + this.props.pageStore.Komoditi.image_background_mobile + ")",
              padding: 0
            }}
          >
            {/* <BlurryNavbar /> */}
            <SidebarMobile />
            <div className="title title-header-mobile">
              {ReactHtmlParser(this.props.pageStore.Komoditi.header)}
            </div>
            <Container>
              <div
                style={{ textAlign: "center" }}
                className="subheader font-white"
              >
                {ReactHtmlParser(this.props.pageStore.Komoditi.sub_header)}
              </div>
            </Container>
          </div>
          <div className="header header-4 broken-white">
            <div className="header-wrapper">
              <div
                style={{
                  justifyContent: "center",
                  minHeight: "60vh",
                  backgroundImage:
                    "url(" + require("assets/img/white-dotted.png") + ")",
                  backgroundSize: "cover"
                }}
              >
                <Container>
                  <div className="space-50" />
                  <p
                    className="description font-black"
                    style={{ textAlign: "justify", color: "black" }}
                  >
                    {ReactHtmlParser(this.props.pageStore.Komoditi.top)}
                  </p>
                  <div className="space-50" />
                  <div style={textTitle}>
                    {ReactHtmlParser(
                      this.props.pageStore.Komoditi.contentList2.title
                    )}
                  </div>
                  <div style={textDesc}>
                    {this.props.pageStore.Komoditi.contentList2.content.map(
                      (item, index) => {
                        return (
                          <div>
                            <div className="font-black" style={textTitleSub}>
                              {ReactHtmlParser(item.title)}
                            </div>
                            <div className="font-black" style={textDesc}>
                              {ReactHtmlParser(item.content)}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="space-50" />
                  <div style={textTitle}>
                    {ReactHtmlParser(
                      this.props.pageStore.Komoditi.contentList3.title
                    )}
                  </div>
                  <div style={textDesc}>
                    {this.props.pageStore.Komoditi.contentList3.content.map(
                      (item, index) => {
                        return (
                          <div>
                            <div className="font-black" style={textTitleSub}>
                              {ReactHtmlParser(item.title)}
                            </div>
                            <div className="font-black" style={textDesc}>
                              {ReactHtmlParser(item.content)}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="space-50" />
                      <div style={textTitle}>
                        {ReactHtmlParser(
                         this.props.pageStore.Komoditi.tableList[0].title
                        )}
                      </div>
                      <div
                      style={{overflow:"scroll"}}>
                      <Table
                             className="table-shopping"
                             style={{
                               backgroundColor: "#1565ff",
                               borderRadius: "5px",
                               borderCollapse: "inherit"
                             }}
                           >
                               <thead>
                               <tr style={{ backgroundColor: "#1565ff" }}>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix1}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix2}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix3}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix4}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix5}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix6}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix7}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix8}</b>
                                 </td>
                               </tr>
                             </thead>
                          {
                             this.props.pageStore.Komoditi
                             .tableList[0].table[0].tableData.map((item, index) => {
                              return (
                               <TableContent8
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                  prefix5={item.prefix5}
                                  prefix6={item.prefix6}
                                  prefix7={item.prefix7}
                                  prefix8={item.prefix8}
                                />
                               );
                            })}
                          </Table>
                          </div>
                          <div className="space-50" />
                          <div style={textTitle}>
                        {ReactHtmlParser(
                         this.props.pageStore.Komoditi.tableList[1].title
                        )}
                      </div>
                      <div
                      style={{overflow:"scroll"}}>

                      <Table
                             className="table-shopping"
                             style={{
                               backgroundColor: "#1565ff",
                               borderRadius: "5px",
                               borderCollapse: "inherit"
                             }}
                           >
                               <thead>
                               <tr style={{ backgroundColor: "#1565ff" }}>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix1}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix2}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix3}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix4}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix5}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix6}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix7}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix8}</b>
                                 </td>
                               </tr>
                             </thead>
                          {
                             this.props.pageStore.Komoditi
                             .tableList[1].table[0].tableData.map((item, index) => {
                              return (
                               <TableContent8
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                  prefix5={item.prefix5}
                                  prefix6={item.prefix6}
                                  prefix7={item.prefix7}
                                  prefix8={item.prefix8}
                                />
                               );
                            })}
                          </Table>
                          </div>
               
                  <div className="space-50" />
                  <div style={textTitle}>
                    {ReactHtmlParser(
                      this.props.pageStore.Komoditi.contentList1.title
                    )}
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
              <div
                className="team-1 background-header"
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.Komoditi.image_background +
                    ")",
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                <div className="title title-header">
                  {ReactHtmlParser(this.props.pageStore.Komoditi.header)}
                </div>
                <Container>
                  <div
                    style={{ textAlign: "center" }}
                    className="subheader font-white"
                  >
                    {ReactHtmlParser(this.props.pageStore.Komoditi.sub_header)}
                  </div>
                </Container>
              </div>
              <div className="header header-4 broken-white">
                <div className="header-wrapper">
                  <div
                    style={{
                      justifyContent: "center",
                      // minHeight: "60vh",
                      backgroundImage:
                        "url(" + require("assets/img/white-dotted.png") + ")",
                      backgroundSize: "cover"
                    }}
                  >
                    <Container>
                      <div className="space-50" />
                      <p
                        className="description font-black"
                        style={{ textAlign: "justify", color: "black" }}
                      >
                        {ReactHtmlParser(this.props.pageStore.Komoditi.top)}
                      </p>
                      <div className="space-50" />
                      <div style={textTitle}>
                        {ReactHtmlParser(
                          this.props.pageStore.Komoditi.contentList2.title
                        )}
                      </div>
                      <div style={textDesc}>
                        {this.props.pageStore.Komoditi.contentList2.content.map(
                          (item, index) => {
                            return (
                              <div>
                                <div
                                  className="font-black"
                                  style={textTitleSub}
                                >
                                  {ReactHtmlParser(item.title)}
                                </div>
                                <div className="font-black" style={textDesc}>
                                  {ReactHtmlParser(item.content)}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="space-50" />
                      <div style={textTitle}>
                        {ReactHtmlParser(
                          this.props.pageStore.Komoditi.contentList3.title
                        )}
                      </div>
                      <div style={textDesc}>
                        {this.props.pageStore.Komoditi.contentList3.content.map(
                          (item, index) => {
                            return (
                              <div>
                                <div
                                  className="font-black"
                                  style={textTitleSub}
                                >
                                  {ReactHtmlParser(item.title)}
                                </div>
                                <div className="font-black" style={textDesc}>
                                  {ReactHtmlParser(item.content)}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <div className="space-50" />
                      <div style={textTitle}>
                        {ReactHtmlParser(
                         this.props.pageStore.Komoditi.tableList[0].title
                        )}
                      </div>
                      <Table
                             className="table-shopping"
                             style={{
                               backgroundColor: "#1565ff",
                               borderRadius: "5px",
                               borderCollapse: "inherit"
                             }}
                           >
                               <thead>
                               <tr style={{ backgroundColor: "#1565ff" }}>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix1}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix2}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix3}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix4}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix5}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix6}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix7}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[0].table[0].prefix8}</b>
                                 </td>
                               </tr>
                             </thead>
                          {
                             this.props.pageStore.Komoditi
                             .tableList[0].table[0].tableData.map((item, index) => {
                              return (
                                <TableContent8
                                prefix1={item.prefix1}
                                prefix2={item.prefix2}
                                prefix3={item.prefix3}
                                prefix4={item.prefix4}
                                prefix5={item.prefix5}
                                prefix6={item.prefix6}
                                prefix7={item.prefix7}
                                prefix8={item.prefix8}
                              />
                               );
                            })}
                          </Table>
                          <div className="space-50" />
                          <div style={textTitle}>
                        {ReactHtmlParser(
                         this.props.pageStore.Komoditi.tableList[1].title
                        )}
                      </div>
                      <Table
                             className="table-shopping"
                             style={{
                               backgroundColor: "#1565ff",
                               borderRadius: "5px",
                               borderCollapse: "inherit"
                             }}
                           >
                               <thead>
                               <tr style={{ backgroundColor: "#1565ff" }}>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix1}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix2}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix3}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix4}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix5}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix6}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix7}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.Komoditi.tableList[1].table[0].prefix8}</b>
                                 </td>
                               </tr>
                             </thead>
                          {
                             this.props.pageStore.Komoditi
                             .tableList[1].table[0].tableData.map((item, index) => {
                              return (
                                <TableContent8
                                prefix1={item.prefix1}
                                prefix2={item.prefix2}
                                prefix3={item.prefix3}
                                prefix4={item.prefix4}
                                prefix5={item.prefix5}
                                prefix6={item.prefix6}
                                prefix7={item.prefix7}
                                prefix8={item.prefix8}
                              />
                               );
                            })}
                          </Table>
                      <div className="space-50" />
                      <div style={textTitle}>
                        {ReactHtmlParser(
                          this.props.pageStore.Komoditi.contentList1.title
                        )}
                      </div>

                    </Container>


                    {/* <Container style={{ paddingTop: 0 }}>
                      <Row>
                        <Col md="12">
                          <div style={textTitle}>
                            {ReactHtmlParser(
                              this.props.pageStore.Komoditi.contentList2.title
                            )}
                          </div>
                        </Col>
                        <Col md="12">
                          <div
                            className="description font-black"
                            style={textDesc}
                          >
                            {ReactHtmlParser(
                              this.props.pageStore.Komoditi.contentList2
                                .content[0].content
                            )}
                          </div>
                        </Col>
                      </Row>
                    </Container> */}
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </LangContext.Consumer>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Headers);
