import LaenuKalkulaator from "../components/LaenuKalkulaator";
import TavaKalkulaator from "../components/TavaKalkulaator";
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator";


function Kalkulaator() {

  return (
	<div className="kalkulaator">
		<TavaKalkulaator />

		<LaenuKalkulaator />

		<MaksimaalneKalkulaator />
	</div>
  )
}

export default Kalkulaator;

