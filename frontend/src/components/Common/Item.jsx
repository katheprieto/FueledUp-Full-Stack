import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  increaseCart,
  decreaseCart,
} from "../../reducks/carts/operations";
import { getCarts, getSubtotal } from "../../reducks/carts/selectors";
import { push } from "connected-react-router";

const Item = ({ item }) => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);
  const [particularCart, setParticularCart] = useState(null);
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (carts != undefined && carts.length > 0) {
      console.log("carts");
      console.log(carts);
      let matchedCarts = carts.filter((cart) => cart.item.id == item.id);
      console.log("matchedCarts");
      console.log(matchedCarts);
      if (matchedCarts.length > 0) {
        setParticularCart(matchedCarts[0]);
      } else {
        setParticularCart(null);
      }
    }
  }, [subtotal]);

  const clickAddCart = () => {
    if (key) {
      dispatch(addCart(item));
    } else {
      dispatch(push("/signin"));
    }
  };
  const clickPlusCart = () => {
    dispatch(increaseCart(particularCart.id));
  };
  const clickMinusCart = () => {
    dispatch(decreaseCart(particularCart.id));
  };
  return (
    <>
      <section class="items">
        <div class="pictures">
          <div class="photos">
            <div class="product">
              <img class="pic" src={item.image} alt="" />
            </div>
            <div class="title">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div class="inside">
                <p>${item.price}</p>
                {particularCart && particularCart.quantity > 0 ? (
                  <div>
                    <button class="incr-decr">
                      <span class="minus" onClick={clickMinusCart}>
                        -
                      </span>
                      <span class="count">{particularCart.quantity} </span>
                      <span class="plus" onClick={clickPlusCart}>
                        +
                      </span>
                    </button>
                  </div>
                ) : (
                  <button onClick={clickAddCart}>Add +</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Item;
