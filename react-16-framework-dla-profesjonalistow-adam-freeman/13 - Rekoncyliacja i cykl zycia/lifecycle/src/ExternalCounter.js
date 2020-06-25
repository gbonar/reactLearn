import React, { Component } from "react";
import { ActionButton } from "./ActionButton";

let externalCounter = 0;

export class ExternalCounter extends Component {
  incrementCounter = () => {
    externalCounter++;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <ActionButton callback={this.incrementCounter}
          text="Licznik zewnętrzny" />
        <div className="h5 text-center p-2">
          Licznik zewnętrzny: {externalCounter}
        </div>
      </div>
    )
  }
}
