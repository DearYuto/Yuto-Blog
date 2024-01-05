'use client';

import { ReactElement, ReactNode, SetStateAction, useContext } from 'react';
import React, { useState, createContext, Dispatch } from 'react';
import Flex from '@/components/atoms/flex/Flex';
import { content, tab } from './tabs.css';
import Text from '@/components/atoms/text/Text';

type TabsProps = {
  activeTabIndex?: number;
  children: React.ReactElement<TabProps | ContentProps>[];
};

export const TabsStateContext = createContext<number>(0);
export const TabsDispatchContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => 0);

/**
 *
 * Root
 * Tabs 최상위 컴포넌트
 *
 */
function TabContainer({ children, activeTabIndex = 0 }: TabsProps) {
  checkActiveIndex({ children, activeTabIndex });

  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const labels: ReactNode[] = [];
  const contents: ReactNode[] = [];

  React.Children.forEach(children, (child: ReactElement) => {
    const type = child.type as unknown as { displayName: string };

    if (type.displayName === 'TabLabel') {
      return labels.push(child);
    }

    if (type.displayName === 'TabContent') {
      return contents.push(child);
    }
  });

  return (
    <TabsStateContext.Provider value={activeTab}>
      <TabsDispatchContext.Provider value={setActiveTab}>
        <Flex>{labels}</Flex>
        <Flex>{contents[activeTab]}</Flex>
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
}

/**
 *
 * TabLabel
 * : 탭 타이틀 컴포넌트
 *
 *  **/
type TabProps = { label: string; index: number };
const TabLabel = ({ label, index }: TabProps) => {
  const active = useContext(TabsStateContext);
  const setActiveTab = useContext(TabsDispatchContext);

  return (
    <>
      <div
        onClick={() => setActiveTab(index)}
        role='tab'
        className={`${tab[active === index ? 'active' : 'inactive']}`}
      >
        <Text color={active === index ? 'primary' : 'gray700'}>{label}</Text>
      </div>
    </>
  );
};

TabLabel.displayName = 'TabLabel';

/**
 *
 * Content
 * : 선택된 탭 컨텐츠
 *
 * **/
type ContentProps = { children: ReactNode };
const TabContent = ({ children }: ContentProps) => {
  return <p className={content}>{children}</p>;
};

TabContent.displayName = 'TabContent';

/**
 * ! export
 * **/
const Tabs = Object.assign(TabContainer, {
  Label: TabLabel,
  Content: TabContent,
});

export default Tabs;

/**
 * 예외처리 코드
 *
 */
const checkActiveIndex = ({ activeTabIndex, children }: TabsProps) => {
  if (!activeTabIndex) return;

  if (activeTabIndex < 0 || activeTabIndex > children.length) {
    throw new Error(
      `activeTabIndex는 0 ~ ${children.length - 1} 범위 값으로 지정해야 합니다.`
    );
  }
};
