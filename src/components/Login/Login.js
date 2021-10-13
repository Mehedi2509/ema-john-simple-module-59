import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.from || '/';
    console.log(redirect_uri);

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h1>Login Form</h1>
                <form onSubmit="">
                    <input className="login-input" type="email" name="email" id="" placeholder="Enter email" />
                    <br />
                    <input className="login-input" type="password" name="password" id="" placeholder="Enter password" />
                    <br />
                    <input className="login-btn" type="submit" value="Login" />
                </form>

                <div>---------------- or ---------------</div>
                <div>
                    <p>You have no account? <Link to="/register">Create account</Link></p>
                    <button onClick={handleGoogleLogin} className="login-btn">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;