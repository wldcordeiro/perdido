/**
 * Perdido.row: Creates a row that is a fraction of the size of its containing
 *              element's height with a gutter.
 *
 * @param  {string} rowVal fraction of the containing element's height.
 * @param  {string} gutter The bottom margin size of the element.
 * @param  {boolean} flex   Whether to utilize flexbox or not
 * @return {object} an object containing the valid JSS rules and values to
 *                  create a row.
 */
export default function row(rowVal, gutter, flex) {
  let style = {
    width: '100%',
  };

  if (flex === true) {
    style.flex = '0 0 auto';
  }

  if (gutter !== '0') {
    style.height =
      `calc(99.99% * ${rowVal} - (${gutter} - ${gutter} * ${rowVal}))`;
  } else {
    style.height = `calc(99.999999% * ${rowVal})`;
  }

  style.marginBottom = gutter;

  style['&:last-child'] = {
    marginBottom: '0',
  };

  return style;
}
