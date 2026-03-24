import { useState,useEffect, createContext } from 'react'
import { Route, Routes } from "react-router";
import './App.css'
import NavBar from './components/NavBar.jsx'
import OneItem from  './pages/oneitem.jsx'
import AllItems from './pages/allitems.jsx';
import AllRecipes from './pages/recipes.jsx'
import { getFavourite, getIDlist } from './services.js';
import ItemSearch from './components/itemsearch.jsx';
import ListFavourite from './components/favourite.jsx';
import AddtoFavourite from './pages/addfavourite.jsx';



export const DataDump = createContext()



const App = () =>{

const [idList, setidList] = useState([])
const [favourite, setFavourite] = useState({})

useEffect(()=>{
    const getData = async ()=>{
            const data = await getIDlist()
            setidList(data)
            
        };
        getData()},[]
      )

useEffect(()=>{
    const getData = async ()=>{
      const data = await getFavourite()
      setFavourite(data)
    };
    getData()
},[]
)  


return (
  <>
  <h1>Item Tracker</h1>
  <DataDump value={idList}>
    <NavBar />
      <Routes>
          <Route path="/items" element={<AllItems />} />
          <Route path="/items/search" element={<ItemSearch />} />          
          <Route path="/items/:id" element={<OneItem />} />
      </Routes>
      <ListFavourite favourite={favourite} />
  </DataDump> 
  </>
)


}

export default App


/* GRAVEYARD



*/