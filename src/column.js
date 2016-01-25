import {GUTTER, FLEX, CYCLE, calcDimension, addFlex} from './defaults';


export default function column(columnVal, cycle=CYCLE, gutter=GUTTER, flex=FLEX) {
  let style = {},
    cycleVal = cycle;

  if (cycle === 'auto' || flex === 'flex' || flex === 'no-flex') {
    cycleVal = columnVal.split('/')[1];
  } else {
    cycleVal = cycle;
  }

  if (columnVal !== 'none') {
    if (flex === 'flex') {
      style = addFlex(flex, style);

      if (cycle !== 0) {
        style[`&:nth-child(${cycleVal}n)`] = {
          marginRight: '0'
        };
      }

      style['&:last-child'] = {
        marginRight: '0'
      };


      style['&:nth-child(n)'] = {
        marginRight: gutter
      };
    } else {
      if (cycle !== 0) {
        style[`&:nth-child(${cycleVal}n + 1)`] = {
          clear: 'left'
        };

        style[`&:nth-child(${cycleVal}n)`] = {
          marginRight: '0'
        };

      }

      style[`&:nth-child(${cycleVal}n)`] = {
        float: 'right'
      };

      style['&:nth-child(n)'] = {
        float: 'left',
        marginRight: gutter,
        clear: 'none'
      };

      style['&:last-child'] = {
        marginRight: '0'
      };
    }

    style.width = calcDimension(columnVal, gutter);
  } else {
    style.width = 'auto';

    style['&:nth-child(1n)'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto'
    };

    style['&:nth-child(1n + 1)'] = {
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

    style['&:last-child'] = {
      float: 'none',
      clear: 'none',
      marginRight: '0',
      width: 'auto'
    };
  }

  return style;
}
