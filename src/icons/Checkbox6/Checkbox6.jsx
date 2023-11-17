/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Checkbox6 = ({ color = "#828282", fill = "#219653", className }) => {
  return (
    <svg
      className={`checkbox-6 ${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill="white" height="11" rx="1.5" stroke={color} width="11" x="0.5" y="0.5" />
      <rect className="rect" fill={fill} height="12" rx="2" width="12" />
      <path className="path" d="M3 5.91638L5.08398 8L9 3" stroke="white" />
    </svg>
  );
};

Checkbox6.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
};
