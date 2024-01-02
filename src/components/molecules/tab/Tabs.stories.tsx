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
    children: (
      <>
        <Tab active label='첫번째 탭'>
          탭 컨텐츠
        </Tab>
        <Tab active={false} label='두번째 탭'>
          탭 컨텐츠
        </Tab>
        <Tab label='세번째 탭'>탭 컨텐츠</Tab>
      </>
    ),
  },
};
