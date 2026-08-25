import { useState } from 'react'

function Haldaesindused() {
     const [esindused, setEsindused] = useState([
    {"keskus": "Rocca al Mare", "tel": "5123456", "aadress": "Loomaaia 30"} ,
    {"keskus": "Kristiine", "tel": "51765767", "aadress": "Loomaaia 31"} ,
    {"keskus": "Ülemiste", "tel": "51343434", "aadress": "Loomaaia 32"} ,
    {"keskus": "Magistrali", "tel": "51243434", "aadress": "Loomaaia 33"} ,
    {"keskus": "Vesse", "tel": "512434434", "aadress": "Loomaaia 34"} ,
  
])

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
                        <th>Esinduse telefon</th>
                        <th>Esinduse aadress</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {esindused.map((esindus, index) =>
                        <tr key={esindus.keskus}>
                            <td>{index}</td>
                            <td>{index + 1}</td>
                            <td>{esindus.keskus}</td>
                            <td>{esindus.tel}</td>
                            <td>{esindus.aadress}</td>
                            <td><button onClick={() => kustuta(index)}>x</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      )
}

export default Haldaesindused