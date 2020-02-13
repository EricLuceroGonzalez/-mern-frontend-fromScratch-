import React, { Component } from "react";
import Counter from "./Counter";

const counterSty = {
  backgroundColor: "rgba(232,252,102,0.75)",
  padding: "18px 12px"
};
class Counters extends Component {
  state = {};
  render() {
    return (
      <div style={counterSty}>
        <h2>Counters Component</h2>
        <Counter title={"The props Title"} value={4}></Counter>
      </div>
    );
  }
}

export default Counters;
