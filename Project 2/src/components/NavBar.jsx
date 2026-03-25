import { NavLink } from "react-router";

const NavBar =() => {

    return(
    <>
    <ul className="Nav">
        <li className="Navli"><NavLink to="">Home</NavLink></li>
        <li className="Navli"><NavLink to="items">All Items</NavLink></li>
        <li className="Navli"><NavLink to="items/search">Search Items</NavLink></li>
        
    </ul>
    
    </>

    )
}

export default NavBar