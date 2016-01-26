export default function move(moveVal, direction, gutter) {
  let style = {
    position: 'relative'
  };

  if (direction === 'column') {
    if (gutter !== '0') {
      style.top = 
        `calc(99.99% * ${moveVal} - (${gutter} - ${gutter} * ${moveVal}) + ${gutter})`;
    } else {
      style.top = `calc(99.999999% * ${moveVal})`;
    }
  } else {
    if (gutter !== '0') {
      style.left = 
        `calc(99.99% * ${moveVal} - (${gutter} - ${gutter} * ${moveVal}) + ${gutter})`;
    } else {
      style.left = `calc(99.999999% * ${moveVal})`;
    }
  }

  return style;
}
