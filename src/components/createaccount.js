import React from "react";
import { Link } from "react-router-dom";
import "./createaccount.css";

const CreateAccount = () => {
  return (
    <form>
      <div className="coverC">
        <h1 className="coverC">Create Account</h1>
        <p style={{ textAlign: 'left' }}>Create a free account in minutes!</p>

        <input type="text" placeholder="username" />
        <input type="text" placeholder="surname" />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input style={{ width: '28%', marginRight: '2%' }} placeholder="+90" />
          <input style={{ width: '70%' }} type="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone" />
        </div>

        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat Password" />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input style={{ width: '5%' }} type="radio" />
          <p style={{ width: '90%', marginBottom: 0 }}>I have read <a className="alt" href="https://www.bitci.com/page/legals/privacy-notice" target="blank">Privacy Notice, Privacy Policy</a> I accept <a className="alt" href="https://www.bitci.com/page/legals/user-agreement" target="blank">User Agreement.</a></p>
        </div>

        {/* Additional consent sections... */}

        <button>Create Account</button>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </form>
  );
}

export default CreateAccount;
