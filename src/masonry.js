export function masonryColumn(columnVal, gutter, flex) {
  let style = {},
      unit = gutter.match(/\D/g).join('');

  if (flex === 'flex') {
    style.flex = '0 0 auto';
  } else {
    style.float = 'left'
  }

  if (gutter !== '0') {
    style.width = `calc(99.99% * ${columnVal} - ${gutter})`;
    style.marginLeft = `${parseInt(gutter) / 2}${unit}`;
    style.marginRight = `${parseInt(gutter) / 2}${unit}`;
  } else {
    style.width = `calc(99.99% * ${columnVal})`;
    style.marginLeft = `${parseInt(gutter) / 2}${unit}`;
    style.marginRight = `${parseInt(gutter) / 2}${unit}`;
  }

  return style;
}

export function masonryWrap(flex, gutter) {
  let style = {};
  if (flex !== 'flex') {
    style['*zoom'] = '1';

    style['&:before'] = {
      content: "''",
      display: 'table'
    };

    style['&:after'] = {
      content: "''",
      display: 'table',
      clear: 'both'
    };
  } else {
    style.display = 'flex';
    style.flexFlow = 'row wrap';
  }

  let unit = gutter.match(/\D/g).join('');

  style.marginLeft = `${parseInt(gutter) / -2}${unit}`;
  style.marginRight = `${parseInt(gutter) / -2}${unit}`;

  return style;
}
