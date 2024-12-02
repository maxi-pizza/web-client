import {useEffect, useState} from 'react';

function useMedia(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = e => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);
  return matches;
}

export const useIsMobile = () =>
  useMedia('(min-width: 375px) and (max-width: 767px)');
export const useIsTablet = () =>
  useMedia('(min-width: 768px) and (max-width: 1365px)');
export const useIsLaptop = () =>
  useMedia('(min-width: 1366px) and (max-width: 1919px)');
export const useIsPc = () => useMedia('(min-width: 1920px)');
