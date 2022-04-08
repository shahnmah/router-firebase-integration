import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div className='login'>
            <h3>Login Here</h3>
            <form>
                <input type="email" placeholder='Your Email' /> <br />
                <input type="password" placeholder='Your Password' /><br />
                <input type="submit" value="Login" />
            </form>
            <div className='other-sign-in'>
                <button onClick={signInWithGoogle}>Google Sign In</button>
                <button>FaceBook Sign In</button>
            </div>
        </div>
    );
};

export default Login;