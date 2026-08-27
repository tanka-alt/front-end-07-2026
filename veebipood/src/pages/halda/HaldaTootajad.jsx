import { useState } from 'react'

function HaldaTootajad () {
    const [tootajad, setTootajad] = useState([
{"nimi": "Rasmus Tamm", "email": "rasmus.tamm@auto.ee"},
{"nimi": "Laura Kallas", "email": "laura.kallas@auto.ee"},
{"nimi": "Kaspar Sepp", "email": "kaspar.sepp@auto.ee"},
{"nimi": "Marta Saar", "email": "marta.saar@auto.ee"},
{"nimi": "Sander Lõhmus", "email": "sander.lohmus@auto.ee"},
{"nimi": "Eliise Rebane", "email": "eliise.rebane@auto.ee"},
{"nimi": "Markus Oja", "email": "markus.oja@auto.ee"},
{"nimi": "Anni Kuusk", "email": "anni.kuusk@auto.ee"},
{"nimi": "Kristjan Vaher", "email": "kristjan.vaher@auto.ee"},
{"nimi": "Liis Kivi", "email": "liis.kivi@auto.ee"},


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
                    <th>Töötaja email</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {tootajad.map((tootaja, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{index + 1}</td>
                        <td>{tootaja.nimi}</td>
                        <td>{tootaja.email}</td>
                        <td><button onClick={() => kustuta(index)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTootajad