import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Thanks extends Component {
  render() {
    return <div>
      <div className="col bg-dark text-white">
        <div className="navbar-brand">Sklep SPORTSSTORE</div>
      </div>
      <div className="m-2 text-center">
        <h2>Dziękujemy!</h2>
        <p>Dziękujemy za złożenie zamówienia.</p>
        <p>Twoje zamówinie ma numer: #{this.props.order ? this.props.order.id : 0}</p>
        <p>Zamówione produkty wyślemy możliwie jak najszybciej.</p>
        <Link to="/shop" className="btn btn-primary">
          Wróc co sklepu
        </Link>
      </div>
    </div>
  }
}