import React, {useState} from 'react'

function ToDoList() {

    let [toDo, setToDo] = useState([]);
    let [text, setText] = useState("");

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

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
                <button type="submit">Enter</button>
            </form>
            <div>
                <div className="todo_container">{
                    toDo.map((x, index) => {
                        return <div className="todo_element" key={index}>
                            <p>{index + 1}: {x}</p>
                            <button onClick={e => handleRemove(index)}>Remove</button>
                            <button >Edit</button>
                        </div>
                    })
                }</div>
            </div>
        </div>
    )
}

export default ToDoList
