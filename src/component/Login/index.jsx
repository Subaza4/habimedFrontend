import React, {useState} from 'react';
import './index.css';
import {FaUser, FaLock} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        console.log('Username:', username);
        console.log('Password:', password);
        if(username === 'test' && password === '123'){
            navigate('/Persona');
        }
    }

    return (
        <div className="wrapper">
            <form action="" onSubmit={login}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text"
                           placeholder='Username'
                           value={username}
                           required
                           onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password"
                           placeholder='Password'
                           required
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className='icon'/>
                </div>

                <div className='remember-forgot'>
                    <label><input type="checkbox"/> Remember me</label>
                    <a href="#">Forgot password</a>
                </div>
                <button type="submit">
                    Login
                </button>
                <div className="register-link">
                    <p>Don't have an acount? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;