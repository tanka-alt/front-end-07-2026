import { useState } from 'react'

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState([
      {"arv": 321, "sonana": "kolmsada kakskteist" },
      {"arv": 12, "sonana": "kakskteist" },
      {"arv": 300, "sonana": "kolmsada" },
      {"arv": 9, "sonana": "üheksa" },
      {"arv": 34556, "sonana": "kolmkümmendneli tuhat viisadaviiskümmend kuus" },
      {"arv": 81, "sonana": "kaheksakümmend üks" },
])

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
                    <th>Hind sõnana</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {hinnad.map((hind, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{hind.arv}</td>
                        <td>{hind.sonana}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaHinnad