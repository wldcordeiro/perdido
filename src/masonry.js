export function masonryColumn(columnVal, gutter, flex) {

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
