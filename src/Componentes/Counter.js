import React, { Component } from "react";
import { Button } from "reactstrap";

class Counter extends Component {
  state = { valor: this.props.value };

  //The first function:
  incrementCounter =() => {
    console.log("Im here!");
    this.setState({ valor: this.state.valor + 1 });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "rgba(202,202,202,0.75)" }}>
          <h3>{this.props.title}</h3>
          <div>{this.state.valor}</div>
          <Button onClick={this.incrementCounter}> + </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
