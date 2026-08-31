import { useEffect, useState } from "react";

function Tootajad() {
    const [tootajad, setTootajad] = useState([]);
  
    useEffect(() => {
      fetch("https://6a958883fa33b37f821ac17c.mockapi.io/employees")
      .then(response => response.json())
      .then(json => setTootajad(json));
}, []);


function sorteeriAZ() {
    tootajad.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setTootajad(tootajad.slice());
}

function sorteeriZA() {
    tootajad.sort((a,b) => b.nimi.localeCompare(a.nimi));
    setTootajad(tootajad.slice());
}

function sorteeriTahedKasvavalt (){
     tootajad.sort((a,b) => a.nimi.length - b.nimi.length);
     setTootajad(tootajad.slice());
}

function sorteeriTahedKahanevalt (){
     tootajad.sort((a,b) => b.nimi.length - a.nimi.length);
     setTootajad(tootajad.slice());
}


  return (
    <div>
			<button onClick={sorteeriAZ}>Sorteeri A-Z</button>
			<button onClick={sorteeriZA}>Sorteeri Z-A</button>
			<button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
			<button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>

			<div>{tootajad.map(tootaja => 
				<div key={tootaja.id}>
				{tootaja.nimi} ({tootaja.email}) - {tootaja.telefon}
				</div>)}
			</div>
    </div>
  )
}
export default Tootajad

