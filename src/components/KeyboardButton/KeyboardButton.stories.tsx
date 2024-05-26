import type { Meta, StoryObj } from "@storybook/react";
import KeyboardButton from ".";

const meta = {
  title: "Game/KeyboardButton",
  component: KeyboardButton,
  parameters: {
    layout: "centered",
  },
  onClick: { action: "setPlayerInput" },
} as Meta<typeof KeyboardButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    letter: "A",
    setPlayerInput: (input: string) => {
      console.log(input);
    },
  },
};
