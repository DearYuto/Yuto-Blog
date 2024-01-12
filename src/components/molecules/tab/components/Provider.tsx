'use client';

import { useState } from 'react';
import { TabsDispatchContext, TabsStateContext } from '../utils/customHooks';

type ProviderProps = {
  children: React.ReactElement[];
};

export function TabProvider({ children }: ProviderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!children) throw new Error('children은 반드시 존재해야 합니다.');

  const [tabTitle, tabContents] = [
    children[0],
    children[1].props.children[activeIndex],
  ];

  return (
    <TabsStateContext.Provider value={activeIndex}>
      <TabsDispatchContext.Provider value={setActiveIndex}>
        {tabTitle}
        {tabContents}
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
}
