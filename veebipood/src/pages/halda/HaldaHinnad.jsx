import { useState } from 'react'

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState([34, 3434, 34, 331, 46, 676, 77, 3455])

function kustuta(index) {
    hinnad.splice(index,1);
    setHinnad(hinnad.slice());

}

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Järjekorranumber</th>
                    <th>Hind</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {hinnad.map((hind, index) =>
                    <tr>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{hind}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad