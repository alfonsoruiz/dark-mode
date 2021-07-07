import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialValue => {
  const [isDark, setIsDark] = useLocalStorage('darkMode', initialValue);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return [isDark, setIsDark];
};

export default useDarkMode;
