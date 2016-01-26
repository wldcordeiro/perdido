import {calcDimension, addFlex} from './defaults';


export default function column(columnVal, cycle, gutter, flex) {
  let style = {},
    cycleVal = cycle;


  if (columnVal !== 'none') {
    if (cycle === 'auto') {
      cycleVal = columnVal.split('/')[1];
    } else {
      cycleVal = cycle;
    }

    style.width = calcDimension(columnVal, gutter);

    if (flex === 'flex') {
      style = addFlex(flex, style);

      style['&:nth-child(n)'] = {
        marginRight: gutter
      };

      style['&:last-child'] = {
        marginRight: '0'
      };

      style[`&:nth-child(${cycleVal}n)`] = {
        float: 'right'
      };

      if (cycle !== 0) {
        style[`&:nth-child(${cycleVal}n)`] = {
          marginRight: '0'
        };
      }
    } else {
      style['&:nth-child(n)'] = {
        float: 'left',
        marginRight: gutter,
        clear: 'none'
      };

      style['&:last-child'] = {
        marginRight: '0'
      };

      style[`&:nth-child(${cycleVal}n)`] = {
        float: 'right'
      };

      if (cycle !== 0) {
        style[`&:nth-child(${cycleVal}n)`].marginRight = '0';

        style[`&:nth-child(${cycleVal}n + 1)`] = {
          clear: 'left'
        };
      }
    }
  } else {
    style.width = 'auto';

    style['&:last-child'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto'
    };

    style['&:nth-child(n)'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto'
    };

    style['&:nth-child(1n +1)'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto'
    };

    style['&:nth-child(1n)'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto'
    };
  }

  return style;
}
