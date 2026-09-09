import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function YksAuto() {
    const { autoId } = useParams();
    const [auto, setAuto] = useState({});
        // useParams hooki abil saame kätte URL-i parameetri väärtuse.

        useEffect(() => {
            fetch("https://6a917d2e7751d35ce47e889a.mockapi.io/autod/" + autoId)
            .then(response => response.json())
            .then(json => setAuto(json));
        }   , [autoId]);

  return (
    <div>
        Auto ID on {autoId}
        <div>Tootja: {auto.tootja}</div>
        <div>Mark: {auto.mark}</div>
        <div>Hind: {auto.hind}€</div>
        <div>Varv: {auto.varv}</div>
        <img src={auto.pilt} alt="" />
    </div>
  )
}

export default YksAuto;