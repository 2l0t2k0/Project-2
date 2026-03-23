import { NavLink } from "react-router";

const NavBar =() => {

    return(
    <>
    <ul>
        <li><NavLink to="items">Search Items</NavLink></li>
        <li><NavLink to="items/561">Nature Rune</NavLink></li>
    </ul>
    
    </>

    )
}

export default NavBar