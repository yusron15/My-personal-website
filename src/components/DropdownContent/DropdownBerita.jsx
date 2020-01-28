import React from "react";
import { slideInDown } from "react-animations";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { LangContext } from "../MyContext";
import "../../assets/css/main.css";
import vl from "../../assets/img/vertical-line.png";
import { connect } from "react-redux";
import { fetchPage } from "../../redux/ducks/actions.js";

const title = {
  fontSize: "15px",
  fontWeight: "bold",
  color: "black",
  marginTop: "20px",
  marginBottom: "10px"
};

const DropdownBeritaText = {
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  //   marginTop: "10px",
  //   marginLeft: "20px",
  // marginBottom: "10px",
  textAlign: "left"
};

class DropdownBerita extends React.Component {
  async componentDidMount() {
    await this.props.fetchPage("landing", "id");
  }
  render() {
    return (
      <LangContext.Consumer>
        {({ lang }) => {
          return (
            <div
              className="broken-white"
              style={{
                position: "absolute",
                top: 93,
                left: 0,
                flex: 1,
                flexDirection: "row",
                opacity: "0.90",
                justifyContent: "flex-around",
                minWidth: "100vw",
                height: "110px",
                display: "flex"
              }}
            >
              <div className="dropdown-contents">
                <Col>
                  <div class="row">
                    <div style={{ marginLeft: "40px", marginTop: "25px" }}>
                      <div style={{ ...DropdownBeritaText }}>
                        <Link className="font-black" to="/newspage">
                          {this.props.pageStore.Header.m4.dropdown[0].title}
                        </Link>
                      </div>
                      <div style={{ ...DropdownBeritaText, marginTop: "10px" }}>
                        <Link className="font-black" to="/stock-index">
                          {this.props.pageStore.Header.m4.dropdown[1].title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div class="row">
                    <div>
                      <img className="vl-img-tentangkami" src={vl} />
                    </div>
                    <div style={{ marginLeft: "20px", marginTop: "25px" }}>
                      <div style={DropdownBeritaText}>
                        <Link className="font-black" to="/forex-commodity">
                          {this.props.pageStore.Header.m4.dropdown[2].title}
                        </Link>
                      </div>
                      <div style={{ ...DropdownBeritaText, marginTop: "10px" }}>
                        <Link className="font-black" to="/economic-calendar">
                          {this.props.pageStore.Header.m4.dropdown[3].title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div class="row">
                    <div>
                      <img className="vl-img-tentangkami" src={vl} />
                    </div>
                    <div style={{ marginLeft: "20px", marginTop: "25px" }}>
                      <div style={DropdownBeritaText}>
                        <Link className="font-black" to="/market-outlook">
                          {this.props.pageStore.Header.m4.dropdown[4].title}
                        </Link>
                      </div>
                      <div style={{ ...DropdownBeritaText, marginTop: "10px" }}>
                        <Link className="font-black" to="/video-content">
                          {this.props.pageStore.Header.m4.dropdown[5].title}
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          );
        }}
      </LangContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  pageStore: state.pageStore
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (section, lang) => dispatch(fetchPage(section, lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownBerita);
