import React, {useState} from 'react'

function Login() {
    let [username, setUsername] = useState("");
    let [password, setPass] = useState("");
    let [user, setUser] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsername("");
        setPass("");
        const new_user = {username: username, password: password, status: true};
        setUser(new_user);
    }

    const handleLogOut = () => {
        const new_user = {};
        setUser(new_user);
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>    
                <h1>Login</h1>
                <h5>Username</h5>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=> setPass(e.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
                <br></br>
                <h5>Username: {user.username}</h5>
                <h5>Password: {user.password}</h5>
                <h5>Status: {user.status ? "True" : "False"}</h5>
            </form>
            <button onClick={e => handleLogOut()}>Log Out</button>
        </div>
    )
} 

export default Login
