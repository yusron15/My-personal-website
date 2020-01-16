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

const DropdownTentangKamiText = {
  fontSize: "15px",
  // fontWeight: "bold",
  color: "black",
  marginTop: "40px",
  marginLeft: "20px",
  // marginBottom: "10px",
  textAlign: "left"
};

class DropdownTentangKami extends React.Component {
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
                opacity: "0.90",
                flexDirection: "row",
                justifyContent: "flex-around",
                minWidth: "100vw",
                height: "110px",
                display: "flex"
              }}
            >
              <div className="dropdown-contents">
                <div style={DropdownTentangKamiText}>
                  <Link className="font-black" to="/tentang-kami">
                    {this.props.pageStore.Header.m2.dropdown[0].title}
                  </Link>
                </div>
              </div>
              <div className="dropdown-contents">
                <div>
                  <img className="vl-img-tentangkami" src={vl} />
                </div>
                <div style={DropdownTentangKamiText}>
                  <Link className="font-black" to="/cabang">
                    {this.props.pageStore.Header.m2.dropdown[1].title}
                  </Link>
                </div>
              </div>
              <div className="dropdown-contents">
                <div>
                  <img className="vl-img-tentangkami" src={vl} />
                </div>
                <div style={DropdownTentangKamiText}>
                  <Link className="font-black" to="/rekening-terpisah">
                    {this.props.pageStore.Header.m2.dropdown[2].title}
                  </Link>
                </div>
              </div>
              <div className="dropdown-contents">
                <div>
                  <img className="vl-img-tentangkami" src={vl} />
                </div>
                <div style={DropdownTentangKamiText}>
                  <Link className="font-black" to="/legalitas">
                    {this.props.pageStore.Header.m2.dropdown[3].title}
                  </Link>
                </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownTentangKami);
