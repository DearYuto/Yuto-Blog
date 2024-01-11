import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export const TabsStateContext = createContext<number>(0);
export const TabsDispatchContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => 0);

/**
 * context 사용
 * use 커스텀 훅
 */
export function useActiveTab() {
  return useContext(TabsStateContext);
}

export function useActiveTabDispatch() {
  return useContext(TabsDispatchContext);
}
