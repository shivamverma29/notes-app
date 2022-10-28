import React from "react";

export default function Home(){
    const [title, setTitle] = React.useState("")
    const [content, setContent] = React.useState("")
    
    function handleSubmit(event){
        const noteTemp = {title, content}
        fetch('http://localhost:8000/notes',{
            method : 'POST',
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(noteTemp)
        })
    }

       return(
        <div className="addNote">
            <div className="title">
            <h2>Title :</h2>
        <input 
        required
            type= "text"
            placeholder="Title"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
            value = {title}
            className="titleInput"
        /></div>
        <div className="content">
        <h2>Description :</h2>
        <textarea 
        required
            className="contentInput"
            value={content}
            placeholder="note..."
            name="content"
            onChange={(event) => setContent(event.target.value)}
        /></div>
    
        <button onClick={handleSubmit} className="addButton">Add Note</button>  
        </div>)
}