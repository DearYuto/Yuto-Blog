import { palette } from '@/utils/colors';
import { textColor } from '../text/text.css';
import { backgroundColor, badgeStyle, borderRadius } from './badge.css';

type Props = {
  text: string;
  color?: keyof typeof palette;
  round?: keyof typeof borderRadius;
  bgColor?: keyof typeof palette;
};

export default function Badge({
  text,
  color = 'gray700',
  round = 'md',
  bgColor = 'primary',
}: Props) {
  const className = `${badgeStyle.default} ${textColor[color]} ${borderRadius[round]} ${backgroundColor[bgColor]}`;

  return <div className={className}>{text}</div>;
}
