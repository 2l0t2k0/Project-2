import { NavLink, UNSAFE_shouldHydrateRouteLoader } from "react-router-dom"
import { deleteFavourite } from "../services"


const ListFavourite =({favourite})=>{
    const handleDelete = async (x)=>{
        await deleteFavourite(x)
        setReload(1)
    }


    return (
        <ul>
        {favourite?.records?.map((item) =>(
            <li key={item?.id}>
                <NavLink to={`items/${item?.fields?.ID}`}>{item?.fields?.Name}</NavLink>
                <h4>Price: {item?.fields?.Price}</h4>
                <button onClick={()=>handleDelete(item?.id)}>Delete</button>
            </li>
        ))}
        
        
        </ul>
    )
}

export default ListFavourite