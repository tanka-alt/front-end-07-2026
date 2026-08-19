import { Link } from "react-router-dom";

function HaldaHome() {
  return (
    <div>
      <Link to="/halda-esindused">
      <button className="nupp">Esindused</button>
      </Link>
          <Link to="/halda-autod">
      <button className="nupp">Autod</button>
      </Link> 
          <Link to="/halda-hinnad">
      <button className="nupp">Hinnad</button>
      </Link> 
          <Link to="/halda-tooted">
      <button className="nupp">Tooted</button>
      </Link> 
          <Link to="/halda-tootajad">
      <button className="nupp">Tootajad</button>
      </Link> 
          <Link to="/halda-kasutajad">
      <button className="nupp">Kasutajad</button>
      </Link>      
    </div>
  )
}

export default HaldaHome