import React, { Component } from "react";
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
import bg from "../../assets/img/header-newspage.png";
import { isMobile } from "react-device-detect";
import BlurryNavbar from "../../components/Navbars/BlurryNavbar.jsx";
import BreakingNews from "../../components/Landing/BreakingNews";
import SidebarMobile from "../../components/Navbars/SidebarMobile";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import { connect } from "react-redux";

class HeaderContent extends Component {
  render() {
    return (
      <div
        className="team-1"
        style={{
          padding: 0
        }}
      >
        <BlurryNavbar />
        <ColoredNavbar location={{ ...this.props.location }} />
        <div className="title title-header" style={{ marginBottom: "8%" }}>
          {this.props.pageStore.berita.Header}
          <h4>{this.props.pageStore.berita.subheader}</h4>
        </div>
      </div>
    );
  }
}

class HeaderContentMobile extends Component {
  render() {
    return (
      <>
        <div
          className=" background-header-mobile"
          style={{
            padding: 0
          }}
        >
          <SidebarMobile />
          <div className="title title-header-mobile">
            {this.props.pageStore.berita.Header}
          </div>
        </div>
      </>
    );
  }
}

class HeaderNewsPage extends Component {
  renderContent = () => {
    if (isMobile) {
      return (
        <>
          <div
            style={{
              backgroundImage: `url(${this.props.pageStore.berita.backgroun_image})`,
              padding: 0,
              backgroundSize: "cover"
            }}
          >
            <HeaderContentMobile pageStore={{ ...this.props.pageStore }} />
            <BreakingNews />
          </div>
        </>
      );
    }
    return (
      <>
        <div
          style={{
            backgroundImage: `url(${this.props.pageStore.berita.backgroun_image})`,
            backgroundSize: "cover",
            padding: 0
          }}
        >
          <HeaderContent
            location={{ ...this.props.location }}
            pageStore={{ ...this.props.pageStore }}
          />
          <BreakingNews />
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
  currentLang: state.pageStore.currentLang
});

export default connect(mapStateToProps, null)(HeaderNewsPage);
