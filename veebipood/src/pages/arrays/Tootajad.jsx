import { useState } from "react";

function Tootajad() {
    const [tootajad, setTootajad] = useState([
"Rasmus Tamm",
"Laura Kallas",
"Kaspar Sepp",
"Marta Saar",
"Sander Lõhmus",
"Eliise Rebane",
"Markus Oja",
"Anni Kuusk",
"Kristjan Vaher",
"Liis Kivi",
]);

function sorteeriAZ() {
    tootajad.sort((a,b) => a.localeCompare(b));
    setTootajad(tootajad.slice());
}

function sorteeriZA() {
    tootajad.sort((a,b) => b.localeCompare(a));
    setTootajad(tootajad.slice());
}

function sorteeriTahedKasvavalt (){
     tootajad.sort((a,b) => a.length - b.length);
     setTootajad(tootajad.slice());
}

function sorteeriTahedKahanevalt (){
     tootajad.sort((a,b) => b.length - a.length);
     setTootajad(tootajad.slice());
}

  return (
    <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>

        
        <div>{tootajad.map(tootaja => <div>{tootaja}</div>)}</div>
    </div>
  )
}

export default Tootajad

//10 töötajat, kustutamine, sorteerimine, A-z, Z-a, kasvav, kahanev
