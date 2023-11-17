import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    checkbox: true,
    size: "large",
    className: {},
  },
};
