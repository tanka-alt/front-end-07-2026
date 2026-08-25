import { useState } from "react";

function Hinnad() {
    const [hinnad, setHinnad] = useState([
      {"arv": 321, "sonana": "kolmsada kakskteist" },
      {"arv": 12, "sonana": "kakskteist" },
      {"arv": 300, "sonana": "kolmsada" },
      {"arv": 9, "sonana": "üheksa" },
      {"arv": 34556, "sonana": "kolmkümmendneli tuhat viisadaviiskümmend kuus" },
      {"arv": 81, "sonana": "kaheksakümmend üks" },

    ]);

		function sorteeriKasvavalt() {
			hinnad.sort(((a, b) => a.arv - b.arv));
			setHinnad(hinnad.slice());
		}
				function sorteeriKahanevalt() {
			hinnad.sort(((a, b) => b.arv - a.arv));
			setHinnad(hinnad.slice());
		}

  return (
    <div>
        <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
        <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
        {hinnad.map(hind => <div key={hind.arv}>{hind.arv} {(hind.sonana)}</div>)}
    </div>
  )
}

export default Hinnad
