import reduceCssCalc from 'reduce-css-calc';

export const GUTTER = '30px';
export const FLEX = 'no-flex';
export const CYCLE = 'auto';

export function calcDimension(val, gutter) {
  if (gutter !== 0) {
    return reduceCssCalc(
      `calc(99.99% * ${val} - (${gutter} - ${gutter} * ${val}))`, 10);
  } else {
    return reduceCssCalc(`calc(99.999999% * ${val})`, 10);
  }
}

export function addFlex(flex, style) {
  if (flex === 'flex') {
    style.flex = '0 0 auto';
  }

  return style;
}
