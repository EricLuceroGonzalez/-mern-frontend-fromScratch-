import React, { Component } from "react";
import { Button } from "reactstrap";

class Counter extends Component {
  state = { valor: this.props.value };

  //The first function:
  incrementCounter = () => {
    console.log("Im here!");
    this.setState({ valor: this.state.valor + 1 });
  };

  //The second function:
  decrementCounter = () => {
    console.log("Im here!");
    this.setState({ valor: this.state.valor - 1 });
  };

  // A function to render values and return the item according to their value:
  renderValor = () => {
    if (this.state.valor < 0) {
      return <p style={{ color: "red" }}>{this.state.valor}</p>;
    } else if (this.state.valor === 0) {
      return <p style={{ color: "blue" }}>{this.state.valor}</p>;
    } else {
      return <p style={{ color: "green" }}>{this.state.valor}</p>;
    }
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "rgba(202,202,202,0.75)" }}>
          <h3>{this.props.title}</h3>
          <div className="row">{this.renderValor()}</div>
          <Button onClick={this.incrementCounter}> + </Button>
          <Button onClick={this.decrementCounter}> - </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
