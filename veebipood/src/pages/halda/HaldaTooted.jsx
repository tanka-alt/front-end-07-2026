import { useState } from 'react'

function HaldaTooted () {
    const [tooted, setTooted] = useState([
"Aknapesuvedelik",
"Mootoriõli",
"Jahutusvedelik",
"Pidurivedelik",
"Klaasipuhastid",
"Autošampoon",
"Rattapoltide võti",
"Akulaadija",
"Lumehari",
"Salongifilter"
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
                        <td>{tooted}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTooted