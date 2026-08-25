import { useState } from 'react'

function HaldaAutod() {
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
                    <th>Auto mark</th>
                    <th>Auto hind</th>
                    <th>Auto aasta</th>
                    <th>Auto pilt</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {autod.map((auto, index) =>
                    <tr key={auto.mark}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{auto.mark}</td>
                        <td>{auto.hind}</td>
                        <td>{auto.aasta}</td>
                        <td>{auto.pilt}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaAutod