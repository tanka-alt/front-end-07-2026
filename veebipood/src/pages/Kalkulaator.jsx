import LaenuKalkulaator from "../components/LaenuKalkulaator";
import TavaKalkulaator from "../components/TavaKalkulaator";
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator";
import SaastuKalkulaator from "../components/SaastuKalkulaator";


function Kalkulaator() {

  return (
	<div className="kalkulaator">
		<div className="kalkulaator-sektsioon">
			<TavaKalkulaator />
		</div>

		<div className="kalkulaator-sektsioon">
			<LaenuKalkulaator />
		</div>

		<div className="kalkulaator-sektsioon">
			<MaksimaalneKalkulaator />
		</div>

		<div className="kalkulaator-sektsioon">
			<SaastuKalkulaator />
		</div>
	</div>
  )
}

export default Kalkulaator;

