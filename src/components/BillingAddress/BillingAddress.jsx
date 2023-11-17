/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Checkbox } from "../Checkbox";
import { Forms } from "../Forms";
import "./style.css";

export const BillingAddress = ({ className }) => {
  return (
    <div className={`billing-address ${className}`}>
      <div className="text-wrapper-8">Billing Address</div>
      <Forms
        className="forms-instance"
        divClassName="forms-4"
        groupClassName="forms-3"
        rectangleClassName="forms-2"
        size="large"
        state="approved"
        text2="username@gmail.com"
        text3="Email Address"
        type="textbox"
        variant="one"
      />
      <Forms
        boxClassName="forms-2"
        className="forms-5"
        size="large"
        state="empty"
        text="Street Address"
        type="textbox"
        variant="one"
      />
      <div className="rectangle-6" />
      <div className="frame-3">
        <Forms
          className="forms-6"
          overlapGroupClassName="forms-7"
          size="large"
          state="filled"
          text="First Name"
          text1="Alex"
          type="textbox"
          variant="one"
        />
        <Forms
          className="forms-6"
          overlapGroupClassName="forms-7"
          size="large"
          state="filled"
          text="Last Name"
          text1="Driver"
          type="textbox"
          variant="one"
        />
      </div>
      <div className="frame-4">
        <Forms
          className="forms-6"
          overlapGroupClassName="forms-7"
          size="large"
          state="filled"
          type="dropdown"
          variant="one"
        />
        <Forms
          className="forms-6"
          overlapGroupClassName="forms-7"
          size="large"
          state="filled"
          text="City"
          text1="San Diego"
          type="textbox"
          variant="one"
        />
      </div>
      <div className="frame-5">
        <Forms
          className="forms-6"
          overlapGroupClassName="forms-7"
          size="large"
          state="filled"
          text="Zip/Postal Code"
          text1="22434"
          type="textbox"
          variant="one"
        />
        <Forms
          className="forms-6"
          overlapGroupClassName="forms-7"
          size="large"
          state="filled"
          text="Phone"
          text1="+ 123 456 789 111"
          type="textbox"
          variant="one"
        />
      </div>
      <Checkbox checkbox className="checkbox-instance" size="small" />
      <Checkbox checkbox={false} className="checkbox-2" size="small" />
    </div>
  );
};
