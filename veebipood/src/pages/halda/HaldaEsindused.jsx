import { useState } from 'react'

function Haldaesindused() {

    const [esindused, setEsindused] = useState(["Rocca al Mare", "Kristiine", "Järveotsa", "Ülemiste", "Magistrali", "Vesse"]);

function kustuta(index) {
    esindused.splice(index,1);
    setEsindused(esindused.slice());

}
    
      return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Järjekorranumber</th>
                        <th>Esinduse nimi</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {esindused.map((esindus, index) =>
                        <tr>
                            <td>{index}</td>
                            <td>{index + 1}</td>
                            <td>{esindus}</td>
                            <td><button onClick={() => kustuta(index)}>x</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      )
}

export default Haldaesindused