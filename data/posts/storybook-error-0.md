# 스토리북 에러

> 사용한 주요 환경 버전

storybook@7.6.6

react@18.2.0

typescript@5.3.3

next@14.0.4

---

### 💥 발생한 이슈

`Tab` 컴포넌트를 구현하던 도중 스토리북에서 다음과 같은 에러가 발생했다.

```
Loading chunk components-molecules-tab-Tabs-stories failed.
```

어떤 코드에서 문제를 일으키고 있는 것인지 현재로서는 알 방법이 없었으므로 특정 코드 블럭을 주석처리해보며 찾기로 했다.

```tsx
import Text from '@/components/atoms/text/Text';
import React from 'react';
import { background, tab } from './tabs.css';

type TabsProps = {
  children: React.ReactNode;
};
export default function Tabs({ children }: TabsProps) {
  return <ul className={`${tab} ${background.active}`}>{children}</ul>;
}

type TabProps = {
  label: string;
  children: React.ReactNode;
  active?: boolean;
};
function Tab({ label, children, active = false }: TabProps) {
  return (
    <>
      <li className={`${tab} ${background[active ? 'active' : 'inactive']}`}>
        <Text color='primary'>{label}</Text>
        {/* <div>
          <TabContent>{children}</TabContent>
        </div> */}
      </li>
    </>
  );
}

type TabContentProps = {
  children: React.ReactNode;
};
function TabContent({ children }: TabContentProps) {
  return <div>{children}</div>;
}

Tabs.Tab = Tab;
```

그 결과 원인으로 `Tabs.Tab = Tab;` 코드에서 문제가 발생하는 것을 확인할 수 있었다.

```tsx
import React from 'react';
import { background, tab } from './tabs.css';
import Tab from './Tab';

type TabsProps = {
  children: React.ReactNode;
};

function TabContainer({ children }: TabsProps) {
  return <ul className={`${tab} ${background.active}`}>{children}</ul>;
}

const Tabs = Object.assign(TabContainer, { Tab });
export default Tabs;
```

에러 해결 겸 겸사겸사 컴포넌트를 분리해준 후 `Object.assign`을 사용하여 Tabs의 객체로 복사하여 만들어 주는 방법으로 해결할 수 있었다.

---

> 아쉬운 점

해당 문제가 정확히 `왜` 발생했는지 알 수는 없었다는 점이다.

다음에도 비슷한 에러가 발생할 경우 매번 주석처리를 하며 원인을 분석해야 할 수도 있겠다는 생각이 들었다.
