'use client';

import React, { useState } from 'react';
import Tab, { TabProps } from './Tab';
import Flex from '@/components/atoms/flex/Flex';

type TabsProps = {
  activeTabIndex?: number;
  children: React.ReactElement<TabProps>[];
};

function TabContainer({ children, activeTabIndex = 0 }: TabsProps) {
  checkActiveIndex({ children, activeTabIndex });

  const [activeTab, setActiveTab] = useState(0);

  return <Flex>{children}</Flex>;
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
