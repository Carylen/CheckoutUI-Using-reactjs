/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Frame1506 } from "../../icons/Frame1506";
import { Forms } from "../Forms";
import { Radio } from "../Radio";
import "./style.css";

export const PaymentMethod = ({ className }) => {
  return (
    <div className={`payment-method ${className}`}>
      <div className="text-wrapper-20">Payment Method</div>
      <div className="group-8">
        <p className="text-wrapper-21">
          We protect your payment information using encryption to provide bank-level security.
        </p>
        <Frame1506 className="frame-1506" />
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle-7" />
          <div className="rectangle-8" />
          <div className="group-9">
            <div className="mastercard">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-4">
                  <img className="right" alt="Right" src="/img/right-2.svg" />
                  <img className="middle" alt="Middle" src="/img/middle-2.svg" />
                </div>
              </div>
            </div>
            <div className="discover">
              <div className="discover-2">
                <img className="stripe" alt="Stripe" src="/img/stripe.svg" />
                <div className="o-wrapper">
                  <img className="o" alt="O" src="/img/o.svg" />
                </div>
              </div>
            </div>
            <div className="visa">
              <img className="visa-logo" alt="Visa logo" src="/img/visa-logo.svg" />
            </div>
            <div className="maestro">
              <div className="maestro-2">
                <div className="overlap-group-5">
                  <img className="left" alt="Left" src="/img/left.svg" />
                  <img className="right-2" alt="Right" src="/img/right.svg" />
                  <img className="middle-2" alt="Middle" src="/img/middle.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="group-10">
            <Radio className="radio-2" radio size="small" text="Pay with Credit Card" />
            <Forms
              className="forms-11"
              frameClassName="forms-13"
              rectangleClassName="forms-12"
              size="large"
              state="approved"
              text2="1234 5678 9101 3456"
              text3="Card number"
              type="textbox"
              variant="one"
            />
            <Forms
              boxClassNameOverride="forms-15"
              className="forms-14"
              labelClassName="forms-13"
              size="large"
              state="default"
              textClassName="forms-16"
              type="textbox"
              variant="one"
            />
          </div>
          <div className="group-11">
            <Forms
              boxClassNameOverride="forms-13"
              className="forms-17"
              labelClassName="forms-13"
              size="large"
              state="filled"
              text="Card Security Code"
              text1="***"
              type="textbox"
              variant="one"
            />
            <div className="text-wrapper-22">What is this?</div>
          </div>
        </div>
      </div>
      <div className="component-2">
        <p className="text-wrapper-23">You will be redirected to the PayPal website after submitting your order</p>
        <div className="pay-pal-wrapper">
          <img className="pay-pal-2" alt="Pay pal" src="/img/paypal.png" />
        </div>
        <Radio className="radio-3" radio={false} size="small" text1="PayPal" />
      </div>
    </div>
  );
};
