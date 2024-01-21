# 아토믹 디자인 패턴으로 잘게 부수기! 그런데 시맨틱 HTML은 어떻게 지키지?

### as 프롭스를 사용해보자.

`Text` 컴포넌트를 여러 군데에서 재사용하던 중, 기존 설계는 span 태그만을 사용하도록 고정되어 있었다.

그렇기 때문에 이 컴포넌트를 사용하는 모든 텍스트는 span태그를 가진다는 문제가 있었다.

SEO 최적화를 위해서는 `시맨틱한 HTML`을 구성해야 했으므로 span 태그 하나로 고정되는 것이 아닌,

사용하는 곳에 따라 태그를 변경하는 방법이 필요했다.

### AS-IS

```tsx
import React from 'react';
import { textColor, textSize, textWeight } from './text.css';
import { palette } from '@/utils/colors';

export type Props = {
  children: React.ReactNode;
  color?: keyof typeof palette;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'bold' | 'extraBold';
};

export default function Text({
  children,
  color = 'gray700',
  size = 'md',
  weight = 'normal',
}: Props) {
  return (
    <span
      className={`${textColor[color]} ${textWeight[weight]} ${textSize[size]}`}
    >
      {children}
    </span>
  );
}
```

재사용할 수는 있었지만, 앞서 언급했던 문제점인 span 태그로 고정되어 있어 시맨틱 HTML에 적합하지 않다.

처음에는 이 문제를 크게 여기지 않았어서 단순히 한번 더 래핑하는 방식을 사용했다.

하지만 이 방식은 텍스트 컴포넌트를 만든 의미도 퇴색될 뿐더러 올바른 시맨틱 HTML을 지키지 못하고 있다는 문제점이 있다.

```jsx
<h1 style={{ display: 'contents' }} className={nanum_gothic.className}>
  <Text size='lg' weight='bold'>
    유토의 하루
  </Text>
</h1>
```

블로그 제목을 `h1` 태그를 사용했었지만, Text 컴포넌트를 만들어 재사용할 경우 이런 기이한(?)형태가 된다.

### 그렇다면, 재사용도 할 수 있으면서 동적으로 태그를 설정할 수 있도록 하면 어떨까?

동적으로 태그를 설정할 수 있더라도 우려되는 사항은 항상 `휴먼 에러` 였다.

너무 유연하게 선택지를 줘버리면 마음대로 쓰고 싶은 욕구가 든다거나, 잘못 사용할 수 있으므로 Text 컴포넌트 내에서 사용할 수 있는 태그의 이름을 제한하기로 했다. (`h1` ~ `h6` , `p` , `span` )

필요하다면 나중에 추가할 수도 있을 것 같다.

> `as`를 사용하게 된 건 RadixUI 라이브러리의 `asChild` 에서 영감을 얻었다.

### TO-BE

```tsx
import React from 'react';
import { textColor, textSize, textWeight } from './text.css';
import { palette } from '@/utils/colors';

export type Props = {
  children: React.ReactNode;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: keyof typeof palette;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'bold' | 'extraBold';
};

export default function Text({
  children,
  as: Component = 'span',
  color = 'gray700',
  size = 'md',
  weight = 'normal',
}: Props) {
  return (
    <Component
      className={`${textColor[color]} ${textWeight[weight]} ${textSize[size]}`}
    >
      {children}
    </Component>
  );
}
```

이제 컴포넌트에 `as` 라는 프롭스를 받아서 이름을 재정의하여 `Component`로 사용하도록 했다.

기본 값은 span 태그로 하되, 시맨틱한 태그를 구성할 수 있도록 요소의 선택지를 추가하도록 했다.

엉뚱한 태그를 사용하지 않도록 as는 타입스크립트로 사용할 수 있는 태그만 명시하는 방법으로 제한했다.

이로 인해 조금 전 기이한 구조를 가진 `타이틀`도 다음과 같이 변경할 수 있게 됐다. 🙌

```tsx
<Text size='lg' weight='bold' as='h1'>
  유토의 하루
</Text>
```

또 다른 요구사항이 생길지도 모르겠지만, 지금은 충분히 내가 원했던 의도의 결과를 얻을 수 있었다.
