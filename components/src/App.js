import React from "react";
//import { Message } from "./Message";
import { Summary } from "./Summary";

export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">
        Witaj, Adamie!
  </h1>
  
  <Summary dupa="aaa" names={["Jarek", "Ala", "Marek"]} />
    </div>
  )
}

