import React from 'react';
import { Navbar } from '../components/Navbar';
import '../styling/login.css';

export const Login = () => {
  return (
    <>
     <Navbar/>
    <div className='login-page'>
      <div className="login-container">
        <div className="login-box">
          <h1>Sign in to Masterminds</h1>
          <button className="google-button">Sign in with Google</button>
          <div className="separator">
            <span>or sign in with email</span>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
              <a href="/reset" className="forgot-password">Forgot Password?</a>
            </div>
            <div className="form-group remember-me">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="login-button">Log in</button>
          </form>
          <div className="signup-link">
            Don’t have an account? <a href="/signup">Sign up here</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};