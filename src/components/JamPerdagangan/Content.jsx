import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";
import { LangContext } from "../MyContext";
import { isMobile } from "react-device-detect";
import ScrollAnimation from "react-animate-on-scroll";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import SidebarMobile from "components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import bg from "../../assets/img/jamperdagangan-header.png";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import { TableContent3, TableContent4} from '../Table/Table';

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import "../../assets/css/main.css";

const text = {
  // fontWeight: "bold",
  color: "black",
  textAlign: "center",
  fontSize: "1rem"
};

class Tables extends React.Component {

  renderContent = () => {
    if (isMobile) {
      return (
        <>
           <div
                className="cd-section broken-white"
                id="tables"
              >
                <div className="tables-2">
                  <div
                    className="team-1 background-header-mobile"
                    style={{
                      backgroundImage:
                      "url(" +
                      this.props.pageStore.jamperdagangan.image_background +
                      ")",
                      padding: 0
                    }}
                  >
                    <SidebarMobile />
                    {/* <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} /> */}
                    <div className="title title-header-mobile">
                      {this.props.pageStore.jamperdagangan.header}
                    </div>
                    <Container>
                  <div
                    style={{ textAlign: "center" }}
                    className="subheader font-white"
                  >
                    {ReactHtmlParser(
                      this.props.pageStore.jamperdagangan.sub_header
                    )}
                  </div>
                </Container>
                  </div>
                  <Container style={{ marginTop: "50px" }}>
                    <Row>
                      <Col
                        className="mx-auto"
                        md="12"
                        style={{ borderRadius: "20px", marginBottom: "50px" }}
                      >
                        <div>
                        <Table
                            className="table-shopping"
                            style={{
                             backgroundColor: "#224377",
                             borderRadius: "5px",
                              borderCollapse: "inherit"
                           }}
                         >
                            <thead>
                            <tr style={{ backgroundColor: "#224377" }}>
                              <td className="text-white text-center">
                                <b>{this.props.pageStore.jamperdagangan.table[0].prefix1}</b>
                              </td>
                              <td className="text-white text-center">
                                <b>{this.props.pageStore.jamperdagangan.table[0].prefix2}</b>
                              </td>
                              <td className="text-white text-center">
                                <b>{this.props.pageStore.jamperdagangan.table[0].prefix3}</b>
                              </td>
                           </tr>
                          </thead>
                          {
                             this.props.pageStore.jamperdagangan
                             .table[0].tableData.map((item, index) => {
                                return (
                                <TableContent3
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                               />
                              );
                            })}
                          </Table>

                          <Table
                             className="table-shopping"
                             style={{
                               backgroundColor: "#224377",
                               borderRadius: "5px",
                               borderCollapse: "inherit"
                             }}
                           >
                               <thead>
                               <tr style={{ backgroundColor: "#224377" }}>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix1}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix2}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix3}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix4}</b>
                                 </td>
                               </tr>
                             </thead>
                          {
                             this.props.pageStore.jamperdagangan
                             .table[1].tableData.map((item, index) => {
                              return (
                               <TableContent4
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                />
                               );
                            })}
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END Table 2 ********* */}
              </div>{" "}
        </>
      );
    }
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <>
               <div
                className="cd-section broken-white"
                // style={{ backgroundColor: "#D4D4D4" }}
                id="tables"
              >
                {/* ********* Table 2 ********* */}
                <div className="tables-2">
                  <div
                    className="team-1 background-header"
                    style={{
                      backgroundImage:
                      "url(" +
                      this.props.pageStore.jamperdagangan.image_background +
                      ")",
                      padding: 0
                    }}
                  >
                    <BlurryNavbar />
                    <ColoredNavbar location={{ ...this.props.location }} />
                    <div className="title title-header">
                      {this.props.pageStore.jamperdagangan.header}
                    </div>
                    <Container>
                  <div
                    style={{ textAlign: "center" }}
                    className="subheader font-white"
                  >
                    {ReactHtmlParser(
                      this.props.pageStore.jamperdagangan.sub_header
                    )}
                  </div>
                </Container>
                  </div>
                  <Container style={{ marginTop: "50px" }}>
                    <Row>
                      <Col
                        className="mx-auto"
                        md="12"
                        style={{ borderRadius: "20px", marginBottom: "50px" }}
                      >
                        
                        <div>
                        <Table
                            className="table-shopping"
                            style={{
                             backgroundColor: "#224377",
                             borderRadius: "5px",
                              borderCollapse: "inherit"
                           }}
                         >
                            <thead>
                            <tr style={{ backgroundColor: "#224377" }}>
                              <td className="text-white text-center">
                                <b>{this.props.pageStore.jamperdagangan.table[0].prefix1}</b>
                              </td>
                              <td className="text-white text-center">
                                <b>{this.props.pageStore.jamperdagangan.table[0].prefix2}</b>
                              </td>
                              <td className="text-white text-center">
                                <b>{this.props.pageStore.jamperdagangan.table[0].prefix3}</b>
                              </td>
                           </tr>
                          </thead>
                          {
                             this.props.pageStore.jamperdagangan
                             .table[0].tableData.map((item, index) => {
                                return (
                                <TableContent3
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                               />
                              );
                            })}
                          </Table>


                          <Table
                             className="table-shopping"
                             style={{
                               backgroundColor: "#224377",
                               borderRadius: "5px",
                               borderCollapse: "inherit"
                             }}
                           >
                               <thead>
                               <tr style={{ backgroundColor: "#224377" }}>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix1}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix2}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix3}</b>
                                 </td>
                                 <td className="text-white text-center">
                                   <b>{this.props.pageStore.jamperdagangan.table[1].prefix4}</b>
                                 </td>
                               </tr>
                             </thead>
                          {
                             this.props.pageStore.jamperdagangan
                             .table[1].tableData.map((item, index) => {
                              return (
                               <TableContent4
                                  prefix1={item.prefix1}
                                  prefix2={item.prefix2}
                                  prefix3={item.prefix3}
                                  prefix4={item.prefix4}
                                />
                               );
                            })}
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* ********* END Table 2 ********* */}
              </div>{" "}
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
  // getContent: (section, lang) => dispatch(getContent(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tables);
