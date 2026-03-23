import { NavLink } from "react-router";

const NavBar =() => {

    return(
    <>
    <ul>
        <li><NavLink to="items">All Items</NavLink></li>
        <li><NavLink to="items/561">Nature Rune</NavLink></li>
    </ul>
    
    </>

    )
}

export default NavBar