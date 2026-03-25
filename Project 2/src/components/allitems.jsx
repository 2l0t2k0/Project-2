import { NavLink } from "react-router-dom";
import { DataDump } from "../App";
import { useContext } from "react";


const AllItemsList = () =>{
    const data = useContext(DataDump)

    return (
        <>
        {data?.map((item)=>(
            <li key={item.id}>
               <NavLink to={`/items/${item.id}`}>{item.name}</NavLink> 
            </li>))
            }
        </>
    )


}

export default AllItemsList