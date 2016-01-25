export const GUTTER = '30';
export const FLEX = 'no-flex';
export const CYCLE = 'auto';

export function calcDimension(val, gutter) {
  if (gutter !== 0) {
    return `calc(99.99% * ${val} - (${gutter} - ${gutter} * ${val}))`;
  } else {
    return `calc(99.99% * ${val})`;
  }
}

export function addFlex(flex, style) {
  if (flex === 'flex') {
    style.flex = '0 0 auto';
  }

  return style;
}
