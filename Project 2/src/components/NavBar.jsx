import { NavLink } from "react-router";

const NavBar =() => {

    return(
    <>
    <ul>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="items">All Items</NavLink></li>
        <li><NavLink to="items/search">Search Items</NavLink></li>
        
    </ul>
    
    </>

    )
}

export default NavBar