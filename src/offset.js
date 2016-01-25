import reduceCssCalc from 'reduce-css-calc';
import {GUTTER, OFFSET_DIR} from './defaults';

export default function offset(offsetVal, direction=OFFSET_DIR, gutter=GUTTER) {
  let style = {},
      numerator = offsetVal.split('/')[0];

  if (direction === 'column') {
    if (numerator > 0) {
      if (gutter !== '0') {
        style.marginBottom = reduceCssCalc(
          `calc(99.99% * ${offsetVal} - (${gutter} - ${gutter} * ${offsetVal}) + (${gutter} * 2)) !important`,
          10
        );
      } else {
        style.marginBottom = reduceCssCalc(
          `calc(99.999999% * ${offsetVal}) !important`,
          10
        );
      }
    } else if (numerator < 0) {
      if (gutter !== '0') {
        style.marginTop = reduceCssCalc(
          `calc(99.99% * (${offsetVal} * -1) - (${gutter} - ${gutter} * (${offsetVal} * -1)) + ${gutter}) !important`,
          10
        );
      } else {
        style.marginTop = reduceCssCalc(
          `calc(99.999999% * ${offsetVal}) !important`,
          10
        );
      }
    } else {
      style.marginTop = '0 !important';
      style.marginBottom = `${gutter} !important`;
    }
  } else {
    if (numerator > 0) {
      if (gutter !== '0') {
        style.marginRight = reduceCssCalc(
          `calc(99.99% * ${offsetVal} - (${gutter} - ${gutter} * ${offsetVal}) + (${gutter} * 2)) !important`,
          10
        );
      } else {
        style.marginRight = reduceCssCalc(
          `calc(99.999999% * ${offsetVal}) !important`,
          10
        );
      }
    } else if (numerator < 0) {
      if (offsetVal !== '0') {
        style.marginLeft = reduceCssCalc(
          `calc(99.99% * (${offsetVal} * -1) - (${gutter} - ${gutter} * (${offsetVal} * -1)) + ${gutter}) !important`,
          10
        );
      } else {
        style.marginLeft = reduceCssCalc(
          `calc(99.999999% * ${offsetVal}) !important`,
          10
        );
      }
    } else {
      style.marginLeft = '0 !important';
      style.marginRight = `${gutter} !important`;
    }
  }

  return style;
}
