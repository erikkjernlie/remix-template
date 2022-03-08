import { IconProps } from '~/icons/types';

function MoonSvg(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.056 10.081A6.15 6.15 0 115.674.965a6.667 6.667 0 007.382 9.116z"
        fill="currentColor"
      />
    </svg>
  );
}

function SunSvg(props: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      {...props}
    >
      <path fill="none" d="M0 0h16v16H0z" />
      <circle
        cx={10}
        cy={9}
        r={3}
        fill="currentColor"
        transform="translate(-2 -1)"
      />
      <circle
        cx={10}
        cy={9}
        r={3}
        fill="currentColor"
        transform="matrix(.33333 0 0 .33333 4.667 11)"
      />
      <circle
        cx={10}
        cy={9}
        r={3}
        fill="currentColor"
        transform="matrix(.33333 0 0 .33333 4.667 -1)"
      />
      <circle
        cx={10}
        cy={9}
        r={3}
        fill="currentColor"
        transform="matrix(.2357 .2357 -.2357 .2357 3.522 7.764)"
      />
      <circle
        cx={10}
        cy={9}
        r={3}
        fill="currentColor"
        transform="matrix(.2357 .2357 -.2357 .2357 12.007 -.721)"
      />
      <g>
        <circle
          cx={10}
          cy={9}
          r={3}
          fill="currentColor"
          transform="matrix(.33333 0 0 .33333 -1.333 4.85)"
        />
        <circle
          cx={10}
          cy={9}
          r={3}
          fill="currentColor"
          transform="matrix(.33333 0 0 .33333 10.667 4.85)"
        />
      </g>
      <g>
        <circle
          cx={10}
          cy={9}
          r={3}
          fill="currentColor"
          transform="matrix(.2357 .2357 -.2357 .2357 3.522 -.871)"
        />
        <circle
          cx={10}
          cy={9}
          r={3}
          fill="currentColor"
          transform="matrix(.2357 .2357 -.2357 .2357 12.007 7.614)"
        />
      </g>
    </svg>
  );
}

export function ModeButton({
  isDark,
  onClick
}: {
  onClick: () => void;
  isDark: boolean;
}) {
  const iconBase =
    'absolute inset-1 h-4 transition ' +
    'duration-150 transform ' +
    'text-stone-900 text-opacity-80 group-hover:text-yellow-200 dark:text-yellow-200';
  return (
    <button
      className="
        group
        fixed top-3 right-3
        h-6 w-6
        rounded-full
      bg-stone-900 bg-opacity-10
      dark:bg-gray-500 dark:bg-opacity-20
        hover:bg-opacity-100 dark:hover:bg-opacity-10
        font-fat text-yellow-200
        hover:scale-125
        outline-none
        focus:outline-none focus-keyboard:ring-6 focus-keyboard:ring-blue-gentle
      "
      onClick={onClick}
    >
      <SunSvg
        className={`${iconBase}  
        ${isDark ? 'scale-0 group-hover:scale-100' : 'group-hover:scale-0'}`}
      />
      <MoonSvg
        className={`
        ${iconBase} 
        ${isDark ? 'group-hover:scale-0' : 'scale-0 group-hover:scale-100'}`}
      />
    </button>
  );
}
