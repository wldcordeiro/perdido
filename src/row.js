import {calcDimension, addFlex} from './defaults';

export default function row(rowVal, gutter, flex) {
  let style = {
    width: '100%'
  };

  style = addFlex(flex, style);

  style.height = calcDimension(rowVal, gutter);

  style.marginBottom = gutter;

  style['&:last-child'] = {
    marginBottom: '0'
  };

  return style;
}
