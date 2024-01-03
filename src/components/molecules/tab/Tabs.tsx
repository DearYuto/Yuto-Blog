'use client';

import type { SetStateAction } from 'react';
import React, {
  useState,
  createContext,
  Dispatch,
  Children,
  cloneElement,
} from 'react';
import Flex from '@/components/atoms/flex/Flex';
import Tab, { TabProps } from './Tab';

type TabsProps = {
  activeTabIndex?: number;
  children: React.ReactElement<TabProps>[];
};

export const TabsStateContext = createContext<number>(0);
export const TabsDispatchContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => 0);

function TabContainer({ children, activeTabIndex = 0 }: TabsProps) {
  checkActiveIndex({ children, activeTabIndex });

  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const cloneChildren = Children.map(children, (child, idx) => {
    const newChild = cloneElement(child, {
      active: activeTab === idx,
      key: idx,
      onClick: () => setActiveTab(idx),
    });
    return <>{newChild}</>;
  });

  // TODO Provider 사용안하면 제거하기
  return (
    <TabsStateContext.Provider value={activeTab}>
      <TabsDispatchContext.Provider value={setActiveTab}>
        <Flex>{cloneChildren}</Flex>
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
}

const Tabs = Object.assign(TabContainer, { Tab });
export default Tabs;

/**
 * 예외처리 코드
 */
const checkActiveIndex = ({ activeTabIndex, children }: TabsProps) => {
  if (!activeTabIndex) return;

  if (activeTabIndex < 0 || activeTabIndex > children.length) {
    throw new Error(
      `activeTabIndex는 0 ~ ${children.length - 1} 범위 값으로 지정해야 합니다.`
    );
  }
};
