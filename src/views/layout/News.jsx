import React from "react";
import ColoredNavbar from "../../components/Navbars/ColoredNavbar.jsx";
import NewsStockIndex from "../../components/NewsContent/NewsStockIndex.jsx";
import ForexCommodity from "../../components/NewsContent/ForexCommodity";
import Footer from "../../components/Footers/Footer.jsx";
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

class NewsPage extends React.Component {
  state = { activeTab: "1" };
  componentDidMount = () => {
    window.scroll(0, 0);
  };
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <ColoredNavbar />
        <ForexCommodity />
        <Footer />
      </>
    );
  }
}

export default NewsPage;
