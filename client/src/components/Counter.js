import React, {useState} from 'react'
import axios from 'axios'

function Counter() {
    let [count, setCount] = useState(0);
    let [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let temp = parseInt(text, 10);
        setCount(temp);
        setText("");
    }

    const handleIncrease = async () => {
        try {
            let temp = await axios.get("http://localhost:4000/counterIncrease");
            setCount(temp.data.counter);
            console.log(temp)
        } catch(e) {
            console.log(e);
        }
    }

    const handleDecrease = async () => {
        try {
            let temp = await axios.get("http://localhost:4000/counterDecrease");
            setCount(temp.data.counter);
            console.log(temp)
        } catch(e) {
            console.log(e);
        }
    }
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleDecrease}>decrease</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
                <button type="submit">Enter</button>
            </form>
            </div>
            )
        }
        
        export default Counter
