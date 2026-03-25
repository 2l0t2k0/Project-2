import { useState,useEffect, createContext } from 'react'

import { Route, Routes } from "react-router";
import './App.css'
import NavBar from './components/NavBar.jsx'
import OneItem from  './pages/oneitem.jsx'
import AllItems from './pages/allitems.jsx';
import { getFavourite, getIDlist } from './services.js';
import ItemSearch from './components/itemsearch.jsx';
import ListFavourite from './components/favourite.jsx';




export const DataDump = createContext()



const App = () =>{

const [idList, setidList] = useState([])
const [favourite, setFavourite] = useState({})
const [reload,setReload] = useState(0)


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
},[reload]
)  

const changeReload =()=>{
  setReload(reload+1)
}


return (
<>
  <h1>Item Tracker</h1>
  <DataDump value={idList}>
    <NavBar />
      <div className='container'>
        <div className='item'>
      <Routes>
          <Route path="/items" element={<AllItems />} />
          <Route path="/items/search" element={<ItemSearch />} />          
          <Route path="/items/:id" element={<OneItem />} />
      </Routes>
        </div>
        <div className='item' >
      <h3 >Favourites <button onClick={()=>changeReload()}>Click Me to update list(placeholder)</button> </h3>
      <ListFavourite favourite={favourite} updateReload={changeReload} />
      </div>
      </div>
  </DataDump> 
</>
)


}

export default App


/* GRAVEYARD



*/