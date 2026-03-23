import { useParams } from "react-router-dom"
import { getIcon, getOneItem } from "../services"
import { useEffect, useState } from "react"

const ItemPage = () =>{
//const {id} = useParams
const [buy, setBuy] = useState(0)
const [sell,setSell]= useState(0)
const id = 561

useEffect(()=>{
    const getData = async ()=>{
        const data = await getOneItem(id)
    
        setBuy(data.data[id].high)
        setSell(data.data[id].low)
    };
    getData()},[id]

)
// const data2 =data
// console.log(data)
//console.log(data.data[id].low)

return (
<>
<h3>Nature Rune(Placeholder)</h3>
<h2>Latest Selling Price:{sell}</h2>
<h2>Latest Buying Price:{buy}</h2>
<span><button>Add</button><button>Remove</button></span>
</>
)
}

export default ItemPage