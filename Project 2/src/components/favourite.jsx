import { NavLink } from "react-router-dom"

const ListFavourite =({favourite})=>{
    console.log(favourite)


    return (
        <ul>
        {favourite?.records?.map((item) =>(
            <li key={item?.fields?.ID}>
                <NavLink to={`items/${item?.fields?.ID}`}>{item?.fields?.Name}</NavLink>
            </li>
        ))}
        
        
        </ul>
    )
}

export default ListFavourite