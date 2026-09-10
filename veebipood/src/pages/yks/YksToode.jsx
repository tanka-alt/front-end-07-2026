import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function YksToode() {
  const { toodeid } = useParams();
  const [toode, setToode] = useState({});

  useEffect(() => {
      fetch("https://6a958883fa33b37f821ac17c.mockapi.io/HaldaToode/" + toodeid)
      .then(response => response.json())
      .then(json => setToode(json));
  }   , [toodeid]);

  return (
    <div>
        Toode ID on {toodeid}
        <div>Tootja: {toode.id}</div>
        <div>Tootja: {toode.nimi}</div>
        <div>Mark: {toode.hind}</div>
        <div>Hind: {toode.kirjeldus}€</div>
        <img src={toode.pilt} alt="" />
    </div>
  )
}

export default YksToode;