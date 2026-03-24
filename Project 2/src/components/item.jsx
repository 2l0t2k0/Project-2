import { useParams } from "react-router-dom"
import { getIcon, getOneItem } from "../services"
import { useEffect, useState,useContext } from "react"
import { DataDump } from "../App"

const ItemPage = () =>{
const {id} = useParams()
const [buy, setBuy] = useState(0)
const [sell,setSell]= useState(0)
const [examine,setExamine]= useState("Placeholder")
const [highalch,setHighAlch]= useState(0)
const datadump = useContext(DataDump)
const [name,setName] = useState("Placeholder")
useEffect(()=>{
    const getData = async ()=>{
        const data = await getOneItem(id)
    
        setBuy(data.data[id].high)
        setSell(data.data[id].low)
    const match = datadump.find(datadump => datadump.id == id)    
    setName(match.name)
    setExamine(match.examine)
    setHighAlch(match.highalch)
    
    };
    getData()},[id]

)
 //console.log(data)
 
//console.log(match)
 



return (
<>
<h3>{name}</h3>
<h2>Latest Selling Price:{sell}</h2>
<h2>Latest Buying Price:{buy}</h2>
<h2>High Alch:{highalch}</h2>
<h3>{examine}</h3>
<span><button>Add</button><button>Remove</button></span>
</>
)
}

export default ItemPage