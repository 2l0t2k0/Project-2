import { getOneItem } from "../services"
import ItemPage from "../components/item"


const OneItem = ()=>{

    return (
        <>
        <h2>One Item</h2>
        <ItemPage />
        <button onClick={getOneItem}>Click to request data(TEST)</button>
        
        </>
    )
}

export default OneItem