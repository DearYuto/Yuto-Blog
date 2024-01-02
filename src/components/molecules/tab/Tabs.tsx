import Text from '@/components/atoms/text/Text';
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
