import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Common/Tab',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeTabIndex: 0,
    children: [
      <Tabs.Label key='0' index={0} label='About'></Tabs.Label>,
      <Tabs.Content key='1'>탭1 컨텐츠입니다.</Tabs.Content>,

      <Tabs.Label key='2' index={1} label='Content'></Tabs.Label>,
      <Tabs.Content key='3'>탭2 컨텐츠입니다.</Tabs.Content>,

      <Tabs.Label key='4' index={2} label='Test'></Tabs.Label>,
      <Tabs.Content key='5'>탭3 컨텐츠입니다.</Tabs.Content>,
    ],
  },
};
