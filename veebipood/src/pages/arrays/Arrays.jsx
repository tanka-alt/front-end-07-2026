import { Link } from "react-router-dom"


function Arrays() {
  return (
    <div>
      <Link to="/esindused">
      <button className="nupp">Esindused</button>
      </Link>
          <Link to="/autod">
      <button className="nupp">Autod</button>
      </Link> 
          <Link to="/hinnad">
      <button className="nupp">Hinnad</button>
      </Link> 
          <Link to="/tooted">
      <button className="nupp">Tooted</button>
      </Link> 
          <Link to="/tootajad">
      <button className="nupp">Tootajad</button>
      </Link> 
          <Link to="/kasutajad">
      <button className="nupp">Kasutajad</button>
      </Link>      
    </div>
  )
}

export default Arrays