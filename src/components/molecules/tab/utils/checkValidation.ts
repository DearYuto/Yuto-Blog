import { TabsProps } from '../Tabs';

export const checkActiveIndex = ({ activeTabIndex, children }: TabsProps) => {
  if (
    !activeTabIndex ||
    activeTabIndex < 0 ||
    activeTabIndex > children.length - 1
  ) {
    return 0;
  }
};
