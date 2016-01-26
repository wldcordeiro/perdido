export default function waffle(waffleVal, cycle, gutter, flex) {
  let style = {},
      cycleVal;

  if (cycle === 'auto') {
    cycleVal = waffleVal.split('/')[1];
  } else {
    cycleVal = cycle;
  }

  if (flex === 'flex') {
    style.flex = '0 0 auto';

    style['&:nth-child(n)'] = {
      marginRight: gutter,
      marginBottom: gutter
    };

    style['&:last-child'] = {
      marginRight: '0',
      marginBottom: '0'
    };

    if (cycleVal !== 0) {
      style[`&:nth-child(${cycleVal}n)`] = {
        marginRight: '0',
        float: 'right'
      }

      style[`&:nth-last-child(-n + ${cycleVal})`] = {
        marginBottom: '0'
      }
    }
  } else {
    style['&:nth-child(n)'] = {
      float: 'left',
      marginRight: gutter,
      marginBottom: gutter,
      clear: 'none'
    };

    style['&:last-child'] = {
      marginRight: '0',
      marginBottom: '0'
    };


    if (cycleVal !== 0) {
      style[`&:nth-child(${cycleVal}n)`] = {
        marginRight: '0',
        float: 'right'
      };
      style[`&:nth-child(${cycleVal}n + 1)`] = {
        clear: 'left'
      };

      style[`&:nth-last-child(-n + ${cycleVal})`] = {
        marginBottom: '0'
      };
    }

  }

  if (gutter !== '0') {
    style.width = `calc(99.99% * ${waffleVal} - (${gutter} - ${gutter} * ${waffleVal}))`;
    style.height = `calc(99.99% * ${waffleVal} - (${gutter} - ${gutter} * ${waffleVal}))`;
  } else {
    style.width = `calc(99.999999% * ${waffleVal})`;
    style.height = `calc(99.999999% * ${waffleVal})`;
  }

  return style;
}
