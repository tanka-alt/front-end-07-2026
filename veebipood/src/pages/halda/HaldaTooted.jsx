import { useState } from 'react'

function HaldaTooted () {
    const [tooted, setTooted] = useState([
{"toode": "Aknapesuvedelik", "hind":"12"},
{"toode": "Mootoriõli", "hind":"23"},
{"toode": "Jahutusvedelik", "hind":"18"},
{"toode": "Pidurivedelik", "hind":"26"},
{"toode": "Klaasipuhastid", "hind":"36"},
{"toode": "Autošampoon", "hind":"8"},
{"toode": "Rattapoltide võti", "hind":"15"},
{"toode": "Akulaadija", "hind":"32"},
{"toode": "Lumehari", "hind":"17"},
{"toode": "Salongifilter", "hind":"30"}
]);


function kustuta(index) {
    tooted.splice(index,1);
    setTooted(tooted.slice());
}

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Toote nimi</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {tooted.map((tooted, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{tooted.toode}</td>
                        <td>{tooted.hind}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTooted