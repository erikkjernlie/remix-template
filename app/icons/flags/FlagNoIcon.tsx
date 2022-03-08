import { toSize } from '../toSize';
import type { IconProps } from '../types';

function FlagNoIcon(props: IconProps) {
  const size = toSize(props.size);
  return (
    <svg
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <mask
        id="ntds-icons__a"
        style={{
          maskType: 'alpha'
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={3}
        width={24}
        height={18}
      >
        <path
          d="M22 3H2a2 2 0 00-2 2v14a2 2 0 002 2h20a2 2 0 002-2V5a2 2 0 00-2-2z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#ntds-icons__a)">
        <path
          d="M22 3H2a2 2 0 00-2 2v14a2 2 0 002 2h20a2 2 0 002-2V5a2 2 0 00-2-2z"
          fill="#C8102E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 3v6.5H24v5H11.5V21h-5v-6.5H0v-5h6.5V3h5z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 3v7.5H24v3H10.5V21h-3v-7.5H0v-3h7.5V3h3z"
          fill="#012169"
        />
      </g>
    </svg>
  );
}

export default FlagNoIcon;
