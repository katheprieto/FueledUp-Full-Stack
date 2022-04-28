import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";

const OrderConfirmation = () => {
  const selector = useSelector((state) => state);
  const user = JSON.parse(localStorage.getItem("LOGIN_USER_KEY"));
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <>
      <div class="top">
        <p>- Thank you for your ordering -</p>
      </div>
      <div class="shipment-details">
        <div class="thanking">
          <p>
            Thank you for ordering {user.user_name} .We recieved your request.{" "}
          </p>
          <p>Our staff will be contacting with you to tell next steps.</p>
          <button>
            <a href="/">Back to Home</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
