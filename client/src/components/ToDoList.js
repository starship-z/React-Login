import React, {useState} from 'react'
import "./ToDoList.css"

function ToDoList() {

    let [toDo, setToDo] = useState([]);
    let [text, setText] = useState("");
    let [textEdit, setTextEdit] = useState("");
    let [edit, setEdit] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDo([...toDo, text]);
        setText("");
    }
    
    const handleRemove = (index) => {
        let temp = [...toDo];
        temp.splice(index, 1);
        setToDo(temp);
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        let temp = [...toDo];
        temp[edit.id] = textEdit; 
        setTextEdit("");
        setEdit({});
        setToDo(temp);
    }
    
    return (
        <div className="container">
        <h1>To Do List:</h1>
            <form className="todo_add" onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
                <button type="submit">Enter</button>
            </form>
            <div>
                <div className="todo_container">{
                    toDo.map((x, index) => {
                        return (
                        <div className="todo_element" key={index}>
                            <p>{index + 1}: {x}</p>
                            <button onClick={e => handleRemove(index)}>Remove</button>
                            <button onClick={e => setEdit({id: index})}>Edit</button>
                            {edit.id === index && 
                            <form onSubmit={e => handleEditSubmit(e)}>
                                <input defaultValue={toDo[edit.id]} onChange={e => setTextEdit(e.target.value)}></input>
                                <button type="submit">Update</button>
                            </form>
                            }
                        </div>
                        )
                    })
                }</div>
            </div>
        </div>
    )
}

export default ToDoList
