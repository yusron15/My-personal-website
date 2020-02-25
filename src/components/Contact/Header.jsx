import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import {
  Badge,
  Button,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import { isMobile } from "react-device-detect";
import { LangContext } from "../MyContext";

// core components
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import SidebarMobile from "../../components/Navbars/SidebarMobile";

import { connect } from "react-redux";
import { getContent } from "../../redux/ducks/actions.js";

import "../../assets/css/main.css";

class ContactUs extends React.Component {
  async componentDidMount() {
    await this.props.getContent("hubungikami", "id");
  }

  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            className="background-header-mobile header-filter"
            style={{
              backgroundImage:
                "url(" +
                this.props.pageStore.hubungikami.header
                  .image_background_mobile +
                ")",
              padding: 0
            }}
          >
            <SidebarMobile />
            {/* <div className="wrapper" ref="wrapper"> */}
            <div className="title-header header-filter">
              <div className="page-header-image" />
              <Container>
                <Row>
                  <Col
                    className="text-center title-header"
                    md="12"
                    style={{ paddingTop: "7vh" }}
                  >
                    <h1 className="title">
                      {this.props.pageStore.hubungikami.header.title}
                    </h1>
                    <h4 className="desc">
                      {this.props.pageStore.hubungikami.header.subtitle}
                    </h4>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* </div> */}
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
                className="background-header header-filter"
                style={{
                  backgroundImage:
                    "url(" +
                    this.props.pageStore.hubungikami.header.image_background +
                    ")",
                  padding: 0
                }}
              >
                <BlurryNavbar />
                <ColoredNavbar location={{ ...this.props.location }} />
                {/* <div className="wrapper" ref="wrapper"> */}
                <div className="title-header header-filter">
                  <div className="page-header-image" />
                  <Container>
                    <Row>
                      <Col className="text-center vertical-center" md="12">
                        <h1 className="title">
                          {this.props.pageStore.hubungikami.header.title}
                        </h1>
                        <h4 className="desc">
                          {this.props.pageStore.hubungikami.header.subtitle}
                        </h4>
                      </Col>
                    </Row>
                  </Container>
                </div>
                {/* </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
