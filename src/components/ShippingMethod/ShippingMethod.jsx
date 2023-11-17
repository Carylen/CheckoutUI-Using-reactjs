/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Radio } from "../Radio";
import "./style.css";

export const ShippingMethod = ({ className }) => {
  return (
    <div className={`shipping-method ${className}`}>
      <div className="text-wrapper-3">Shipping Method</div>
      <div className="rectangle">
        <div className="overlap-group">
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <p className="USPS-class-with">
            USPS 1st Class With Tracking
            <br />
            (5 - 13 days) COVID19 Delay
          </p>
          <Radio className="radio-instance" radio size="small" text="$2.99" />
          <img className="image" alt="Image" src="/img/image-36.png" />
        </div>
      </div>
      <div className="rectangle-4">
        <p className="USPS-PRIORITY-with">
          USPS PRIORITY With Tracking
          <br />
          (5 - 10 days) COVID19 Delay
        </p>
        <Radio className="design-component-instance-node" radio={false} size="small" text1="$9.00" />
        <div className="logo">
          <div className="overlap-group-2">
            <div className="rectangle-5" />
            <div className="text-wrapper-4">faster</div>
          </div>
        </div>
      </div>
    </div>
  );
};
