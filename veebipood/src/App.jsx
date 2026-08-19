//import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import Esindused from './pages/arrays/Esindused'
import NotFound from './pages/NotFound'
import Menu from './components/Menu.jsx'
import Kalkulaator from './pages/Kalkulaator'
import MaksimaalneKalkulaator from './pages/MaksimaalneKalkulaator.jsx'
import Autod from './pages/arrays/Autod'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tooted from './pages/arrays/Tooted'
import Tootajad from './pages/arrays/Tootajad'
import Arrays from './pages/arrays/Arrays'
import HaldaHome from './pages/halda/HaldaHome'
import HaldaAutod from './pages/halda/HaldaAutod'
import HaldaEsindused from './pages/halda/HaldaEsindused'
import HinnadHinnad from './pages/halda/HaldaHinnad'
import Haldaasutajad from './pages/halda/HaldaKasutajad'
import HaldaTooted from './pages/halda/HaldaTooted'
import Haldatootajad from './pages/halda/HaldaTootajad'



function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Menu />

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
        <Route path="/halda-kasutajad" element={<Haldaasutajad/> } />
        <Route path="/halda-tooted" element={<HaldaTooted/> } />
        <Route path="/halda-tootajad" element={<Haldatootajad/> } />        
        
        <Route path="/maksimaalne-kalkulaator" element={<MaksimaalneKalkulaator/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
        

    </>
  )
}

export default App
