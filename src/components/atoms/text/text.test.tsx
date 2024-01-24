import { render, screen } from '@testing-library/react';
import Text from './Text';

jest.mock('./text.css', () => ({
  textColor: { gray700: 'gray700' },
  textSize: { md: 'md' },
  textWeight: { normal: 'normal' },
}));

describe('Text 컴포넌트 테스트', () => {
  test('h1 태그의 텍스트가 화면에 그려진다.', () => {
    // given
    render(
      <Text as='h1' color='gray700'>
        h1 텍스트
      </Text>
    );

    // when
    const h1Element = screen.getByRole('heading', { level: 1 });

    // then
    expect(h1Element).toBeInTheDocument();
  });
});
