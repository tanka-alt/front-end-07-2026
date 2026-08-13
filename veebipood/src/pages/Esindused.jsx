import { useState } from "react";


function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
      <div>Hetkel aktiivne linn {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" &&
      <>
      <div>Rocca al Mare</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
      <div>Ülemiste</div>
      <div>Magistrali</div>
      <div>Vesse</div>
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