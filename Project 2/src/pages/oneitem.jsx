import { getOneItem } from "../services"

const OneItem = ()=>{

    return (
        <>
        <h2>One Item</h2>
        <button onClick={getOneItem}>Click to request data(TEST)</button>
        </>
    )
}

export default OneItem