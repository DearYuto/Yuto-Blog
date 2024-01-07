import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import Card from './Card';

/**
 * 카드 컴포넌트
 */
const meta: Meta = {
  title: 'Common/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    thumbnail: {
      name: 'thumbnail',
    },
    title: {
      name: 'title (필수)',
      control: 'text',
      description:
        'Card 컴포넌트 자식으로 넣어 참조하여 사용할 수 있습니다. (ex: Card.Title)',
    },
    content: {
      name: 'title (필수)',
      control: 'text',
      description:
        'Card 컴포넌트 자식으로 넣어 참조하여 사용할 수 있습니다. (ex: Card.Content)',
    },
  },
};

export default meta;

export const Default: StoryFn = ({ title = '타이틀', content = '컨텐츠' }) => (
  <Card>
    <Card.Thumbnail
      src=''
      width={100}
      height={100}
      alt='썸네일'
      key='0'
    ></Card.Thumbnail>
    <Card.Title key='1'>{title}</Card.Title>
    <Card.Content key='2'>{content}</Card.Content>
  </Card>
);

Default.args = {
  title: '타이틀',
  content: '컨텐츠',
};
