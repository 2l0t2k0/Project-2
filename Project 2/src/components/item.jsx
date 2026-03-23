import { useParams } from "react-router-dom"
import { getOneItem } from "../services"
import { useEffect, useState } from "react"

const ItemPage = () =>{
//const {id} = useParams
const [data, setData] = useState({});
const id = 561

useEffect(()=>{
    const getData = async ()=>{
        const data = await getOneItem(id)
        
        setData(data)
    };
    getData()},[id]

)
// const data2 =data
// console.log(data)
console.log(data.data[id].low)

return (
<>
<h3>Nature Rune(Placeholder)</h3>
<h2>Latest Selling Price:{data.data[id].low}</h2>
<h2>Latest Buying Price:{data.data[id].high}</h2>
<h4>Historic 6 Month:</h4>
<span><button>Add</button><button>Remove</button></span>
</>
)
}

export default ItemPage