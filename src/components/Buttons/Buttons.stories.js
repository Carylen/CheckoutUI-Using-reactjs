import { Buttons } from ".";

export default {
  title: "Components/Buttons",
  component: Buttons,
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    icon: true,
    size: "large",
    className: {},
  },
};
