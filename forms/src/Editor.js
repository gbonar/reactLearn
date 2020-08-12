import React, { Component } from "react";

export class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Kuba",
            flavor: "wanilia",
            toppings: ["truskawki"]
        }
        this.flavors = ["czekolada", "podwójna czekolada",
            "potrójna czekolada", "wanilia"];
        this.toppings = ["posypka", "polewa czekoladowa",
            "truskawki", "syrop klonowy"]
    }

    updateFormValue = (event) => {
        this.setState({ [event.target.name]: event.target.value },
            () => this.props.submit(this.state));
    }

    updateFormValueOptions = (event) => {
        let options = [...event.target.options]
            .filter(o => o.selected).map(o => o.value);
        this.setState({ [event.target.name]: options },
            () => this.props.submit(this.state));
    }

    render() {
        return <div className="h5 bg-info text-white p-2">
            <div className="form-group">
                <label>Imię</label>
                <input className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.updateFormValue} />
            </div>
            <div className="form-group">
                <label>Smaki lodów</label>
                <select className="form-control"
                    name="flavor" value={this.state.flavor}
                    onChange={this.updateFormValue} >
                    {this.flavors.map(flavor =>
                        <option value={flavor} key={flavor}>
                            {flavor}
                        </option>
                    )}
                </select>
            </div>
            <div className="form-group">
                <label>Dodatki do lodów</label>
                <select className="form-control" multiple={true}
                    name="toppings" value={this.state.toppings}
                    onChange={this.updateFormValueOptions}>
                    {this.toppings.map(top =>
                        <option value={top} key={top}>
                            {top}
                        </option>
                    )}
                </select>
            </div>
        </div>
    }
}