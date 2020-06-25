import React, { Component } from "react";

export default class App extends Component {

  render = () =>
    <div className="m-2">
      <div className="form-group">
        <label>Imię:</label>
        <input className="form-control" />
      </div>
      <div className="form-group">
        <label>Miejscowość:</label>
        <input className="form-control" />
      </div>
    </div>
}
