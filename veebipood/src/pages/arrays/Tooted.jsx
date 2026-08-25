import { useState } from "react";

function Tooted() {
    const [tooted, setTooted] = useState([
"Aknapesuvedelik",
"Mootoriõli",
"Jahutusvedelik",
"Pidurivedelik",
"Klaasipuhastid",
"Autošampoon",
"Rattapoltide võti",
"Akulaadija",
"Lumehari",
"Salongifilter"

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

        
        <div>{tooted.map(tootaja => <div>{tootaja}</div>)}</div>
    </div>
  )
}

export default Tooted