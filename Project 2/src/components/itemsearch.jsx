
const ItemSearch =()=>{

    function searchhandler(FormData){
        const input = FormData.get("Name")
        const found = Object.keys(idList).filter(key => key.includes(input))
               
        console.log(found)

        
    }


    return (
        <>
        <form>
            <input name="Name"></input>
            <button type="submit">Search</button>
        </form>
        
        
        </>
    )


}

export default ItemSearch