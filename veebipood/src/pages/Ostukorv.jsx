import { useState, useEffect } from "react";

  function Ostukorv() {
    const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);
    const [parcelMachines, setParcelMachines] = useState([]);

  function kustuta(index) {
    tooted.splice(index, 1);
    setTooted(tooted.slice());
  }

  useEffect(() => {
    const fetchParcelMachines = async () => {
      const response = await fetch("https://www.omniva.ee/locations.json");
      const data = await response.json();
      setParcelMachines(data);
    }

    fetchParcelMachines();
  }, []);

  async function pay() {
    const response = await fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA=="
      },
      body: JSON.stringify({
        "account_name": "EUR3D1",
        "amount": 10.00,
        "timestamp": new Date(),
        "nonce": new Date() + Math.random(),
        "order_reference": "ORDER-12345",
        "customer_url": "https://yourwebsite.com/thank-you",
        "api_username": "e36eb40f5ec87fa2",
      })
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <button onClick={() => setTooted ([])}>Tühjenda</button>
      <br />
      <div>Toodete koguarv: {tooted.length} tk</div>
      <div>{tooted.map((toode, index) => <div>{toode} <button onClick={() => kustuta(index)}>x</button></div>)}</div>
      <br />
      <select>
        {parcelMachines.map((pm, index) => <option key={index}>{pm.NAME}</option>)}
      </select>

      <button onClick={() => pay()}>Pay</button>
    </div>
  )
}

export default Ostukorv