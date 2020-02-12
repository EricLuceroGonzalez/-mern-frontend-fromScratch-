import React, { Component } from "react";

class Counter extends Component {
  state = { valor: this.props.value };
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "rgba(202,202,202,0.75)" }}>
          <h3>{this.props.title}</h3>
          <div>{this.state.valor}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
