import React from 'react';
import '../styling/signUp.css';
import { Navbar } from '../components/Navbar';

export const Signup = () => {
  return (
    <>
    <Navbar/>
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign up to Masterminds</h2>
        <button className="google-signup">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google logo"
            className="google-logo"
          />
          Sign up with Google
        </button>
        <div className="divider">
          <span>or</span>
        </div>
        <form>
          <div className="name-fields">
            <div>
              <label>First name</label>
              <input type="text" placeholder="First name" required />
            </div>
            <div>
              <label>Last name</label>
              <input type="text" placeholder="Last name" required />
            </div>
          </div>
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" required />
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          <div className="terms">
            <label>
              <input type="checkbox" required />
              I agree with Masterminds’s Terms of Service, Privacy Policy, and
              default Notification Settings.
            </label>
          </div>
          <button type="submit" className="signup-button">
            Create Account
          </button>
          <div className="signup-link">
            Aleady have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};