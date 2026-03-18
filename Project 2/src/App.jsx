import { useState } from 'react'
import { Route, Routes } from "react-router";
import './App.css'
import NavBar from './components/NavBar.jsx'
import OneItem from  './pages/oneitem.jsx'
import AllItems from './pages/allitems.jsx';

const App = () =>{





return (
  <>
  <h1>Hello World</h1>
  <NavBar />
    <Routes>
        <Route path="/items" element={<AllItems />} />
        <Route path="/items/Nature_Rune" element={<OneItem />} />
        
    </Routes>
  
  
  
  </>
)


}

export default App


/* GRAVEYARD


<Route path="/pets" element={<AllPetsPage />} />
<Route path="/pets/:petId" element={<OnePetPage />} />
        <Route path="/pets/new" element={<CreatePetPage />} />



*/