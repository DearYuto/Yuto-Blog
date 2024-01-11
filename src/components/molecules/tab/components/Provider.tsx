'use client';

import { TabsDispatchContext, TabsStateContext } from '../utils/customHooks';

type ProviderProps = {
  children: React.ReactNode;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

export function TabProvider({ children, setState, state = 0 }: ProviderProps) {
  return (
    <TabsStateContext.Provider value={state}>
      <TabsDispatchContext.Provider value={setState}>
        {children}
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
}
