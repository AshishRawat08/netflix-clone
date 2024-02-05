import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Netflix from './pages/Netflix'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Player from './pages/Player'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = "/login" element={<Login />} />
      <Route exact path = "/signup" element={<Signup />} />
      <Route exact path = "/player" element={<Player />} />
      <Route exact path = "/" element={<Netflix />} />
    
    </Routes> 
    </BrowserRouter>
  )
}
