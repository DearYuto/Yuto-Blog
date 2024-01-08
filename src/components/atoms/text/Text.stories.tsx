import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

/**
 * 텍스트 컴포넌트입니다.
 */
const meta: Meta<typeof Text> = {
  title: 'Common/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

/**
 * 기본 텍스트 컴포넌트입니다.
 */
export const Default: Story = {
  args: {
    children: '유토의 하루',
    size: 'md',
    color: 'gray700',
    weight: 'normal',
  },
};

/**
 * 메인 컬러 + 텍스트 강조 시 사용됩니다.
 */
export const PrimaryColor: Story = {
  args: {
    children: '유토의 하루',
    size: 'md',
    color: 'primary',
    weight: 'bold',
  },
};

export const Big: Story = {
  args: {
    children: '유토의 하루',
    size: '2xl',
    color: 'gray700',
    weight: 'bold',
    as: 'h1',
  },
};
