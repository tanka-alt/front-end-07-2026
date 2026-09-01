import { useEffect, useState } from "react";


function Vocabulary() {
    const [vocabulary, setVocabulary] = useState([]);


  useEffect(() => {
        const fetchVocabulary = async () => {
            const response = await fetch("https://marineregions.org/rest/getGazetteerTypes.json");
            const data = await response.json();
            setVocabulary(data);
        };

        fetchVocabulary();
  }, []);


    // Käimaminemise funktsioon. Kui lehele satun, siis käivitab selle funktsiooni.
// useEffect(() => {
//         fetch("https://marineregions.org/rest/getGazetteerTypes.json")  // kust infot võtan
//         .then(res => res.json())	// mis vormingus infot võtan
//         .then(data => setVocabulary(data)) // andmestikus on kirjas {products: [ANDMESTIK]}
//     }, []);

  return (
    <div>
      <h1>Vocabulary</h1>
      <table>
        <thead>
            <tr>
            <th>typeID</th>
            <th>Type</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
        {vocabulary.map(product => (
          <tr key={product.id}>
            <td>{product.typeID}</td>
            <td>{product.type}</td>
            <td>{product.description}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Vocabulary;