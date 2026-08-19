import { useState } from "react";

function Autod() {
    const [autod, setAutod] = useState([
  "Toyota Camry",
  "Honda Civic",
  "Ford Mustang",
  "Chevrolet Corvette",
  "BMW M3",
  "Porsche 911",
  "Tesla Model 3",
  "Mazda MX-5 Miata",
  "Audi A4",
  "Mercedes-Benz C-Class"
]);

function sorteeriAZ() {
    autod.sort((a,b) => a.localeCompare(b));
    setAutod(autod.slice());
}

function sorteeriZA() {
    autod.sort((a,b) => b.localeCompare(a));
    setAutod(autod.slice());
}

function sorteeriTahedKasvavalt (){
     autod.sort((a,b) => a.lenght - b.lenght);
     setAutod(autod.slice());
}

function sorteeriTahedKahanevalt (){
     autod.sort((a,b) => b.lenght - a.lenght);
     setAutod(autod.slice());
}

  return (
    <div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>

        
        <div>{autod.map(auto => <div>{auto}</div>)}</div>
    </div>
  )
}

export default Autod