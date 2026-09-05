import { Link, } from "react-router-dom";

function MenuLinks({toggleDrawer, cssClass}) {
  return (
    <div className={cssClass} onClick={toggleDrawer(false)}>
        <Link to="/ostukorv">
            <button className="nupp">Ostukorv</button>
        </Link>

        <Link to="/osta-kinkekaart">
            <button className="nupp">Osta kinkekaart</button>
        </Link>

        <Link to="/lisa-toode">
            <button className="nupp">Lisa toode</button>
        </Link>

        <Link to="/seaded">
            <button className="nupp">Seaded</button>
        </Link>

        <Link to="/esindused">
            <button className="nupp">Esindused</button>
        </Link>

        <Link to="/kalkulaator">
            <button className="nupp">Kalkulaator</button>
        </Link>
        <Link to="/arrays">
            <button className="nupp">Arrays</button>
        </Link>

        <Link to="/halda">
            <button className="nupp">Halda</button>
        </Link>

        <Link to="/lisa">
            <button className="nupp">Lisa</button>
        </Link>

        <Link to="/api">
            <button className="nupp">API</button>
        </Link>
    </div>
  )
}

export default MenuLinks