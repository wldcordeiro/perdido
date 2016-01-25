import {FLEX} from './defaults';


export default function center(maxWidth, padding, flex=FLEX) {
  let style = {};

  if (flex === 'no-flex') {
    style['*zoom'] = '1';

    style['&:after'] = {
      content: '""',
      display: 'table'
    };

    style['&:before'] = {
      content: '""',
      display: 'table'
    };
  } else {
    style.display = 'flex';
    style.flexFlow = 'row wrap';
  }

  style.maxWidth = maxWidth;
  style.marginLeft = 'auto';
  style.marginRight = 'auto';

  if (padding !== undefined) {
    style.paddingLeft = padding;
    style.paddingRight = padding;
  }
}
