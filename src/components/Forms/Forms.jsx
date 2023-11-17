/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Forms = ({
  type,
  state,
  size,
  variant,
  className,
  rectangleClassName,
  groupClassName,
  divClassName,
  boxClassName,
  text = "First Name",
  overlapGroupClassName,
  text1 = "Alex",
  boxClassNameOverride,
  textClassName,
  text2 = "username@gmail.com",
  frameClassName,
  text3 = "Email Address",
  labelClassName,
}) => {
  return (
    <div className={`forms ${type} ${variant} size-1-${size} ${className}`}>
      {variant === "one" && (
        <div className={`overlap-group-3 ${overlapGroupClassName}`}>
          <div
            className={`box ${state} type-0-${type} size-3-${size} ${
              state === "empty"
                ? boxClassName
                : state === "approved" || type === "dropdown"
                ? rectangleClassName
                : state === "default" || (state === "filled" && type === "textbox")
                ? boxClassNameOverride
                : undefined
            }`}
          />
          {state === "empty" && (
            <div className="label">
              <div className="first-name">{text}</div>
            </div>
          )}

          {state === "approved" && (
            <div className={`group ${groupClassName}`}>
              <img className="vector" alt="Vector" src="/img/vector-2.svg" />
            </div>
          )}

          {(state === "approved" ||
            type === "comment" ||
            (state === "default" && type === "textbox") ||
            (state === "filled" && type === "textbox")) && (
            <>
              <div
                className={`text size-5-${size} state-${state} type-1-${type} ${
                  ["default", "filled"].includes(state)
                    ? textClassName
                    : state === "approved"
                    ? divClassName
                    : undefined
                }`}
              >
                {state === "filled" && <>{text1}</>}

                {state === "default" && type === "textbox" && size === "large" && <>MM/YY</>}

                {type === "comment" && <>Type here...</>}

                {type === "textbox" && state === "default" && size === "small" && <>00000</>}

                {state === "approved" && <>{text2}</>}
              </div>
              <div
                className={`frame ${
                  state === "approved"
                    ? frameClassName
                    : ["default", "filled"].includes(state)
                    ? labelClassName
                    : undefined
                }`}
              >
                <div className="email-address">
                  {state === "approved" && <>{text3}</>}

                  {state === "filled" && <>{text}</>}

                  {state === "default" && type === "textbox" && size === "large" && <>Expiration Date</>}

                  {type === "comment" && <>Order Comment</>}

                  {type === "textbox" && state === "default" && size === "small" && <>Zip/Postal Code</>}
                </div>
              </div>
            </>
          )}

          {type === "dropdown" && (
            <>
              <img className={`vector-2 ${groupClassName}`} alt="Vector" src="/img/vector-5.svg" />
              <div className={`text-wrapper-5 ${divClassName}`}>California</div>
              <div className={`div-wrapper ${frameClassName}`}>
                <div className="text-wrapper-6">State/Province</div>
              </div>
            </>
          )}
        </div>
      )}

      {variant === "two" && (
        <>
          <div className="email">
            {state === "empty" && <>Email</>}

            {type === "dropdown" && <>State/territory</>}
          </div>
          <div className="frame-2">
            <div className="text-wrapper-7">Input</div>
            {type === "dropdown" && <img className="vector-3" alt="Vector" src="/img/vector-15.svg" />}
          </div>
        </>
      )}
    </div>
  );
};

Forms.propTypes = {
  type: PropTypes.oneOf(["dropdown", "textbox", "comment"]),
  state: PropTypes.oneOf(["approved", "filled", "empty", "default"]),
  size: PropTypes.oneOf(["large", "small"]),
  variant: PropTypes.oneOf(["two", "one"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
