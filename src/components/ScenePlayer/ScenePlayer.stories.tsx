import { Meta, StoryObj } from "@storybook/react";
import ScenePlayer from ".";

const meta = {
  title: "Game/ScenePlayer",
  component: ScenePlayer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ScenePlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tries: 9,
  },
};

export const Lost: Story = {
  args: {
    tries: 0,
  },
};
