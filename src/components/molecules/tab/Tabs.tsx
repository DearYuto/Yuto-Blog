import React from 'react';
import Tab from './Tab';
import Flex from '@/components/atoms/flex/Flex';

type TabsProps = {
  children: React.ReactNode;
};

function TabContainer({ children }: TabsProps) {
  return <Flex>{children}</Flex>;
}

const Tabs = Object.assign(TabContainer, { Tab });
export default Tabs;
