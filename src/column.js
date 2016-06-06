/**
 * Perdido.column: Creates a column that is a fraction of the size of its
 * containing element's width with a gutter.
 *
 * @param {string} [fraction] - This is a simple fraction of the containing
 *   element's width.
 * @param {integer} [cycle] - Perdido works by assigning a margin-right to all
 *   elements except the last in the row. If settings.cycle is set to auto
 *   it will do this by default by using the denominator of the fraction you
 *   pick. To override the default use this param.,
 *   e.g.: {'.foo': { extend: Perdido.column('2/4', 2)}}
 * @param {length} [gutter] - how many units wide the gutter should be.
 * @param {boolean}  - Determines whether this element should use Flexbox
 *                     or not.
 * @return {object} an object containing the valid JSS rules and values to
 *                  create a column.
 */
export default function column(columnVal, cycle, gutter, flex) {
  const style = {};
  let cycleVal = cycle;


  if (columnVal !== 'none') {
    if (cycle === -1) {
      cycleVal = parseInt(columnVal.split('/')[1], 10);
    } else {
      cycleVal = cycle;
    }

    if (gutter !== '0') {
      style.width =
        `calc(99.99% * ${columnVal} - (${gutter} - ${gutter} * ${columnVal}))`;
    } else {
      style.width = `calc(99.999999% * ${columnVal})`;
    }

    if (flex === true) {
      style.flex = '0 0 auto';

      style['&:nth-child(n)'] = {
        marginRight: gutter,
      };

      style['&:last-child'] = {
        marginRight: '0',
      };

      style[`&:nth-child(${cycleVal}n)`] = {
        float: 'right',
      };

      if (cycle !== 0) {
        style[`&:nth-child(${cycleVal}n)`].marginRight = '0';
      }
    } else {
      style['&:nth-child(n)'] = {
        float: 'left',
        marginRight: gutter,
        clear: 'none',
      };

      style['&:last-child'] = {
        marginRight: '0',
      };

      style[`&:nth-child(${cycleVal}n)`] = {
        float: 'right',
      };

      if (cycle !== 0) {
        style[`&:nth-child(${cycleVal}n)`].marginRight = '0';

        style[`&:nth-child(${cycleVal}n + 1)`] = {
          clear: 'left',
        };
      }
    }
  } else {
    style.width = 'auto';

    style['&:last-child'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto',
    };

    style['&:nth-child(n)'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto',
    };

    style['&:nth-child(1n + 1)'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto',
    };

    style['&:nth-child(1n)'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto',
    };
  }

  return style;
}
