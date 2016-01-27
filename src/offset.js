/* @flow */

/**
 * Perdido.offset: Margin to the left, right, bottom, or top, of an element
 * depending on if the fraction passed is positive or negative. It works for
 * both horizontal and vertical grids but not both.
 *
 * @param  {string} offsetVal Fraction of the container to be offset.
 * @param  {string} direction Direction the grid is going. Should be the
 *                            opposite of the column or row it's being used on.
 *                            Defaults to row.
 * @param  {string} gutter    How large the gutter involved is.
 * @return {object}           An object containing the valid JSS rules and
 *                            values to offset elements.
 */
export default function offset(
    offsetVal: string,
    direction: string,
    gutter: string): Object {
  let style = {},
    numerator = parseInt(offsetVal.split('/')[0], 10);

  if (direction === 'column') {
    if (numerator > 0) {
      if (gutter !== '0') {
        style.marginBottom = [
          `calc(99.99% * ${offsetVal} - (${gutter} - ${gutter} * ${offsetVal})`,
          ` + (${gutter} * 2)) !important`].join('');
      } else {
        style.marginBottom = `calc(99.999999% * ${offsetVal}) !important`;
      }
    } else if (numerator < 0) {
      if (gutter !== '0') {
        style.marginTop = [
          `calc(99.99% * (${offsetVal} * -1) - `,
          `(${gutter} - ${gutter} * (${offsetVal} * -1))`,
          ` + ${gutter}) !important`].join('');
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
        style.marginRight = [
          `calc(99.99% * ${offsetVal} - (${gutter} - ${gutter}`,
          ` * ${offsetVal}) + (${gutter} * 2)) !important`].join('');
      } else {
        style.marginRight = `calc(99.999999% * ${offsetVal}) !important`;
      }
    } else if (numerator < 0) {
      if (offsetVal !== '0') {
        style.marginLeft = [
          `calc(99.99% * (${offsetVal} * -1) - `,
          `(${gutter} - ${gutter} * (${offsetVal} * -1))`,
          ` + ${gutter}) !important`].join('');
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
