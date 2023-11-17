import { Forms } from ".";

export default {
  title: "Components/Forms",
  component: Forms,
  argTypes: {
    type: {
      options: ["dropdown", "textbox", "comment"],
      control: { type: "select" },
    },
    state: {
      options: ["approved", "filled", "empty", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "dropdown",
    state: "approved",
    size: "large",
    variant: "two",
    className: {},
    rectangleClassName: {},
    groupClassName: {},
    divClassName: {},
    boxClassName: {},
    text: "First Name",
    overlapGroupClassName: {},
    text1: "Alex",
    boxClassNameOverride: {},
    textClassName: {},
    text2: "username@gmail.com",
    frameClassName: {},
    text3: "Email Address",
    labelClassName: {},
  },
};
