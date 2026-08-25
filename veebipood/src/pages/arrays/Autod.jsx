import { useState } from "react";

function Autod() {
    const [autod, setAutod] = useState([
  {"mark": "Toyota Camry", "hind": 35000, "aasta": 2024, "pilt": ""},
  {"mark": "Honda Civic", "hind": 34000, "aasta": 2015, "pilt": ""},
  {"mark": "Ford Mustang", "hind": 33000, "aasta": 2016, "pilt": ""},
  {"mark": "Chevrolet Corvette", "hind": 32000, "aasta": 2017, "pilt": ""},
  {"mark": "BMW M3", "hind": 31000, "aasta": 2018, "pilt": ""},
  {"mark": "Porsche 911", "hind": 30000, "aasta": 2019, "pilt": ""},
  {"mark": "Tesla Model 3", "hind": 29000, "aasta": 2020, "pilt": ""},
  {"mark": "Mazda MX-5 Miata", "hind": 28000, "aasta": 2021, "pilt": ""},
  {"mark": "Audi A4", "hind": 27000, "aasta": 2022, "pilt": ""},
  {"mark": "Mercedes-Benz C-Class", "hind": 26000, "aasta": 2023, "pilt": ""},

]);

function sorteeriAZ() {
    autod.sort((a,b) => a.mark.localeCompare(b.mark));
    setAutod(autod.slice());
}

function sorteeriZA() {
    autod.sort((a,b) => b.mark.localeCompare(a.mark));
    setAutod(autod.slice());
}

function sorteeriTahedKasvavalt (){
     autod.sort((a,b) => a.mark.length - b.mark.length);
     setAutod(autod.slice());
}

function sorteeriTahedKahanevalt (){
     autod.sort((a,b) => b.mark.length - a.mark.length);
     setAutod(autod.slice());
}

  return (
    <div>
        <button onClick={sorteeriAZ}>Sorteeri mark A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri mark Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri margi tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri margi tähtede arv kahanevalt</button>

        
        <div>{autod.map(auto => <div key={auto.mark}>({auto.aasta}) - {auto.hind}€</div>)}</div>
    </div>
  )
}

export default Autod