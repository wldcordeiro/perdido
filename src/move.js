import reduceCssCalc from 'reduce-css-calc';

export default function move(moveVal, direction, gutter) {
  let style = {
    position: relative
  };

  if (direction === 'column') {
    if (gutter !== '0') {
      style.top = reduceCssCalc(
        `calc(99.99% * ${moveVal} - (${gutter} - ${gutter} * ${moveVal}) + ${gutter})`,
        5
      );
    } else {
      style.top = reduceCssCalc(`calc(99.999999% * ${moveVal})`, 5);
    }
  } else {
    if (gutter !== '0') {
      style.left = reduceCssCalc(
        `calc(99.99% * ${moveVal} - (${gutter} - ${gutter} * ${moveVal}) + ${gutter})`,
        5
      );
    } else {
      style.left = reduceCssCalc(`calc(99.999999% * ${moveVal})`, 5);
    }
  }

  return style;
}