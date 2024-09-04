import React from "react";
import SocialSignIn from "../SocialSignin/SocialSignIn";
import "./signin.css";

const SignIn = () => {
  return (
    <div className="signLeft">
      <h2>
        <b>Sign In</b>
      </h2>
      <p className="leftContent">Your personal compliance manager</p>
      <input type="text" placeholder="Enter the email address" />
      <button>NEXT</button>
      <p className="sign">
        <b>Sign in using</b>
      </p>
      <SocialSignIn />
      <p>
        Not a Member yet? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default SignIn;
