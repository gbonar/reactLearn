import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Gotowy!",
      counter: 0,
      theme: "secondary"
    }
  }

  handleEvent = (event, newTheme) => {
    event.persist();
    this.setState({
      counter: this.state.counter + 1,
      theme: newTheme
    }, () => this.setState({ message: `${event.type}: ${this.state.counter}` }));
  }

  render() {
    return <div className="m-2">
      <div className={`h4 bg-${this.state.theme}
        text-white text-center p-2`}>
        {this.state.message}
      </div>
      <div className="text-center">
        <button className="btn btn-primary"
          onClick={(e) => this.handleEvent(e, "primary")} >
          normalny
      </button>
        <button className="btn btn-danger m-1"
          onClick={(e) => this.handleEvent(e, "danger")} >
          uwaga!
      </button>
      </div>
    </div>
  }
}