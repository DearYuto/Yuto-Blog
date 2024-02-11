import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Common/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: '유토',
    bgColor: 'primary',
  },
};

export const Danger: Story = {
  args: {
    text: '유토',
    bgColor: 'danger',
  },
};

export const Dark: Story = {
  args: {
    text: '유토',
    bgColor: 'gray700',
  },
};

export const Light: Story = {
  args: {
    text: '유토',
    bgColor: 'primaryLight',
  },
};

export const DefaultSquare: Story = {
  args: {
    text: '유토',
    round: 'none',
  },
};
