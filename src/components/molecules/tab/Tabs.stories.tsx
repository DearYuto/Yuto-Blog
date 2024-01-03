import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';
import Tab from './Tab';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Tab key={0} active>
        탭1
      </Tab>,
      <Tab key={1}>탭2</Tab>,
      <Tab key={2}>탭3</Tab>,
    ],
  },
};
