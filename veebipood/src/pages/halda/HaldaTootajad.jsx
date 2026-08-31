import { useEffect, useState } from 'react'

function HaldaTootajad () {
    const [tootajad, setTootajad] = useState([])

useEffect(() => {
    fetch("https://6a958883fa33b37f821ac17c.mockapi.io/employees/")
    .then(response => response.json())
    .then(json => setTootajad(json));
}, []);

function kustuta(id) {
    setTootajad(tootajad.filter(tootaja => tootaja.id !== id));
    fetch("https://6a958883fa33b37f821ac17c.mockapi.io/employees/" + id, {method: "DELETE"});
}

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Töötaja ID</th>
                    <th>Töötaja nimi</th>
                    <th>Töötaja email</th>
                    <th>Töötaja telefon</th>
                    <th>Kustuta</th>
                </tr>
            </thead>
            <tbody>
                {tootajad.map((tootaja, index) =>
                    <tr key={tootaja.id}>
                        <td>{index}</td>
                        <td>{tootaja.id}</td>
                        <td>{tootaja.nimi}</td>
                        <td>{tootaja.email}</td>
                        <td>{tootaja.telefon}</td>
                        <td><button onClick={() => kustuta(tootaja.id)}>x</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTootajad