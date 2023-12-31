import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const DefaultText: Story = {
  args: {
    children: '유토의 하루',
    size: 'md',
    color: 'gray700',
    weight: 'normal',
  },
};

export const PrimaryColorText: Story = {
  args: {
    children: '유토의 하루',
    size: 'lg',
    color: 'primary',
    weight: 'bold',
  },
};
