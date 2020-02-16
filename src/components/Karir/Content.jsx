import React from "react";

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
  CardSubtitle
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
    marginTop: "30px"
  })
};

class Blogs extends React.Component {
  state = {
    dataSelect: "",
    stateKarir: [],
    openedCardIndex: ""
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.karirList !== this.props.karirList) {
      console.log("karirList", this.props.karirList);
      if (this.props.karirList.karirlist) {
        await this.setState({
          stateKarir: this.props.karirList.karirlist.map(item => {
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
    if (this.props.karirList) {
      let a = _.uniqBy(this.props.karirList.karirlist, "devisi");
      console.log(a, "karirList");
      if (a.length > 0) {
        divisions = a.map(item => {
          return {
            label: item.devisi,
            value: item.devisi
          };
        });
        console.log(divisions, "karirList");
      }
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
                    "url(" + this.props.pageStore.karir.image_background + ")",
                  padding: 0
                }}
              >
                <SidebarMobile />
                <div className="title title-header-mobile">
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
                      {ReactHtmlParser(
                        this.props.pageStore.karir.content
                          ? this.props.pageStore.karir.content.title
                          : "Berikut ini lowongan kerja yang tersedia di Topgrowth Futures saat ini"
                      )}
                    </p>
                    <Row style={{ marginBottom: "10%" }}>
                      <Col md="6">
                        {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir1.jpg")}
                            />
                          </a>
                        </div>
                      </Card> */}
                        <div
                          style={{
                            marginTop: "30px"
                          }}
                        >
                          <SearchField
                            className="react-search-field-input"
                            placeholder="Cari "
                          />
                        </div>
                      </Col>

                      <Col md="5">
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
                          value="index "
                          options={divisions}
                          value={this.state.dataSelect}
                          onChange={async data => {
                            await this.setState({
                              dataSelect: data
                            });
                          }}
                        />
                        {/* </div> */}
                      </Col>
                      {this.state.stateKarir.map((item, index) => (
                        <Col lg="4" xs="12">
                          <Card
                            className={`card-karir mobile ${
                              item.open ? "expand" : ""
                            }`}
                          >
                            <CardBody>
                              <CardTitle
                                className="text-center"
                                style={{
                                  color: "black",
                                  fontSize: "1rem",
                                  fontWeight: "bold",
                                  marginBottom: 10
                                }}
                              >
                                {item.devisi}
                              </CardTitle>
                              <CardSubtitle
                                className="text-center"
                                style={{
                                  color: "black",
                                  fontSize: "1rem",
                                  marginBottom: 30
                                }}
                              >
                                {item.description}
                              </CardSubtitle>
                              <CardText style={{ color: "black" }}>
                                {item.detail.map(itemDetail =>
                                  ReactHtmlParser(itemDetail.description)
                                )}
                              </CardText>
                              <CardText style={{ color: "black" }}>
                                {item.detail.map(itemDetail =>
                                  ReactHtmlParser(itemDetail.qualification)
                                )}
                              </CardText>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center"
                                }}
                              ></div>
                            </CardBody>
                            {!item.open && (
                              <CardFooter
                                style={{
                                  position: "absolute",
                                  bottom: 0,
                                  width: "100%",
                                  display: "flex",
                                  flex: 1,
                                  justifyContent: "center",
                                  backgroundColor: "white"
                                }}
                              >
                                <Button
                                  className="text-center"
                                  onClick={async () => {
                                    await this.setState({
                                      stateKarir: this.state.stateKarir.map(
                                        item => {
                                          return { ...item, open: false };
                                        }
                                      )
                                    });

                                    setTimeout(() => {
                                      this.setState({
                                        stateKarir: this.state.stateKarir.map(
                                          (item, stateIndex) => {
                                            if (stateIndex !== index)
                                              return item;
                                            return {
                                              ...item,
                                              open: !item.open
                                            };
                                          }
                                        )
                                      });
                                    }, 1000);
                                  }}
                                >
                                  Show More
                                </Button>
                              </CardFooter>
                            )}
                          </Card>
                        </Col>
                      ))}
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
                    {/* Berikut ini lowongan kerja yang tersedia di Topgrowth
                    Futures saat ini: */}
                    {ReactHtmlParser(
                      this.props.pageStore.karir.content
                        ? this.props.pageStore.karir.content.title
                        : "Berikut ini lowongan kerja yang tersedia di Topgrowth Futures saat ini"
                    )}
                  </p>
                  <Row style={{ marginBottom: "10%" }}>
                    <Col md="6">
                      {/* <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/karir1.jpg")}
                            />
                          </a>
                        </div>
                      </Card> */}
                      <div
                        style={{
                          marginTop: "30px"
                        }}
                      >
                        <SearchField
                          className="react-search-field-input"
                          placeholder="Cari "
                        />
                      </div>
                    </Col>

                    <Col md="5">
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
                        value="index "
                        options={divisions}
                        value={this.state.dataSelect}
                        onChange={async data => {
                          await this.setState({
                            dataSelect: data
                          });
                        }}
                      />
                      {/* </div> */}
                    </Col>

                    {this.state.stateKarir.map((item, index) => (
                      <Col lg="12" xs="12">
                        <Card
                          className={`card-karir ${item.open ? "expand" : ""}`}
                        >
                          <CardBody>
                            <CardTitle
                              style={{
                                color: "black",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                // marginBottom: 10,
                                textAlign: "left"
                              }}
                            >
                              {item.devisi}
                            </CardTitle>
                            <CardSubtitle
                              style={{
                                color: "black",
                                fontSize: "1rem",
                                marginBottom: 0
                              }}
                            >
                              {item.description}
                            </CardSubtitle>
                            <CardText style={{ color: "black" }}>
                              {item.detail.map(itemDetail =>
                                ReactHtmlParser(itemDetail.description)
                              )}
                            </CardText>
                            <CardText style={{ color: "black" }}>
                              {item.detail.map(itemDetail =>
                                ReactHtmlParser(itemDetail.qualification)
                              )}
                            </CardText>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                              }}
                            ></div>
                          </CardBody>
                          {!item.open && (
                            <CardFooter
                              style={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                backgroundColor: "white"
                              }}
                            >
                              <Button
                                className="text-center"
                                onClick={async () => {
                                  await this.setState({
                                    stateKarir: this.state.stateKarir.map(
                                      item => {
                                        return { ...item, open: false };
                                      }
                                    )
                                  });

                                  setTimeout(() => {
                                    this.setState({
                                      stateKarir: this.state.stateKarir.map(
                                        (item, stateIndex) => {
                                          if (stateIndex !== index) return item;
                                          return { ...item, open: !item.open };
                                        }
                                      )
                                    });
                                  }, 1000);
                                }}
                              >
                                Show More
                              </Button>
                            </CardFooter>
                          )}
                        </Card>
                      </Col>
                    ))}
                  </Row>

                  {/* {this.state.stateKarir.map((item, index) => (
                    
                    ))} */}
                  {/* <Accordion>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What harsh truths do you prefer to ignore?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Exercitation in fugiat est ut ad ea cupidatat ut in
                          cupidatat occaecat ut occaecat consequat est minim
                          minim esse tempor laborum consequat esse adipisicing
                          eu reprehenderit enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Is free will real or just an illusion?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          In ad velit in ex nostrud dolore cupidatat consectetur
                          ea in ut nostrud velit in irure cillum tempor laboris
                          sed adipisicing eu esse duis nulla non.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion> */}
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
