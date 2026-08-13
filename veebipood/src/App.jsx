//import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import Esindused from './pages/Esindused'
import NotFound from './pages/NotFound'
import Menu from './components/Menu.jsx'
import Kalkulaator from './pages/Kalkulaator'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Avaleht/>} />
        <Route path="/ostukorv" element={<Ostukorv/>} />
        <Route path="/osta-kinkekaart" element={<Kinkekaart/>} />
        <Route path="/lisa-toode" element={<LisaToode/>} />
        <Route path="/seaded" element={<Seaded/>} />
        <Route path="/esindused" element={<Esindused/>} />
        <Route path="/kalkulaator" element={<Kalkulaator/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
        

    </>
  )
}

export default App
