'use client';

import React, { ReactElement, ReactNode } from 'react';
import { useActiveTab, useActiveTabDispatch } from './utils/hooks/useActiveTab';

import Flex from '@/components/atoms/flex/Flex';
import Text from '@/components/atoms/text/Text';
import { TabProvider } from './components/Provider';

import { content, tab } from './tabs.css';
import { checkOutOfRangeActiveIndex } from './utils/checkValidation';
import { DISPLAY_NAME } from './constants/displayNames';

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
  const labels: ReactElement[] = [];
  const contents: ReactElement[] = [];

  React.Children.forEach(children, (child: ReactElement) => {
    const type = child.type as unknown as { displayName: string };

    if (type.displayName === 'Tabs.Label') {
      return labels.push(child);
    }

    if (type.displayName === 'Tabs.Content') {
      return contents.push(child);
    }
  });

  const outOfRange = checkOutOfRangeActiveIndex({
    children: labels,
    activeTabIndex,
  });

  return (
    <TabProvider activeTabIndex={outOfRange ? 0 : activeTabIndex}>
      <Flex>{labels}</Flex>
      <Flex>{contents}</Flex>
    </TabProvider>
  );
}
TabContainer.displayName = DISPLAY_NAME.tabs;

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

TabLabel.displayName = DISPLAY_NAME.label;

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

TabContent.displayName = DISPLAY_NAME.content;

/**
 * ! export
 * **/
const Tabs = Object.assign(TabContainer, {
  Label: TabLabel,
  Content: TabContent,
});

export default Tabs;
