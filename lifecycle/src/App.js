import React, { Component } from 'react';
import { Message } from "./Message";
import { List } from "./List";
import { ExternalCounter } from './ExternalCounter';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.log("Komponent App, metoda render.");

    return <div className="container text-center">
      <div className="row p-2">
        <div className="col-4">
          <Message message={`Licznik: ${this.state.counter}`}
            callback={this.incrementCounter}
            text="Inkrementuj licznik" />
        </div>
        <div className="col-4">
          <List />
        </div>
        <div className="col-4">
          <ExternalCounter />
        </div>
      </div>
    </div>
  }
}