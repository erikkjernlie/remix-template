import type { IconSize } from './types';

export function toSize(size?: IconSize, boostedXs?: boolean): string {
  if (!size) return '24px';
  return (
    {
      [size]: '24px', // including md & any other
      xs: boostedXs ? '14px' : '12px',
      sm: '18px'
    }[size] || size
  );
}
