import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function Menu () {
	return (
		<div>
			<Link to="/">
				<img className= "logo" src={logo} alt="Logo" />
			</Link>
			{/* <img src="" alt="" /> */}

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

		</div>
	)
}

export default Menu