import { TabsProps } from '../Tabs';

export const checkOutOfRangeActiveIndex = ({
  activeTabIndex,
  children,
}: TabsProps) => {
  if (
    !activeTabIndex ||
    activeTabIndex < 0 ||
    activeTabIndex > children.length - 1
  ) {
    return true;
  }

  return false;
};
