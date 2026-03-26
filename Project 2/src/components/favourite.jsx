import { NavLink } from "react-router-dom"
import { deleteFavourite } from "../services"
import { useContext } from "react"
import { reloadFav } from "../App"

const ListFavourite =({favourite}  )=>{
   const {reload,changeReload} = useContext(reloadFav)


    const handleDelete = async (x)=>{
        await deleteFavourite(x)
        changeReload()
    }


    return (
        <ul className="fav">
        {favourite?.records?.map((item) =>(
            <li key={item?.id} className="favli">
                <div className="favliitem">
                    <NavLink to={`items/${item?.fields?.ID}`} className="favliitem">{item?.fields?.Name}</NavLink>
                    <h4>Price: {item?.fields?.Price}</h4>
                </div>
                <div className="favliitem">
                 <button onClick={()=>handleDelete(item?.id)}>Delete</button>   
                </div>
                
            </li>
        ))}
        
        
        </ul>
    )
}
//
export default ListFavourite