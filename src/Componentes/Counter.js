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
        <div
          className="container col-md-8 col-8"
          style={{
            fontSize: "2em",
            background:
              "linear-gradient(170deg, rgba(14,254,118,1) 0%, rgba(38,240,160,0.8) 100%)",
            padding: "20px 12px",
            borderRadius: "14px",
            boxShadow: "2px 6px 10px gray",
            margin: "30px auto"
          }}
        >
          <h2 className="ml-2">Titulo: {this.props.title}</h2>
          <div className="row align-items-start ml-2">
            <div className="container" style={{ padding: "1px 4px" }}>
              {this.renderValor()}
            </div>
            <Button
              onClick={this.incrementCounter}
              className="ml-2 mr-2"
              color="primary"
            >
              +
            </Button>
            <Button color="danger" onClick={this.decrementCounter}>
              -
            </Button>
            <Button
              color="success"
              className="ml-4"
              //onClick will excecute this function
              onClick={() => this.props.deleteThisOne(this.props.id)}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
