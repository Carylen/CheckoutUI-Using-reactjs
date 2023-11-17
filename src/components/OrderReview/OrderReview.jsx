/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const OrderReview = ({ className }) => {
  return (
    <div className={`order-review ${className}`}>
      <div className="text-wrapper">Order Review</div>
      <div className="div">3 items in card</div>
      <img className="polygon" alt="Polygon" src="/img/polygon-1-2.svg" />
    </div>
  );
};
