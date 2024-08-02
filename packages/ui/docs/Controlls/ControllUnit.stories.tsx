import { ControllUnit } from "#ControllUnit";
import Toggle from "#Toggle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ControllUnit> = {
  title: "Controlls/Controll Unit",
  component: ControllUnit,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ControllUnit>;

export const Default: Story = {
  args: {
    label: "Controll Unit",
    description: "Description",
    control: <Toggle active />,
  },
};
