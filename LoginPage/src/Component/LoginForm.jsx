import React, { useState } from 'react'

function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [passward, setPassward] = useState("");

    const handleUsername = (event) =>{
        setUsername(event.target.value)
    }
    const handlePassward = (event) =>{
        setPassward(event.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        onLogin(username, passward);
    };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>UserName:</label>
        <input type="username" value={username} onChange={handleUsername} />
        </div>
        <div>
        <label>Passward:</label>
        <input type="passward" value={passward} onChange={handlePassward}/>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default LoginForm
