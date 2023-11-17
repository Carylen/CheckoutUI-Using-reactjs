/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Buttons = ({ type, icon, size, className }) => {
  return (
    <div className={`buttons size-6-${size} ${type} icon-${icon} ${className}`}>
      <div className="pay">
        {!icon && <>Pay $3,439.00</>}

        {icon && (
          <>
            <img
              className="bx-bxs-credit-card"
              alt="Bx bxs credit card"
              src={type === "secondary" ? "/img/bx-bxs-credit-card.svg" : "/img/bx-bxs-credit-card-2.svg"}
            />
            <div className="text-wrapper-9">Pay $3,439.00</div>
          </>
        )}
      </div>
    </div>
  );
};

Buttons.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  icon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium"]),
};
