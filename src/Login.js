import React, { useState, useEffect } from 'react';
import Home from './Home';
import logo from './images/logo.png';
import fire from './fire';
import './Login.scss';

const Login = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <Home handleLogout={handleLogout} user={user.email} />
      ) : (
        <div className="Login">
          <img src={logo} className="Login-logo" alt="spnft-logo" />
          <label>
            Korisničko ime
            <input
              type="text"
              autoFocus
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <p className="errorMessage">{emailError}</p>
          <label>
            Lozinka
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="errorMessage">{passwordError}</p>
          <button className="Login-btn" onClick={handleLogin}>
            Prijavi se
          </button>
          <p className="Login-newUser">
            Nemaš račun? Kotaktiraj administratora na{' '}
            <span>admin_spnft@gmail.com</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Login;
