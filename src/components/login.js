import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="register-form">
        <label htmlFor="email">email</label>
        <input type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
        <label htmlFor="password">password</label>
        <input type="password" placeholder="*********" id="password" name="password" />
        <button>Log in</button>
        <Link to="/createaccount">
          <button className="link-button">Create Account</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
