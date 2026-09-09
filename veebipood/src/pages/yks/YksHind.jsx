import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function YksHind() {
    const [hind, setHind] = useState({});
    const { hindId } = useParams();  // App.jsx failis, URLs: /yks-hind/:hindId, kus :hindId

    useEffect(() => {
        fetch("https://6a917d2e7751d35ce47e889a.mockapi.io/hinnad/" + hindId)
            .then(response => response.json())
            .then(json => setHind(json));
  }, [hindId]);


  return (
    <div>
        <div>{hind.id}</div>
        <div>{hind.arv}</div>
        <div>{hind.sonana}</div>
    </div>
  )
}

export default YksHind