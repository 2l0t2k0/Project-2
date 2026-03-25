import { useState,useContext,useEffect } from "react"
import { useParams } from "react-router-dom";
import { DataDump } from "../App";
import { getOneItem } from "../services";

const AddFavourite = ()=>{
const [formData, setFormData] = useState({"Name":"","ID":0,"QTY":0,"Date":"", "Price":0
})
const {id} = useParams()
const [buy, setBuy] = useState(0)
const [name,setName] = useState("Placeholder")
const datadump = useContext(DataDump)

useEffect(()=>{
    const getData = async ()=>{
        const data = await getOneItem(id)
    
        setBuy(data.data[id].high)
        
    const match = datadump.find(datadump => datadump.id == id)    
    setName(match.name)
    
    };
    getData()},[id]
)


const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "QTY") {
      setFormData({ ...formData, QTY: event.target.valueAsNumber });
    } 
    if (name === "ID") {
      setFormData({ ...formData, ID: event.target.valueAsNumber });
    }
    if (name === "Price") {
      setFormData({ ...formData, Price: event.target.valueAsNumber });
    }          
    else {
      setFormData({ ...formData, [name]: value });
    }
  };


const handleSubmit = () =>{


}


return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add to Favourites</legend>

        <label>
          Name:
          <input name="Name" value={formData.Name} onChange={handleChange} defaultValue={`${name}`}/>
          
        </label>
        <br />
        <label>
          Item ID:
          <input name="ID" type="number" value={formData.ID} onChange={handleChange} defaultValue={id} />
        </label>
        <label>
                Price:
                <input
                    type="number"
                    name="Price"
                    value={formData.QTY}
                    onChange={handleChange}
                    defaultValue={`${buy}`}
                />
                </label>
        <br />
        <label>
          QTY:
          <input
            type="number"
            name="QTY"
            value={formData.QTY}
            onChange={handleChange}
            defaultValue={0}
          />
        </label>
        <br />
        <button>Add</button>
      </fieldset>
    </form>
  );

}

export default AddFavourite