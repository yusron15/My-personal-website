import React, { Component } from "react";
import axios from "axios";

const API = "http://rest.learncode.academy/api/ucon/news/";
const DEFAULT_QUERY = "redux";

class fetchJson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(API + DEFAULT_QUERY);
      this.setState({
        hits: result.data.hits,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
}
export default fetchJson;
