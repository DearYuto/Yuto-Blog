import { Dispatch, SetStateAction, createContext, useContext } from 'react';

/**
 * context 사용
 * use 커스텀 훅
 */
export const TabsStateContext = createContext<number>(0);

export function useActiveTab() {
  return useContext(TabsStateContext);
}

export const TabsDispatchContext = createContext<
  Dispatch<SetStateAction<number>>
>(() => 0);

export function useActiveTabDispatch() {
  return useContext(TabsDispatchContext);
}
