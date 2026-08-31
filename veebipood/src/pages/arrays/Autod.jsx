import { useEffect, useState } from "react";

function Autod() {
     const [autod, setAutod] = useState([]);
  
    useEffect(() => {
      fetch("https://6a917d2e7751d35ce47e889a.mockapi.io/autod")
      .then(response => response.json())
      .then(json => setAutod(json));
    }, []);
  
    function sorteeriAZ() {
      autod.sort((a,b) => a.mark.localeCompare(b.mark));
      setAutod(autod.slice());
    }

    function sorteeriZA() {
      autod.sort((a,b) => b.mark.localeCompare(a.mark));
      setAutod(autod.slice());
    }

    function sorteeriTahedKasvavalt (){
      autod.sort((a,b) => a.mark.length - b.mark.length);
      setAutod(autod.slice());
    }

    function sorteeriTahedKahanevalt (){
      autod.sort((a,b) => b.mark.length - a.mark.length);
      setAutod(autod.slice());
    }

    function sorteeriKolmasTahtAZ (){
      autod.sort((a,b) => a.mark[2].localeCompare(b.mark[2]));
      setAutod(autod.slice());
    }

    function filtreeriOdavamadKui80000(){
      const vastus = autod.filter(auto => auto.hind < 800);
      setAutod(vastus);
    }

    function filtreeriKallimadKui25000(){
      const vastus = autod.filter(auto => auto.hind > 250);
      setAutod(vastus);
    }

    function filtreeriLoppebTahega(){
      const vastus = autod.filter(auto => auto.mark.endsWith("a"));
      setAutod(vastus);
    }

    function filtreeriRohkemKui10Tahte(){
      const vastus = autod.filter(auto => auto.mark.length > 10);
      setAutod(vastus);
    }

     function filtreeriKellelTeineTahtO(){
      const vastus = autod.filter(auto => auto.mark[1] === "o");
      setAutod(vastus);
    }

    function reset(){
      fetch("https://6a917d2e7751d35ce47e889a.mockapi.io/autod")
        .then(response => response.json())
        .then(json => setAutod(json));
    } 

  return (
    <div>
        <div>{autod.length}tk</div>
        <button onClick={reset}>Võta filtrid maha</button>
        <button onClick={sorteeriAZ}>Sorteeri mark A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri mark Z-A</button>
        <button onClick={sorteeriTahedKasvavalt}>Sorteeri margi tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt}>Sorteeri margi tähtede arv kahanevalt</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri margi kolmas täht</button>
        <br /> <br />
        <button onClick={filtreeriOdavamadKui80000}>Jäta alles odavamad kui 800</button>
        <button onClick={filtreeriKallimadKui25000}>Jäta alles kallimad kui 250</button>
        <button onClick={filtreeriLoppebTahega}>Jäta alles lõppevad a-tähega</button>
        <button onClick={filtreeriRohkemKui10Tahte}>Jäta alles kellel on rohkem kui 10 tähte</button>
        <button onClick={filtreeriKellelTeineTahtO}>Jäta alles kellel on teine täht O</button>
        <div>{autod.map(auto => 
          <div key={auto.id}>
          {auto.mark} ({auto.tootja}) - {auto.hind}€
          </div>)}
        </div>
    </div>
  )
}

export default Autod