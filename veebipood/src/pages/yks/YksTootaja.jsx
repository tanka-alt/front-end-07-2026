import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function YksTootaja() {
  const { tootajaid } = useParams();
  const [tootaja, setTootaja] = useState({});

  useEffect(() => {
      fetch("https://6a958883fa33b37f821ac17c.mockapi.io/employees/" + tootajaid)
      .then(response => response.json())
      .then(json => setTootaja(json));
  }   , [tootajaid]);

  return (
    <div>
        Tootaja ID on {tootajaid}
        <div>Tootja: {tootaja.id}</div>
        <div>Tootja: {tootaja.nimi}</div>
        <div>Mark: {tootaja.email}</div>
        <div>Hind: {tootaja.telefon}€</div>
        <img src={tootaja.pilt} alt="" />
    </div>
  )
}

export default YksTootaja;