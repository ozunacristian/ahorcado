import type { Meta, StoryObj } from "@storybook/react";
import Board from ".";

const meta = {
  title: "Game/Board",
  component: Board,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
