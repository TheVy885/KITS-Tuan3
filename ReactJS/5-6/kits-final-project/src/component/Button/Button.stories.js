import { Button, ButtonDefault } from "./Button";
import icon_user from "../../assets/icon_user.svg";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
const Template = (args) => <ButtonDefault {...args}>Button</ButtonDefault>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  bgColor: "white",
  textColor: "red",
  boderColor: "purple",
};

export const DefaultBtn = Template.bind({});
DefaultBtn.args = {
  url: { icon_user },
  name_button: "Shopping",
  type: "",
};

// export const RedButton = {
//   args: {
//     label: "Red Button",
//     bgColor: "white",
//     textColor: "red",
//     boderColor: "red",
//   },
// };
