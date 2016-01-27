/**
 * Perdido.masonryColumn: Creates a column for working with JS masonry
 *                        libraries like Isotope. Assigns a margin to
 *                        each side of the element.
 *
 * @param  {string} columnVal  fraction of the containing element's size.
 * @param  {string} gutter how many units wide the gutter should be.
 * @param  {boolean} flex  boolean that determines whether to use flexbox.
 * @return {object} an object containing the valid JSS rules and values to
 *                  create a masonry grid column.
 */
export function masonryColumn(columnVal, gutter, flex) {
  let style = {},
    unit = gutter.match(/\D/g).join('');

  if (flex === true) {
    style.flex = '0 0 auto';
  } else {
    style.float = 'left';
  }

  if (gutter !== '0') {
    style.width = `calc(99.99% * ${columnVal} - ${gutter})`;
    style.marginLeft = `${parseInt(gutter, 10) / 2}${unit}`;
    style.marginRight = `${parseInt(gutter, 10) / 2}${unit}`;
  } else {
    style.width = `calc(99.99% * ${columnVal})`;
    style.marginLeft = `${parseInt(gutter, 10) / 2}${unit}`;
    style.marginRight = `${parseInt(gutter, 10) / 2}${unit}`;
  }

  return style;
}

/**
 * Perdido.masonryWrap: Creates a wrapping element for working with JS Masonry
 *                      libraries like Isotope. Assigns a negative margin on
 *                      each side of this wrapping element.
 *
 * @param  {boolean} flex  boolean that determines whether to use flexbox.
 * @param  {string} gutter how many units wide the gutter should be.
 * @return {object} an object containing the valid JSS rules and values to
 *                  create a masonry grid wrapping element.
 */
export function masonryWrap(flex, gutter) {
  let style = {};
  if (flex === false) {
    style['&:before'] = {
      content: "''",
      display: 'table',
    };

    style['&:after'] = {
      content: "''",
      display: 'table',
      clear: 'both',
    };
  } else {
    style.display = 'flex';
    style.flexFlow = 'row wrap';
  }

  let unit = gutter.match(/\D/g).join('');

  style.marginLeft = `${parseInt(gutter, 10) / -2}${unit}`;
  style.marginRight = `${parseInt(gutter, 10) / -2}${unit}`;

  return style;
}
