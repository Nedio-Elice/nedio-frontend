const SIZE = {
  MOBILE: '420px',
  TABLET: '768px',
  DESKTOP: '1024px',
  DESKTOP_LARGE: '1280px',
};

const DEVICE = {
  MOBILE: `screen and (max-width: ${SIZE.MOBILE})`,
  TABLET: `screen and (max-width: ${SIZE.TABLET})`,
  DESKTOP: `screen and (max-width: ${SIZE.DESKTOP})`,
  DESKTOP_LARGE: `screen and (max-width: ${SIZE.DESKTOP_LARGE})`,
};

export { SIZE, DEVICE };
