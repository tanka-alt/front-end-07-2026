import { useState } from "react";


function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = useState([
    {"keskus": "Rocca al Mare", "tel": "5123456", "aadress": "Loomaaia 30"} ,
    {"keskus": "Kristiine", "tel": "51765767", "aadress": "Loomaaia 31"} ,
    {"keskus": "Ülemiste", "tel": "51343434", "aadress": "Loomaaia 32"} ,
    {"keskus": "Magistrali", "tel": "51243434", "aadress": "Loomaaia 33"} ,
    {"keskus": "Vesse", "tel": "512434434", "aadress": "Loomaaia 34"} ,
  
    
  ]);

  function sorteeriAZ() {
    esindused.sort((a,b) => a.keskus.localeCompare(b.keskus));
    setEsindused(esindused.slice());
}

function sorteeriZA() {
    esindused.sort((a,b) => b.keskus.localeCompare(a.keskus));
    setEsindused(esindused.slice());
}

  return (
    <div>
      <div>Hetkel aktiivne linn {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" &&
      <>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      {esindused.map(esindus => <div key={esindus.keskus}>{esindus.keskus} - ({esindus.tel}) - {esindus.aadress}</div>)}

      {/* <div>Rocca al Mare</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
      <div>Ülemiste</div>
      <div>Magistrali</div>
      <div>Vesse</div> */}
      </>}
      
      {linn === "Tartu" &&
      <>
      <div>Raatuse</div>
      <div>Lõunakeskus</div>
      </>}

      {linn === "Narva" && <div>Fama</div>}
      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused