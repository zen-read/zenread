import { TextBlock } from "#TextBlock/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof TextBlock> = {
  component: TextBlock,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextBlock>;

export const Default: Story = {
  args: {
    type: "p",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus tortor nec sagittis euismod. Integer sodales enim non molestie congue. Vivamus semper rhoncus neque id malesuada. Aenean elementum lectus eget mauris ultricies, in commodo sapien commodo. Etiam malesuada mollis arcu, non fermentum neque cursus eu. Vestibulum gravida eu magna ac porttitor. Donec maximus elit ut ante feugiat malesuada. Nunc efficitur nibh non placerat sodales. Ut vestibulum gravida vehicula. Etiam euismod augue felis, vitae dignissim dui feugiat eget.",
    loaded: true,
  },
};

export const Loading: Story = {
  args: {
    type: "p",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus tortor nec sagittis euismod. Integer sodales enim non molestie congue. Vivamus semper rhoncus neque id malesuada. Aenean elementum lectus eget mauris ultricies, in commodo sapien commodo. Etiam malesuada mollis arcu, non fermentum neque cursus eu. Vestibulum gravida eu magna ac porttitor. Donec maximus elit ut ante feugiat malesuada. Nunc efficitur nibh non placerat sodales. Ut vestibulum gravida vehicula. Etiam euismod augue felis, vitae dignissim dui feugiat eget.",
    loaded: false,
  },
};
