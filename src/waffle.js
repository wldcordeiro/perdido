/* @flow */

/**
 * Perdido.waffle: Creates a block that is a fraction of the size of its
 *                 containing element's width AND height with a gutter on
 *                 the right and bottom.
 *
 * @param  {string} waffleVal This is a simple fraction of the containing
 *                            element's width and height.
 * @param {integer} [cycle] - Perdido works by assigning a margin-right/bottom
 *   to all elements except the last in the row. If settings.cycle is set to
 *   auto it will do this by default by using the denominator of the fraction
 *   you pick. To override the default use this param.,
 *   e.g.: {'.foo': { extend: Perdido.waffle('2/4', 2)}}
 * @param {length} [gutter] - how many units wide the gutter should be.
 * @param  {[type]} flex      Determines whether to use flexbox
 * @return {object} an object containing the valid JSS rules and values to
 *                  create a waffle grid.
 */
export default function waffle(
    waffleVal: string,
    cycle: number,
    gutter: string,
    flex: boolean): Object {
  let style = {},
    cycleVal;

  if (cycle === -1) {
    cycleVal = waffleVal.split('/')[1];
  } else {
    cycleVal = cycle;
  }

  if (flex === true) {
    style.flex = '0 0 auto';

    style['&:nth-child(n)'] = {
      marginRight: gutter,
      marginBottom: gutter,
    };

    style['&:last-child'] = {
      marginRight: '0',
      marginBottom: '0',
    };

    if (cycleVal !== 0) {
      style[`&:nth-child(${cycleVal}n)`] = {
        marginRight: '0',
        float: 'right',
      };

      style[`&:nth-last-child(-n + ${cycleVal})`] = {
        marginBottom: '0',
      };
    }
  } else {
    style['&:nth-child(n)'] = {
      float: 'left',
      marginRight: gutter,
      marginBottom: gutter,
      clear: 'none',
    };

    style['&:last-child'] = {
      marginRight: '0',
      marginBottom: '0',
    };


    if (cycleVal !== 0) {
      style[`&:nth-child(${cycleVal}n)`] = {
        marginRight: '0',
        float: 'right',
      };
      style[`&:nth-child(${cycleVal}n + 1)`] = {
        clear: 'left',
      };

      style[`&:nth-last-child(-n + ${cycleVal})`] = {
        marginBottom: '0',
      };
    }

  }

  if (gutter !== '0') {
    style.width =
      `calc(99.99% * ${waffleVal} - (${gutter} - ${gutter} * ${waffleVal}))`;
    style.height =
      `calc(99.99% * ${waffleVal} - (${gutter} - ${gutter} * ${waffleVal}))`;
  } else {
    style.width = `calc(99.999999% * ${waffleVal})`;
    style.height = `calc(99.999999% * ${waffleVal})`;
  }

  return style;
}
