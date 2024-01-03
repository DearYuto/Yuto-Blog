'use client';

import Text from '@/components/atoms/text/Text';
import { tab } from './tab.css';

export type TabProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};
export default function Tab({ onClick, children, active = false }: TabProps) {
  return (
    <div
      onClick={onClick}
      role='tab'
      className={`${tab[active ? 'active' : 'inactive']}`}
    >
      <Text color={active ? 'primary' : 'gray700'}>{children}</Text>
    </div>
  );
}
