import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/lisa/LisaToode'
import Seaded from './pages/Seaded'
import Esindused from './pages/arrays/Esindused'
import NotFound from './pages/NotFound'
import Menu from './components/Menu.jsx'
import Kalkulaator from './pages/Kalkulaator'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tooted from './pages/arrays/Tooted'
import Tootajad from './pages/arrays/Tootajad'
import Arrays from './pages/arrays/Arrays.jsx'
import HaldaHome from './pages/halda/HaldaHome'
import HaldaAutod from './pages/halda/HaldaAutod'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HinnadHinnad from './pages/halda/HaldaHinnad'
import HaldaTooted from './pages/halda/HaldaTooted'
import LisaHome from './pages/lisa/LisaHome.jsx'
import HaldaTootajad from './pages/halda/HaldaTootajad'
import HaldaKasutajad from './pages/halda/HaldaKasutajad'
import LisaEsindus from './pages/lisa/LisaEsindus.jsx'
import LisaAuto from './pages/lisa/LisaAuto.jsx'
import LisaHind from './pages/lisa/LisaHind.jsx'
import LisaKasutaja from './pages/lisa/LisaKasutaja.jsx'
import LisaTootaja from './pages/lisa/LisaTootaja.jsx'
import ApiHome from './pages/api/ApiHome.jsx'
import Books from './pages/api/Books.jsx'
import Cars from './pages/api/Cars.jsx'
import Product1 from './pages/api/Products1.jsx'
import Product2 from './pages/api/Products2.jsx'
import Product3 from './pages/api/Products3.jsx'
import Vocabulary from './pages/api/Vocabulary.jsx'
import Tabs from './components/Tabs.jsx'
import YksAuto from './pages/yks/YksAuto.jsx'
import YksEsindus from './pages/yks/YksEsindus.jsx'
import YksHind from './pages/yks/YksHind.jsx'
import YksKasutaja from './pages/yks/YksKasutaja.jsx'
import YksToode from './pages/yks/YksToode.jsx'
import YksTootaja from './pages/yks/YksTootaja.jsx'


function App() {
  const [tume, setTume] = useState(localStorage.getItem("darkTheme") || "false");

  const vahetaTeema = () => {
    if (tume === "true") {
    localStorage.setItem("darkTheme", "false");
    setTume("false");
    } else {
    localStorage.setItem("darkTheme", "true");
    setTume("true");
  }
}

  return (
    <div className={tume === "true" ? "tume" : ""}>
      <Menu theme={tume} toggleTheme={vahetaTeema} />

      <Routes>
        <Route path="/" element={<Avaleht/> } />
        <Route path="/ostukorv" element={<Ostukorv/> } />
        <Route path="/osta-kinkekaart" element={<Kinkekaart/> } />
        <Route path="/lisa-toode" element={<LisaToode/> } />
        <Route path="/seaded" element={<Seaded/> } />
        <Route path="/kalkulaator" element={<Kalkulaator/>} />

        <Route path="/arrays" element={<Arrays/> } />
        <Route path="/esindused" element={<Esindused/> } />
        <Route path="/autod" element={<Autod/> } />
        <Route path="/hinnad" element={<Hinnad/> } />
        <Route path="/kasutajad" element={<Kasutajad/> } />
        <Route path="/tooted" element={<Tooted/> } />
        <Route path="/tootajad" element={<Tootajad/> } />

        <Route path="/halda" element={<HaldaHome/> } />
        <Route path="/halda-autod" element={<HaldaAutod/> } />
        <Route path="/halda-esindused" element={<HaldaEsindused/> } />
        <Route path="/halda-hinnad" element={<HinnadHinnad/> } />
        <Route path="/halda-kasutajad" element={<HaldaKasutajad/> } />
        <Route path="/halda-tooted" element={<HaldaTooted/> } />
        <Route path="/halda-tootajad" element={<HaldaTootajad/> } />   

        <Route path="/lisa" element={<LisaHome/> } />
        <Route path="/lisa-auto" element={<LisaAuto/> } />
        <Route path="/lisa-esindus" element={<LisaEsindus/> } />
        <Route path="/lisa-hind" element={<LisaHind/> } />
        <Route path="/lisa-kasutaja" element={<LisaKasutaja/> } />
        <Route path="/lisa-toode" element={<LisaToode/> } />
        <Route path="/lisa-tootaja" element={<LisaTootaja/> } />

        <Route path="/yks-auto/:autoId" element={<YksAuto/> } />
        <Route path="/yks-esindus" element={<YksEsindus/> } />
        <Route path="/yks-hind/:hindId" element={<YksHind/> } />
        <Route path="/yks-kasutaja" element={<YksKasutaja/> } />
        <Route path="/yks-toode" element={<YksToode/> } />
        <Route path="/yks-tootaja" element={<YksTootaja/> } />         

        <Route path="/api" element={<ApiHome/> } />
        <Route path="/books" element={<Books/> } />
        <Route path="/cars" element={<Cars/> } />
        <Route path="/product1" element={<Product1/> } />
        <Route path="/product2" element={<Product2/> } />
        <Route path="/product3" element={<Product3/> } />
        <Route path="/vocabulary" element={<Vocabulary/> } />    
        
        <Route path="/*" element={<NotFound/>} />
      </Routes>

      <span className="tabs">
        <Tabs />
      </span>
    </div>
  )
}

export default App
