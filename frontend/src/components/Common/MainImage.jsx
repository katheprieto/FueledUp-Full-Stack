import React, { useState } from "react";
import ImageRight from "../../assets/img/right.svg";
import ImageLeft from "../../assets/img/left.svg";

const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <div class="images">
        <div class="container">
          <div class="text">
            <p class="text1" id="high">
              HIGH
            </p>
            <p class="text2">PERFORMANCE</p>
            <p class="text1">SPORTS</p>
            <br />
            <p class="text2">HERBAL PROTIEN</p>
          </div>
          <img class="left" src={ImageLeft} alt="" />

          <img class="right" src={ImageRight} alt="" />
        </div>
      </div>
    </>
  );
};

export default MainImage;
