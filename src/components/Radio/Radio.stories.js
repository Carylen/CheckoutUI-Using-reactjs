import { Radio } from ".";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    radio: true,
    size: "large",
    className: {},
    text: "Pay with Credit Card",
    text1: "PayPal",
  },
};
