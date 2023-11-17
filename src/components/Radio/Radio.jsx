/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Radio = ({ radio, size, className, text = "Pay with Credit Card", text1 = "PayPal" }) => {
  return (
    <div className={`radio ${size} ${className}`}>
      <div className={`radio-button radio-${radio} size-${size}`}>{size === "small" && <div className="active" />}</div>
      <div className="pay-pal">
        {!radio && size === "small" && <>{text1}</>}

        {radio && size === "small" && <>{text}</>}

        {size === "large" && <>Credit card</>}
      </div>
    </div>
  );
};

Radio.propTypes = {
  radio: PropTypes.bool,
  size: PropTypes.oneOf(["large", "small"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
