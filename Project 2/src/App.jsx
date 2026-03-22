import { useState,useEffect } from 'react'
import { Route, Routes } from "react-router";
import './App.css'
import NavBar from './components/NavBar.jsx'
import OneItem from  './pages/oneitem.jsx'
import AllItems from './pages/allitems.jsx';
import AllRecipes from './pages/recipes.jsx'
import { getIDlist } from './services.js';

const tempID = 561
const tempName = "Nature Rune"

const App = () =>{

const [idList, setidList] = useState({})
const [currentItem, setcurrentItem] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  


return (
  <>
  <h1>Hello World</h1>
  
  <NavBar />
    <Routes>
        <Route path="/items/:id" element={<OneItem />} />
        <Route path="/items" element={<AllItems />} />
        <Route path="/recipes/:recipeid" />
        <Route path="/recipes" element={<AllRecipes />}/>
        
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