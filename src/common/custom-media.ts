export const PC_BREAKPOINT_KEY = 'pc';
export const LAPTOP_BREAKPOINT_KEY = 'laptop';
export const MOBILE_BREAKPOINT_KEY = 'mobile';
export const TABLET_BREAKPOINT_KEY = 'tablet';

export const breakpointsInPixels = {
  [PC_BREAKPOINT_KEY]: 1920,
  [LAPTOP_BREAKPOINT_KEY]: 1366,
  [TABLET_BREAKPOINT_KEY]: 768,
  [MOBILE_BREAKPOINT_KEY]: 375,
};

export const breakpoints = {
  [PC_BREAKPOINT_KEY]: `min-width ${breakpointsInPixels.pc}'px'`,
  [PC_BREAKPOINT_KEY]: `min-width ${breakpointsInPixels.laptop}'px'`,
  [TABLET_BREAKPOINT_KEY]: `min-width ${breakpointsInPixels.tablet}'px'`,
  [MOBILE_BREAKPOINT_KEY]: `min-width ${breakpointsInPixels.mobile}'px'`,
};

export const media = breakpoints;
