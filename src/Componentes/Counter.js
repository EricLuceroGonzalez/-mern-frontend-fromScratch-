import React, { Component } from "react";

class Counter extends Component {
  state = { valor: this.props.value };
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>{this.props.title}}</h3>
          <div>{this.state.valor}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
