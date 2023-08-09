import React from "react";
import './login.css';


  const login =()=>{
  return(
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="register-form">
        <label htmlFor="email">email</label>
        <input type="email" placeholder="yourmail@gmail.com" id="email" name="email"></input>
        <label htmlFor="password">password</label>
        <input type="password" placeholder="*********" id="password" name="password"></input>
        <button>Log in</button>
        <button className="link-button">Create Account</button>
      </form>
    </div>
  )
}
export default login;
