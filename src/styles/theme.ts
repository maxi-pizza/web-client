export const theme = {
  fontFamily: 'Montserrat, sans-serif',
  colors: {
    textPrimary: '#000000',
    background: '#FFFCF9',
    accent: '#E12B17',
    blockAccent: '#FFD86B',
    container: '#FFFFFF',
    stroke: '#EEEEF5',
    textWhite: '#ffffff',
    strokeDark: '#2F2F31',
    pageIndicator: '#D3D3DD',
    footer: '#242425',
  },
  fontWeights: {
    semiBold: 600,
    medium: 500,
    regular: 400,
  },
  media: {
    mobile: '375px',
    tablet: '768px',
    laptop: '1366px',
    pc: '1920px',
  },
};

export type WhiteTheme = typeof theme;
