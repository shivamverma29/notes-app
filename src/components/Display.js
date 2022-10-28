import React from "react"
import Cards from "./Cards"

const Display = () => {
    const [notes, setNotes] = React.useState(null)
    // const [isPending, setIsPending] = React.useState(true)

    React.useEffect(()=>{
        fetch('http://localhost:8000/notes')
        .then((response) => response.json())
        .then((data) => setNotes(data));
    }, [notes])

    return ( 
        <div>
            {notes && <Cards notes = {notes}/>}
        </div>
     );
}
 
export default Display;