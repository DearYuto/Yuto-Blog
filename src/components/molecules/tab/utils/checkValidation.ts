import { TabsProps } from '../Tabs';

export const checkActiveIndex = ({ activeTabIndex, children }: TabsProps) => {
  if (!activeTabIndex) return;

  if (activeTabIndex < 0 || activeTabIndex > children.length) {
    throw new Error(
      `activeTabIndex는 0 ~ ${children.length - 1} 범위 값으로 지정해야 합니다.`
    );
  }
};
