import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };




  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src="https://cdn2.downdetector.com/static/uploads/logo/amazon.png"/>
        </Link>
        
        <div className='login__container'>
            <h1>Sign-In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e=>setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange=
                {e=>setPassword(e.target.value)}/>

                <button onClick={signIn} type='submit'
                className='login__signInButton'>Sign In</button>


            </form>

            <p>
                By signing-in you agree to the AMAZONE FAKE 
                CLONE conditions of use & sale .Please  see 
                our Privacy Notice,our cookies and  our Interested-Based Ads Notice.
            </p>

            <button onClick={register}
            className='login__registerButton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login