import React, { Component } from 'react';
//import { Message } from "./Message";
import { DirectionDisplay } from './DirectionDisplay';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  
  changeCounter = (val) => {
    this.setState({ counter: this.state.counter + val })
  }

  render() {
    console.log("Komponent App, metoda render.");
    return (
      <div className="container text-center">
        <DirectionDisplay value={this.state.counter} />
        <div className="text-center">
          <button className="btn btn-primary m-1"
            onClick={() => this.changeCounter(-1)}>Pomniejsz</button>
          <button className="btn btn-primary m-1"
            onClick={() => this.changeCounter(1)}>Powiększ</button>
        </div>
      </div>
    )
  }
}