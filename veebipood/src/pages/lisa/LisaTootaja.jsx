import { useRef, useState } from "react";

function LisaTootaja() {
  const [sonum, setSonum] = useState("");
  const nimiRef = useRef();
  const hindRef = useRef();
  const kirjeldusRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimetusega ei saa toodet lisada");
      return;
    }

    fetch("https://6a958883fa33b37f821ac17c.mockapi.io/employees/", {
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
        setSonum("Töötaja lisatud (id: " + json.id + ")");
        nimiRef.current.value = "";
        hindRef.current.value = "";
        kirjeldusRef.current.value = "";
      })
      .catch(() => {
        setSonum("Töötaja lisamine ebaõnnestus");
      });
  }

  return (
    <div>
      <label>Töötaja nimi</label>
      <input ref={nimiRef} type="text" /> <br />
      <label>Töötaja email</label>
      <input ref={hindRef} type="email" /> <br />
      <label>Töötaja telefon</label>
      <input ref={kirjeldusRef} type="number" /> <br />
      <button onClick={lisa}>Lisa töötaja</button>
      <p>{sonum}</p>
    </div>
  );
}

export default LisaTootaja;