import { useState } from 'react'

function HaldaAutod() {
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


function kustuta(index) {
    autod.splice(index,1);
    setAutod(autod.slice());
}

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Auto nimi</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {autod.map((auto, index) =>
                    <tr>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{auto}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaAutod