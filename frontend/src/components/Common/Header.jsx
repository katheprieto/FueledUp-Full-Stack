import React, { useEffect, useState } from "react";
import ImageCartLogo from "../../assets/img/cart.png";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <>
      <div class="header">
        <a href="/">
          <p class="logo1">FUELED</p>
          <p class="logo2">UP</p>
        </a>
        <div class="checkin">
          <ul>
            <li>
              {checkUser ? (
                <span class="logout" onClick={signOutButton}>
                  Logout
                </span>
              ) : (
                <a href="/signin" class="sign-in">
                  Sign In
                </a>
              )}
            </li>
            <br />
            {checkUser && (
              <li>
                <a href="/cart">
                  <img src={ImageCartLogo} alt="" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
