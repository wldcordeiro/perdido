import {GUTTER, FLEX, CYCLE, calcDimension, addFlex} from './defaults';


export default function column(columnVal, cycle=CYCLE, gutter=GUTTER, flex=FLEX) {
  let style = {},
    cycleVal = cycle;

  if (cycle === 'auto' || flex === 'flex' || flex === 'no-flex') {
    cycleVal = columnVal.split('/')[1];
  } else {
    cycleVal = cycle;
  }

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

    style['&:last-child'] = {
      marginRight: '0'
    };

    style['&:nth-child(n)'] = {
      float: 'left',
      marginRight: gutter,
      clear: 'none'
    };

  }

  style.width = calcDimension(columnVal, gutter);

  return style;
}
