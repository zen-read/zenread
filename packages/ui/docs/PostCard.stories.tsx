import { PostCard } from "#PostCard/index.js";
import { Tag } from "#Tag/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

const today = new Date();

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
  args: {
    backgroundImage:
      "https://sun9-64.userapi.com/impg/5XVVt5xc2D4M5Xbfh0hQ3R4JL-H1aiNU7uQD_g/7LKF5yizXnA.jpg?size=1280x853&quality=95&sign=b27734b42108edcf2b2e2030168b67d2&type=album",
    header: "Header",
    date: today,
    originLogo:
      "https://sun9-43.userapi.com/impg/jAVMFYqrZcSz5mxPO5p9EAsfKzpKTWLTeFKNww/qLsWiOYOIrU.jpg?size=2560x1920&quality=95&sign=18fd2f8497e527f65aa8068352139599&type=album",
    tags: [
      <Tag key={1} label="Коты" color="lime" />,
      <Tag key={2} label="Мемы" color="water" />,
    ],
    loaded: true,
  },
};

export const Loading: Story = {
  args: {
    backgroundImage:
      "https://sun9-64.userapi.com/impg/5XVVt5xc2D4M5Xbfh0hQ3R4JL-H1aiNU7uQD_g/7LKF5yizXnA.jpg?size=1280x853&quality=95&sign=b27734b42108edcf2b2e2030168b67d2&type=album",
    header: "Header",
    date: today,
    originLogo:
      "https://sun9-43.userapi.com/impg/jAVMFYqrZcSz5mxPO5p9EAsfKzpKTWLTeFKNww/qLsWiOYOIrU.jpg?size=2560x1920&quality=95&sign=18fd2f8497e527f65aa8068352139599&type=album",
    tags: [
      <Tag key={1} label="Коты" color="lime" />,
      <Tag key={2} label="Мемы" color="water" />,
    ],
    loaded: false,
  },
};
