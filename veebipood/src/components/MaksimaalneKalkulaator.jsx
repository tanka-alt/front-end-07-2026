import { useRef, useState } from "react";
  
  function MaksimaalneKalkulaator() {
  
  const ylalpeetavateArvRef = useRef();
  const netosissetulekRef = useRef();
  const igakuisedKohustusedRef = useRef();
  const [maksimaalneLimiit, setMaksimaalneLimiit] = useState();
  
    const arvutaMaksimaalneLimiit = () => {
      const ylalpeetavateArv = Number(ylalpeetavateArvRef.current.value);
      const netosissetulek = Number(netosissetulekRef.current.value);
      const igakuisedKohustused = Number(igakuisedKohustusedRef.current.value);

      setMaksimaalneLimiit((netosissetulek - igakuisedKohustused) / (ylalpeetavateArv + 1));

}

  return (
    <div>
        <label>Ülalpeetavate arv</label>
        <input defaultValue="0" onChange={arvutaMaksimaalneLimiit} ref={ylalpeetavateArvRef} type="number" /> <br />
        <label>Netosissetulek</label>
        <input defaultValue="0" onChange={arvutaMaksimaalneLimiit} ref={netosissetulekRef} type="number" /> <br />
        <label>Igakuised kohustused</label>
        <input defaultValue="0" onChange={arvutaMaksimaalneLimiit} ref={igakuisedKohustusedRef} type="number" /> <br />
        <div>Maksimaalne limiit: {maksimaalneLimiit?.toFixed(2)}€</div>
    </div>
  )
}

export default MaksimaalneKalkulaator