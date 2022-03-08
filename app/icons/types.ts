export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'responsive';
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
}
