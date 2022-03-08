import { useEffect, useState } from 'react';
import { ModeButton } from '~/components/Button/ModeButton';
import useDarkMode from '~/hooks/useDarkMode';

export default function Index() {
  const { isDarkMode, toggle } = useDarkMode(false); // DarkMode-hook
  const [isDark, setDark] = useState(false); // Toggle for async ModeButton-event

  useEffect(() => {
    setDark(isDarkMode);
  }, []);

  useEffect(() => {
    document
      .querySelector('html')
      ?.setAttribute('class', isDarkMode ? 'bg-stone-900' : 'bg-amber-100');
    document
      .querySelector('body')
      ?.setAttribute('class', isDarkMode ? 'bg-stone-900' : 'bg-amber-100');
    document
      .querySelector('meta[name=theme-color]')
      ?.setAttribute(
        'content',
        window.getComputedStyle(document.body).backgroundColor
      );
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('body')?.classList.add('dark');
    } else {
      document.querySelector('body')?.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <ModeButton
        isDark={isDark}
        onClick={() => {
          setDark(!isDark);
          toggle();
        }}
      />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-center">
          <span className="text-black dark:text-yellow-400 text-xl font-extrabold">
            Tittel
          </span>
          <span className="text-slate-600 dark:text-yellow-500">Subtitle</span>
        </div>
      </div>
    </div>
  );
}
