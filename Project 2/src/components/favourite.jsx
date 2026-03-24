import { NavLink } from "react-router-dom"

const ListFavourite =({favourite})=>{
    


    return (
        <ul>
        {favourite?.records?.map((item) =>(
            <li key={item?.fields?.ID}>
                <NavLink to={`items/${item?.fields?.ID}`}>{item?.fields?.Name}</NavLink>
                <h4>Price: {item?.fields?.Price}</h4>
            </li>
        ))}
        
        
        </ul>
    )
}

export default ListFavourite