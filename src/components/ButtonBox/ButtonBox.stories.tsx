import type { Meta, StoryObj } from "@storybook/react";
import ButtonBox from ".";

const meta = {
  title: "Game/ButtonBox",
  component: ButtonBox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    setPlayerInput: { action: "setPlayerInput" },
  },
} as Meta<typeof ButtonBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setPlayerInput: (input: string) => {
      console.log(input);
    },
  },
};
