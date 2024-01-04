'use client';

import { SetStateAction, useContext } from 'react';
import React, { useState, createContext, Dispatch } from 'react';
import Flex from '@/components/atoms/flex/Flex';
import { tab } from './tabs.css';
import Text from '@/components/atoms/text/Text';

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

  return (
    <TabsStateContext.Provider value={activeTab}>
      <TabsDispatchContext.Provider value={setActiveTab}>
        <Flex>{children}</Flex>
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
}

type TabProps = { label: string; index: number };

const Tab = ({ label, index }: TabProps) => {
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
