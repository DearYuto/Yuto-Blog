'use client';

import React, { ReactElement, ReactNode } from 'react';
import { useActiveTab, useActiveTabDispatch } from './utils/customHooks';

import Flex from '@/components/atoms/flex/Flex';
import Text from '@/components/atoms/text/Text';
import { TabProvider } from './components/Provider';

import { content, tab } from './tabs.css';
import { checkActiveIndex } from './utils/checkValidation';

export type TabsProps = {
  activeTabIndex?: number;
  children: React.ReactElement<TabProps | ContentProps>[];
};

/**
 *
 * Root
 * Tabs 최상위 컴포넌트
 *
 */
function TabContainer({ children, activeTabIndex = 0 }: TabsProps) {
  checkActiveIndex({ children, activeTabIndex });
  const activeIndex = useActiveTab();

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
    <TabProvider activeTabIndex={activeTabIndex}>
      <Flex>{labels}</Flex>
      <Flex>{contents[activeIndex]}</Flex>
    </TabProvider>
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
  const active = useActiveTab();
  const setActiveTab = useActiveTabDispatch();

  return (
    <>
      <div
        onClick={() => setActiveTab(index)}
        role='tab'
        className={`${tab[active === index ? 'active' : 'inactive']}`}
      >
        <Text
          weight={active === index ? 'bold' : 'normal'}
          color={active === index ? 'primary' : 'gray700'}
        >
          {label}
        </Text>
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
