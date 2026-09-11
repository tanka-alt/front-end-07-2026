  import { useRef, useState, useEffect } from "react";
  
  
  function LisaAuto() {
  const [sonum, setSonum] = useState("");
  const [tootjad, setTootjad] = useState([]);
  const tootjaRef = useRef();
  const markRef = useRef();
  const hindRef = useRef();
  const varvRef = useRef();
  const piltRef = useRef();
  const varvESTRef = useRef();

  useEffect(() => {
    fetch ("carapi/api/makes/v2")
      .then(response => response.json())
      .then(json => setTootjad(json.data))
  }, []);

  function lisa() {
    if (tootjaRef.current.value === "") {
      setSonum("Tühja tootja nimega autot ei saa lisada");
      return; // funktsioon lõpetab töö, kui tootja on tühi
    }

      if (markRef.current.value === "") {
      setSonum("Tühja marki nimega autot ei saa lisada");
      return;
    }

      if (hindRef.current.value === "") {
      setSonum("Tühja hinnaga autot ei saa lisada");
      return;
    }

      if (varvRef.current.value === "") {
      setSonum("Tühja värviga autot ei saa lisada");
      return;
    }
      if (piltRef.current.value === "") {
      setSonum("Tühja pildiga autot ei saa lisada");
      return;
    }

    setSonum("Auto sisestatud");
    fetch("https://6a917d2e7751d35ce47e889a.mockapi.io/autod", {
      method: "POST",
      body: JSON.stringify({
        tootja: tootjaRef.current.value,
        mark: markRef.current.value,
        hind: hindRef.current.value,
        varv: varvRef.current.value,
        varvEST: varvRef.current.value,
        pilt: piltRef.current.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
      } )

  }

  return (
    <div>      
      <div>{sonum}</div>
      <label>Auto tootja</label> <br />
      <select ref={tootjaRef}>
        {tootjad.map(tootja => <option key={tootja.id}>{tootja.name}</option>)}
      </select> <br />
      <label>Auto mark</label> <br />
      <input ref={markRef} type="text" /> <br />
      <label>Auto hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <label>Auto värv inglise keeles</label> <br />
      <input ref={varvRef} type="text" /> <br />
      <label>Auto värv eesti keeles</label> <br />
      <input ref={varvRef} type="text" /> <br />        
      <label>Auto pilt</label> <br />
      <input ref={piltRef} type="text" /> <br /> 
      <button onClick={() => lisa()}>Sisesta</button> <br />
    </div>
  )
}

export default LisaAuto;