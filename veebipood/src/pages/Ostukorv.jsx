import { useState } from "react";

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);

  function kustuta(index) {
    tooted.splice(index, 1);
    setTooted(tooted.slice());
  }


  return (
    <div>
      <button onClick={() => setTooted ([])}>Tühjenda</button>
      <br />
      <div>Toodete koguarv: {tooted.length} tk</div>
      <div>{tooted.map((toode, index) => <div>{toode} <button onClick={() => kustuta(index)}>x</button></div>)}</div>
      <br />
    </div>
  )
}

export default Ostukorv