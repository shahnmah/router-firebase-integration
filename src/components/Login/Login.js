import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='login'>
            <h3>Login Here</h3>
            <form>
                <input type="email" placeholder='Your Email' /> <br />
                <input type="password" placeholder='Your Password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;