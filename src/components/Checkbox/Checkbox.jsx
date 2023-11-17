/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Checkbox2 } from "../../icons/Checkbox2";
import { Checkbox6 } from "../../icons/Checkbox6";
import { Component77 } from "../../icons/Component77";
import { Component771 } from "../../icons/Component771";
import "./style.css";

export const Checkbox = ({ checkbox, size, className }) => {
  return (
    <div className={`checkbox size-12-${size} checkbox-${checkbox} ${className}`}>
      {!checkbox && size === "small" && <Checkbox2 className="instance-node" />}

      {size === "small" && checkbox && <Checkbox6 className="instance-node" color="#B2BCCA" fill="#1660CF" />}

      {size === "small" && (
        <div className="create-an-account">
          {!checkbox && <p className="text-wrapper-26">Create an account for later use</p>}

          {checkbox && <p className="text-wrapper-26">My billing and shipping address are the same</p>}
        </div>
      )}

      {checkbox && size === "large" && <Component771 className="component" />}

      {!checkbox && size === "large" && <Component77 className="component" />}

      {size === "large" && <p className="p">Keep me up to date on news and offers</p>}
    </div>
  );
};

Checkbox.propTypes = {
  checkbox: PropTypes.bool,
  size: PropTypes.oneOf(["large", "small"]),
};
