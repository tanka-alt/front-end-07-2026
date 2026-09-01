import { useEffect, useState } from "react";


function Products2() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products2</h1>
      <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
            <th>Rating</th>
            </tr>
        </thead>
        <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td><img src={product.image} alt={product.title} style={{ width: "100px" }} /></td>
            <td>{product.category}</td>
            <td>{product.price.toFixed(2)}€</td>
            <td>{product.rating?.rate} / {product.rating?.count}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products2