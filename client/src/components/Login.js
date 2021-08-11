import React, {useState} from 'react'

function Login() {
    let [text, setText] = useState("");
    let [password, setPass] = useState("");
    let [loggedIn, setLoggedIn] = useState(false);

    function loginButton() {
        setLoggedIn(true);
    }

    return (
        <div>
            <h1>Login</h1>
            <h5>Username</h5>
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <h5>Password</h5>
            <input type="password" value={password} onChange={e=> setPass(e.target.value)}></input>
            <br></br>
            <button onClick={loginButton}>Submit</button>
            <br></br>
            <h5>{text}</h5>
            <h5>{password}</h5>
            <h5>Status: {loggedIn ? "True" : "False"}</h5>
        </div>
    )
}

export default Login
