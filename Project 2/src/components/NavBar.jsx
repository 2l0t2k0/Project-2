import { NavLink } from "react-router";

const NavBar =() => {

    return(
    <>
    <ul>
        <li><NavLink to="items">All Items</NavLink></li>
        <li><NavLink to="items/Nature_Rune">Nature Rune</NavLink></li>
    </ul>
    
    </>

    )
}

export default NavBar