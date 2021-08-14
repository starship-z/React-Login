import React, {useState} from 'react'

function Counter() {
    let [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={e => setCount(count+1)}>increase</button>
            <button onClick={e => setCount(count-1)}>decrease</button>
        </div>
    )
}

export default Counter
