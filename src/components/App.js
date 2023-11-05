import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate from "../logic/calculate";
import "./styles/App.css";

export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    console.log(this.state);
    return (
      <>
        <div className="calculator">
          <Display value={this.state.next || this.state.total || "0"} />
          <ButtonPanel clickHandler={this.handleClick}/>
        </div>
      </>
    );
  }
}
