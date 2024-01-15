import type { Meta, StoryFn } from '@storybook/react';
import Tabs from './Tabs';

/**
 * 탭 컴포넌트
 */
const meta: Meta<typeof Tabs> = {
  title: 'Common/Tab',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    activeTabIndex: 0,
  },
  argTypes: {
    activeTabIndex: {
      control: 'number',
      description: 'active tab index (기본 값: 0)',
    },
  },
};

export default meta;

export const Default: StoryFn = ({ activeTabIndex }) => (
  <Tabs activeTabIndex={activeTabIndex}>
    <Tabs.Label index={0} label='About'></Tabs.Label>
    <Tabs.Content>유토의 탭 컴포넌트1</Tabs.Content>

    <Tabs.Label index={1} label='Contact'></Tabs.Label>
    <Tabs.Content>유토의 탭 컴포넌트2</Tabs.Content>

    <Tabs.Label index={2} label='Posts'></Tabs.Label>
    <Tabs.Content>유토의 탭 컴포넌트3</Tabs.Content>
  </Tabs>
);
