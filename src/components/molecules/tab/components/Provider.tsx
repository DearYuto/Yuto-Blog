'use client';

import { useState } from 'react';
import { TabsDispatchContext, TabsStateContext } from '../utils/customHooks';

type ProviderProps = {
  activeTabIndex: number;
  children: React.ReactNode;
};

export function TabProvider({ children, activeTabIndex = 0 }: ProviderProps) {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  return (
    <TabsStateContext.Provider value={activeTab}>
      <TabsDispatchContext.Provider value={setActiveTab}>
        {children}
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
}
