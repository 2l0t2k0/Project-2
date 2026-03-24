import { useState,useEffect, createContext } from 'react'
import { Route, Routes } from "react-router";
import './App.css'
import NavBar from './components/NavBar.jsx'
import OneItem from  './pages/oneitem.jsx'
import AllItems from './pages/allitems.jsx';
import AllRecipes from './pages/recipes.jsx'
import { getIDlist } from './services.js';

const id = 561
const tempName = "Nature Rune"


export const DataDump = createContext()



const App = () =>{

const [idList, setidList] = useState([])
const [currentItem, setcurrentItem] = useState({})

useEffect(()=>{
    const getData = async ()=>{
            const data = await getIDlist()
            setidList(data)
            
        };
        getData()},[]
      )

  


return (
  <>
  <h1>Item Tracker</h1>
  <DataDump value={idList}>
    <NavBar />
      <Routes>
          <Route path="/items/:id" element={<OneItem />} />
          <Route path="/items" element={<AllItems />} />
          <Route path="/recipes/:recipeid" />
          <Route path="/recipes" element={<AllRecipes />}/>
          
      </Routes>
      
  </DataDump>
  
  
  </>
)


}

export default App


/* GRAVEYARD


<Route path="/pets" element={<AllPetsPage />} />
<Route path="/pets/:petId" element={<OnePetPage />} />
        <Route path="/pets/new" element={<CreatePetPage />} />



*/