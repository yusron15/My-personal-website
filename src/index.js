import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Router
} from "react-router-dom";
import { Provider } from "react-redux";

import { createBrowserHistory } from "history";

import store from "./redux/ducks/store";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import Index from "views/Index.jsx";
import Presentation from "views/Presentation.jsx";
import Sections from "views/Sections.jsx";

// example pages
import AboutUs from "views/examples/AboutUs.jsx";
import BlogPost from "views/examples/BlogPost.jsx";
import BlogPosts from "views/examples/BlogPosts.jsx";
import ContactUs from "views/examples/ContactUs.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import Pricing from "views/examples/Pricing.jsx";
import Ecommerce from "views/examples/Ecommerce.jsx";
import ProductPage from "views/examples/ProductPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Error404 from "views/examples/Error404.jsx";
import Error500 from "views/examples/Error500.jsx";
import AccountSettings from "views/examples/AccountSettings.jsx";
import LoginPage from "views/examples/LoginPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ResetPage from "views/examples/ResetPage.jsx";
import InvoicePage from "views/examples/InvoicePage.jsx";
import CheckoutPage from "views/examples/CheckoutPage.jsx";
import ChatPage from "views/examples/ChatPage.jsx";

//TopgrowthPages
import { lang, LangContext } from "./components/MyContext.js";
import Landing from "views/layout/Landing.jsx";
import TentangKami from "views/layout/TentangKami.jsx";
import RekeningTerpisah from "views/layout/RekeningTerpisah.jsx";
import Legalitas from "views/layout/Legalitas.jsx";
import Cabang from "views/layout/Cabang.jsx";
import Cfd from "views/layout/Cfd.jsx";
import ForexGold from "views/layout/ForexGold.jsx";
import Komoditi from "views/layout/Komoditi.jsx";
import IndexFutures from "views/layout/IndexFutures.jsx";
import ProTrader from "views/layout/ProTrader.jsx";
import TopgrowthTrader from "views/layout/TopgrowthTrader.jsx";
import NewsPage from "views/layout/NewsPage.jsx";
import Contact from "views/layout/Contact.jsx";
import Karir from "views/layout/Karir.jsx";
import Forex from "views/layout/Forex.jsx";
import Gold from "views/layout/Gold.jsx";
import JamPerdagangan from "views/layout/JamPerdagangan.jsx";
import Login from "views/layout/Login.jsx";
import Register from "views/layout/Register.jsx";
import News from "views/layout/News.jsx";
import Edukasi from "views/layout/Edukasi.jsx";
import NewsMarketOutlook from "./components/NewsContent/NewsMarketOutlook";
import StockIndex from "./components/NewsPage/StockIndexContent";
import ForexCommodity from "./components/NewsPage/ForexCommodityContent";
import VideoContent from "./components/NewsPage/VideoContent";
import EconomicCalendar from "./components/NewsPage/EconomicCalendarContent";
import MarketOutlook from "./components/NewsPage/MarketOutlookContent";
import StockIndexInside from "./components/NewsPage/StockIndexInside";
import ForexCommodityInside from "./components/NewsPage/ForexCommodityInside";
import MarketOutlookInside from "./components/NewsPage/MarketOutlookInside";

//
import "animate.css/animate.min.css";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const hist = createBrowserHistory();

