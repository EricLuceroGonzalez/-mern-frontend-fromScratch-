import React, { Component } from "react";
import Counter from "./Counter";

const counterSty = {
  backgroundColor: "rgba(232,252,102,0.75)",
  padding: "18px 12px"
};
class Counters extends Component {
  state = {
    contadores: [
      { id: 0, title: "Alpha", value: 0 },
      { id: 1, title: "Beta", value: 5 },
      { id: 2, title: "Gamma", value: -10 },
      { id: 3, title: "Omega", value: 0 },
      { id: 4, title: "Omega-2", value: 3 }
    ]
  };

  // This function wil be executed from child component and will eliminate the Counter with that id (pass as parameter)
  deleteCounter = id => {
    const newCounter = this.state.contadores.filter(item => item.id !== id);
    this.setState({ contadores: newCounter });
  };

  renderCounters() {
    const allCounters = this.state.contadores.map((item, iKey) => {
      return (
        <Counter
          key={iKey}
          id={item.id}
          title={item.title}
          value={item.value}
          deleteThisOne={this.deleteCounter}
        ></Counter>
      );
    });
    return allCounters;
  }
  render() {
    return (
      <div style={counterSty}>
        <h2>Counters Component</h2>
        {this.renderCounters()}
      </div>
    );
  }
}

export default Counters;
