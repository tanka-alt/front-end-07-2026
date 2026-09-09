import { useRef } from "react";

function LisaHind() {
  const hindRef = useRef();
  const sonanaRef = useRef();

  function lisa() {
    fetch("https://6a917d2e7751d35ce47e889a.mockapi.io/hinnad", {
      method: "POST",
      body: JSON.stringify({
        arv: hindRef.current.value,
        sonana: sonanaRef.current.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  return (
    <div>
      <label>Hind arvuna</label>
      <input ref={hindRef} type="number" /> <br />
      <label>Hind sõnana</label>
      <input ref={sonanaRef} type="text" /> <br />  
      <button onClick={() => lisa()}>Lisa hind</button>    
    </div>
  )
}

export default LisaHind