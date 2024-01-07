import React, { ReactElement } from 'react';

import Flex from '@/components/atoms/flex/Flex';
import Text from '@/components/atoms/text/Text';
import { container, image } from './card.css';
import Image from 'next/image';
import { style } from '@vanilla-extract/css';

const CARD_DISPLAY_NAME = Object.freeze({
  title: 'card_title',
  content: 'card_content',
  thumbnail: 'card_thumbnail',
});

type Props = {
  children: React.ReactNode;
};

/**
 *
 * Card
 * 최상위 부모 컴포넌트
 *
 */
function CardContainer({ children }: Props) {
  const title: ReactElement[] = [];
  const content: ReactElement[] = [];
  const thumbnail: ReactElement[] = [];
  React.Children.forEach(children, (child: any) => {
    if (!child) return;

    const displayName = child.type.displayName;

    if (displayName === CARD_DISPLAY_NAME.title) title.push(child);
    if (displayName === CARD_DISPLAY_NAME.content) content.push(child);
    if (displayName === CARD_DISPLAY_NAME.thumbnail) thumbnail.push(child);
  });

  return (
    <div className={container}>
      <Flex style={{ overflow: 'hidden' }} height='full' direction='column'>
        {thumbnail.length === 0 ? (
          <div className={image}></div>
        ) : (
          <> {thumbnail}</>
        )}
        <Flex
          style={{
            padding: '24px 30px',
          }}
          gap='xs'
          direction='column'
        >
          {title}
          {content}
        </Flex>
      </Flex>
    </div>
  );
}

/**
 *
 * Card
 * 썸네일
 *
 */
type CardThumbnailProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
};
function CardThumbnail({
  width = 0,
  height = 0,
  alt = '',
  src = '',
}: CardThumbnailProps) {
  return (
    <Image
      className={image}
      src={src}
      width={width}
      height={height}
      alt={alt}
    ></Image>
  );
}

CardThumbnail.displayName = CARD_DISPLAY_NAME.thumbnail;

/**
 *
 * Card
 * 타이틀
 *
 */
function CardTitle({ children }: Props) {
  return (
    <Text
      style={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 1,
      }}
      as='h2'
      size='lg'
      weight='bold'
    >
      {children}
    </Text>
  );
}

CardTitle.displayName = CARD_DISPLAY_NAME.title;

/**
 *
 * Card
 * 컨텐츠
 *
 */
function CardContent({ children }: Props) {
  return (
    <Text
      style={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'normal',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
      }}
      as='p'
      size='sm'
    >
      {children}
    </Text>
  );
}

CardContent.displayName = CARD_DISPLAY_NAME.content;

/**
 * ! export
 * **/
const Card = Object.assign(CardContainer, {
  Thunbnail: CardThumbnail,
  Title: CardTitle,
  Content: CardContent,
});
export default Card;
