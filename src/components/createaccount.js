import React from "react";

import "./createaccount.css";

const createAccount = () => {
  return (
    <div className="cover">
      <h1 className="cover">Create Account</h1>
      <p style={{ textAlign: 'left' }}>Create a free account in minutes!</p>

      <input type="text" placeholder="username" />

      <input type="text" placeholder="surname" />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input style={{ width: '28%', marginRight: '2%' }} placeholder="+90" />
        <input style={{ width: '70%' }} type="text" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone" />
      </div>

      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Repeat Password" />

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input style={{ width: '5%' }} type="radio" />
        <p style={{ width: '90%', marginBottom: 0 }}>I have read <a className="alt" href="https://www.bitci.com/page/legals/privacy-notice" target="blank">Privacy Notice, Privacy Policy</a> I accept <a className="alt" href="https://www.bitci.com/page/legals/user-agreement" target="blank">User Agreement.</a></p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input  style={{ width: '5%' }} type="radio" />
        <p style={{ marginLeft: '10px', width: '90%' }}>
          I have read <a className="alt" href="https://www.bitci.com/page/legals/express-content-statement" target="blank"> Explicit Content Statement</a>,
          I consent to the processing of my personal data.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input style={{ width: '5%' }} className="alt" type="radio" />
        <p style={{ marginLeft: '10px',  width: '90%'}}>
          I consent to the sending of <a className="alt" href="https://www.bitci.com/page/legals/iys" target="blank"> Commercial Electronic Message</a> to me so that I can be informed about the products and services.
        </p>
      </div>

      <button>Create Account</button>
      
      <button>Login</button>
    </div>
  );
}

export default createAccount;