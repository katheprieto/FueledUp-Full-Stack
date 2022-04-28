import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";

const CartItem = ({ cart, quantity, cartId }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
    dispatch(increaseCart(cartId));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(cartId));
  };

  useEffect(() => {
    console.log(cart.image);
    console.log(cart);
    console.log(carts);
  }, []);

  return (
    <>
      <div class="pictures">
        <div class="product">
          <div class="photos">
            <img
              class="pic"
              src={"https://res.cloudinary.com/www-techis-io/" + cart.image}
              alt=""
            />
          </div>
        </div>
        <div class="title">
          <h4>{cart.name}</h4>
          <p>{cart.description}</p>
          <div class="inside">
            <p>${cart.price}</p>
            <button>
              {" "}
              <span class="minus" onClick={clickMinusCart}>
                -
              </span>
              <span class="count">{quantity} </span>
              <span class="plus" onClick={clickPlusCart}>
                +
              </span>
            </button>
          </div>
        </div>
        <div />
      </div>
    </>
  );
};

export default CartItem;
