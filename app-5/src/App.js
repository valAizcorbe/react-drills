import React, { Component } from "react";
import "./App.css";
import Image from "./components/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Image url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1o6bxTvv0rD6TB3egGnvDCjY3si3TytzAlihfOpRO19wk8k2"} />
      </div>
    );
  }
}

export default App;
