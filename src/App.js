import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    msg: "default",
  };

  componentDidMount() {
    axios.get(`http://localhost:8080`).then((res) => {
      const response = res.data; 
      this.setState({ msg: response.msg });
    });
  }

  render() {
    return (
      <div>
        {this.state.msg}
      </div>
    );
  }
}

export default App;
