import React, { useState } from 'react';
import './style.css';

function Login() {
    const [Login, setLogged] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="login-container">
        
        <div>
    <form className="login-form">
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="form-control"
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="form-control"
            />
        </div>
        <button type="submit" className="login-button">Login</button>
    </form>
    </div>
</div>
);
}


export default Login