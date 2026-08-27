import { useState } from "react";

function Tooted() {
    const [tooted, setTooted] = useState([
{"toode": "Aknapesuvedelik", "hind":"12"},
{"toode": "Mootoriõli", "hind":"23"},
{"toode": "Jahutusvedelik", "hind":"18"},
{"toode": "Pidurivedelik", "hind":"26"},
{"toode": "Klaasipuhastid", "hind":"36"},
{"toode": "Autošampoon", "hind":"8"},
{"toode": "Rattapoltide võti", "hind":"15"},
{"toode": "Akulaadija", "hind":"32"},
{"toode": "Lumehari", "hind":"17"},
{"toode": "Salongifilter", "hind":"30"}

]);

function sorteeriAZ() {
    tooted.sort((a,b) => a.localeCompare(b));
    setTooted(tooted.slice());
}

function sorteeriZA() {
    tooted.sort((a,b) => b.localeCompare(a));
    setTooted(tooted.slice());
}

function sorteeriTahedKasvavalt (){
     tooted.sort((a,b) => a.length - b.length);
     setTooted(tooted.slice());
}

function sorteeriTahedKahanevalt (){
     tooted.sort((a,b) => b.length - a.length);
     setTooted(tooted.slice());
}

  return (
    <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>

        
        <div>{tooted.map(tooted => <div key={tooted.toode}>{tooted.toode} - {tooted.hind}</div>)}</div>
    </div>
  )
}

export default Tooted