import React from "react";
import { Message } from "./Message";
import { Summary } from "./Summary";

export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">
        Witaj, Adamie!
  </h1>
<Message greeting="Witaj" name="Jarku" />
<Message greeting="Siema" name={"Alu " + "Zuch"} />
<Message greeting="Cześć" name="Marku" />
<Summary />
    </div>
  )
}

