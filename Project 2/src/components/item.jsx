import { useParams } from "react-router-dom"
import { getOneItem, addFavourite} from "../services"
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
const [formData, setFormData] = useState({"Name":"","ID":0, "Price":0
})
const [currentDate, setCurrentDate] = useState(new Date());

useEffect(()=>{
    const getData = async ()=>{
        const data = await getOneItem(id)
    
        setBuy(data.data[id].high)
        setSell(data.data[id].low)
    const match = datadump.find(datadump => datadump.id == id)    
    setName(match.name)
    setExamine(match.examine)
    setHighAlch(match.highalch)
    setFormData({"Name":match.name, "ID":match.id,"Price":data.data[id].high})
    };
    getData()},[id]

)

const handleAdd = (event)=>{
    
    addFavourite(formData)
    }



return (
<>
<img src={`https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=${id}`} alt="Icon" width="100" height="100"></img>
<h3>{name}</h3>
<h2>Latest Selling Price:{sell}</h2>
<h2>Latest Buying Price:{buy}</h2>
<h2>High Alch:{highalch}</h2>
<h3>{examine}</h3>
<span>
    <button onClick={handleAdd}>Add</button>
    <button>Update</button>
</span>
</>
)
}

export default ItemPage