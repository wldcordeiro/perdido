export default function center(maxWidth, padding, flex) {
  let style = {
    maxWidth,
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  if (padding !== undefined) {
    style.paddingLeft = padding;
    style.paddingRight = padding;
  }

  if (flex === 'no-flex') {
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

  return style;
}
