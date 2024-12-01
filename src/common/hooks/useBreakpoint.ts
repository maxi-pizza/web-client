import {createBreakpoint} from 'src/common/factory/createBreakpoint';
import {
  MOBILE_BREAKPOINT_KEY,
  PC_BREAKPOINT_KEY,
  TABLET_BREAKPOINT_KEY,
  breakpointsInPixels,
  LAPTOP_BREAKPOINT_KEY,
} from '../custom-media';

export const useBreakpoint = createBreakpoint(breakpointsInPixels);

export const useBreakpoint2 = () => {
  const breakpoint = useBreakpoint();
  return {
    isMobile: breakpoint === MOBILE_BREAKPOINT_KEY,
    isTablet: breakpoint === TABLET_BREAKPOINT_KEY,
    isLaptop: breakpoint === LAPTOP_BREAKPOINT_KEY,
    isDesktop: breakpoint === PC_BREAKPOINT_KEY,
  };
};
