import React from 'react';
import { Link, } from 'react-router-dom';
import './Register.css';

const Register = () => {

    return (
        <div className="login-form">
            <h1>Create New Account</h1>
            <div>
                <form>
                    <input className="login-input" type="text" id="" placeholder="Enter your name" />
                    <br />
                    <input className="login-input" type="email" name="email" id="" placeholder="Enter email" />
                    <br />
                    <input className="login-input" type="password" name="password" id="" placeholder="Enter password" />
                    <br />
                    <input className="login-input" type="password" name="re-password" id="" placeholder="Enter re-password" />
                    <br />
                    <input className="login-btn" type="submit" value="Register" />
                </form>

                <div>---------------- or ---------------</div>
                <div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <button className="login-btn">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Register;