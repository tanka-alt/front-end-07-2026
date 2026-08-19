import { useState } from "react";

function Hinnad() {
    const [hinnad, setHinnad] = useState([321, 12, 300, 9, 34556, 81]);

		function sorteeriKasvavalt() {
			hinnad.sort(((a, b) => a - b));
			setHinnad(hinnad.slice());
		}
				function sorteeriKahanevalt() {
			hinnad.sort(((a, b) => b - a));
			setHinnad(hinnad.slice());
		}

  return (
    <div>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        {hinnad.map(hind => <button>{hind}</button>)}
    </div>
  )
}

export default Hinnad
