import User from "#Icons/mid/User";
import SelectButton from "#SelectButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectButton> = {
  title: "Buttons/Select",
  component: SelectButton,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SelectButton>;

export const Default: Story = {
  args: {
    label: "Button",
    icon: <User />,
    onClick: () => {},
  },
};
