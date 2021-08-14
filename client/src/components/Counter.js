import React, {useState} from 'react'

function Counter() {
    let [count, setCount] = useState(0);
    let [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = parseInt(text, 10);
        setCount(temp);
        setText("");
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={e => setCount(count+1)}>increase</button>
            <button onClick={e => setCount(count-1)}>decrease</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
                <button type="submit">Enter</button>
            </form>
            </div>
            )
        }
        
        export default Counter
