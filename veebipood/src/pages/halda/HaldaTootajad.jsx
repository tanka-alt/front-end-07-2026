import { useState } from 'react'

function HaldaTootajad () {
    const [tootajad, setTootajad] = useState([
"Rasmus Tamm",
"Laura Kallas",
"Kaspar Sepp",
"Marta Saar",
"Sander Lõhmus",
"Eliise Rebane",
"Markus Oja",
"Anni Kuusk",
"Kristjan Vaher",
"Liis Kivi",
]);


function kustuta(index) {
    tootajad.splice(index,1);
    setTootajad(tootajad.slice());
}

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Töötaja nimi</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {tootajad.map((tootaja, index) =>
                    <tr>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{tootaja}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTootajad