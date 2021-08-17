import React, {useState} from 'react'
function ToDoList() {

    let [toDo, setToDo] = useState([]);
    let [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDo([...toDo, text]);
        setText("");
    }
//bs comment
//bs comment
//bs comment
//bs comment
//bs comment
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
                <button type="submit">Enter</button>
            </form>
            <div>
                <h5>{JSON.stringify(toDo)}</h5>
            
            </div>
        </div>
    )
}

export default ToDoList
