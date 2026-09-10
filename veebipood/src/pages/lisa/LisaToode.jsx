import { useRef, useState } from "react";

function LisaToode() {
  const [sonum, setSonum] = useState("");
  const nimiRef = useRef();
  const hindRef = useRef();
  const kirjeldusRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimetusega ei saa toodet lisada");
      return;
    }

    fetch("https://6a958883fa33b37f821ac17c.mockapi.io/HaldaToode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nimi: nimiRef.current.value,
        hind: Number(hindRef.current.value),
        kirjeldus: kirjeldusRef.current.value
      })
    })
      .then(response => response.json())
      .then(json => {
        setSonum("Toode lisatud (id: " + json.id + ")");
        nimiRef.current.value = "";
        hindRef.current.value = "";
        kirjeldusRef.current.value = "";
      })
      .catch(() => {
        setSonum("Toote lisamine ebaõnnestus");
      });
  }

  return (
    <div>
      <label>Toote nimi</label>
      <input ref={nimiRef} type="text" /> <br />
      <label>Toote hind</label>
      <input ref={hindRef} type="number" /> <br />
      <label>Toote kirjeldus</label>
      <input ref={kirjeldusRef} type="text" /> <br />
      <button onClick={lisa}>Lisa toode</button>
      <p>{sonum}</p>
    </div>
  );
}

export default LisaToode;