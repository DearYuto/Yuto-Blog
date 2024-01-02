import Text from '@/components/atoms/text/Text';
import { tab } from './tab.css';

type TabProps = {
  label: string;
  children: React.ReactNode;
  active?: boolean;
};
export default function Tab({ label, children, active = false }: TabProps) {
  return (
    <>
      <div role='tab' className={`${tab[active ? 'active' : 'inactive']}`}>
        <Text color={active ? 'primary' : 'gray700'}>{label}</Text>
      </div>
    </>
  );
}
