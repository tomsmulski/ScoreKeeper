import Button from "./Button.js";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button>end game</Button>;

export const TealButton = () => (
  <Button background="lightseagreen">danger</Button>
);

export const TealButton2 = () => <Button background="yellow">danger</Button>;

export const TealButton3 = () => <Button background="green">danger</Button>;

export const TealButton4 = () => <Button background="black">danger</Button>;
