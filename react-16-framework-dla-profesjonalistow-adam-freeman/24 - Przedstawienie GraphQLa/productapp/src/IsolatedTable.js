import React, { Component } from "react";
import { RestDataSource } from "./webservice/RestDataSource";
import { Link } from "react-router-dom";

export class IsolatedTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.dataSource = new RestDataSource("http://localhost:3500/api/products",
      (err) => this.props.history.push(`/error/${err}`));
  }  

  deleteProduct(product) {
    this.dataSource.Delete(product,
      () => this.setState({
        products: this.state.products.filter(p =>
          p.id !== product.id)
      }));
  }

  render() {
    return <table className="table table-sm table-striped table-bordered">
      <thead>
        <tr><th colSpan="5"
          className="bg-info text-white text-center h4 p-2">
          Produkty (komponent odizolowany)
        </th></tr>
        <tr>
          <th>ID</th><th>Nazwa</th><th>Kategoria</th>
          <th className="text-right">Cena</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          this.state.products.map(p => <tr key={p.id}>
            <td>{p.id}</td><td>{p.name}</td><td>{p.category}</td>
            <td className="text-right">
              {Number(p.price).toFixed(2).replace(".",",")} zł
            </td>
            <td>
              <Link className="btn btn-sm btn-warning mx-2"
                  to={`/isolated/edit/${p.id}`}>
                Edytuj
              </Link>
              <button className="btn btn-sm btn-danger mx-2"
                  onClick={() => this.deleteProduct(p)}>
                Usuń
              </button>
            </td>
          </tr>)
        }
      </tbody>
      <tfoot>
        <tr className="text-center">
          <td colSpan="5">
            <Link to="/isolated/create"
              className="btn btn-info">Utwórz nowy</Link>
            <button className="btn btn-danger mx-2"
                onClick={() => this.dataSource.GetOne("err")}>
              Wygeneruj błąd
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  }

  componentDidMount() {
    this.dataSource.GetData(data => this.setState({ products: data }));
  }
}      