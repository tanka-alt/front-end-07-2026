import { useState } from "react";

function Tootajad() {
    const [tootajad, setTootajad] = useState([
{"nimi": "Rasmus Tamm", "email": "rasmus.tamm@auto.ee"},
{"nimi": "Laura Kallas", "email": "laura.kallas@auto.ee"},
{"nimi": "Kaspar Sepp", "email": "kaspar.sepp@auto.ee"},
{"nimi": "Marta Saar", "email": "marta.saar@auto.ee"},
{"nimi": "Sander Lõhmus", "email": "sander.lohmus@auto.ee"},
{"nimi": "Eliise Rebane", "email": "eliise.rebane@auto.ee"},
{"nimi": "Markus Oja", "email": "markus.oja@auto.ee"},
{"nimi": "Anni Kuusk", "email": "anni.kuusk@auto.ee"},
{"nimi": "Kristjan Vaher", "email": "kristjan.vaher@auto.ee"},
{"nimi": "Liis Kivi", "email": "liis.kivi@auto.ee"},

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

        
        <div>{tootajad.map(tootaja => <div key={tootaja.nimi}>{tootaja.nimi} <br /> 
            {tootaja.email}</div>)}</div>
    </div>
  )
}

export default Tootajad

