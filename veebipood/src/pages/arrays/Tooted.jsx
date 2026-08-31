import { useEffect, useState } from "react";

function Tooted() {
     const [tooted, setTooted] = useState([]);
  
    useEffect(() => {
      fetch("https://6a958883fa33b37f821ac17c.mockapi.io/HaldaToode")
      .then(response => response.json())
      .then(json => setTooted(json));
    }, []);

function sorteeriAZ() {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setTooted(tooted.slice());
}

function sorteeriZA() {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    setTooted(tooted.slice());
}

function sorteeriTahedKasvavalt (){
     tooted.sort((a,b) => a.nimi.length - b.nimi.length);
     setTooted(tooted.slice());
}

function sorteeriTahedKahanevalt (){
     tooted.sort((a,b) => b.nimi.length - a.nimi.length);
     setTooted(tooted.slice());
}

  return (
    <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>

        <div>{tooted.map(toode => 
          <div key={toode.id}>
          {toode.nimi} ({toode.hind}) - {toode.kirjeldus}€
          </div>)}
        </div>
    </div>
  )
}

export default Tooted;