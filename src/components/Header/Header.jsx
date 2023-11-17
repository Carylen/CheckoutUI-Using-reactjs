/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Logo1 } from "../../icons/Logo1";
import "./style.css";

export const Header = ({ className }) => {
  return (
    <div className={`header ${className}`}>
      <Logo1 className="logo-1" />
      <div className="frame-6">
        <div className="text-wrapper-24">Already have an account?</div>
        <div className="text-wrapper-25">Sign In</div>
      </div>
    </div>
  );
};
