import { useRef, useState } from "react";

function SaastuKalkulaator() {

	const palkRef = useRef();
	const lisatuluRef = useRef();

	const eluasemekuluRef = useRef();
	const toiduRef = useRef();
	const transpordiRef = useRef();
	const kindlustuseRef = useRef();
	const muudKuludRef = useRef();

	const [saast, setSaast] = useState(0);

	const arvutaSaast = () => {
		const palk = Number(palkRef.current.value);
		const lisatulu = Number(lisatuluRef.current.value);

		const eluasemekulu = Number(eluasemekuluRef.current.value);
		const toit = Number(toiduRef.current.value);
		const transport = Number(transpordiRef.current.value);
		const kindlustus = Number(kindlustuseRef.current.value);
		const muudKulud = Number(muudKuludRef.current.value);

		const tuludKokku = palk + lisatulu;
		const kuludKokku = eluasemekulu + toit + transport + kindlustus + muudKulud;

		setSaast(tuludKokku - kuludKokku);
	}

  return (
    <div>
		<h2>Säästukalkulaator</h2>
		<h3>Sissetulekud</h3>
		<label>Palk</label>
		<input defaultValue="0" onChange={arvutaSaast} ref={palkRef} type="number" /> <br />
		<label>Lisatulu</label>
		<input defaultValue="0" onChange={arvutaSaast} ref={lisatuluRef} type="number" /> <br />

		<h3>Kulud</h3>
		<label>Eluasemekulu (üür/laen)</label>
		<input defaultValue="0" onChange={arvutaSaast} ref={eluasemekuluRef} type="number" /> <br />
		<label>Toit</label>
		<input defaultValue="0" onChange={arvutaSaast} ref={toiduRef} type="number" /> <br />
		<label>Transport</label>
		<input defaultValue="0" onChange={arvutaSaast} ref={transpordiRef} type="number" /> <br />
		<label>Kindlustus</label>
		<input defaultValue="0" onChange={arvutaSaast} ref={kindlustuseRef} type="number" /> <br />
		<label>Muud kulud</label>
		<input defaultValue="0" onChange={arvutaSaast} ref={muudKuludRef} type="number" /> <br />

		<div>Säästan kuus: {saast.toFixed(2)}€</div>
    </div>
  )
}

export default SaastuKalkulaator
