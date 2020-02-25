import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
  CardHeader,
  CardText,
  CardSubtitle,
  ListGroupItem,
  ListGroup
} from "reactstrap";
import { isMobile } from "react-device-detect";
import SearchField from "react-search-field";
import Select from "react-select";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar";
import bg from "../../assets/img/header-karir.png";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ReactSearchBox from "react-search-box";
import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";
import ReactHtmlParser from "react-html-parser";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

// import {
//   AccordionWithHeader,
//   AccordionNode,
//   AccordionHeader,
//   AccordionPanel
// } from "react-accordion-with-header";

import _ from "lodash";
import "../../assets/css/main.css";

const customStyles = {
  control: (base, state) => ({
    ...base,
    minWidth: "300px",
    height: "35px",
    marginTop: "30px",
    marginBottom: "30px"
  })
};

class Blogs extends React.Component {
  state = {
    dataSelect: "",
    searchField: "",
    stateKarir: [],
    openedCardIndex: ""
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.pageStore.karir.karirlist !==
      this.props.pageStore.karir.karirlist
    ) {
      if (this.props.pageStore.karir.karirlist) {
        await this.setState({
          stateKarir: this.props.pageStore.karir.karirlist.map(item => {
            return {
              ...item,
              open: false
            };
          })
        });
      }
    }
  }

  renderContent = () => {
    let divisions;
    if (this.props.pageStore) {
      let a = _.uniqBy(this.props.pageStore.karir, "devisi");
      if (a.length > 0) {
        divisions = a.map(item => {
          return {
            label: item.devisi,
            value: item.devisi
          };
        });
      }
    }

    let options = this.props.pageStore.karir.karirList.map((item, index) => {
      return { value: item.divisi.toLowerCase(), label: item.divisi };
    });

    // options = [{ value: "", label: "Filter By Division" }, ...options];

    let karirList = this.props.pageStore.karir.karirList;

    if (this.state.dataSelect !== "") {
      karirList = karirList.filter(
        (item, index) => item.divisi === this.state.dataSelect.label
      );
    }
    if (this.state.searchField !== "") {
      karirList = karirList.filter((item, index) => {
        return (
          item.jobTitle.toLowerCase().includes(this.state.searchField) ||
          item.divisi.toLowerCase().includes(this.state.searchField) ||
          item.description.toLowerCase().includes(this.state.searchField)
        );
      });
    }

    if (isMobile) {
      return (
        <>
          {/* <SidebarMobile /> */}
          <div className="broken-white">
            <div>
              <div
                className="background-header-mobile"
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.karir.image_background_mobile +
                    ")",
                  padding: 0
                }}
              >
                <SidebarMobile />
                <div className="title title-header-mobile">
                  {this.props.karirList.title}
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="subheader font-white"
                >
                  {ReactHtmlParser(this.props.pageStore.karir.subtitle)}
                </div>
              </div>
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" md="10">
                    <p
                      className="description font-black"
                      style={{ marginTop: "10%", marginBottom: "2%" }}
                    >
                      {ReactHtmlParser(this.props.karirList.description)}
                    </p>
                    <Row style={{ marginBottom: "10%" }}>
                      <Col sm={12}>
                        <div
                          style={{
                            marginTop: "30px"
                          }}
                        >
                          <SearchField
                            className="react-search-field-input"
                            placeholder="Cari "
                            onChange={async text => {
                              await this.setState({
                                searchField: text
                              });
                            }}
                          />
                        </div>
                      </Col>

                      <Col sm={12}>
                        {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir2.jpg")}
                            />
                          </a>
                        </div>
                      </Card> */}
                        {/* <div style={{ maxHeight: "10px" }}> */}
                        <Select
                          styles={customStyles}
                          Placeholder="adasdasd"
                          placeholder="asdasdas"
                          options={options}
                          // value={this.state.dataSelect}
                          onChange={async (data, event) => {
                            await this.setState({
                              dataSelect: data
                            });
                          }}
                        />
                      </Col>
                      <Col sm={12}>
                        <ListGroup style={{ marginBottom: 20 }}>
                          {karirList.map((item, index) => {
                            return (
                              <ListGroupItem>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center"
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      flex: 1,
                                      flexDirection: "column"
                                    }}
                                  >
                                    <div style={{ padding: "5px 0 5px 0" }}>
                                      {item.jobTitle}
                                    </div>
                                    <div
                                      style={{
                                        padding: "5px 0 5px 0",
                                        display: "flex",
                                        alignItems: "center"
                                      }}
                                    >
                                      <span style={{ color: "#0194f3" }}>
                                        {item.divisi}
                                      </span>
                                      <div
                                        style={{
                                          height: 5,
                                          width: 5,
                                          borderRadius: 5 / 2,
                                          backgroundColor: "grey",
                                          margin: "0 10px 0 10px"
                                        }}
                                      ></div>
                                      <span>{item.workType}</span>
                                    </div>
                                  </div>

                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center"
                                    }}
                                  >
                                    <Link
                                      to={{
                                        pathname: `/karir/${item.jobTitle}`,
                                        state: { ...item }
                                      }}
                                    >
                                      <div>
                                        <Button color="info">Details</Button>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                              </ListGroupItem>
                            );
                          })}
                        </ListGroup>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="cd-section broken-white" id="blogs">
          <div>
            <div
              className="team-1 background-header"
              style={{
                backgroundImage:
                  "url(" + this.props.pageStore.karir.image_background + ")",
                padding: 0
              }}
            >
              <BlurryNavbar />
              <ColoredNavbar location={{ ...this.props.location }} />
              <div className="title title-header">
                {this.props.pageStore.karir.Header}
              </div>
              <div
                style={{ textAlign: "center" }}
                className="subheader font-white"
              >
                {ReactHtmlParser(this.props.pageStore.karir.subtitle)}
              </div>
            </div>
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="10">
                  <p
                    className="description font-black"
                    style={{ marginTop: "10%", marginBottom: "2%" }}
                  >
                    {ReactHtmlParser(this.props.pageStore.karir.description)}
                  </p>
                  <Row style={{ marginBottom: 30 }}>
                    <Col
                      md="5"
                      style={{ alignItems: "center", display: "flex" }}
                    >
                      {/* <div
                        style={{
                          marginTop: "30px",
                          marginBottom: "30px"
                        }}
                      > */}
                      <SearchField
                        className="react-search-field-input"
                        placeholder="Cari "
                        onChange={text => {
                          this.setState({
                            searchField: text
                          });
                        }}
                        // onChange={this.props.karirList.divisi}
                      />
                      {/* </div> */}
                    </Col>
                    <Col md={4}>
                      <Select
                        styles={customStyles}
                        options={options}
                        placeholder={<div>Type to search</div>}
                        // options={this.props.karirList.karirlist}
                        value={this.state.dataSelect}
                        onChange={async data => {
                          await this.setState({
                            dataSelect: data
                          });
                        }}
                      />
                    </Col>
                    <Col
                      md={3}
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                      }}
                    >
                      <Button
                        onClick={() => {
                          this.setState({
                            dataSelect: "",
                            searchField: ""
                          });
                        }}
                      >
                        Clear Filter
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <ListGroup style={{ marginBottom: 20 }}>
                        {karirList.map((item, index) => {
                          return (
                            <ListGroupItem>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center"
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flex: 1,
                                    flexDirection: "column"
                                  }}
                                >
                                  <div style={{ padding: "5px 0 5px 0" }}>
                                    {item.jobTitle}
                                  </div>
                                  <div
                                    style={{
                                      padding: "5px 0 5px 0",
                                      display: "flex",
                                      alignItems: "center"
                                    }}
                                  >
                                    <span style={{ color: "#0194f3" }}>
                                      {item.divisi}
                                    </span>
                                    <div
                                      style={{
                                        height: 5,
                                        width: 5,
                                        borderRadius: 5 / 2,
                                        backgroundColor: "grey",
                                        margin: "0 10px 0 10px"
                                      }}
                                    ></div>
                                    <span>{item.workType}</span>
                                  </div>
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                  }}
                                >
                                  <div style={{ marginRight: 20 }}>
                                    {item.location}
                                  </div>
                                  <Link
                                    to={{
                                      pathname: `/karir/${item.jobTitle}`,
                                      state: { ...item }
                                    }}
                                  >
                                    <div>
                                      <Button color="info">Details</Button>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </ListGroupItem>
                          );
                        })}
                      </ListGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 5 ********* */}
        </div>
      </>
    );
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore,
  karirList: state.karirStore.karirList
});

const mapDispatchToProps = dispatch => ({
  // fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
