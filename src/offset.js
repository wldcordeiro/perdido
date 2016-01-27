/* @flow */

/**
 * [offset description]
 * @param  {[type]} offsetVal [description]
 * @param  {[type]} direction [description]
 * @param  {[type]} gutter    [description]
 * @return {[type]}           [description]
 */
export default function offset(offsetVal, direction, gutter) {
  let style = {},
    numerator = offsetVal.split('/')[0];

  if (direction === 'column') {
    if (numerator > 0) {
      if (gutter !== '0') {
        style.marginBottom =
          `calc(99.99% * ${offsetVal} - (${gutter} - ${gutter} * ${offsetVal}) + (${gutter} * 2)) !important`;
      } else {
        style.marginBottom = `calc(99.999999% * ${offsetVal}) !important`;
      }
    } else if (numerator < 0) {
      if (gutter !== '0') {
        style.marginTop =
        `calc(99.99% * (${offsetVal} * -1) - (${gutter} - ${gutter} * (${offsetVal} * -1)) + ${gutter}) !important`;
      } else {
        style.marginTop = `calc(99.999999% * ${offsetVal}) !important`;
      }
    } else {
      style.marginTop = '0 !important';
      style.marginBottom = `${gutter} !important`;
    }
  } else {
    if (numerator > 0) {
      if (gutter !== '0') {
        style.marginRight =
          `calc(99.99% * ${offsetVal} - (${gutter} - ${gutter} * ${offsetVal}) + (${gutter} * 2)) !important`;
      } else {
        style.marginRight = `calc(99.999999% * ${offsetVal}) !important`;
      }
    } else if (numerator < 0) {
      if (offsetVal !== '0') {
        style.marginLeft =
          `calc(99.99% * (${offsetVal} * -1) - (${gutter} - ${gutter} * (${offsetVal} * -1)) + ${gutter}) !important`;
      } else {
        style.marginLeft = `calc(99.999999% * ${offsetVal}) !important`;
      }
    } else {
      style.marginLeft = '0 !important';
      style.marginRight = `${gutter} !important`;
    }
  }

  return style;
}
