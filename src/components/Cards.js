import React from "react";

export default function Cards(props){

    // function handleDelete(id){
    //     props.notes.map((note) => {
    //         if(note.id === id){fetch('http://localhost:8000/notes', {
    //             method : 'DELETE'
    //         })}
    //     })
        
    // }

    return (  
        <div className="notes">
        {props.notes.map((note) => (
            <div className="card" key={note.id}>
            <h1 className="displayTitle">{note.title}</h1>
            <p className="displayContent">{note.content}</p>
            {/* <button onClick={handleDelete()}>delete note</button> */}
            </div>
        ))}     
        </div>
    );
}
 
