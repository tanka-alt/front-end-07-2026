import { useEffect, useState } from "react";


function Products1() {
    const [products, setProducts] = useState([]);

    // Käimaminemise funktsioon. Kui lehele satun, siis käivitab selle funktsiooni.
useEffect(() => {
        fetch("https://dummyjson.com/products")  // kust infot võtan
        .then(res => res.json())	// mis vormingus infot võtan
        .then(data => setProducts(data.products)) // andmestikus on kirjas {products: [ANDMESTIK]}
    }, []);

  return (
    <div>
      <h1>Products1</h1>
      <table>
        <thead>
            <tr>
							<th>ID</th>
							<th>Title</th>
							<th>Brand</th>
							<th>Category</th>
							<th>Price</th>
							<th>Rating</th>
							<th>Stock</th>
            </tr>
        </thead>
        <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.brand}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.rating}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products1