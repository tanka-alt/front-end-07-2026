import { useRef, useState } from "react";

function LaenuKalkulaator() {

	const ostuhindRef = useRef();
	const sissemakseRef = useRef();
	const perioodRef = useRef();
	const marginaalRef = useRef();
	const euriborRef = useRef();
	const [kuumakse, setKuumakse] = useState(298.61);
	const [intressKokku, setIntressKokku] = useState(4.4);
	const [laenusumma, setLaenusumma] = useState(0);
	
	const arvutaKokku = () => {
		setIntressKokku(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
		setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);

		setKuumakse((ostuhindRef.current.value - sissemakseRef.current.value) / perioodRef.current.value / 12 * 
		(Number(marginaalRef.current.value) + Number(euriborRef.current.value)) / 3);
	}

  return (
    <div>
				<label>Kinnisvara ostuhind</label>
				<input defaultValue="75000"onChange={arvutaKokku} ref={ostuhindRef} type="number" /> <br />
				<label>Sissemakse</label>
				<input defaultValue="0"onChange={arvutaKokku} ref={sissemakseRef} type="number" /> <br />
				<label>Laenusumma</label>
				<input disabled value={laenusumma} type="number" /> <br />
				<label>Periood</label>
				{/* <input defaultValue="30"onChange={arvutaKokku} ref={perioodRef} type="number" /> <br /> */}
				<select defaultValue="30" onChange={arvutaKokku} ref={perioodRef}>
					<option value="5">5 aastat</option>
					<option value="10">10 aastat</option>
					<option value="15">15 aastat</option>
					<option value="20">20 aastat</option>
					<option value="25">25 aastat</option>
					<option value="30">30 aastat</option>
				</select> <br />	
				<label>Marginaal</label>
				<input defaultValue="1.6" onChange={arvutaKokku} ref={marginaalRef} type="number" /> <br />
				<label>Euribor</label>
				<input defaultValue="2.7" onChange={arvutaKokku} ref={euriborRef} type="number" /> <br />
				<label>Intress kokku</label>
				<input disabled value={intressKokku.toFixed(2)} type="number" /> <br />
				<div>Laenu kuumakse: {kuumakse.toFixed(2)}€</div>
		</div>
  )
}

export default LaenuKalkulaator