import { useEffect, useState } from "react";


function Cars() {
    const [cars, setCars] = useState([]);

    // Käimaminemise funktsioon. Kui lehele satun, siis käivitab selle funktsiooni.
useEffect(() => {
        fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100")  // kust infot võtan
        .then(res => res.json())	// mis vormingus infot võtan
        .then(data => setCars(data.results)) // andmestikus on kirjas {products: [ANDMESTIK]}
    }, []);

  return (
    <div>
      <h1>Cars</h1>
      <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Drive</th>
            <th>Fuel type</th>
            <th>Year</th>
            </tr>
        </thead>
        <tbody>
        {cars.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.make}</td>
            <td>{product.model}</td>
            <td>{product.drive}</td>
            <td>{product.fueltype}</td>
            <td>{product.year}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Cars;