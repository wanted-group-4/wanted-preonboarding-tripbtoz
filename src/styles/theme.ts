const size = {
  mobile: '480px',
  middle: '820px',
  tablet: '900px',
};

const deviceSize = {
  mobile: `(max-width : ${size.mobile})`,
  middle: `(max-width : ${size.middle})`,
  tablet: `(max-width : ${size.tablet})`,
};

const color = {
  grey_01: '#EEEEEE',
  grey_02: '#CDCDCD',
  grey_03: '#717171',
  blue: '#0F77DD',
  yellow: '#FFC700',
  pink_01: '#FFD7DE',
  pink_02: '#FF375C',
  lightRed: '#FF6259',
};

const theme = {
  color,
  size,
  deviceSize,
};

export default theme;
