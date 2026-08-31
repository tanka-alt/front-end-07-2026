import { useEffect, useState } from 'react'

function HaldaTooted () {
    const [tooted, setTooted] = useState([])

useEffect(() => {
    fetch("https://6a958883fa33b37f821ac17c.mockapi.io/HaldaToode")
    .then(response => response.json())
    .then(json => setTooted(json));
}, []);

function kustuta(id) {
    setTooted(tooted.filter(toode => toode.id !== id));
    fetch("https://6a958883fa33b37f821ac17c.mockapi.io/HaldaToode/" + id, {method: "DELETE"});
}

return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Toote ID</th>
                        <th>Nimi</th>
                        <th>Hind</th>
                        <th>Kirjeldus</th>
                        <th>Kustuta</th>
                    </tr>
                </thead>
                <tbody>
                    {tooted.map((toode, index) =>
                        <tr key={toode.id}>
                            <td>{index}</td>
                            <td>{toode.id}</td>
                            <td>{toode.nimi}</td>
                            <td>{toode.hind}</td>
                            <td>{toode.kirjeldus}</td>
                            <td>
                                <button onClick={() => kustuta(toode.id)}>x</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default HaldaTooted