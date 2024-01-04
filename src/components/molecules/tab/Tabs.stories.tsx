import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeTabIndex: 0,
    children: [
      <Tabs.Tab key='0' index={0} label='탭1'></Tabs.Tab>,
      <Tabs.Tab key='1' index={1} label='탭2'></Tabs.Tab>,
      <Tabs.Tab key='2' index={2} label='탭3'></Tabs.Tab>,
    ],
  },
};
