import {useEffect, useMemo, useState} from 'react';

export const createBreakpoint =
  (
    breakpoints: {[name: string]: number} = {
      pc: 1920,
      laptop: 1366,
      tablet: 768,
      mobile: 375,
    },
  ) =>
  () => {
    const [screen, setScreen] = useState(window.innerWidth);

    useEffect(() => {
      const setSideScreen = (): void => {
        setScreen(window.innerWidth);
      };
      setSideScreen();
      window.addEventListener('resize', setSideScreen);
      return () => {
        window.removeEventListener('resize', setSideScreen);
      };
    }, []);
    const sortedBreakpoints = useMemo(
      () => Object.entries(breakpoints).sort((a, b) => (a[1] >= b[1] ? 1 : -1)),
      [breakpoints],
    );
    const result = sortedBreakpoints.reduce((acc, [name, width]) => {
      if (screen >= width) {
        return name;
      } else {
        return acc;
      }
    }, sortedBreakpoints[0][0]);
    return result;
  };
