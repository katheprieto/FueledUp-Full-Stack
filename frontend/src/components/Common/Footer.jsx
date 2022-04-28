import React, { useEffect, useState } from "react";

export default function Footer({ price }) {
  let pageUrl = window.location.toString();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const key = localStorage.getItem("LOGIN_USER_KEY");

  useEffect(() => {
    if (pageUrl.includes("cart")) {
      setShowCheckoutButton(false);
    }
  }, []);

  return (
    <footer>
      {key != null && (
        <div class="end">
          <p>Subtotal: ${price}</p>
          {showCheckoutButton ? (
            <a href="/cart">
              <button>Check your Cart</button>
            </a>
          ) : (
            <a href="/Shipping">
              <button>Checkout</button>
            </a>
          )}
        </div>
      )}
    </footer>
  );
}
