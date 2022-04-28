import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/users/operations";
import CrossX from "../assets/img/cross.png";
import Home from "../containers/Home";
import { push } from "connected-react-router";

const SignUp = () => {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };
  const [user_name, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");
  const inputUserName = (event) => {
    setUserName(event.target.value);
  };
  const inputEmail = (event) => {
    setEmail(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const signUpButton = () => {
    dispatch(signUp(user_name, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Home />
      <section class="pop">
        <div class="form">
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
              <p class="logo2">SIGN UP</p>
            </div>
            <label for="username">
              <br></br>
            </label>
            <input
              type="text"
              onChange={inputUserName}
              placeholder="User Name"
              name="user_name"
              required
              value={user_name}
            />
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
            <button onClick={signUpButton}>SIGN UP</button>
            <p class="member">
              Already a Member?<a href="/signin">Sign In</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
