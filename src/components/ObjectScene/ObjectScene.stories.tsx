import type { Meta, StoryObj } from "@storybook/react";
import ObjectScene from ".";

const meta = {
  title: "Game/ObjectScene",
  component: ObjectScene,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ObjectScene>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StickHorizontal: Story = {
  args: {
    tries: 8,
    part: "stickHorizontal",
    numberConditionToShow: 8,
  },
};

export const StickVertical: Story = {
  args: {
    tries: 7,
    part: "stickVertical",
    numberConditionToShow: 7,
  },
};
export const Rope: Story = {
  args: {
    tries: 6,
    part: "rope",
    numberConditionToShow: 6,
  },
};

export const Head: Story = {
  args: {
    tries: 5,
    part: "head",
    numberConditionToShow: 5,
  },
};

export const Body: Story = {
  args: {
    tries: 4,
    part: "body",
    numberConditionToShow: 4,
  },
};

export const LeftArm: Story = {
  args: {
    tries: 3,
    part: "leftArm",
    numberConditionToShow: 3,
  },
};

export const RightArm: Story = {
  args: {
    tries: 2,
    part: "rightArm",
    numberConditionToShow: 2,
  },
};

export const LeftLeg: Story = {
  args: {
    tries: 1,
    part: "leftLeg",
    numberConditionToShow: 1,
  },
};

export const RightLeg: Story = {
  args: {
    tries: 0,
    part: "rightLeg",
    numberConditionToShow: 0,
  },
};
