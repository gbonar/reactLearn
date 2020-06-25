import React, { Component } from "react";

export class ThemeButton extends Component {

  handleClick = (event, capturePhase = false) => {
    console.log(`ThemeButton: Type: ${event.type} `
      + `Target: ${event.target.tagName} `
      + `CurrentTarget: ${event.currentTarget.tagName}`);
    if (capturePhase) {
      if (this.props.theme === "danger") {
        event.stopPropagation();
        console.log("Zdarzenie zostało zatrzymane!");
      } else {
        console.log("Pomijam wywołanie właściwości - faza przechwytywania...");
      }
    } else if (event.bubbles && event.currentTarget !== event.target) {
      console.log("Pomijam wywołanie właściwości - faza propagacji w górę...");
    } else {      
      console.log("Wywołuję funkcyjną właściwość props...");
      this.props.callback(this.props.theme);
    }
  }

  render() {
    return  <span className="m-1" onClick={this.handleClick}
                    onClickCapture={ (e) => this.handleClick(e, true) }>
              <button className={`btn btn-${this.props.theme}`}
                  onClick={this.handleClick}>
                Wybierz temat "{this.props.theme}"
              </button>
            </span>
  }
}