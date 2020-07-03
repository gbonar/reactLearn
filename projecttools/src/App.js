import React, { Component } from 'react';
import "./App.css";
import reactLogo from "./logo.svg";

let name = "Adam";
const city = "Wrocław";

export default class extends Component {
  message = () => `Użytkownik ${name} z miasta ${city}`;
  render = () =>
    <div className="text-center">
      <h4 className="bg-primary text-white text-center p-3">
        {this.message()}
      </h4>
      <img src={reactLogo} alt="Logo Reacta" />
      <link rel="stylesheet"
        href={process.env.PUBLIC_URL + "/static.css"} />
      <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="Logo Reacta" />
    </div>
}