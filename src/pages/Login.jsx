import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard');
  };

  return (
    <div className="login-body">
      <main className="login-page">
        <section className="login-card" aria-label="Shivaji College ERP login">
          <div className="college-seal" aria-hidden="true">
            <span className="material-symbols-outlined">account_balance</span>
          </div>
          <h1>SHIVAJI COLLEGE</h1>
          <p className="login-subtitle">Student Portal Login</p>

          <form className="login-form">
            <label htmlFor="user-id">User Id</label>
            <div className="field-shell">
              <span className="material-symbols-outlined" aria-hidden="true">person</span>
              <input id="user-id" name="user-id" type="text" autoComplete="username" autoFocus />
            </div>

            <label htmlFor="password">Password</label>
            <div className="field-shell">
              <span className="material-symbols-outlined" aria-hidden="true">lock</span>
              <input id="password" name="password" type="password" autoComplete="current-password" />
            </div>

            <a className="forgot-link" href="#">Forgot Password ?</a>
            <button className="primary-button" type="button" id="sign-in" onClick={handleSignIn}>
              <span>Sign in</span>
              <span className="material-symbols-outlined" aria-hidden="true">login</span>
            </button>
          </form>
        </section>
      </main>
      <footer className="erp-footer">Copyright © 2026. All rights reserved by Ayush Kumar.</footer>
    </div>
  );
};

export default Login;
