/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Checkbox6 } from "../../icons/Checkbox6";
import { NortonIcon2 } from "../../icons/NortonIcon2";
import { Buttons } from "../Buttons";
import { Forms } from "../Forms";
import "./style.css";

export const BillingSummary = ({ className }) => {
  return (
    <div className={`billing-summary ${className}`}>
      <NortonIcon2 className="norton-icon" />
      <Forms
        boxClassNameOverride="forms-9"
        className="forms-8"
        size="large"
        state="default"
        textClassName="forms-10"
        type="comment"
        variant="one"
      />
      <div className="text-wrapper-10">Billing Summary</div>
      <img className="polygon-2" alt="Polygon" src="/img/polygon-2.svg" />
      <div className="group-2">
        <div className="text-wrapper-11">Grand Total</div>
        <div className="text-wrapper-12">$3,439.00</div>
        <img className="vector-4" alt="Vector" src="/img/vector-4.svg" />
      </div>
      <Buttons className="buttons-instance" icon={false} size="medium" type="primary" />
      <div className="checkbox-3">
        <Checkbox6 className="checkbox-6" color="#B2BCCA" fill="#1660CF" />
        <img
          className="my-billing-and"
          alt="My billing and"
          src="/img/my-billing-and-shipping-address-are-the-same.png"
        />
      </div>
      <div className="group-3">
        <div className="text-wrapper-13">Discount</div>
        <div className="text-wrapper-14">-$749.99</div>
      </div>
      <div className="group-4">
        <div className="text-wrapper-13">Subtotal</div>
        <div className="text-wrapper-15">$3720,27</div>
      </div>
      <div className="group-5">
        <p className="warranty-platinum">
          <span className="span">Warranty </span>
          <span className="text-wrapper-16">(Platinum)</span>
        </p>
        <div className="text-wrapper-17">Remove</div>
        <div className="text-wrapper-18">$259.99</div>
      </div>
      <div className="group-6">
        <div className="text-wrapper-13">Shipping</div>
        <div className="text-wrapper-19">$0.00</div>
      </div>
      <div className="group-7">
        <div className="text-wrapper-13">Tax</div>
        <div className="text-wrapper-18">$228.72</div>
      </div>
    </div>
  );
};
