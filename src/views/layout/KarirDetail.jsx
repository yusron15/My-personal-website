import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { connect } from "react-redux";

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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

import logo from "../../assets/img/logo-topgrowth.png";

import { getKarirById } from "../../redux/ducks/actions";

class KarirDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = async () => {
    try {
      await this.props.getKarirById(this.props.match.params.id);

      await this.setState({
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { loading } = this.state;
    if (loading) return null;

    const { karir } = this.props;

    const state = karir;

    console.log(karir, "adasdas");
    return (
      <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Container style={{ backgroundColor: "transparent" }}>
          <Row>
            <Col md={7} style={{ backgroundColor: "white", paddingTop: 20 }}>
              <img src={logo} style={{ height: 60 }} />
              <div style={{ marginTop: 15 }}>
                <span
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "1.7rem"
                  }}
                >
                  {state.jobTitle}
                </span>
              </div>
              <div>
                <span>{`${state.location}, Indonesia`}</span>
              </div>
              <div>
                <span style={{ color: "#0194f3" }}>{state.divisi}</span>
                {", "}
                <span>{state.workType}</span>
              </div>
              <div style={{ marginTop: 25 }}>
                <span className="karir-detail">
                  {ReactHtmlParser(state.description)}
                </span>
              </div>
            </Col>

            <Col
              md={5}
              style={{
                backgroundColor: "#fafafa",
                paddingTop: 20,
                display: "flex"
              }}
            >
              <div style={{ marginTop: isMobile ? 0 : "40vh" }}>
                <span className="karir-detail">
                  {ReactHtmlParser(state.contact)}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  karir: state.karirStore.karir
});

const mapDispatchToProps = dispatch => ({
  getKarirById: id => dispatch(getKarirById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(KarirDetail);
