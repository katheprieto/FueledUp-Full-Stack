import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";
import Home from "../containers/Home";
import CrossX from "../assets/img/cross.png";

import { push } from "connected-react-router";

const Signin = () => {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signInButton = () => {
    dispatch(signIn(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Home />
      <section class="pop">
        <div class="Sign-In-form">
          <form action="">
            <div class="form_head">
              <img
                onClick={closeButton}
                class="cancel-image"
                src={CrossX}
                alt=""
              />
              <p class="logo1">
                <span>FUELED</span>UP
              </p>
              <p class="logo2">SIGN IN</p>
            </div>
            <label for="email">
              <br></br>
            </label>
            <input
              type="text"
              onChange={inputEmail}
              placeholder="Email Address"
              name="email"
              required
              value={email}
            />
            <label for="psw">
              <br></br>
            </label>
            <input
              type="password"
              onChange={inputPassword}
              placeholder="Password"
              name="psw"
              required
              value={password}
            />
            <br></br>
            <button onClick={signInButton}>JOIN US</button>
            <p class="Sign-In-member">
              Already a Member?<a href="/signup">Join Us</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signin;
