import React from "react";
import { Summary } from "./Summary";

let names = ["Jarek", "Ala", "Marek"];

export default function App() {
  return (
    <table className="table table-sm table-striped">
      <thead>
        <tr><th>nr</th><th>imię</th><th>liczba liter</th></tr>
      </thead>
      <tbody>
        {names.map((name, index) =>
          <tr key={name}>
            <Summary index={index} name={name} />
          </tr>
        )}
      </tbody>
    </table>
  )
}

