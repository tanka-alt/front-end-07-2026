import { Link } from "react-router-dom"


function ApiHome() {
  return (
    <div>
      <Link to="/books">
      <button className="nupp">Books</button>
      </Link>
          <Link to="/cars">
      <button className="nupp">Cars</button>
      </Link> 
          <Link to="/product1">
      <button className="nupp">Product 1</button>
      </Link> 
          <Link to="/product2">
      <button className="nupp">Product 2</button>
      </Link> 
          <Link to="/product3">
      <button className="nupp">Product 3</button>
      </Link> 
          <Link to="/vocabulary">
      <button className="nupp">Vocabulary</button>
      </Link>      
    </div>
  )
}

export default ApiHome;