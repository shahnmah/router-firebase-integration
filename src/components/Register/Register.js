import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='register'>
            <h3>Register Hare</h3>
            <form>
                <input type="text" placeholder='Your Name' /> <br />
                <input type="email" placeholder='Your Email' /> <br />
                <input type="password" placeholder='Your Password' /><br />
                <input type="submit" value="Register" />
            </form>
            <div className='other-sign-in'>
                <button>Google Sign In</button>
                <button>FaceBook Sign In</button>
            </div>
        </div>
    );
};

export default Register;