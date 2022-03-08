import { toSize } from '../toSize';
import { IconProps } from '../types';

function FlagUkIcon(props: IconProps) {
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
          fill="#012169"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.063 1.38l1.763 2.427-11.275 8.191 11.275 8.191-1.763 2.427L12 13.852-.063 22.616l-1.763-2.427 11.274-8.191-11.274-8.19L-.063 1.38 12 10.144 24.063 1.38z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.649 2.19l.587.809-12.388 9 12.388 9-.587.81-12.651-9.192-12.65 9.191L-1.24 21l12.387-9-12.387-9 .588-.809 12.65 9.191 12.65-9.191z"
          fill="#C8102E"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3v6h9v6h-9v6H9v-6H0V9h9V3h6z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 3v7.5H24v3H13.5V21h-3v-7.5H0v-3h10.5V3h3z"
          fill="#C8102E"
        />
      </g>
    </svg>
  );
}

export default FlagUkIcon;