const theme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderWidth: "0.5px",
        input: {
          color: "white"
        },
        "& input:valid + fieldset": {
          borderColor: "white",
          borderWidth: 2,
          maxHeight: "50px"
        },
        "&:hover fieldset": {
          borderColor: "white"
        }
      }
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: lang.id,
      toggleLang: this.toggleLang
    };
    this.toggleLang = selectedLang => {
      if (selectedLang == "ID") {
        this.setState({
          lang: lang.id
        });
      } else if (selectedLang == "GB") {
        this.setState({
          lang: lang.eng
        });
      }
    };
  }

  render() {
    return (
      <Router history={hist}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <LangContext.Provider value={this.state}>
              <Switch>
                <Route
                  path="/landing"
                  render={props => <Landing {...props} />}
                />
                <Route
                  path="/tentangkami"
                  render={props => <TentangKami {...props} />}
                />
                <Route
                  path="/RekeningTerpisah"
                  render={props => <RekeningTerpisah {...props} />}
                />
                <Route
                  path="/Legalitas"
                  render={props => <Legalitas {...props} />}
                />
                <Route path="/Cabang" render={props => <Cabang {...props} />} />
                <Route path="/cfd" render={props => <Cfd {...props} />} />
                <Route
                  path="/ForexGold"
                  render={props => <ForexGold {...props} />}
                />
                <Route path="/Forex" render={props => <Forex {...props} />} />
                <Route path="/Gold" render={props => <Gold {...props} />} />
                <Route
                  path="/komoditi"
                  render={props => <Komoditi {...props} />}
                />
                <Route
                  path="/IndexFutures"
                  render={props => <IndexFutures {...props} />}
                />
                <Route
                  path="/ProTrader"
                  render={props => <ProTrader {...props} />}
                />
                <Route
                  path="/TopgrowthTrader"
                  render={props => <TopgrowthTrader {...props} />}
                />

                <Route
                  path="/NewsPage"
                  render={props => <NewsPage {...props} />}
                />

                <Route
                  path="/stockindex"
                  render={props => <StockIndex {...props} />}
                />
                <Route
                  path="/stockindexinside"
                  render={props => <StockIndexInside {...props} />}
                />

                <Route
                  path="/ForexCommodityInside"
                  render={props => <ForexCommodityInside {...props} />}
                />

                <Route
                  path="/MarketOutlookInside"
                  render={props => <MarketOutlookInside {...props} />}
                />

                <Route
                  path="/ForexCommodity"
                  render={props => <ForexCommodity {...props} />}
                />
                <Route
                  path="/EconomicCalendar"
                  render={props => <EconomicCalendar {...props} />}
                />
                <Route
                  path="/MarketOutlook"
                  render={props => <MarketOutlook {...props} />}
                />
                <Route
                  path="/VideoContent"
                  render={props => <VideoContent {...props} />}
                />
                <Route
                  path="/NewsMarketOutlook"
                  component={NewsMarketOutlook}
                />

                <Route path="/News" render={props => <News {...props} />} />
                <Route
                  path="/Contact"
                  render={props => <Contact {...props} />}
                />
                <Route path="/Karir" render={props => <Karir {...props} />} />
                <Route path="/Login" render={props => <Login {...props} />} />
                <Route
                  path="/Register"
                  render={props => <Register {...props} />}
                />
                <Route
                  path="/JamPerdagangan"
                  render={props => <JamPerdagangan {...props} />}
                />
                <Route
                  path="/Edukasi"
                  render={props => <Edukasi {...props} />}
                />
                <Route path="/index" render={props => <Index {...props} />} />

                <Route
                  path="/presentation"
                  render={props => <Presentation {...props} />}
                />
                <Route
                  path="/sections"
                  render={props => <Sections {...props} />}
                />
                <Route
                  path="/about-us"
                  render={props => <AboutUs {...props} />}
                />
                <Route
                  path="/blog-post"
                  render={props => <BlogPost {...props} />}
                />
                <Route
                  path="/blog-posts"
                  render={props => <BlogPosts {...props} />}
                />
                <Route
                  path="/contact-us"
                  render={props => <ContactUs {...props} />}
                />
                <Route
                  path="/landing-page"
                  render={props => <LandingPage {...props} />}
                />
                <Route
                  path="/pricing"
                  render={props => <Pricing {...props} />}
                />
                <Route
                  path="/ecommerce"
                  render={props => <Ecommerce {...props} />}
                />
                <Route
                  path="/product-page"
                  render={props => <ProductPage {...props} />}
                />
                <Route
                  path="/profile-page"
                  render={props => <ProfilePage {...props} />}
                />
                <Route
                  path="/404-error"
                  render={props => <Error404 {...props} />}
                />
                <Route
                  path="/500-error"
                  render={props => <Error500 {...props} />}
                />
                <Route
                  path="/account-settings"
                  render={props => <AccountSettings {...props} />}
                />
                <Route
                  path="/login-page"
                  render={props => <LoginPage {...props} />}
                />
                <Route
                  path="/register-page"
                  render={props => <RegisterPage {...props} />}
                />
                <Route
                  path="/reset-page"
                  render={props => <ResetPage {...props} />}
                />
                <Route
                  path="/invoice-page"
                  render={props => <InvoicePage {...props} />}
                />
                <Route
                  path="/checkout-page"
                  render={props => <CheckoutPage {...props} />}
                />

                <Route
                  path="/chat-page"
                  render={props => <ChatPage {...props} />}
                />
                <Redirect from="/" to="/landing" />
              </Switch>
            </LangContext.Provider>
          </Provider>
        </MuiThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
